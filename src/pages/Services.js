import React from 'react';
import Navbar from '../components/Navbar';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import '../services.css';
import servicesImg from '../assets/images/silverio-services.jpg';
import gutterExample from '../assets/images/gutter-example.jpg';
import roofExample from '../assets/images/roof-example.jpg';
import basementExample from '../assets/images/basement-example.jpg';

import windowAndDoorOpeningsImg from '../assets/images/services-images/window&dooropenings-img.jpg';
import windowAndDoorOpeningsImg2 from '../assets/images/services-images/windowAndDoorOpeningsImg2.jpg';

import windowAndDoorPansImg from '../assets/images/services-images/windowanddoorpans-img.jpg';
import windowAndDoorPansImg2 from '../assets/images/services-images/windowanddoorpans-img2.jpg';
import windowAndDoorPansImg3 from '../assets/images/services-images/windowanddoorpans-img3.jpg';

import retainingWallsImg from '../assets/images/services-images/retaining-walls-img.jpg';
import retainingWallsImg2 from '../assets/images/services-images/retaining-walls-img2.jpg';
import retainingWallsImg3 from '../assets/images/services-images/retaining-walls-img3.jpg';
import retainingWallsImg4 from '../assets/images/services-images/retaining-walls-img4.jpg';

import decksImg1 from '../assets/images/services-images/decks-srvs-img1.jpg';
import decksImg2 from '../assets/images/services-images/decks-srvs-img2.jpg';
import decksImg3 from '../assets/images/services-images/decks-srvs-img3.jpg';
import decksImg4 from '../assets/images/services-images/decks-srvs-img4.jpg';


import mudsillImg from '../assets/images/services-images/mudsill-img.jpg';

import planterImg from '../assets/images/services-images/planters-img.jpg';

import showerPansImg1 from '../assets/images/services-images/showerpans-img.jpg';
import showerPansImg2 from '../assets/images/services-images/showerpans-img2.jpg';
import showerPansImg3 from '../assets/images/services-images/showerpans-img3.jpg';


import liquidAppliedFlashImg from '../assets/images/services-images/liquidAppliedFlash-img.jpg';
import liquidAppliedFlashImg2 from '../assets/images/services-images/liquidAppliedFlash-img2.jpg';
import liquidAppliedFlashImg3 from '../assets/images/services-images/liquidAppliedFlash-img3.jpg';


import basementImage1 from '../assets/images/services-images/basementimg1.jpg';
import basementImage2 from '../assets/images/services-images/basementimg2.jpg';
import basementImage3 from '../assets/images/services-images/basementimg3.jpg';
import basementImage4 from '../assets/images/services-images/basementimg4.jpg';
import basementImage5 from '../assets/images/services-images/basementimg5.jpg';
import basementImage6 from '../assets/images/services-images/basementimg6.jpg';

import fountainImg1 from '../assets/images/services-images/water-features-img9.jpg';
import fountainImg2 from '../assets/images/services-images/water-features-img3.jpg';
import fountainImg3 from '../assets/images/services-images/water-features-img1.jpg';
import fountainImg4 from '../assets/images/services-images/water-features-img5.jpg';
import fountainImg5 from '../assets/images/services-images/water-features-img7.jpg';
import fountainImg6 from '../assets/images/services-images/water-features-img8.jpg';

import architecturalCaulkingImg1 from '../assets/images/services-images/architectural-caulking-img1.jpg';
import architecturalCaulkingImg2 from '../assets/images/services-images/architectural-caulking-img3.jpg';

import waterResistantBarrierImg from '../assets/images/services-images/water-resistant-barrier-img.jpg';
import waterResistantBarrierImg3 from '../assets/images/services-images/water-resistant-barrier-img3.jpg';
import waterResistantBarrierImg4 from '../assets/images/services-images/water-resistant-barrier-img4.jpg';


import epoxyCoatingsImg from '../assets/images/services-images/epoxy-coatings-img.jpg';
import epoxyCoatingsImg2 from '../assets/images/services-images/epoxy-coatings-img2.jpg';
import epoxyCoatingsImg3 from '../assets/images/services-images/epoxy-coatings-img3.jpg';

import injectionsImg1 from '../assets/images/services-images/injections-img1.jpg';
import injectionsImg2 from '../assets/images/services-images/injections-img2.jpg';




function Services() {

    return (
        <div id="services" >
            <Navbar />
            <section>
                <div className="services-img">
                    <img src={servicesImg} usemap="#workmap" />

                    <map name="workmap">
                        <area shape="circle" coords="270, 163, 20" alt="retainingWalls" href="#retaining-walls-srvs" />
                        <area shape="circle" coords="272, 237, 20" alt="doorAndWindowOpenings" href="#windowanddooropening-srvs" />
                        <area shape="circle" coords="825, 109, 20" alt="doorAndWindowOpenings" href="#windowanddooropening-srvs" />
                        <area shape="circle" coords="641, 49, 20" alt="doorPans" href="#windowanddoorpans-srvs" />
                        <area shape="circle" coords="386, 375, 20" alt="doorPans" href="#windowanddoorpans-srvs" />
                        <area shape="circle" coords="520, 245, 20" alt="liquidAppliedFlashings" href="#liquidAppliedFlashings-srvs" />
                        <area shape="circle" coords="820, 175, 20" alt="deckCoatings" href="#decks-srvs" />
                        <area shape="circle" coords="509, 334, 20" alt="deckCoatings" href="#decks-srvs" />
                        <area shape="circle" coords="670, 250, 20" alt="architecturalCaulking" href="#architecturalCaulking-srvs" />
                        <area shape="circle" coords="835, 271, 20" alt="weatherResistantBarrier" href="#waterResistantBarriers-srvs" />
                        <area shape="circle" coords="610, 437, 20" alt="mudsillWaterproofing" href="#mudsill-srvs" />
                        <area shape="circle" coords="850, 463, 20" alt="epoxyFloors" href="#epoxyCoatings-srvs"/>
                        <area shape="circle" coords="550, 570, 20" alt="showerPansAndWalls" href="#showerpans-srvs" />
                        <area shape="circle" coords="550, 640, 20" alt="crackRepairAndInjections" href="#crackRepairsAndInjections-srvs" />
                        <area shape="circle" coords="233, 650, 20" alt="basementWaterproofing" href="#basement-waterproofing-srvs" />
                    </map>
                </div>

                <div id="in-depth-services" className='row'>


                    <div id="services-nav" className="services-page-nav row">
                        <h1 className='col-md-12'>Browse the map above or explore an option below:</h1>
                        <h1 className="explore-hidden">Explore an option below:</h1>
                        <ul className='col-md-12'>
                            {/* Browse the map above or explore an option below: */}
                            <li><a href="#windowanddooropening-srvs">Window/Door Openings</a></li>
                            <li><a href="#windowanddoorpans-srvs">Window & Door Pans</a></li>
                            <li><a href="#basement-waterproofing-srvs">Basements</a></li>
                            <li><a href="#retaining-walls-srvs">Retaining Walls</a></li>
                            <li><a href="#decks-srvs">Decks</a></li>
                            <li><a href="#mudsill-srvs">Mudsills</a></li>
                            <li><a href="#planters-srvs">Planters</a></li>
                            <li><a href="#fountainandwaterfeatures-srvs">Fountains & Water Features</a></li>
                            <li><a href="#showerpans-srvs">Shower Pans</a></li>
                            <li><a href="#architecturalCaulking-srvs">Architectural Caulking</a></li>
                            <li><a href="#waterResistantBarriers-srvs">Water Resistant Barriers</a></li>
                            <li><a href="#epoxyCoatings-srvs">Epoxy Coatings</a></li>
                            <li><a href="#liquidAppliedFlashings-srvs">Liquid Applied Flashings</a></li>
                            <li><a href="#crackRepairsAndInjections-srvs">Crack Repairs & Injections</a></li>

                        </ul>
                    </div>
                    {/* ///////////////////Window and Door Openings Services */}
                    <div id="windowanddooropening-srvs">
                        <h2>Window/Door Openings</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls1" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={windowAndDoorOpeningsImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={windowAndDoorOpeningsImg2} class="d-block w-100" alt="..." />
                                        </div>


                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls1" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls1" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Even in mild climates, drafty windows and doors can be extremely problematic.
                                        Proper weatherproofing can minimize unnecessary energy consumption and environmental
                                        stress, and contribute to the improved health and happiness of occupants.
                                        Common signs that your home or building needs weatherproofing:
                                        <ul>
                                            <li>Drafts around closed windows or doors</li>
                                            <li>Gaps around window or door trim</li>
                                            <li>Moisture, insects and dust find their way in through holes and gaps around windows or doors</li>
                                        </ul>
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* //////////////////////////// Window and Door Pans Services */}
                    <div id="windowanddoorpans-srvs">
                        <h2>Window and Door Pans</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls2" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={windowAndDoorPansImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={windowAndDoorPansImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={windowAndDoorPansImg3} class="d-block w-100" alt="..." />
                                        </div>


                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Sill pan flashing is critical in preventing water intrusion. The inclusion of sill pan flashings is
                                        becoming a standard practice with window and door manufacturers and installers, Pan flashings have
                                        upturned legs at the interior edge and ends of the rough opening to form a three-sided pan. They are
                                        intended to collect and drain water toward the exterior, including water that may enter through
                                        the window or door unit.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* ///////////////////////////Basement Waterproofing Services */}
                    <div id="basement-waterproofing-srvs">
                        <h2>Basement Waterproofing</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls3" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={basementImage1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage4} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage5} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage6} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Wet and damp basements lead to diminished property values form the loss of
                                        potential storage, and living space, for both homeowners and business owners.
                                        Those wet conditions also give cause for a host of health concerns, which are
                                        associated with wet damp crawl spaces and basements. Homeowners and business
                                        owners benefit from waterproofing their basements and crawl spaces by protecting
                                        their home, their health, and to retain the value of their home or business.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ///////////////////////////Retaining Walls Services */}
                    <div id="retaining-walls-srvs">
                        <h2>Retaining Walls</h2>
                        <div className='row mt-5'>
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls4" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={retainingWallsImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={retainingWallsImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={retainingWallsImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={retainingWallsImg4} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls4" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls4" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Retaining Wall Waterproofing or Post-Applied Waterproofing is
                                        installed because underground Liquid water, harmful contaminated
                                        gas vapors, or water moisture can remain and seep through subterranean
                                        or hillside walls. Water moisture can evaporate on the dry side of the
                                        wall and leave mildew or efflorescence  and damage finishes and the structure itself.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ///////////////////////// Deck Services */}
                    <div id="decks-srvs">
                        <h2>Decks</h2>
                        <div className='row mt-5'>
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls5" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={decksImg1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={decksImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={decksImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={decksImg4} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls5" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls5" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        If you have a deck or balcony attached to your home, you know it is an
                                        awesome way to enjoy the outdoors indoors. But in The PNW you also know
                                        that our local weather can do a lot of damage. Something simple you can
                                        do to help  reduce or even eliminate damage to your deck is giving it
                                        a professional waterproof coating. When a deck is not waterproofed, water
                                        may drip through cracks or other surface, which may inevitably decay the
                                        surrounding area. In the long run, this will be quite costly to fix. In
                                        order to avoid this, and to keep your deck in the best shape, waterproofing
                                        is key.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ////////////////////////////// Mudsill Waterproofing Services */}
                    <div id="mudsill-srvs">
                        <h2>Mudsill Waterproofing</h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <Fade left>
                                    <img src={mudsillImg}></img>
                                </Fade>
                            </div>
                            <Fade right>
                                <div className='col-md-6 services-detail-right'>
                                    <p>
                                        Sometimes, contractors will construct a home with the sill plate close to the
                                        adjacent grade. Making matters worse, landscapers commonly raise the grounds
                                        around a structure with mulch and planting beds. Occasionally, people will
                                        also make the horrendous mistake of trying to correct basement leaks by adding
                                        soil around their house to create a pitch.
                                        <br></br>
                                        By doing this, they bring the soil closer to the wood sill plate. If the wood
                                        structure comes in contact with the soil, rot and termite infestation may develop.
                                        At this point, if the bottom of the house is not restored with sill plate
                                        waterproofing, structural failure can ensue.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* /////////////////////////////// Planters Services */}
                    <div id="planters-srvs">
                        <h2>Planters</h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <Fade left>
                                    <img src={planterImg}></img>
                                </Fade>
                            </div>
                            <Fade right>
                                <div className='col-md-6 services-detail-right'>
                                    <p>
                                        The presence of concrete planter boxes can spruce up almost any garden or yard and
                                        is a great structure to house and contain your plants. How you are sealing or
                                        waterproofing concrete planter boxes will help to maximize the service life
                                        of the planter box. Waterproofing your concrete planter box is highly
                                        recommended to ensure your plants remain healthy. Waterproofing avoids
                                        the leaching of highly alkaline salts into the soil in the planter.
                                        The alkalinity of the soil may stunt the growth of some plants.
                                        Also, some masonry blocks and bricks are very porous and the soil
                                        may dry out too quickly.

                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* ////////////////////////////// Fountains/Water Features Services */}
                    <div id="fountainandwaterfeatures-srvs">
                        <h2>Fountains and Water Features</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls6" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={fountainImg6} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={fountainImg5} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={fountainImg4} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={fountainImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={fountainImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={fountainImg1} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls6" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls6" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Commonly a centerpiece of pedestrian plazas and architectural hardscapes
                                        on commercial properties, water features can greatly enhance the aesthetics
                                        and atmosphere of the areas in which they are used.  They do, however,
                                        present unique challenges that must be effectively managed in order to
                                        ensure that these otherwise pleasing property enhancements do not become
                                        a detracting feature of the property.  If not properly maintained,
                                        a water feature’s aesthetic qualities can quickly diminish.
                                        More significantly, it is important that water features
                                        not be allowed to become a source of unwanted water absorption
                                        or infiltration.  Not only can these conditions lead to unsightly
                                        aesthetics in the form of biological growth or deterioration of
                                        the façade (efflorescence, spalling, or bubbling of coatings),
                                        but also it can lead to structural deterioration of the water
                                        feature itself or adjacent areas of the property or structure.

                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ////////////////////////////// Shower Pans Services */}
                    <div id="showerpans-srvs">
                        <h2>Shower Pans</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls7" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={showerPansImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={showerPansImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={showerPansImg1} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Waterproofing is one of the single most important things that must be done correctly when building,
                                        renovating or repairing a shower in your home. The waterproof membrane stops moisture and water
                                        from seeping into the walls or floors. Not having this done correctly can potentially lead to
                                        tens of thousands of dollars in costs later down the line. Not to mention save you the stress
                                        of possibly having to rebuild a major part of your home.
                                        <br></br>
                                        There are many ways that leaks can appear in your shower if the waterproofing
                                        is done incorrectly, the shower niche being one major example. A lack of
                                        waterproof membrane that is not applied properly may cause the following:

                                        <ul>
                                            <li>Water damage and swelling in walls and floors</li>
                                            <li>Tiles to become loose, increasing the risk of more leaks</li>
                                            <li>Structural damage to the home</li>
                                        </ul>
                                        All of these issues can arise at any time, even if your shower is brand new.
                                        These waterproofing mistakes can cost you tens of thousands of dollars in home repairs,
                                        especially if you are unaware of the leak for a long time. Therefore, it is extremely
                                        important that you ensure that your shower is waterproofed correctly.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ///////////////////////////////////// Architectural Caulking */}
                    <div id="architecturalCaulking-srvs">
                        <h2>Architectural Caulking</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls8" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={architecturalCaulkingImg1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={architecturalCaulkingImg2} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls8" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls8" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Architectural sealants are applied to the exterior of a building to prevent
                                        any outside elements from entering the structure. Architectural sealants must
                                        be able to maintain an impassible seal while also being movable between similar
                                        and different substrates. These architectural sealants must also be resistant
                                        to deterioration due to rain, ultraviolet light and any other elements to
                                        maintain an appealing appearance over time.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* ///////////////////////////////// Water Resistant Barriers  */}
                    <div id="waterResistantBarriers-srvs">
                        <h2>Water Resistant Barriers</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls9" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={waterResistantBarrierImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={waterResistantBarrierImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={waterResistantBarrierImg4} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls9" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls9" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Weather-resistant barriers play a crucial role in the protection and energy-efficiency
                                        of today’s commercial buildings. Weather-resistant barriers can both protect a
                                        structure’s walls from air and water infiltration and keep moisture from accumulating
                                        in the wall systems. High quality weather-resistant barriers are not only
                                        air-resistant, but also prevent moisture and vapor. This can ensure that
                                        a building remains energy-efficient and protected.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* //////////////////////////////// Epoxy Coatings */}
                    <div id="epoxyCoatings-srvs">
                        <h2>Epoxy Coatings</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls10" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={epoxyCoatingsImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={epoxyCoatingsImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={epoxyCoatingsImg3} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls10" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls10" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        The floors are one of the most important, yet often discounted, elements of any residential
                                        space. Not only that the floors add an aesthetic element to your area, these also ensure
                                        your safety and improve the productivity of your day-to-day tasks. As such, it is a must
                                        that you opt for a flooring solution that can withstand the hustle and bustle of your
                                        space’s daily activities. One of the sought after flooring solutions is epoxy flooring.
                                        This incredible surface gives tons of benefits, which is why more people are switching
                                        to Epoxy Floor Coatings. Which are durable, easy to maintain, unique and impressive!
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* /////////////////////////// Liquid Applied Flashings  */}
                    <div id="liquidAppliedFlashings-srvs">
                        <h2>Liquid Applied Flashings </h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls11" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={liquidAppliedFlashImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={liquidAppliedFlashImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={liquidAppliedFlashImg3} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls11" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls11" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Homeowners want energy-efficient, durable, and healthy homes with low utility,
                                        maintenance, and repair costs. Achieving this requires a tight building envelope
                                        that keeps out air and moisture. Liquid-applied flashings will contribute
                                        significantly towards achieving an air- and moisture-tight house by
                                        filling all the voids and cracks around windows, doors, and other
                                        exterior penetrations.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* //////////////////////////// Crack Repairs/Injections  */}
                    <div id="crackRepairsAndInjections-srvs">
                        <h2>Crack Repair / Injections</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-13 d-flex justify-content-center">
                                <div id="carouselControls13" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={injectionsImg1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={injectionsImg2} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls13" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls13" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Foundation issues can detract from your enjoyment of your home and can even reduce its value over time.
                                        We can help you resolve foundation problems quickly to protect your home and your property against
                                        the negative effects of cracks and damage. By addressing these issues quickly and effectively, you
                                        can ensure the safest and healthiest environment for yourself and your family. Injecting urethane
                                        into these cracks can seal them and prevent water from intruding into your home. This can help you
                                        to avoid issues with mold, mildew and water damage that can have serious health effects for your
                                        family.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <a href="#services-nav" className="back-to-top">
                        <i class="fa-solid fa-angle-up arrow"></i>
                        Back to top
                        <i class="fa-solid fa-angle-up arrow"></i>
                    </a>
                </div>


                {/* modal RETAINING WALLS */}
                {/* <div class="modal fade" id="retainingWallsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Retaining Walls</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={retainingWallsImg} className="modal-img"></img>
                                <p>Retaining Wall Waterproofing or Post-Applied Waterproofing is essential to your project to prevent damaged
                                    finishes or corruption of the structure itself. We can take care of it. 
                                </p>
                                <a href="#retaining-walls-srvs">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* modal DOOR AND WINDOW OPENINGS */}
                {/* <div class="modal fade" id="doorAndWindowOpeningsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Door/Window Openings</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={windowAndDoorOpeningsImg2} className="modal-img"></img>
                                <p>Even in mild climates, drafty windows and doors can be extremely problematic.
                                    With our skills, we can protect these gaps to avoid any future headaches. 
                                </p>
                                <a href="#windowanddooropening-srvs">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal DOOR PANS */}
                {/* <div class="modal fade" id="doorPansModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Door Pans</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={windowAndDoorPansImg2} className="modal-img"></img>
                                <p>Sill pan flashing is critical in preventing water intrusion.</p>
                                <a href="#windowanddoorpans-srvs">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                
                {/* <div class="modal fade" id="doorPansModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="#windowanddoorpans-srvs">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal LIQUID APPLIED FLASHINGS */}
                {/* <div class="modal fade" id="liquidAppliedFlashingsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal DECK COATINGS */}
                {/* <div class="modal fade" id="deckCoatingsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal ARCHITECTURAL CAULKING MODAL */}
                {/* <div class="modal fade" id="architecturalCaulkingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal WEATHER RESISTANT BARRIER */}
                {/* <div class="modal fade" id="weatherResistantBarrierModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal MUDSILL WATERPROOFING */}
                {/* <div class="modal fade" id="mudsillWaterproofingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal EPOXY FLOORS */}
                {/* <div class="modal fade" id="epoxyFloorsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal SHOWER PANS AND WALLS */}
                {/* <div class="modal fade" id="showerPansAndWallsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal CRACK REPAIR AND INJECTIONS */}
                {/* <div class="modal fade" id="crackRepairAndInjectionsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal BASEMENT WATERPROOFING */}
                {/* <div class="modal fade" id="basementWaterproofingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section >
        </div >
    )
}

export default Services; 