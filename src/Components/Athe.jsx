import React from 'react'
import './Athe.css';
import Prod4 from './Prod4.svg'
import {Link} from 'react-router-dom'
const Athe = () => {
  return (
    <div className='Aback'>
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
        <div className='aimg'>
          <img src={Prod4} alt="" />
        </div>
        <div className='aword'>
          <p>If you are an athlete that wants to increase your sponsorships deals with potential brands or if you are a brand that sponsors one or many athletes - Sponsorlytix will measure the brand value of your sponsors using our proprietary software.</p>
        </div>
    </div>
  )
}

export default Athe