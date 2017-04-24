import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import { Helmet } from 'react-helmet'
import shortid from 'shortid'

import Footer from './Footer';
import Container from '../primitives/Container'
import BareList from '../primitives/BareList'

export default class ListPage extends Component {

  static propTypes = {
    post: PropTypes.object,
  }


  render() {
    const { posts } = this.props;

    return (
      <Container>
        <Helmet>
          <title>Stammespråk – av Netlife</title>
          <link rel='canonical' href='https://www.stammespråk.no/' />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Tilfeldige ord"/>
          <meta property="og:site_name" content="Stammespråk – av Netlife"/>
          <meta property="og:url" content="https://www.stammespråk.no"/>
          <meta property="og:image" content="https://www.stammespråk.no/pointer.jpg"/>
          <meta property="article:author" content="Netlife Research"/>
        </Helmet>
        <Link to="/"><h1>Stammespråk</h1></Link>
        <BareList>
          {
            posts.map(list => (
              <li key={shortid.generate()}><Link to={list.word}>{list.word}</Link></li>
            ))
          }
        </BareList>
        <Footer />
      </Container>
    );
  }
}
