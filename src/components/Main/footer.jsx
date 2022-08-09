import React from 'react'
import './comp.css'
const footer = () => {
  return (
    <div className='footer'>
      <div className="upprft">
        <div className="left">
          
            <a href='#'>Contact Us</a>
            <a href='#'>GitHub</a>
            <a href='#'>About</a>
          
        </div>
        <div className="right">
          <h3>Developers</h3>
          <hr />
            <a href="#">Mainak Deb</a>
            <a href="#">Auric Mondal</a>
          
        </div>
      </div>
      
      <div className="lowerft">
      <hr />
      <h3>Designed and Developed by <a href="#">Auric Mondal</a> And <a href="#">Mainak Deb</a></h3>
      </div>
    </div>
  )
}

export default footer