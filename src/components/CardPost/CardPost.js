import React from 'react'
import {map} from 'lodash';

export function CardPost(props) {

    const {p, index, openCloseModal, openCloseModalUser} = props;
  return (
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
  )
}

