import React from 'react'
import Modal from 'react-modal';
import './ModalUser.scss';


export function ModalUser(props) {
    const {actionOpen, onClose, user} = props;
  return (
    <Modal
    isOpen={actionOpen}
    onRequestClose={onClose}
    contentLabel="Example Modal"
>
   <div className="comments-container">
   <h1>Informacion de usuario <a onClick={onClose} href='#'>Volver</a></h1>


    <div className="profile">
        <div className="profile-image">
            <img src={user.picture} alt=""/>
        </div>
        <div className="profile-user-settings">
            <h1 className="profile-user-name">{user.title} {user.firstName} {user.lastName}</h1>
        </div>
    </div>



   </div>
</Modal>
  )
}

