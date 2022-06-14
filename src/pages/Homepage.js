import React from 'react';
import '../homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import rainDropImg from '../assets/images/water-drops.jpg'

function Homepage() {
    return (
        <main>
            {/* <div className="hero">
                <img src={rainDropImg} className="hero-img"></img>
            </div> */}
            <div class="bg-img">
                <div class="container">
                <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">DryZone</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> {/*CHANGE ICON LATER*/}
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/about">About</a>
                        <a class="nav-link" href="/services">Services</a>
                        <a class="nav-link" href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
                </div>
            </div>
        </main>
    );
}

export default Homepage;