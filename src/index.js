import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { Router, Route } from 'react-router-dom';
import CustomRouter from './routes/router';

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_APP_URL,
    headers: {
        authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
            }`,
    },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache
});
ReactDOM.render(
    <ApolloProvider client={client}>
        <Router history={CustomRouter.history}>
            <Route component={App} />
        </Router>
    </ApolloProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
