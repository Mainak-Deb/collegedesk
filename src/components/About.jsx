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
            We made this because we wanted to connect our college students to each other and their alimnis.
            We wanted to make a platform where students can share their knowledge and experiences with each other by posting blogs.
            here anyone can post blog and share it with the college. You can post about Job notification,meeting,events,etc.
            You can also post about your own experiences and share it with the college.
            This is a facebook for college.
            You can search about any student in this website , you will get the profile of the student by clicking on the card.

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
              <p>Auric Mondal is a 2021-2025 batch TT student, he is a Ui developper and frontend developper, He is the main UI designer of this website</p>

            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
