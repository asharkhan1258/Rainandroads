import React from 'react'
import './navbar.css';

const navbar = () => {
  return (
    <>
      <div className="main-div">
        <p>Logo</p>
        <div className='tabs-div'>
          <p>About Us</p>
          <p>Destinations</p>
          <p>Packages</p>
          <p>Tour Guides</p>
          <p>Pages</p>
          <p>Blog</p>
          <p>Contact</p>
          <div className="btn">
            <button>Book Now
              <img src=".\Assest\navbar\Vector.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default navbar
