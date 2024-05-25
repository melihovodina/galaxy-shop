import React from 'react';
import { Admin, Resource, List } from 'react-admin';
import { UsersList } from '../../components/adminka/UsersList';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UsersList} />
    </Admin>
);

export default App;