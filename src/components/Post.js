import React from 'react'
import {Link} from 'react-router'
import {Helmet} from 'react-helmet'
import Container from '../primitives/Container'

const Post = (props) => {
  const {
    entry: {
      word: entryWord = '',
      definition: entryDefinition = ''
    } = {}
  } = props

  return (
    <Container>
      <Helmet>
        <title>{`Stammespråk: ${entryWord} – av Netlife`}</title>
        <link rel='canonical' href={`https://www.stammespråk.no/${encodeURI(entryWord)}`} />
      </Helmet>
      <Link
        className='no-underline'
        to={`/${entryWord}`}
      >
        <h1>{entryWord}</h1>
      </Link>
      <p>{entryDefinition}</p>
    </Container>
  )
}

Post.propTypes = {
  entry: React.PropTypes.object
}

export default Post
