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
    }, [post_id]);
    console.log(comment.data.length);
  return (
    <Modal
    isOpen={actionOpen}
    onRequestClose={onClose}
    contentLabel="Example Modal"
    >
      <div className="comments-container">
        <h1>Comentarios <a onClick={onClose} href='#'>Volver</a></h1>
        <ul id="comments-list" className="comments-list">
        {
          loading ? (
              <h2 className='loader'>Cargando...</h2>
          ):
          (
            <>
            { 
              comment.data.length === 0 ? (<h2>Ups... al parecer este post no tiene comentarios</h2>):(map(comment.data, (comm, index) => (
                comm.message === "" ? (<h2>Ups... al parecer el post no tiene comentarios</h2>):(
                  <li key={index}>
                    <h1>{comm.message}</h1>
                    <div className="comment-main-level">
                      <div className="comment-box">
                        <div className="comment-head">
                          <h6 className="comment-name by-author"><a href="#"> 
                          {comm.owner.firstName}  {comm.owner.lastName}</a></h6>
                          <i className="fa fa-reply"></i>
                          <i className="fa fa-heart"></i>
                        </div>
                        <div className="comment-content">
                        {comm.message}
                        </div>
                      </div>
                    </div>
                  </li>)
            )))
              
            }
              </>
          )
        }
      </ul>
    </div>
</Modal>
  )
}

