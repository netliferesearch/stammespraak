import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Modal from 'react-modal'
import modalStyle from '../constants/modalStyle'

class CreatePage extends React.Component {

  static propTypes = {
    router: React.PropTypes.object,
    addPost: React.PropTypes.func,
  }

  state = {
    word: '',
    definitionn: '',
  }

  render () {
    return (
      <Modal
        isOpen
        contentLabel='Create Post'
        style={modalStyle}
        onRequestClose={this.props.router.goBack}
      >
        <div className='pa4 flex justify-center bg-white'>
          <div style={{ maxWidth: 400 }} className=''>
            <input
              className='w-100 pa3 mv2'
              value={this.state.definition}
              placeholder='definition'
              onChange={(e) => this.setState({definition: e.target.value})}
            />
            <input
              className='w-100 pa3 mv2'
              value={this.state.word}
              placeholder='word'
              onChange={(e) => this.setState({word: e.target.value})}
            />
            {this.state.word && this.state.definition &&
              <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this.handlePost}>Post</button>
            }
          </div>
        </div>
      </Modal>
    )
  }

  handlePost = async () => {
    const {word, definition} = this.state
    await this.props.addPost({variables: { word, definition }})

    window.location.pathname = '/'
  }
}

const addMutation = gql`
  mutation addPost($definition: String!, $word: String!) {
    createPost(definition: $definition, word: $word) {
      id
      definition
      word
    }
  }
`

const PageWithMutation = graphql(addMutation, { name: 'addPost' })(CreatePage)

export default withRouter(PageWithMutation)