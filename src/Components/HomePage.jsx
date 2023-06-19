import React from 'react'
import "./HomePage.css";
import logo from "../utils/logo.svg";
import HomePageBanner from "../utils/HomePageBanner.svg";
import background from "../utils/HomePagebackground.svg";
import {Link} from 'react-router-dom'
const HomePage = () => {
  return (
    <div className='outer' style={{backgroundImage:'url'+('${background}')}}>
        <div className='tabs'>
            <Link to={"/soft"}>
            <div>Software</div>
            </Link>
            <Link to={"/Products"}>
            <div>Product</div>
            </Link>
            <div>AI</div>
            <div>Industry</div>
            <Link to={"/Features"}>
            <div>Features</div>
            </Link>
            <div>Case study</div>
            <div>Reaquest Demo</div>
            <div>Client Login</div>
        </div>
        <div className='Logo'>
           <div>
            <img src={logo} alt="" />
           </div>
        </div>
        <div className='Banners'> 
        <div className="bannerTeaxt">
            <div className='firstText'>
                <h3>AI-Powered Sports
Sponsorship Analytics</h3>
            </div>
            <div style={{marginTop:'10rem'}}>
                <p>Near real-time analytical & valuation platform</p>
            </div>
            <div>
                <button>Request Demo</button>
            </div>
        </div>
        <div className='Homepagebanner'>
           <img src={HomePageBanner} alt="" />
        </div>
        </div>
    </div>
  )
}

export default HomePage