import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet'

import Footer from './Footer'
import Nav from './Nav'
import Container from '../primitives/Container'

const DetailPage = (props) => {
  const {
    posts,
    params: {
      word: postWord
    } = {}
  } = props

  const post = posts.find(post => post.word.toLowerCase() === postWord.toLowerCase())
  const { word, definition } = post

  return (
    <Container>
    <Helmet>
        <title>Stammespråk – av Netlife</title>
        <link rel='canonical' href='https://www.stammespråk.no/' />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Stammespråk - ${word}`}/>
        <meta property="og:site_name" content="Stammespråk – av Netlife"/>
        <meta property="og:url" content={`https://www.stammesprak.no/${encodeURI(word)}`} />
        <meta property="og:image" content="https://www.stammesprak.no/pointer.jpg"/>
        <meta property="article:author" content="Netlife Research"/>
      </Helmet>
      <h1 className='no-underline'>{word}</h1>
      <p>{definition}</p>
      <Link to='/'><Nav /></Link>
      <Footer />
    </Container>
  )
}

DetailPage.propTypes = {
  posts: PropTypes.array,
  params: PropTypes.object
}

export default DetailPage
