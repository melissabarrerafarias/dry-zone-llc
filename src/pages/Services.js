import React from 'react';
import Navbar from '../components/Navbar';
import Fade from 'react-reveal/Fade';
import '../services.css';
import servicesImg from '../assets/images/silverio-services.jpg'

function Services() {

    return (
        <div id="services" >
            <Navbar />
            <section>
                <div className="services-img">
                    <img src={servicesImg} usemap="#workmap" />

                    <map name="workmap">
                        <area shape="circle" coords="272, 166, 15" alt="Computer" href="https://www.youtube.com/" />
                        <area shape="circle" coords="275, 240, 15" alt="Phone" href="https://www.buzzfeed.com/" />
                        {/* <area shape="circle" coords="337,300,44" alt="Coffee" href="https://www.instagram.com/" /> */}
                    </map>
                    {/* <div className="services-img-title">
                                <p>Click on a red dot for more information</p>
                            </div> */}
                </div>
            </section >
        </div >
    )
}

export default Services; 