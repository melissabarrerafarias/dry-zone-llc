import React from 'react';
import '../homepage.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

// import rainDropImg from '../assets/images/water-drops.jpg'
import constructionWorker from '../assets/images/construction-worker.jpg';

function Homepage() {
    return (
        <main id="homepage-main">
            {/* <div className="hero">
                <img src={rainDropImg} className="hero-img"></img>
            </div> */}
            {/* hero */}
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
                <Fade top>
                    <div className="container2">
                        <p className="hero-title">{"WATERPROOFING &"}</p>
                        <p className="hero-title">{"CONCRETE COATINGS LLC"}</p>
                        <div className="hero-btns">
                            <button className="hero-btn hbtn1"><Link to="/contact">Contact</Link></button>
                            <button className="hero-btn hbtn2"><Link to="/about">About</Link></button>
                        </div>
                    </div>
                </Fade>
            </div>
            {/* main page */}
            <section id="what-i-do" className="row">
                <div className="col-md-6 worker-div">
                    <img src={constructionWorker} className="worker-img"></img>
                </div>
                <div className="col-md-6">
                    <h1>What I Do</h1>
                    <div className="do-expln">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="do-examples">
                        <ul>
                            <li><span>Waterproofing basements</span></li>
                            <li><span>Applying Cold Membrane on garage floors</span></li>
                            <li><span>Sealing gutters with glue</span></li>
                        </ul>
                    </div>
                    <div className="read-more">
                        <button><a href="/services">Read More</a></button>
                    </div>
                </div>
            </section>

            <section id="what-people-are-saying">
                <h1>What People Are Saying</h1>
                <div className="row">
                    <div className="col-md-4">
                        <p className="quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam -Bob
                        </p>
                    </div>

                    <div className="col-md-4">
                        <p className="quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. - Samuel
                        </p>
                    </div>


                    <div className="col-md-4">
                        <p className="quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. - Veronica
                        </p>
                    </div>

                </div>
            </section>

            <section id="contact-me">
                <h1>Contact Me</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-area">
                            <form>
                            <p>Have a project in mind? Describe what you need and I'll get back to you.</p>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="Full Name" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="email" placeholder="Email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <textarea type="text" placeholder="Project Description" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6">

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Homepage;