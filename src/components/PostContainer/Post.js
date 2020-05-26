import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaPic from "./NasaPic"

export default function Post() {
const [pic, setPic] = useState([]);

useEffect(() => {

    axios.get("https://api.nasa.gov/planetary/apod?api_key=09piu2lof5APQG2myoBoySfjhatAnf6GegcPPRuX")
    .then(response => {
      console.log(response.data);
      setPic(response.data);
    }

    )
    .catch(err => {console.log("something went wrong")})

.then(() => {console.log("success")})

}, []);

 return (

<div className="entry">

    
      <NasaPic title={pic.title}
      Picture={pic.hdurl} 
      Explanation={pic.explanation}
      Copyright={pic.copyright}
      Date={pic.date}
     />
  </div>
 )
 }

