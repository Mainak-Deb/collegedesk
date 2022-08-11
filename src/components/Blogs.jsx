import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "./blogs.css";
import Nav from "./Main/Nav";
import axios from "axios";


const Blogs = () => {
  const { streamname } = useParams();
  const [data, setData] = React.useState([]);
  useEffect(() => {   
    async function getData() {
        let res= await axios.get('https://script.google.com/macros/s/AKfycbwGoX3NyMxdqTzFSDNA5ZhyUJIA8ztKx_ug6uDkSUJ6OTzikxRVv3PbsbUa4riM7OdHmA/exec');
        setData(res.data.data.reverse());
        console.log(res.data.data);
        };
        getData();
    }, []);
  return (
    <>
      <Nav stream={streamname} />
      <div className="blogs">
        <div className="head">

          <h1  >Blogs</h1> 
         
        <span>  <a className="addblog"  href="https://docs.google.com/forms/d/e/1FAIpQLScZExHSASPtfz6wRJeuXbp-q1udkWPR1qvvr3XfzlWzRV6lag/viewform?usp=sf_link">    
              Add <i className="gg-add"></i>
          </a></span>
         
        </div>
        {
          data.map((item, index) => {
            return (
              <p key={index}>
                <div className="blog">
                  <b className='bloghead'>{item.Stream}</b><hr />
                  <div>
                  {item.Subject}
                  </div>
                  <div className='namelink'>
                    by: <a href={`/profile/${item["Your Name"]}/${item["Timestamp"]}`}>{item["Email Address"]}</a>
                  </div>
                </div>
              </p>
            )
          })
        }

       
      </div>
    </>
  );
};

export default Blogs;
