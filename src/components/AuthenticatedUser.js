import React, { useContext } from 'react'
import { UserContext } from '../views/context/User';


function AuthenticatedUser() {
    const { user, loading } = useContext(UserContext);

  return (
    <div>
        {
            loading ? <div>Loading...</div>
            :
            <div>my name is {user.name}</div>
        }
       
    </div>
  )
}

export default AuthenticatedUser