import React, {useState} from 'react';
import './FIlter.scss';

export function FIlter(props) {
    const {refreshPage, filterByTag} = props;
    const [filter, setFilter] = useState(false);

 
const searchTag = (tag) => {
    filterByTag(tag);
}
console.log(filter);
  return (
   <>
        <nav className="nav">
            <menu className="nav__controls">
                <i className="nav__icon">
                <i className="fa-solid fa-filter"></i>
                </i>
                <li className="nav__label">
                    Tags
                </li>
                <li className="nav__label nav__label--clear"><i className="fa-solid fa-filter-circle-xmark"></i></li>
            </menu>
        </nav>
        <div className='filter-tag'>
           
                <input onChange={event => setFilter(event.target.value)} placeholder='filtrar por tag' />
            <div className='filter-tag__button'>
                <span onClick={()=>searchTag(filter)} value='tag'><i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <div className='filter-tag__button'>
                <span onClick={refreshPage} value='tag'><i className="fa-solid fa-filter-circle-xmark"></i></span>
            </div>
           
        </div>
   </>
  )
}

