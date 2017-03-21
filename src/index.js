console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT)
import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'

// import App from './App'
import './index.css'

import ListPage from './components/ListPage'
import TestPage from './components/TestPage'
import CreatePage from './components/CreatePage'
import Post from './components/Post'


const networkInterface = createNetworkInterface({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT })

const client = new ApolloClient({ networkInterface })

ReactDOM.render((
  <div className="wrapper">
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={ListPage}>
            <Route path='create' component={CreatePage} />
            {/*<Route path='post/:id' component={Post} />*/}
          </Route>
        </Router>
  </ApolloProvider>
  </div>
  ),
  document.getElementById('root')
)
/*
const routerTest = (<Router>
      <Route exact path='/' component={ListPage} />
      <Route path='create' component={CreatePage} />
      <Route path='post/:id' component={DetailPage} />
    </Router>)*/