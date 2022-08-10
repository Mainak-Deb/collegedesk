import { useParams } from 'react-router-dom'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import './profile.css'
import Nav from './Nav';

const Profile = () => {
    const {emailid} = useParams();
    const {streamname} = useParams();
    const [data, setData] = useState([]);
    const [indices,setIndices] = useState([]);

    const cseApi=`https://script.google.com/macros/s/AKfycbwbuqfHKoE3QKcNNo85oW90e_Zmb5Poq3-k09vqePg3dQbIWUiTsOTJDv4xQvVkRuO9/exec`;
    const itApi=`https://script.google.com/macros/s/AKfycbzWK2w4UBZdL7CEs2NQCHbELP4QDG8vjK1rTGjXsQH7Fw-ETBgXhsVk3OC1VqQlllR5qA/exec`;
    const ttApi=`https://script.google.com/macros/s/AKfycbyyMkOVOADyJ45fmuf8Aaepm0oZNCx6yYcT7PNZ9sVtWBbWSNuwtaEfdIegT2bbB2LYRA/exec`;
    const apmApi=`https://script.google.com/macros/s/AKfycbzVpHBz8ElpXJSn27UZYHC11ZcYH-IQjpauR-oDtPMlNVmr5djr9K8YTnd6xQ1EO4Nd/exec`;
    const [imgurl, setImgurl] = useState("");


    const apis={
        "cse":cseApi,
        "it":itApi,
        "tt":ttApi,
        'apm':apmApi
    };

    useEffect(() => {
      async function getData() {
          let api=apis[streamname];
          let res= await axios.get(api+`?email=${emailid}`);
          console.log(api+`?email=${emailid}`)
          console.log(res.data.data[0]);
          setData(res.data.data[0]);
          let ins=[]
          for (let x in res.data.data[0]) {
            ins.push(res.data.data[0][x]);
          }
          setIndices(ins);
          console.log(ins);
          let img=res.data.data[0].Image;
          let imglink = img.replace(
            "https://drive.google.com/open?id=",
            "http://drive.google.com/uc?export=view&id="
          );
          setImgurl(imglink);
        };
        getData();
  }, []);
  if(data.length==0){
    return <Loader/>
  } else{
  return (
    <>    
    <div className='Account'>
      <h1>{data.Name}</h1>
      <div className="profile">
        <div className='imag'>
          <img src={imgurl} alt=""  className="image"/>
        </div>

        <div className="information">
          <p>Name: <span className='vlk'>{data.Name}</span></p>
          <p>Email: <a href={"mailto:"+data["Email Address"]}> {data["Email Address"]}</a></p>
          <p>Passing Year: <span className='vlk'>{data["Passing Year"]}</span></p>
          <p>LinkedIn Url: <a href={data["LinkedIn url"]}>{data["LinkedIn url"]}</a></p>
          <p>Description: <span className='vlk'>{indices[5]}</span></p>
          <p>Further Education after GCETTS: <span>{indices[6]}</span></p>
          <p>WhatsApp No: <span className='vlk'>{indices[9]}</span></p>
          <p>Social media Link(1):  <a href={indices[7]}>{indices[7]}</a></p>
          <p>Social media Link(2):  <a href={indices[8]}>{indices[8]}</a></p>
        </div>
        </div>
    </div>
  
    </>
    
      
     
      
  )
  }  
}

export default Profile