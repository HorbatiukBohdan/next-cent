import * as React from "react";
import "./style.css";
import Systemimage from "../../images/system.png";

const System = () => {
  return (
    <section id="system">
      <div className="container">
        <div className="title-system">
          <h1 className="system-title">
            Manage your entire community<br/>
             in a single system
          </h1>
          <p className="system-description">Who is Nextcent suitable for?</p>
        </div>
        <div className="system-info">
          <div className="system-table">
            <img className="image-system" src={Systemimage} alt="Logo" />
            <h1>Membership Organisations</h1>
            <p className="system-description">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="system-table">
            <img className="image-system" src={Systemimage} alt="Logo" />
            <h1>Membership Organisations</h1>
            <p className="system-description">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="system-table">
            <img className="image-system" src={Systemimage} alt="Logo" />
            <h1>Membership Organisations</h1>
            <p className="system-description">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default System;
