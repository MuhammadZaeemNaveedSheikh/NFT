import React from 'react';
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import images from "./image";
import logo from './8.jpg';
import logo1 from './9.jpg';
import logo2 from './10.jpg';
import logo3 from './11.jpg';
import logo4 from './12.jpg';
import "react-carousel-animated/dist/style.css";

import './corosel.css';

function Corosel(){
    return(
        <div className="container1" style={{background:'#282c34',marginTop:'250px',marginBottom:'300px',margin:'auto'}}>
        <ReactCarousel
          carouselConfig={{
            transform: {
              rotateY: {
                [BEFORE]: () => "rotateY(155deg)",
                [CENTER]: () => "rotateY(0deg)",
                [AFTER]: () => "rotateY(-155deg)"
              }
            }
          }}
          itemBackgroundStyle={{
            backgroundColor: "#ece4db",
            borderRadius: "10px",
            boxShadow: "8px 12px 14px -6px black"
          }}
          containerBackgroundStyle={{
            filter: "blur(200px)",
            backgroundColor: "#161623",
            filter:'brightness(200%)'
          }}
          itemMaxWidth={50}
          carouselHeight="480px"
        >
          {images[0].map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt="test"
              style={{
                maxHeight: "420px",
                maxWidth: "450px",
                borderRadius: "20px",
                boxShadow: "0 7px 20px 2px rgb(150, 170, 180)",
                margin: ".5rem"
              }}
            />
          ))}
        </ReactCarousel>
      </div>
    );

}
export default Corosel;