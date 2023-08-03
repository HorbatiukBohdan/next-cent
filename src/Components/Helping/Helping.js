import * as React from "react";
import "./style.css";
import peopleicon from "../../assets/icons/people-icon.png";

const Helping = () => {
  return (
    <section id="helping">
      <div className="container">
        <div className="helping-info">
          <h1 className="helping-title">Helping a local </h1>
          <h1 className="second-helping-title">business reinvent itself</h1>
          <p className="helping-description">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="helping-statistics">
          <div className="helping-statistics-info">
            <img className="logo" src={peopleicon} alt="Logo" />
            <div>
                <h1>2,245,341</h1>
                <p>Members</p>
            </div>
          </div>
          <div className="helping-statistics-info">
            <img className="logo" src={peopleicon} alt="Logo" />
            <div>
                <h1>2,245,341</h1>
                <p>Members</p>
            </div>
          </div>
          <div className="helping-statistics-info">
            <img className="logo" src={peopleicon} alt="Logo" />
            <div>
                <h1>2,245,341</h1>
                <p>Members</p>
            </div>
          </div>
          <div className="helping-statistics-info">
            <img className="logo" src={peopleicon} alt="Logo" />
            <div>
                <h1>2,245,341</h1>
                <p>Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Helping;
