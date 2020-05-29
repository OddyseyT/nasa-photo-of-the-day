import React from "react";
import { Container, Col, Row,Card, CardHeader, CardFooter, CardBody,
 CardText } from 'reactstrap';

import "./Post.css";

const NasaPic = props => {
    console.log(props)

   return (
    //     <div className="posts-container-wrapper">
    //   <h2>{props.title}</h2>
    //   <img
    //       alt="post thumbnail"
    //       className="post-image"
    //       src={props.Picture}
    //     />
    //   <div className="bottom">
    //     <p>{props.Explanation}</p>
    //     <p>{`Copyright: ${props.Copyright}`}</p>
    //     <p>{`Date: ${props.Date}`}</p>
    //   </div>
    // </div>
<Container>
<Col>
<Card>
      <CardHeader>{props.title}</CardHeader>
      <CardBody>
      <img
          alt="post thumbnail"
         className="post-image"
         src={props.Picture}
       />
        
        <CardText>{props.Explanation}</CardText>
      {/* //  <Button>Go somewhere</Button> */}
      </CardBody>
      <CardFooter>
      <p>{`Copyright: ${props.Copyright}`}</p>
     <p>{`Date: ${props.Date}`}</p>
      </CardFooter>
    </Card>
</Col>
</Container>
    )
    }

    export default NasaPic;
