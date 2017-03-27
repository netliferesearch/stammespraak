require('isomorphic-fetch')

module.exports = (context, cb) => {
  const text = context.body.text.split(';')
  const definition = text[1]
  const word = text[0]
  const token = `Bearer ${context.secrets.token}`
  const query = `mutation {
    createEntries(definition: "${definition}" word: "${word}") {
      id
      word
      definition
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
    cb(null, data)
  })
}
