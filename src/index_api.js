console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT)
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'

// import App from './App'
import './index.css'

import ListPage from './components/ListPage'
import TestPage from './components/TestPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'


const networkInterface = createNetworkInterface({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT })

const client = new ApolloClient({ networkInterface })

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/create'>create</Link></li>
        </ul>

        <hr/>

        <Route exact path='/' component={ListPage} />
        <Route path='/post/:id' component={DetailPage} />
        <Route path='/create' component={CreatePage} />
      </div>
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
/*
const routerTest = (<Router>
      <Route exact path='/' component={ListPage} />
      <Route path='create' component={CreatePage} />
      <Route path='post/:id' component={DetailPage} />
    </Router>)*/