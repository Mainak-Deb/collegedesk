import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const landing = () => {
  return (
    <div className="landing">
      <h1 className='headh'>College Desk</h1>
      <div className='headp'>connecting the alumni</div>
    <h1>Choose Your Stream</h1>
      <Link to={"/stream/cse"} className="pokelink">
        <p  className='landingp'> <span className='landingpa'>CSE</span> </p>
      </Link>
      <Link to={"/stream/it"} className="pokelink">
        <p  className='landingp'><span className='landingpa'>IT</span> </p>
      </Link>
      <Link to={"/stream/apm"} className="pokelink">
        <p  className='landingp'><span className='landingpa'> APM</span></p>
      </Link>
      <Link to={"/stream/tt"} className="pokelink">
        <p  className='landingp'><span className='landingpa'> TT</span></p>
      </Link>
    </div>
  )
}

export default landing