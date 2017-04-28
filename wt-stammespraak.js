require('isomorphic-fetch')

module.exports = (context, cb) => {
  console.log(context.body)
  const user = context.body['user_name']
  const text = context.body.text.split(';')
  const definition = text[1]
  const word = text[0].toLowerCase()
  const token = `Bearer ${context.secrets.token}`

  const query = `mutation {
    createEntries(definition: "${definition}" word: "${word}" user: "${user}") {
      id
      word
      definition
      user
    }
  }`

  // console.log(JSON.stringify({ query }))

  fetch('https://api.graph.cool/simple/v1/stammesprak', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({ query })
  }).then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    if (!data.data.createEntries) {
      cb(null, `Noe gikk galt: ${data.errors.map(error => error.message).join('; ')}`)
    } else {
      cb(null, `<@${user}> la til ordet *${word}* med definsjonen «${definition}» på <https://www.stammesprak.no/${encodeURI(word)}|www.stammesprak.no> :tada:`)
    }
  }).catch(error => {
    console.log(error)
    cb(null, `Noko gjekk gale ${error}`)
  })
}
