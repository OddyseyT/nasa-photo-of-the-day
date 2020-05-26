import React from "react";
//import LikeSection from "./LikeSection";

import "./Post.css";

const NasaPic = props => {
    console.log(props)

    return (
        <div className="List">
      <h2>{props.title}</h2>
      <img
          alt="post thumbnail"
          className="post-image"
          src={props.Picture}
        />
      <div className="bottom">
        <p>{props.Explanation}</p>
        <p>{`Copyright: ${props.Copyright}`}</p>
        <p>{`Date: ${props.Date}`}</p>
      </div>
    </div>

    )
    }

    export default NasaPic;
