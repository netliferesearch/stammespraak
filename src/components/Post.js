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
  const title = `Stammespråk: ${entryWord} – av Netlife`
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <link rel='canonical' href={`https://www.stammespråk.no/${encodeURI(entryWord)}`} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content='Stammespråk – av Netlife' />
        <meta property='og:url' content='https://www.stammespråk.no' />
        <meta property='og:image' content='https://www.stammespråk.no/pointer.jpg' />
        <meta property='article:author' content='Netlife Research' />
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
