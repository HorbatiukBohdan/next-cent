import * as React from "react";
import "./style.css";
import TeslaImage from "../../images/Tesla-image.png";
import TimSmithImage from "../../images/TimSmith-image.png";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/Right.png";
const TomSmith = () => {
    return (
        <section id="timsmith">
            <div className="container">
                <div className="timsmith-image">
                    <img
                        className="image-timsmith"
                        src={TeslaImage}
                        alt="Logo"
                    />
                </div>
                <div className="timsmith-info">
                    <p className="timsmith-description">
                    Maecenas dignissim justo eget nulla rutrum molestie. 
                    Maecenas lobortis sem dui, vel rutrum risus tincidunt
                     ullamcorper. Proin eu enim metus. Vivamus sed libero
                      ornare, tristique quam in, gravida enim. Nullam ut
                       molestie arcu, at hendrerit elit. Morbi laoreet elit 
                       at ligula molestie, nec molestie mi blandit.
                        Suspendisse cursus tellus sed augue ultrices, quis tristique
                        nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                         pretium. Suspendisse potenti. Quisque malesuada enim sapien, 
                         vitae placerat ante feugiat eget. Quisque vulputate odio 
                         neque, eget efficitur libero condimentum id. Curabitur
                          id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h1 className="timsmith-title">
                    Tim Smith
                    </h1>
                    <p className="timsmith-second-description">
                    British Dragon Boat Racing Association
                       </p> 
                       <img
                        className="image-timsmith"
                        src={TimSmithImage}
                        alt="Logo"
                    />
                    
                </div>
            </div>
        </section>
    );
};

export default TomSmith; 