import React, {Component} from 'react'
import Post from './Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import pointer from '../assets/pointer.svg'

class ListPage extends Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.data.refetch()
    }
  }

  render () {
      
    if (!this.props.data.allEntrieses) {
      return (<div>
          Loading
      </div>)
    }
    const entries = this.props.data.allEntrieses
    const post = entries[Math.floor(Math.random() * entries.length)]
    return (<div className="container">
            <Post
              entry={post}
              refresh={() => this.props.data.refetch()}
            />
            <img alt="Find a new random word" src={pointer} onClick={() => this.props.data.refetch()} />
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

const ListPageWithData = graphql(FeedQuery)(ListPage)

export default ListPageWithData
