import * as React from "react";
import "./style.css";
// import "./test.scss"

import Partners from "../../images/client-logo.png";

const Clients = () => {
    return (
        <section id="clients">
            <div className="container">
                <div className="title-client">
                    <h1 className="clients-title">Our Clients</h1>
                    <p className="client-description">
                        We have been working with some Fortune 500+ clients
                    </p>
                </div>
              
                <ul className="clients-list">
                    <li>
                             <img
            className="image-home-preview"
            src={Partners}
            alt="Logo"
          />
                    </li>
                    <li>
                           <img
            className="image-home-preview"
            src={Partners}
            alt="Logo"
          />
                    </li>
                    <li>
                             <img
            className="image-home-preview"
            src={Partners}
            alt="Logo"
          />
                    </li>
                    <li>
                            <img
            className="image-home-preview"
            src={Partners}
            alt="Logo"
          />
                    </li>
                    <li>
                             <img
            className="image-home-preview"
            src={Partners}
            alt="Logo"
          />
                    </li>
                    <li>
                             <img
            className="image-home-preview"
            src={Partners}
            alt="Logo"
          />
                    </li>
                </ul> 
                
            </div>
        </section>
    );
};

export default Clients;  