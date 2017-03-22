import React from 'react'
import {Link} from 'react-router'
import styled from 'styled-components'

const container = styled.div`
  height: auto;
  align-self: center;
  max-width: 200px;
`

export default class Post extends React.Component {

  static propTypes = {
    entry: React.PropTypes.object,
    mutate: React.PropTypes.func,
  }

  render () {
    return (
      <container>
      <Link
        className="no-underline"
        to={`/word/${this.props.entry.id}`}
      >
        <h1>{this.props.entry.word}</h1>
      </Link>
      <p>{this.props.entry.definition}</p>
      </container>
    )
  }
 }       



