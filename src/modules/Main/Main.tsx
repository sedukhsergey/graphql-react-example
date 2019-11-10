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

type Viewer = {
    login: number;
    name: string;
};

type CurrentUser = {
    viewer: Viewer;
};
const Main = () => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);
    return <div>Main d</div>;
};

export default Main;
