import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {withRouter} from 'react-router'

class DetailPage extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    const {Entries} = this.props.data
    const { word, definition } = Entries
    
    return (
      <div className='container'>
            <h1 class="no-underline">{word}</h1>
            <p>{definition}</p>
        <div className="cta"><small>Om du liker dette stammespråket <a href="https://www.netliferesearch.com/jobb">kan du kanskje jobbe hos oss</a>?</small></div>
        </div>
    )
  }

  handleDelete = async () => {
    await this.props.mutate({variables: {id: this.props.data.Post.id}})

    this.props.router.push('/')
    this.props.data.refetch()
  }
}

const deleteMutation = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const PostQuery = gql`query post($id: ID!) {
  Entries(id: $id) {
    id
    word
    definition
  }
}`

const DetailPageWithData = graphql(PostQuery, {
  options: ({params}) => ({
    variables: {
      id: params.id
    }
  })
})(DetailPage)

const DetailPageWithDelete = graphql(deleteMutation)(DetailPageWithData)

export default withRouter(DetailPageWithDelete)