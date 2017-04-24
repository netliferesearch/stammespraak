import React, {PropTypes} from 'react'
import { Link, browserHistory } from 'react-router'
import { Helmet } from 'react-helmet'

import { capitalize } from '../utils'
import Footer from './Footer'
import Container from '../primitives/Container'
import A from '../primitives/A'

const DetailPage = (props) => {
  const {
    posts,
    params: {
      word: postWord
    } = {}
  } = props

  const post = posts.find(post => post.word.toLowerCase() === postWord.toLowerCase())
  const { word, definition, user } = post

  return (
    <Container>
      <Helmet>
        <title>Stammespråk – av Netlife</title>
        <link rel='canonical' href='https://www.stammespråk.no/' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={`Stammespråk - ${word}`} />
        <meta property='og:site_name' content='Stammespråk – av Netlife' />
        <meta property='og:url' content={`https://www.stammesprak.no/${encodeURI(word)}`} />
        <meta property='og:image' content='https://www.stammesprak.no/pointer.jpg' />
        <meta property='article:author' content='Netlife Research' />
      </Helmet>
      <h1 className='no-underline'>{word}</h1>
      <p>{definition}</p>
      {user && <p><small>Innført av {capitalize(user)}</small></p>}
      <A onClick={browserHistory.goBack}>Tilbake</A>
      <Footer />
    </Container>
  )
}

DetailPage.propTypes = {
  posts: PropTypes.array,
  params: PropTypes.object
}

export default DetailPage
