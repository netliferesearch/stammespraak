import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {Link} from 'react-router'

class Post extends React.Component {

  static propTypes = {
    entry: React.PropTypes.object,
    mutate: React.PropTypes.func,
    refresh: React.PropTypes.func,
  }

  render () {
      console.log(this.props)
    return (
      <Link
        className='bg-white ma3 box post flex flex-column no-underline br2'
        to={`/post/${this.props.entry.id}`}
      >
        <h1>{this.props.entry.word}</h1>
        <div className='flex items-center black-80 fw3 description'>

        </div>
        <span className='red f6 pointer dim' onClick={this.handleDelete}>Delete</span>
      </Link>
    )
  }
          //

  handleDelete = async () => {
    await this.props.mutate({variables: {id: this.props.entry.id}})

    this.props.refresh()
  }
}

const deleteMutation = gql`
  mutation deleteDefiniton($id: ID!) {
    deleteDefiniton(id: $id) {
      id
    }
  }
`

const PostWithMutation = graphql(deleteMutation)(Post)

export default PostWithMutation