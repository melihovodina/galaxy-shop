import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import UsersList from '../../components/adminka/UsersList'

const Adminka = () => {
  return (
    <Admin dataProvider={restProvider('http://localhost:5299')}>
        <Resource name="users" list={UsersList}/>
    </Admin>
  )
}

export default Adminka