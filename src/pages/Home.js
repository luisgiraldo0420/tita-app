import React from 'react'
import {useAuth} from '../hooks';


export function Home() {

  const {logout} = useAuth();
  return (
    <div>
       <button onClick={logout}>
      cerrar sesion
    </button>
    </div>
   
  )
}