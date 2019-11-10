import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import Main from '../modules/Main/Main';

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


function App() {
  return (
      <ApolloProvider client={client}>
          <Main/>
      </ApolloProvider>
  );
}

export default App;
