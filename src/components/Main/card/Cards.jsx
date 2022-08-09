import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Cards(props) {
  let { data,stream } = props;
  let img = data.Image;
  const imgurl = img.replace(
    "https://drive.google.com/open?id=",
    "http://drive.google.com/uc?export=view&id="
  );
  return (
    <Link
      to={`/profile/${stream}/${data["Email Address"]}`}
      style={{ textDecoration: "none" }}
      className="cards"
    >
        <div className="card">
          <div className="img">
            <img className="img" src={imgurl} alt="Logo" />
          </div>
          <p>{data.Name}</p>
          <p>{data["Passing Year"]}</p>
          <p>{data["Email Address"]}</p>
        </div>
     
    </Link>
  );
}

export default Cards;
