import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {Link} from 'react-router'

export default class Post extends React.Component {

  static propTypes = {
    entry: React.PropTypes.object,
    mutate: React.PropTypes.func,
    refresh: React.PropTypes.func,
  }

  render () {

    return (
        <div className="container">
      <Link
        className='bg-white ma3 box post flex flex-column no-underline br2'
        to={`/post/${this.props.entry.id}`}
      >
        <h1>{this.props.entry.word}</h1>
        
      </Link>
      <p>{this.props.entry.definition}</p>
      </div>
    )
  }
 }         //



