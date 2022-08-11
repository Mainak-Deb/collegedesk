import React from "react";
import { useParams } from "react-router-dom";
import "./about.css";
import Nav from "./Main/Nav";

const About = () => {
  const { streamname } = useParams();
  return (
    <>
      <Nav stream={streamname}/>
      <div className="about">
        <h1>About</h1>
        <div className="section1">
          <h2>Why was this made?</h2>

          <p>
          This platform is created to facilitate a more stronger connections within the Alumnus network of GCETTS. It aslo serves the purpose of notifying about various college events and job related opportunities through it's blog option.
          </p>
        </div>
        <div className="section1">
          <h2>About the Creator</h2>

          <div className="cont">
            <div className="imgcont">
              <img src="http://drive.google.com/uc?export=view&id=11Yw-n24D3T_njzT90VttIC0eEZJ5tA0q" alt="" className="img1"/>
              <img src="http://drive.google.com/uc?export=view&id=1a039nkyHY7RDkEw8BbMgRJt0nlJ9auZP" alt="" className="img1"/>
            </div>
            <p>
              <p><b>Mainak Deb</b></p>
              <p>Mainak Deb is a 2019-2023 batch CSE student, he is a full-stack web developper, this website was one of his dream in college, he designed the backend and architecture of this website</p>
              <p><b>Auric Mondal</b></p>
              <p>Hey, I am Auric Mondal. I am the student of 2021-2025 batch of GCETTS (TT). Apart from my domain of study I am a self learned UI/UX designer and a front-end developer.</p>

            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
