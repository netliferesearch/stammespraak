import React, {PropTypes} from 'react'
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
