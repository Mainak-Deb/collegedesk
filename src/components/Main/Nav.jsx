import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const stream = props.stream;
  const streamlink= `/stream/${stream}`;
  const about= `/about/${stream}`;
  const blog= `/blog/${stream}`;
  const search= `/search/${stream}`;

  const links={
    cse: "https://forms.gle/7E83sDLqPmN7HeSr6",
    it: "https://forms.gle/GGL23bpHwbydQz3i6",
    tt: "https://forms.gle/inxJzEF9iuC4AbQN6",
    apm: "https://forms.gle/mHRFNy92ABGQSAjn9"
  }

  const join = links[stream];
  console.log(join);

  return (
    <div>
      <div class="header">
        <a to="" class="logo">
          <b>College Desk</b> 
          <p className="headp">connecting the alumni</p>
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to= {streamlink} >{stream}</Link>
          </li>
          <li>
            <a href={join}>Join/Edit</a>
          </li>
          <li>
            <Link to={search}>Search</Link>
          </li>
          <li>
            <Link to={about}>About</Link>
          </li>
          
          <li>
            <Link to={blog}>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
