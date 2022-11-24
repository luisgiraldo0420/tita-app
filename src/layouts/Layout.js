import React from 'react'
import { Navbar } from '../components/Navbar';
import { Post } from '../components/Post/Post';
import {useAuth} from '../hooks/useAuth';
import { Login } from '../pages/Login';

export function Layout(props) {
  const {children} = props;
  const {auth} = useAuth();

  if (!auth) return <Login/>
    
  return (
    <div>
       <Navbar/>
       <Post/>
    </div>
  )
}
