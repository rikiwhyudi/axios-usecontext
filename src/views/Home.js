import React from 'react'
import AuthenticatedUser from '../components/AuthenticatedUser'
import { UserProvider } from './context/User'


function Home() {
  return (
    <UserProvider >
        <AuthenticatedUser />
    </UserProvider>
  )
}

export default Home