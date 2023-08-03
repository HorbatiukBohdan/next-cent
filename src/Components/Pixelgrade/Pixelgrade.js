import * as React from "react";
import "./style.css";
import Pixelgradeimage from "../../images/Pixelgrade-image.png";
import { Link } from "react-router-dom";
const Pixelgrade = () => {
    return (
        <section id="pixelgrade">
            <div className="container">
                <div className="pixelgrade-image">
                <img
            className="image-pixelgade"
            src={Pixelgradeimage}
            alt="Logo"
          />
                </div>
                <div className="pixelgade-info">
                    <h1 className="pixelgade-title"> The unseen of spending three years at Pixelgrade</h1>
                    <p className="pixelgade-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                    Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
                     Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                     Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <Link
            className="button-reg"
            to="/service">
            Learn More
          </Link>
                </div>
            </div>
            </section>
         );
        };
        
export default Pixelgrade;  