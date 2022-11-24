import React from 'react'
import Modal from 'react-modal';
import './ModalUser.scss';


export function ModalUser(props) {
    const {actionOpen, onClose, user} = props;
console.log(user);
  return (
    <Modal
    isOpen={actionOpen}
    onRequestClose={onClose}
    contentLabel="Example Modal"
>
   <div className="comments-container">
   <h1>Informacion de usuario <a onClick={onClose} href='#'>Volver</a></h1>


    <div class="profile">
        <div class="profile-image">
            <img src={user.picture} alt=""/>
        </div>
        <div class="profile-user-settings">
            <h1 class="profile-user-name">{user.title} {user.firstName} {user.lastName}</h1>
        </div>
    </div>



   </div>
</Modal>
  )
}

