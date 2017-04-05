import React, {PropTypes} from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router'
import Footer from './Footer'
import Nav from './Nav'

const DetailPage = (props) => {
  const {
    posts,
    params: {
      word: postWord,
    } = {}
  } = props

  const post = posts.find(post => post.word.toLowerCase() === postWord.toLowerCase())
  const { word, definition } = post

  return (
    <div className='container'>
      <Helmet>
        <title>{`${word} - Stammespråk`}</title>
        <link rel='canonical' href={`https://www.stammespråk.no/${word}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" name="twitter:title" content={`${word} - Stammespråk`}/>
        <meta property="og:description" name="twitter:description" content={definition}/>
        <meta property="og:site_name" content="Stammespråk – av Netlife"/>
        <meta property="og:url" content={`https://www.stammespråk.no/${word}`}/>
        <meta property="article:author" content="Netlife Research"/>
        <meta name="twitter:label1" value={word} />
        <meta name="twitter:data1" value={definition} />
      </Helmet>
      <h1 className='no-underline'>{word}</h1>
      <p>{definition}</p>
      <Link to='/'><Nav /></Link>
      <Footer />
    </div>
  )
}

DetailPage.propTypes = {
  posts: PropTypes.array,
  params: PropTypes.object
}

export default DetailPage
