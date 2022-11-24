import React, {useEffect} from 'react'
import Modal from 'react-modal';
import {usePost} from '../../hooks';
import './Modal.scss';
import {map} from 'lodash';

export function ModalInfo(props) {
    const {loading, comment, getComment } = usePost();
    const {actionOpen, onClose, post_id} = props;
    useEffect(() => {
        getComment(post_id)
    }, [post_id])
  return (
    <Modal
    isOpen={actionOpen}
    onRequestClose={onClose}
    contentLabel="Example Modal"
>
   <div className="comments-container">
   <h1>Comentarios <a onClick={onClose} href='#'>Volver</a></h1>
   <ul id="comments-list" class="comments-list">
   {
            loading ? (
                <h2 className='loader'>Cargando...</h2>
            ):
            (
                <>
               {map(comment.data, (comm, index) => (
                      <li key={index}>
                    <div class="comment-main-level">
                      <div class="comment-box">
                        <div class="comment-head">
                          <h6 class="comment-name by-author"><a href="#"> 
                          {comm.owner.firstName}  {comm.owner.lastName}</a></h6>
                          <i class="fa fa-reply"></i>
                          <i class="fa fa-heart"></i>
                        </div>
                        <div class="comment-content">
                          {comm.message}
                        </div>
                      </div>
                    </div>
                  </li>
                 ))}
                 </>
              )
          }
		</ul>
   </div>
</Modal>
  )
}

