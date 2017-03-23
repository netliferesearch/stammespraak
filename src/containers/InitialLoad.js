import React, {PureComponent, PropTypes} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class InitialLoad extends PureComponent {
  static propTypes = {
    post: PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  }

  render () {
    const { posts, children } = this.props;

    if (!posts) {
      return <div>Laster stammespråket</div>;
    }

    return React.cloneElement(
      children,
      { posts: posts },
    );
  }
}

const FeedQuery = gql`query {
  allEntrieses {
    id
    word
    definition
  }
}`

const InitialLoadWithData = graphql(
  FeedQuery,
  {
    props: props => {
      const { allEntrieses, networkStatus } = props.data;
      const loaded = networkStatus === 7 && allEntrieses;

      return {
        posts: loaded && allEntrieses,
      }
    }
  }
)(InitialLoad);

export default InitialLoadWithData;
