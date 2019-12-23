import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import Pages from './pages';

// import gql from 'graphql-tag';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:4000/'
});

const client = new ApolloClient({
  cache,
  link
});

/* Queries can be hit like this too -- */
// client.query({
//   query: gql`
//     query GetLaunches {
//       launches {
//         id
//         mission {
//           name
//         }
//       }
//     }
//   `
// }).then(result => {
//   console.log('Result->', result.data);
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
