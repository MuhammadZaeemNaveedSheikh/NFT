import React from 'react';
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
// import images from "./image";
import logo from '../../images/2.jpg';
import logo1 from '../../images/3.jpg';
import logo2 from '../../images/4.jpg';
import logo3 from '../../images/5.jpg';
// import logo4 from '../../images/6.jpg';
import "react-carousel-animated/dist/style.css";

import './corosel.css';

function Corosel(){
    return(
        <div id={"corosel"} className="container1" style={{background:'#282c34',marginTop:'250px',marginBottom:'300px',margin:'auto'}}>
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
                    boxShadow: "8px 12px 14px -6px black",
                }}
                containerBackgroundStyle={{
                    filter: "blur(200px)",
                    backgroundColor: "#161623",
                    // filter:'brightness(200%)'
                }}
                itemMaxWidth={100}
                carouselHeight="480px"
            >
                <img
                    src={logo}
                    alt="test"
                    style={{
                        maxHeight: "450px",
                        maxWidth: "480px",
                        borderRadius: "20px",
                        boxShadow: "0 7px 20px 2px rgb(150, 170, 180)",
                        margin: "1rem",

                    }}
                />
                <img
                    src={logo1}
                    alt="test"
                    style={{
                        maxHeight: "450px",
                        maxWidth: "480px",
                        borderRadius: "20px",
                        boxShadow: "0 7px 20px 2px rgb(150, 170, 180)",
                        margin: "1rem",

                    }} />
                <img
                    src={logo2}
                    alt="test"
                    style={{
                        maxHeight: "450px",
                        maxWidth: "480px",
                        borderRadius: "20px",
                        boxShadow: "0 7px 20px 2px rgb(150, 170, 180)",
                        margin: "1rem"
                    }} />
                <img
                    src={logo3}
                    alt="test"
                    style={{
                        maxHeight: "450px",
                        maxWidth: "480px",
                        borderRadius: "20px",
                        boxShadow: "0 7px 20px 2px rgb(150, 170, 180)",
                        margin: "1rem"
                    }} />
            </ReactCarousel>
        </div>
    );

}
export default Corosel;