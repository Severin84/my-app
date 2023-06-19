import React from 'react'
import './FA.css';
import Prod2 from './Prod2.svg';
import {Link} from 'react-router-dom'
const FA = () => {
  return (
    <div className='FABACK'>
        <div className='Nav'>
        <div>
        <Link to="/Products">
          <h2>Sports Club</h2>
        </Link>
        </div>
        <div>
         <Link to="/FA">
          <h2>Federations
           Associations
          </h2>  
          </Link>
        </div>
        <div>
         <Link to="/Brands">
          <h2>Brands</h2>  
          </Link>
        </div>
        <div>
            <Link to="/Athe">
          <h2>Athletes</h2> 
          </Link> 
        </div>
        <div>
          <Link to="/Es">
          <h2>E-Sports</h2> 
          </Link> 
        </div>
        <div>
          <Link to="/md">
          <h2>Media Publishers</h2>  
          </Link>
        </div>
      </div>
        <div className='faimg'>
            <img src={Prod2} alt="" />
        </div>
        <div className='faword'>
          <p>Sports Federations, Association, Governing bodies and sports leagues / tournaments of all sports and in any country will be provided the most comprehensive and cost effective sponsorship analytics.</p>
        </div>
    </div>
  )
}

export default FA