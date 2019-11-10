import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

const Main = () => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);
    console.log('data',data)
    return <div>Main</div>
};

export default Main;
