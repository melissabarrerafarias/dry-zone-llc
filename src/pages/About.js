import React from 'react';
import Fade from 'react-reveal/Fade';

import Navbar from '../components/Navbar';
import silverio from '../assets/images/silverio.jpeg'
import '../about.css';
function About() {
    return (
        <div id="about">
            <Navbar />
            <section id="abt-dzone">
                <Fade left>
                    <h1>About Dry Zone</h1>
                </Fade>
                <div className="row">
                    <div className="col-md-6 owner-img">
                        <img src={silverio}/>
                    </div>

                    <div className="col-md-6">

                    </div>
                </div>

            </section>
        </div>

    )
}

export default About; 