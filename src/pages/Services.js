import React from 'react';
import Navbar from '../components/Navbar';
import Fade from 'react-reveal/Fade';
import '../services.css';
import servicesImg from '../assets/images/silverio-services.jpg';
import gutterExample from '../assets/images/gutter-example.jpg';
import roofExample from '../assets/images/roof-example.jpg';
import basementExample from '../assets/images/basement-example.jpg';

import windowAndDoorOpeningsImg from '../assets/images/services-images/window&dooropenings-img.jpg';
import windowAndDoorPansImg from '../assets/images/services-images/windowanddoorpans-img.jpg';
import retainingWallsImg from '../assets/images/services-images/retaining-walls-img.jpg';
import decksImg1 from '../assets/images/services-images/decks-srvs-img1.jpg';
import decksImg2 from '../assets/images/services-images/decks-srvs-img2.jpg';
import mudsillImg from '../assets/images/services-images/mudsill-img.jpg';
import planterImg from '../assets/images/services-images/planters-img.jpg';
import showerPansImg1 from '../assets/images/services-images/showerpans-img.jpg';
import showerPansImg2 from '../assets/images/services-images/showerpans-img2.jpg';
import liquidAppliedFlashImg from '../assets/images/services-images/liquidAppliedFlash-img.jpg';


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

                
                    <div className="services-page-nav row">
                    <h1 className='col-md-12'>Browse the map above or explore an option below:</h1>
                        <ul className='="col-md-12'>
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
                            <div className='col-md-6 services-detail-left'>
                                <img src={windowAndDoorOpeningsImg}></img>
                            </div>
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Even in mild climates, drafty windows and doors can be extremely problematic.
                                    Proper weatherproofing can minimize unnecessary energy consumption and environmental
                                    stress, and contribute to the improved health and happiness of occupants. Common signs
                                    that your home or building needs weatherproofing:
                                    <ul>
                                        <li>Drafts around closed windows or doors</li>
                                        <li>Gaps around window or door trim</li>
                                        <li>Moisture, insects and dust find their way in through holes and gaps around windows or doors</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* //////////////////////////// Window and Door Pans Services */}
                    <div id="windowanddoorpans-srvs">
                        <h2>Window and Door Pans</h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <img src={windowAndDoorPansImg}></img>
                            </div>
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Sill pan flashing is recognized by both the design profession and the building
                                    industry as critical in preventing water intrusion. The inclusion of sill pan flashings
                                    is increasingly considered standard practice with window and door manufacturers and
                                    installers, Pan flashings have upturned legs at the interior edge and ends of the rough
                                    opening to form a three-sided pan. They are intended to collect and drain water toward
                                    the exterior, including water that may enter through the window unit.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ///////////////////////////Basement Waterproofing Services */}
                    <div id="basement-waterproofing-srvs">
                        <h2>Basement Waterproofing</h2>
                        <div className='row mt-5'>
                            {/* <div className='col-md-6 services-detail-left'>
                                <img src={windowAndDoorPansImg}></img>
                            </div> */}
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Wet and damp basements lead to diminished property values form the loss of potential
                                    storage, and living space, for both homeowners and business owners. Those wet conditions
                                    also give cause for a host of health concerns, which are associated with wet damp crawl
                                    spaces and basements. Homeowners and business owners benefit from waterproofing their
                                    basements and crawl spaces by protecting their home, their health, and to retain the
                                    value of their home or business.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* ///////////////////////////Retaining Walls Services */}
                    <div id="retaining-walls-srvs">
                        <h2>Retaining Walls</h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <img src={retainingWallsImg}></img>
                            </div>
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Retaining Wall Waterproofing or Post-Applied Waterproofing is installed because underground
                                    Liquid water, harmful contaminated gas vapors, or water moisture can remain and seep
                                    through subterranean or hillside walls. Water moisture can evaporate on the dry side
                                    of the wall and leave mildew or Efflorescence.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* ///////////////////////// Deck Services */}
                    <div id="decks-srvs">
                        <h2>Decks</h2>
                        <div className='row mt-5'>
                            <div className='col-md-12 '>
                                <img src={decksImg2}></img>
                            </div>


                            <div className='col-md-12 srvs-center-description'>
                                <p>
                                    If you have or plan to have a deck or balcony attached to your home, you know it can be
                                    an awesome way to bring the outdoors indoors. But in The PNW you also  know that our
                                    local weather can do a lot of damage. Something simple you can do to help  reduce or
                                    even eliminate damage to your deck is giving it a professional waterproof coating. When
                                    a deck is not waterproofed, water may drip through cracks or other surface, which may
                                    inevitably decay the surrounding area. In the long run, this will be quite costly to fix.
                                    In order to avoid this, and to keep your deck in the best shape, waterproofing is key.
                                </p>
                            </div>

                            <div className='col-md-12 '>
                                <img src={decksImg1}></img>
                            </div>
                        </div>
                    </div>


                    {/* ////////////////////////////// Mudsill Waterproofing Services */}
                    <div id="mudsill-srvs">
                        <h2>Mudsill Waterproofing</h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <img src={mudsillImg}></img>
                            </div>
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Sometimes, contractors will construct a home with the sill plate close to the
                                    adjacent grade. Making matters worse, landscapers commonly raise the grounds around a
                                    structure with mulch and planting beds. Occasionally, people will also make the horrendous
                                    mistake of trying to correct basement leaks by adding soil around their house to create a pitch.
                                    <br></br>
                                    By doing this, they bring the soil closer to the wood sill plate. If the wood structure
                                    comes in contact with the soil, rot and termite infestation may develop. At this point,
                                    if the bottom of the house is not restored with sill plate
                                    waterproofing, structural failure can ensue.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* /////////////////////////////// Planters Services */}
                    <div id="planters-srvs">
                        <h2>Planters</h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <img src={planterImg}></img>
                            </div>
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    The presence of concrete planter boxes can spruce up almost any garden or yard and is a
                                    great structure to house and contain your plants. How you are sealing or waterproofing
                                    concrete planter boxes will help to maximize the service life of the planter box.
                                    Waterproofing your concrete planter box is highly recommended to ensure your plants
                                    remain healthy. Waterproofing avoids the leaching of highly alkaline salts into the
                                    soil in the planter. The alkalinity of the soil may stunt the growth of some plants.
                                    Also, some masonry blocks and bricks are very porous and the soil may dry out too quickly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ////////////////////////////// Fountains/Water Features Services */}
                    <div id="fountainandwaterfeatures-srvs">
                        <h2>Fountains and Water Features</h2>
                        <div className='row mt-5'>
                            {/* <div className='col-md-6 services-detail-left'>
                                <img src={planterImg}></img>
                            </div> */}
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Commonly a centerpiece of pedestrian plazas and architectural hardscapes on
                                    commercial properties, water features can greatly enhance the aesthetics and
                                    atmosphere of the areas in which they are used.  They do, however, present unique
                                    challenges that must be effectively managed in order to ensure that these otherwise
                                    pleasing property enhancements do not become a detracting feature of the property.
                                    If not properly maintained, a water feature’s aesthetic qualities can quickly
                                    diminish.  More significantly, it is important that water features not be
                                    allowed to become a source of unwanted water absorption or infiltration
                                    .  Not only can these conditions lead to unsightly aesthetics in the form
                                    of biological growth or deterioration of the façade (efflorescence, spalling,
                                    or bubbling of coatings), but also it can lead to structural deterioration
                                    of the water feature itself or adjacent areas of the property or structure.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* ////////////////////////////// Shower Pans Services */}
                    <div id="showerpans-srvs">
                        <h2>Shower Pans</h2>
                        <div className='row mt-5'>
                            <div className='col-md-12'>
                                <img src={showerPansImg2}></img>
                            </div>
                            <div className='col-md-12 srvs-center-description'>
                                <p>
                                    Waterproofing is one of the single most important things that must be done correctly
                                    when building, renovating or repairing a shower in your home. The waterproof membrane
                                    stops moisture and water from seeping into the walls or floors. Not having this done
                                    correctly can potentially lead to tens of thousands of dollars in costs later down
                                    the line. Not to mention save you the stress of possibly having to rebuild a major
                                    part of your home.
                                    <br></br>
                                    There are many ways that leaks can appear in your shower if the waterproofing is done
                                    incorrectly, the shower niche being one major example. A lack of waterproof membrane
                                    that is not applied properly may cause the following:
                                    <ul>
                                        <li>Water damage and swelling in walls and floors</li>
                                        <li>Tiles become loose, increading the risk of more leaks</li>
                                        <li>Structural damage to the home</li>
                                    </ul>
                                    All of these issues can arise at any time, even if your shower is brand new.
                                    These waterproofing mistakes can cost you tens of thousands of dollars in home repairs,
                                    especially if you are unaware of the leak for a long time. Therefore, it is extremely
                                    important that you ensure that your shower is waterproofed correctly.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <img src={showerPansImg1}></img>
                            </div>
                        </div>
                    </div>


                    {/* ///////////////////////////////////// Architectural Caulking */}
                    <div id="architecturalCaulking-srvs">
                        <h2>Architectural Caulking</h2>
                        <div className='row mt-5'>
                            {/* <div className='col-md-6 services-detail-left'>
                                <img src={planterImg}></img>
                            </div> */}
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Architectural sealants are applied to the exterior of a building to prevent any
                                    outside elements from entering the structure. Architectural sealants must be able
                                    to maintain an impassible seal while also being movable between similar and different
                                    substrates. These architectural sealants must also be resistant to deterioration due
                                    to rain, ultraviolet light and any other elements to maintain an appealing appearance
                                    over time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ///////////////////////////////// Water Resistant Barriers  */}
                    <div id="waterResistantBarriers-srvs">
                        <h2>Water Resistant Barriers</h2>
                        <div className='row mt-5'>
                            {/* <div className='col-md-6 services-detail-left'>
                                <img src={planterImg}></img>
                            </div> */}
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Weather-resistant barriers play a crucial role in the protection and energy-efficiency
                                    of today’s commercial buildings. Weather-resistant barriers can both protect a
                                    structure’s walls from air and water infiltration and keep moisture from accumulating
                                    in the wall systems. High quality weather-resistant barriers are not only air-resistant,
                                    but also prevent moisture and vapor. This can ensure that a building remains
                                    energy-efficient and protected.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* //////////////////////////////// Epoxy Coatings */}
                    <div id="epoxyCoatings-srvs">
                        <h2>Epoxy Coatings</h2>
                        <div className='row mt-5'>
                            {/* <div className='col-md-6 services-detail-left'>
                                <img src={planterImg}></img>
                            </div> */}
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    The floors are one of the most important, yet often discounted, elements of any
                                    residential space. Not only that the floors add an aesthetic element to your area,
                                    these also ensure your safety and improve the productivity of your day-to-day tasks.
                                    As such, it is a must that you opt for a flooring solution that can withstand the
                                    hustle and bustle of your space’s daily activities. One of the sought after
                                    flooring solutions is epoxy flooring. This incredible surface gives tons of
                                    benefits, which is why more people are switching to Epoxy Floor Coatings.
                                    Which are durable, easy to maintain, unique and impressive!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* /////////////////////////// Liquid Applied Flashings  */}
                    <div id="liquidAppliedFlashings-srvs">
                        <h2>Liquid Applied Flashings </h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <img src={liquidAppliedFlashImg}></img>
                            </div>
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Homeowners want energy-efficient, durable, and healthy homes with low utility,
                                    maintenance, and repair costs. Achieving this requires a tight building envelope
                                    that keeps out air and moisture. Liquid-applied flashings will contribute significantly
                                    towards achieving an air- and moisture-tight house by filling all the voids and cracks
                                    around windows, doors, and other exterior penetrations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* //////////////////////////// Crack Repairs/Injections  */}
                    <div id="crackRepairsAndInjections-srvs">
                        <h2>Crack Repair / Injections</h2>
                        <div className='row mt-5'>
                            {/* <div className='col-md-6 services-detail-left'>
                                <img src={planterImg}></img>
                            </div> */}
                            <div className='col-md-6 services-detail-right'>
                                <p>
                                    Foundation issues can detract from your enjoyment of your home and can even reduce
                                    its value over time. We can help you resolve foundation problems quickly to protect
                                    your home and your property against the negative effects of cracks and damage. By
                                    addressing these issues quickly and effectively, you can ensure the safest and
                                    healthiest environment for yourself and your family.Injecting urethane into these
                                    cracks can seal them and prevent water from intruding into your home. This can
                                    help you to avoid issues with mold, mildew and water damage that can have serious
                                    health effects for your family.
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
                                Lorem Ipsum
                                <img src={gutterExample} className="modal-img"></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur
                                    e dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum</p>
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
                                <p>Lorem Ipsum</p>
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
                                <p>Lorem Ipsum</p>
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