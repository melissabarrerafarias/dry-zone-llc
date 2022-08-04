import React from 'react';
import Navbar from '../components/Navbar';
import Fade from 'react-reveal/Fade';
import '../services.css';
import servicesImg from '../assets/images/silverio-services.jpg'; 
import gutterExample from '../assets/images/gutter-example.jpg';

function Services() {

    return (
        <div id="services" >
            <Navbar />
            <section>
                <div className="services-img">
                    <img src={servicesImg} usemap="#workmap" />

                    <map name="workmap">
                        <area shape="circle" coords="272, 166, 15" alt="Computer" data-bs-toggle="modal" data-bs-target="#gutter" />
                        <area shape="circle" coords="275, 240, 15" alt="Phone" data-bs-toggle="modal" data-bs-target="#roof" />
                        {/* <area shape="circle" coords="337,300,44" alt="Coffee" href="https://www.instagram.com/" /> */}
                    </map>
                    {/* <div className="services-img-title">
                                <p>Click on a red dot for more information</p>
                            </div> */}
                </div>


                {/* modal gutter */}
                <div class="modal fade" id="gutter" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Gutter</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Here is the gutter thing
                                <img src={gutterExample} className="modal-img"></img>
                                Blah Blah Blah more gutters. If you need this call me thanks. 
                                Blah Blah Blah more gutters. If you need this call me thanks. 
                                Blah Blah Blah more gutters. If you need this call me thanks. 
                                Blah Blah Blah more gutters. If you need this call me thanks. 
                                Blah Blah Blah more gutters. If you need this call me thanks. 
                                Blah Blah Blah more gutters. If you need this call me thanks. 
                            </div>
                            <a href="/about">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* modal roofs */}
                <div class="modal fade" id="roof" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Here is the roof thing
                            </div>
                            <a href="/">Learn More</a>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Services; 