import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Modal from 'react-modal'
import modalStyle from '../constants/modalStyle'
import {withRouter} from 'react-router'

const detailModalStyle = {
  overlay: modalStyle.overlay,
  content: {
    ...modalStyle.content,
    height: 761
  }
}

class DetailPage extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render () {
    console.log(this.props.data)
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    const {Post} = this.props.data

    return (
      <div className='container'>
            <h1>{this.props.data.entriy.word}</h1>
            <p>{this.props.data.entriy.definition}</p>
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
  Post(id: $id) {
    id
    imageUrl
    description
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