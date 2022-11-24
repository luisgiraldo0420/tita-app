import React from 'react'
import './Navbar.scss';
import {useAuth} from '../../hooks';

export function Navbar() {
    const {auth, logout} = useAuth();
  return (
    <div className="wrapper">
        <div className="navbar">
          <div className="logo">
            <img className='logo__img' src="https://titamedia.com/wp-content/uploads/2021/01/liga-tita@2x.png" alt="logo_tita"/>
          </div>
          <div className="links">
            <ul>
              <li className="dropdown">
              <span className='dropdown__img-user'><i class="fa-solid fa-bars"></i></span>

                <div className="menu">
                  <div className="menu-container">
                    <div className="header">
                      <h3>Hola! {auth.data.nombre} {auth.data.apellido}</h3>
                      <p className="sub-title">{auth.data.email} </p>
                      <a onClick={ logout }>Salir</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
  
  </div>
  )
}

