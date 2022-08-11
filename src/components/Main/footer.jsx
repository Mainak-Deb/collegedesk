import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
const footer = () => {
  return (
    <div className='footer'>
      <div className="upprft">
        <div className="left">
          <h1>College desk</h1>
          <p>connecting the Alumni</p>
        </div>
        <div className="mid">
          
            <Link to='/'>Contact</Link>
            <Link to='/'>GitHub</Link>
            <Link to='/about'>About</Link>
          
        </div>
        <div className="right">
          <h3>Developers</h3>
          <hr />
            <Link to="/">Mainak Deb</Link>
            <Link to='/'>Auric Mondal</Link>
          
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