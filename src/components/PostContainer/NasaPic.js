import React, { useEffect, useState } from "react";
import axios from "axios";

const NasaPic = () => {

const [pic, setPIc] = useState([]);
useEffect(() => {

    axios
    .get("https://api.nasa.gov/planetary/apod ")
    .then(response => {
      console.log(response);
    }

    )
    .catch(err => {console.log("something went wrong")})

.then(() => {console.log("success")})

}, []);

return (
    <div className="nasaPic">

    </div>
)
};

export default NasaPic