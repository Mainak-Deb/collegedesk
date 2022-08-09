import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Main/cse.css";
import Cardcontainer from "./Main/card/Cardcontainer";
import axios from "axios";
import "./search.css";
import { Link } from "react-router-dom";
import Nav from "./Main/Nav";

const Search = () => {
  const { streamname } = useParams();
  const [input, setInput] = useState("");
  const [alumni, setAlumni] = useState([]);
  const cseApi = `https://script.google.com/macros/s/AKfycbz5HRvz8EQ4S9k2RnKTRygKXFPpeyJWto3mHozr6vFIt0W1R89E-LcdIPmq4hjlPCH9/exec`;
  const itApi = `https://script.google.com/macros/s/AKfycbw70x_lBj_u3Ofen7pK2dF8SSkigA7kYFeO8Mmj7MkWn8yGincjx-cOAaaCuUDjGJi34Q/exec`;
  const ttApi = `https://script.google.com/macros/s/AKfycbw8eurKo8FBcIoscx7zeomZ6tFzm6At-i7gwWcb9ThXWCgXGTuMq2LGhELsCQjKMYqdfQ/exec`;
  const apmApi = `https://script.google.com/macros/s/AKfycbwDhpOxktumU4WcblDmuhfEgN79GwlmuM8rjUoXxM_5RVDXRnXc_PTEZJZfvhITWLte/exec`;

  const apis = {
    cse: cseApi,
    it: itApi,
    tt: ttApi,
    apm: apmApi,
  };
  useEffect(() => {
    async function getData(input) {
      let api = apis[streamname];
      if (input !== "") {
        let res = await axios.get(api + `?name=${input}`);
        console.log(api + `?search=${input}`);
        setAlumni(res.data);
        console.log(res.data);
      }
    }
    getData(input);
  }, [input]);

  return (
    <>
      <Nav stream={streamname} />

      <div className="example">
        <h1>
          {" "}
          <span className="blue"> {streamname.toUpperCase()} </span> SEARCH{" "}
        </h1>
        <input
          placeholder="Search.."
          name="search"
          className="searchbox"
          value={input}
          onInput={(e) => {
            setAlumni([]);
            setInput(e.target.value);
          }}
        />
      </div>
      <div className="alumniCollec">
        <Cardcontainer alumnis={alumni}  stream={streamname}/>
      </div>
    </>
  );
};

export default Search;
