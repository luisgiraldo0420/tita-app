import React, {useEffect, useState} from 'react';
import {usePost} from '../../hooks';
import {map} from 'lodash';
import './Post.scss';
import { ModalInfo } from '../ModalComment/Modal';
import { ModalUser } from '../ModalUser/ModalUser';



export function Post() {
    const {loading, post, getPost } = usePost();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modaluserOpen, setModalUserOpen] = useState(false);
    const [idpost, setIdpost] = useState(false);
    const [user, setuser] = useState(false);
   

   
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
    
    console.log(post);
    return (
        <div className='heading-post'>
        <h2><span>Post</span></h2>
       
    <div className='container'>
        
        {
            loading ? (
                <h2 className='loader'>Cargando...</h2>
            ):
            (
                <>
               {map(post.data, (p, index) => (
                    <div className='flip-card' key={index}>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={p.image} alt='img-post'/>
                            <div className='flip-card-info'>
                            <span>{p.text}</span>
                            <hr/>
                            <ul class="tags">
                                
                            {map(p.tags, (tag, index) => (
                                <li key={index}><span href="#" className="tag">{tag}</span></li>
                                ))}
                            </ul>
                            <div className='interaction'>
                                <p class="fa-sharp fa-solid fa-thumbs-up"> {p.likes}</p>
                                <i class="fa-solid fa-comments" onClick={() => openCloseModal(p.id)}></i>
                                <i class="fa-solid fa-user" onClick={() => openCloseModalUser(p.owner)}></i>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
               ))}
               </>
            )
        }
         <ModalInfo actionOpen={modalIsOpen} onClose={() => openCloseModal()} post_id = {idpost}/>
         <ModalUser actionOpen={modaluserOpen} onClose={() => openCloseModalUser()} user = {user} />
    </div>
</div>
  )
}

