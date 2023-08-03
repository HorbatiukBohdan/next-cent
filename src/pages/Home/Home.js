import * as React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import imagePreview from "../../images/Home.png";


const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="title">
          <h1 className="home-title">Lessons and insights</h1>
          <h1 className="second-home-title"> from 8 years</h1>
          <p className="home-description">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Link
            className="button-reg"
            to="/signup">
            Register
          </Link>
        </div>
        <div className="home-image">
          <img
            className="image-home-preview"
            src={imagePreview}
            alt="Logo"
          />
        </div>




      </div>

    </section>



  );

};


export default Home;