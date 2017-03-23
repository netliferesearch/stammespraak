import React from 'react'
import {Link} from 'react-router'

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
