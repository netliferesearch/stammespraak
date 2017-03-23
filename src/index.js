import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'

// import App from './App'
import './index.css'

import ListPage from './components/ListPage'
import DetailPage from './components/DetailPage'
const networkInterface = createNetworkInterface({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT })
import InitialLoad from './containers/InitialLoad'

const client = new ApolloClient({ networkInterface })

ReactDOM.render((
  <div className='wrapper'>
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path='/' component={InitialLoad}>
          <IndexRoute component={ListPage} />
          <Route path='/:word' component={DetailPage} />
        </Route>
      </Router>
    </ApolloProvider>
  </div>
  ),
  document.getElementById('root')
)
