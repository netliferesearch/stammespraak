import React, { Component, PropTypes } from 'react';
import { randomItem } from '../utils';

import Post from './Post';
import Footer from './Footer';

import pointer from '../assets/pointer.svg';

export default class ListPage extends Component {
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
      <div className="container">
        <Post entry={post} />
        <a onClick={this.handleRandomClick}>
          <img alt="Find a new random word" src={pointer} />
        </a>
        <Footer />
      </div>
    );
  }
}
