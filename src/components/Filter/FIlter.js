import React from 'react';
import './FIlter.scss';

export function FIlter(props) {
    const {refreshPage, filterByTag} = props;
  return (
   <>
    <nav className="nav">
            <menu className="nav__controls">
                <icon className="nav__icon">
                <i className="fa-solid fa-filter"></i>
                </icon>
                <li className="nav__label">
                    Tags
                </li>
                <li className="nav__label nav__label--clear"><i class="fa-solid fa-filter-circle-xmark"></i></li>
            </menu>
        </nav>
        <div className='filter-tag'>

            <div className='filter-tag__button'>
                <span onClick={()=>filterByTag('dog')} value='tag'>dog</span>
            </div>
            <div className='filter-tag__button'>
                <span onClick={()=>filterByTag('mountain')} value='tag'>mountain</span>
            </div>
            <div className='filter-tag__button'>
                <span onClick={refreshPage} value='tag'>clear</span>
            </div>
           
        </div>
   </>
  )
}

