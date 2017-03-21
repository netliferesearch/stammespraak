import React, {Component} from 'react'
import { Link } from 'react-router'
import Post from './Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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
      return (<div className='flex w-100 h-100 items-center justify-center pt7'>
        <div>
          Loading
        </div>
      </div>)
    }
    const entries = this.props.data.allEntrieses
    const post = entries[Math.floor(Math.random() * entries.length)]
    return (<div>
            <Post
              entry={post}
              refresh={() => this.props.data.refetch()}
            />
        </div>)
    
  }
}


const FeedQuery = gql`query {
  allEntrieses {
    id
    word
    defintion
  }
}`

const ListPageWithData = graphql(FeedQuery)(ListPage)

export default ListPageWithData

/*
let blurClass = ''

    if (this.props.location.pathname !== '/') {
      blurClass = ' blur'
    }

    return (
      <div className={'w-100 flex justify-center pa6' + blurClass}>
        <div className='w-100 flex flex-wrap' style={{maxWidth: 1150}}>
          <Link to='/create' className='ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline'>
            <div>New Post</div>
          </Link>
          {this.props.data.allDefinitions.map((post) => (
            <Post
              key={post.id}
              post={post}
              refresh={() => this.props.data.refetch()}
            />
          ))}
        </div>
        {this.props.children}
      </div>
    )
*/ 