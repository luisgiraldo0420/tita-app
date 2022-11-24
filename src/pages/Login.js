import React from 'react'
import GoogleLogin from 'react-google-login';
import { CLIENT_ID } from '../utils/constants'
import { toast } from 'react-toastify';
import { useAuth } from '../hooks'
import '../app.scss'


export function Login() {

    const {login} = useAuth();
    const responseGoogle = (response) => {
        try {
          console.log(response);
            login(response.tokenId, response.profileObj)
            toast.success(`${response.profileObj.givenName} Bienvenido`)
        } catch (error) {
            toast.error(response.error)
        }
      }
  return (
    
      <div className='content'>
        <div className='login-card'>
          <h2>Login</h2>
            <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    </div>
  )
}
