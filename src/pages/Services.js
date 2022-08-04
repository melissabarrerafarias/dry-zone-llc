import React from 'react';
import Navbar from '../components/Navbar';
import Fade from 'react-reveal/Fade';
import '../services.css';
import servicesImg from '../assets/images/silverio-services.jpg';
import gutterExample from '../assets/images/gutter-example.jpg';
import roofExample from '../assets/images/roof-example.jpg';
import basementExample from '../assets/images/basement-example.jpg';

function Services() {

    return (
        <div id="services" >
            <Navbar />
            <section>
                <div className="services-img">
                    <img src={servicesImg} usemap="#workmap" />

                    <map name="workmap">
                        <area shape="circle" coords="272, 167, 20" alt="Computer" data-bs-toggle="modal" data-bs-target="#gutterModal" />
                        <area shape="circle" coords="275, 240, 20" alt="Phone" data-bs-toggle="modal" data-bs-target="#roofModal" />
                        <area shape="circle" coords="388, 390, 20" alt="Phone" data-bs-toggle="modal" data-bs-target="#basementModal" />
                    </map>
                </div>

                <div id="in-depth-services" className='row'>

                    <h1 className='col-md-12'>Browse the map above or explore an option below</h1>
                    <div className="col-md-12 services-page-nav">
                        <ul>
                            <li>- <a href="#gutters">Gutters</a></li>
                            <li>- <a href="#roof">Roof</a></li>
                            <li>- <a href="/home">Membrane</a></li>
                            <li>- <a href="/home">Basements</a></li>
                            <li>- <a href="/home">Lawns</a></li>
                            <li>- <a href="/home">Gates</a></li>
                        </ul>
                    </div>

                    <div id="gutters">
                        <h2>Gutters</h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <img src={gutterExample}></img>
                            </div>
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="roof">
                        <h2>Roof</h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <img src={roofExample}></img>
                            </div>
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>


                {/* modal gutter */}
                <div class="modal fade" id="gutterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Gutter</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Here is the gutter thing
                                <img src={gutterExample} className="modal-img"></img>
                                <p>Blah Blah Blah more gutters. If you need this call me thanks.
                                    Blah Blah Blah more gutters. If you need this call me thanks.
                                    Blah Blah Blah more gutters. If you need this call me thanks.</p>
                                <a href="#gutters">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal roofs */}
                <div class="modal fade" id="roofModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Here is the roof thing</p>
                                <img src={roofExample} className="modal-img"></img>
                                <a href="#roof">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="basementModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Here is the basement thing</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Services; 