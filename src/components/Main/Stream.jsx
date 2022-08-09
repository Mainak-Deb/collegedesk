import "./cse.css";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cardcontainer from "./card/Cardcontainer";
import Nav from "./Nav";

const Stream = () => {
    const {streamname} = useParams();
    const [year, setYear] = useState("2025");
    const [search, setSearch] = useState("");
    const [alumni, setAlumni] = useState([]);


    const cseApi=`https://script.google.com/macros/s/AKfycbz5HRvz8EQ4S9k2RnKTRygKXFPpeyJWto3mHozr6vFIt0W1R89E-LcdIPmq4hjlPCH9/exec`;
    const itApi=`https://script.google.com/macros/s/AKfycbw70x_lBj_u3Ofen7pK2dF8SSkigA7kYFeO8Mmj7MkWn8yGincjx-cOAaaCuUDjGJi34Q/exec`;
    const ttApi=`https://script.google.com/macros/s/AKfycbw8eurKo8FBcIoscx7zeomZ6tFzm6At-i7gwWcb9ThXWCgXGTuMq2LGhELsCQjKMYqdfQ/exec`;
    const apmApi=`https://script.google.com/macros/s/AKfycbwDhpOxktumU4WcblDmuhfEgN79GwlmuM8rjUoXxM_5RVDXRnXc_PTEZJZfvhITWLte/exec`;

    const apis={
        "cse":cseApi,
        "it":itApi,
        "tt":ttApi,
        'apm':apmApi
    };
    var years=[]
    for(var i=2030;i>=2000;i--){
        years.push(i);
    }
    
    useEffect(() => {
        
        async function getData(year, search) {
            let api=apis[streamname];
            let res= await axios.get(api+`?year=${year}`);
            if(year!=="2023"){
                let res= await axios.get(api+`?year=${year}`);
            }else if(search!==""){
                let res= await axios.get(api+`?search=${search}`);
            }else{
                let res= await axios.get(api+`?year=2023`);
            }
            //console.log(res);
            setAlumni(res.data);
          };
          getData(year, search);
    }, [year, search]);
  return (
    <div className="stream">
      <Nav stream={streamname}   />
    <div className="alumniCollec">
      
      {/* Dropdown menu */}
      <div className="drop">
        <div className="dropdown">
        <button className="dropbtn"><span>Year</span><i className="gg-chevron-down"></i></button>
        <div className="dropdown-content">
          {
            years.map((year, index) => {
              return <a key={index} onClick={() =>{ setYear(year);setAlumni([]);}}>{year}</a>
            })
          }
          
        </div>
      </div>
      </div>

      <h1>{streamname} {year} Alumni</h1>
      <Cardcontainer alumnis={alumni} stream={streamname} />
    </div>
    </div>
  );
};

export default Stream;
