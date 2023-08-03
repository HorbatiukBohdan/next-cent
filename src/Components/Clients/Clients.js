import * as React from "react";
import "./style.css";
import Partners from "../../images/Clients-logo.png";

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
                <div className="home-image">
          <img
            className="image-home-preview"
            src={Partners}
            alt="Logo"
          />
                </div>
            </div>
        </section>
    );
};

export default Clients;  