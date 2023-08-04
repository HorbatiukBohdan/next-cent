import * as React from "react";
import "./style.css";
import Caringimage from "../../images/caring-image.png";
import CaringSecondimage from "../../images/Caring-second-image.png";
import CaringThirdimage from "../../images/caring-third-image.png";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/Right.png";
const Caring = () => {
    return (
        <section id="caring">
            <div className="container">
                <div className="title-caring">
                    <h1 className="system-caring">
                        Caring is the new marketing
                    </h1>
                    <p className="caring-description">The Nexcent blog is the best place to read
                        about the latest membership insights,<br /> trends and more.
                        See who's joining the community, read about how our community<br />
                        are increasing their membership income and lot's more.​</p>
                </div>
                <div class="caring-ifo">
                    <div class="image-container">
                        <img class="image-system" src={Caringimage} alt="Logo" />
                        <div class="text-overlay">
                            <p>Creating Streamlined<br />
                                Safeguarding Processes with<br />
                                OneRen</p>
                            <div className="caring-button-arrow">
                                <Link
                                    className="button-caring"
                                    to="/signup">
                                    Readmore
                                </Link>
                                <img class="arrow" src={Arrow} alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div class="image-container">
                        <img class="image-system" src={CaringSecondimage} alt="Logo" />
                        <div class="text-overlay">
                            <p>What are your safeguarding<br/>
                                 responsibilities and how can<br/>
                                  you manage them?</p>
                            <div className="caring-button-arrow">
                                <Link
                                    className="button-caring"
                                    to="/signup">
                                    Readmore
                                </Link>
                                <img class="arrow" src={Arrow} alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div class="image-container">
                        <img class="image-system" src={CaringThirdimage} alt="Logo" />
                        <div class="text-overlay">
                            <p>Revamping the Membership<br/>
                                 Model with Triathlon<br/>
                                 Australia</p>
                            <div className="caring-button-arrow">
                                <Link
                                    className="button-caring"
                                    to="/signup">
                                    Readmore
                                </Link>
                                <img class="arrow" src={Arrow} alt="Logo" />
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </section>
    );
};

export default Caring;
