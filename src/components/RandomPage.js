import React, { Component, PropTypes } from 'react';
import { Helmet } from 'react-helmet'

import { randomItem } from '../utils';
import Post from './Post';
import Footer from './Footer';
import Nav from './Nav'
import Container from '../primitives/Container'

export default class RandomPage extends Component {
  constructor(props) {
    super(props);
    const { posts } = this.props;
    this.state = { post: randomItem(posts)};
    this.handleRandomClick = this.handleRandomClick.bind(this);
  }

  static propTypes = {
    post: PropTypes.object,
  }

  handleRandomClick() {
    const { posts } = this.props;

    this.setState({
      post: randomItem(posts),
    });
  }

  render() {
    const { post } = this.state;

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
        <Post entry={post} />
        <div onClick={this.handleRandomClick}><Nav  /></div>
        <Footer />
      </Container>
    );
  }
}
