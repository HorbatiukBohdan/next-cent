import * as React from "react";
import "./style.css";
import ArrowWhite from "../../assets/icons/Right-white.png";
import { Link } from "react-router-dom";

const Pellentesque = () => {
    return (
        <section id="pellentesque">
            <div className="container container-pellentesque">
            <h1 className="title-pellentesque">Pellentesque suscipit<br />
                fringilla libero eu.</h1>
            <div className="pellentesque-button-arrow">
                <Link
                    className="button-footer"
                    to="/signup">
                    Get a Demo
                </Link>
                <img class="arrow" src={ArrowWhite} alt="Logo" />
            </div>
            </div>
        </section>
    );
};
export default Pellentesque;