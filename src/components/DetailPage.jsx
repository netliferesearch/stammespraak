import React, { PropTypes } from 'react'

import Footer from './Footer';

const DetailPage = (props) => {
  const {
    posts,
    params: {
      id: postId,
    } = {},
  } = props;

  const post = posts.find(post => post.id === postId);
  const { word, definition } = post;

  return (
    <div className='container'>
      <h1 className="no-underline">{word}</h1>
      <p>{definition}</p>
      <Footer />
    </div>
  );
}

DetailPage.propTypes = {
  posts: PropTypes.array,
}

export default DetailPage;
