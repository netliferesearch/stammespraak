import React, {PureComponent, PropTypes} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Post from './Post'
import pointer from '../assets/pointer.svg'

function randomItem (array) {
  return array[Math.floor(Math.random() * array.length)]
}

class ListPage extends PureComponent {

  static propTypes = {
    post: PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
    handleClick: PropTypes.func,
  }

  shouldComponentUpdate ({ post }) {
    return post && post !== this.props.post
  }

  render () {
    if (!this.props.post) {
      return (<div>
          Loading
      </div>)
    }

    return (<div className="container">
            <Post entry={this.props.post} />
            <a onClick={this.props.handleClick}>
            <img alt="Find a new random word" src={pointer} />
            </a>
            <div className="cta"><small>Om du liker dette stammespråket <a href="https://www.netliferesearch.com/jobb">kan du kanskje jobbe hos oss</a>?</small></div>
            </div>)
    
  }
}

const FeedQuery = gql`query {
  allEntrieses {
    id
    word
    definition
  }
}`

const ListPageWithData = graphql(
  FeedQuery,
  {
    props: props => {
      const { allEntrieses, networkStatus } = props.data
      const loaded = networkStatus === 7 && allEntrieses

      return {
        post: loaded && randomItem(allEntrieses),
        handleClick: () => props.data.refetch(),
      }
    }
  }
)(ListPage)

export default ListPageWithData
