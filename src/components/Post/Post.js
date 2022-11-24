import React, {useEffect, useState} from 'react';
import {usePost} from '../../hooks';
import {map} from 'lodash';
import './Post.scss';
import { ModalInfo } from '../ModalComment/Modal';
import { ModalUser } from '../ModalUser/ModalUser';
import { FIlter } from '../Filter/FIlter';
import { CardPost } from '../CardPost/CardPost';



export function Post() {
    const {loading, post, getPost, getTags, tags, getPostByTag, postByTag } = usePost();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modaluserOpen, setModalUserOpen] = useState(false);
    const [idpost, setIdpost] = useState(false);
    const [user, setuser] = useState(false);
    const [tag, setTag] = useState('');
   

   
const openCloseModal = (id = undefined) => {
    setIsOpen((prev) => !prev)
    if(id){
        setIdpost(id)
    }
   
}
const openCloseModalUser = (user= undefined) =>{
    setModalUserOpen((prev) => !prev)
    if(user){
        setuser(user)
    }
}
    useEffect(() => {
        getPost();
    },[])

    useEffect(() => {
        getTags();
    },[]);

    
    function refreshPage() {
        window.location.reload(false);
      }
    const filterByTag = (filter_tag) => {
        getPostByTag(filter_tag)
    }

    return (
<div className='heading-post'>
    <h2><span>Post</span></h2>
    <FIlter filterByTag= {filterByTag} refreshPage={refreshPage} />
    <div className='container'>
        {
            loading ? (
                <h2 className='loader'>Cargando...</h2>
            ):
            (
                postByTag ? (
                    map(postByTag.data, (p, index) => (
                   <CardPost p={p} index={index} openCloseModal={openCloseModal} openCloseModalUser={openCloseModalUser} />
                   ))
                ):(
                    map(post.data, (p, index) => (
                    <CardPost p={p} index={index} openCloseModal={openCloseModal} openCloseModalUser={openCloseModalUser} />
                   ))
                )
            )
        }
         <ModalInfo actionOpen={modalIsOpen} onClose={() => openCloseModal()} post_id = {idpost}/>
         <ModalUser actionOpen={modaluserOpen} onClose={() => openCloseModalUser()} user = {user} />
    </div>
</div>
  )
}

