import * as React from "react";
import "./style.css";
import Pixelgradeimage from "../../images/Your-site-image.png";
import { Link } from "react-router-dom";
const YourSite = () => {
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
                    <h1 className="pixelgade-title"> How to design your site footer like we did</h1>
                    <p className="pixelgade-description">
                    Donec a eros justo. Fusce egestas tristique ultrices. 
                    Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, 
                    at scelerisque elit erat a magna. Donec quis erat at libero ultrices
                     mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui,
                      at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                       non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
                        efficitur quis massa. Praesent felis est, finibus et nisi ac,
                         hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
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
        
export default YourSite;  