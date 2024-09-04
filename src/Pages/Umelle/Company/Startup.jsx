import React, {lazy} from 'react';

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import Atropos from "atropos/react";
import {m} from 'framer-motion';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import { ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import ProgressBar from "../../../Components/ProgressBar/ProgressBar";
import {ProgressBarData02} from "../../../Components/ProgressBar/ProgressBarData";
import Overlap from '../../../Components/Overlap/Overlap';
import ProcessStep from '../../../Components/ProcessStep/ProcessStep';
import {ProcessStepData06} from '../../../Components/ProcessStep/ProcessStepData';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import {
    TestimonialsCarouselData1
} from "../../../Components/TestimonialCarousel/TestimonialsCarouselData";
import TestimonialsCarousel01 from "../../../Components/TestimonialCarousel/TestimonialsCarousel01";
import SEO from "../../../Components/Umelle/SEO";
import { Parallax } from 'react-scroll-parallax';


const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))


const SideButtons = lazy(() => import("../../../Components/SideButtons"))

const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const HomeStartupPage = (props) => {
    ScrollToAnchor();
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='Umelle Software | Quality-driven Custom Software Development'
            description='It takes a combination of teamwork and technical chops to deliver superior software. Our team comes to the table with both while offering complete visibility over our processes.'
            name='UMELLE'
            type='article'/>
        {/*SEO Ends*/}

        {/* Header Start */}
        <Header topSpace={{md: true}} type="reverse-scroll">
            <HeaderNav fluid="fluid" theme="light" expand="lg"
                       className="py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0">
                <Col lg={2} sm={6} xs={"auto"} className="mr-auto ps-0">
                    <Link aria-label="header logo" className="flex items-center" to="/">
                        <Navbar.Brand className="inline-block p-0 m-0">
                            <img className="default-logo" width="111" height="36"
                                 src='/assets/img/webp/umelle-logo.webp'
                                 data-rjs='/assets/img/webp/umelle-logo.webp' alt='logo'/>
                            <img className="alt-logo" width="111" height="36"
                                 src='/assets/img/webp/umelle-logo.webp'
                                 data-rjs='/assets/img/webp/umelle-logo.webp' alt='logo'/>
                            <img className="mobile-logo" width="111" height="36"
                                 src='/assets/img/webp/umelle-logo.webp'
                                 data-rjs='/assets/img/webp/umelle-logo.webp' alt='logo'/>
                        </Navbar.Brand>
                    </Link>
                </Col>
                <Navbar.Toggle className="order-last md:ml-[17px] w-[25px] min-h-[15px] inline-block align-middle">
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                </Navbar.Toggle>
                <Navbar.Collapse className="justify-center col-auto col-lg-8">
                    <Menu {...props} />
                </Navbar.Collapse>
                <Col lg={2} xs={"auto"} className="justify-end pe-0 flex items-center"></Col>
            </HeaderNav>
        </Header>
        {/* Header End */}

        {/* Parallax Scrolling Start */}
      <div className="pt-[130px] pb-[632px] lg:pt-[95px] lg:pb-[600px] md:pt-[70px] md:pb-[400px] sm:pt-[50px] sm:py-[70px] overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[100px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/webp/our-story-bg.webp)` }}></Parallax>
        <Container>
          <Row xs={1} className="justify-center">
            <Col xl={8} lg={10} className="text-center">
              <div className="w-[40px] h-[2px] bg-gradient-to-tr from-[#ff6557] to-[#ff367c] transform rotate-90 my-[30px] inline-block"></div>
              <h3 className="font-serif font-medium text-darkgray -tracking-[1px] relative mb-0">We focus on creative and <span className="text-gradient bg-gradient-to-tr from-[#ff6557] to-[#ff367c] font-semibold">strategically</span> driven <span className="text-gradient bg-gradient-to-tr from-[#ff6557] to-[#ff367c] font-semibold">innovative</span></h3>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Parallax Scrolling End */}
      
      {/* Section Start */}
      <section className="pb-[130px] lg:pb-[95px] md:pb-[70px] sm:py-[50px] bg-gradient-to-tr from-[#556fff] via-[#e05fc4] to-[#f767a6]">
        <Container className="md:mb-[70px] sm:mb-20">
          <Row className="justify-center">
            <Overlap value={70} className="row">
              <Col className="col-12 col-md-12 z-0 p-[0px] lg:p-[15px] md:p-[0px] text-center">
                <span className="mb-[-60px] relative uppercase text-[11rem] leading-[11rem] md:text-[9rem] sm:hidden font-serif text-center none md:block font-bold opacity-10 -z-[1]">our story</span>
                <Atropos
                  highlight={false}
                  stretchX={0}
                  stretchY={0}
                  rotateTouch={false}
                  className={`my-atropos -top-[7%] md:top-0 w-full`}
                >
                  <img loading="lazy" src="https://via.placeholder.com/1170x650" className="relative z-10 rounded-[6px]" alt="" data-no-retina="" />
                </Atropos>
              </Col>
            </Overlap>
          </Row>
        </Container>
        <Container>
          <Row className="justify-center">
            <Col md={12} sm={8}>
              <ProcessStep theme="process-step-style-05 md:px-0 sm:mb-8" className="our-story-process-step-style overflow-hidden sm:inline-block text-center text-[#fff]" data={ProcessStepData06} animation={fadeIn} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}


        {/* Section Start */}
        <m.section
                className="py-[55px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px] bg-lightgray lg:px-0 md:px-0 sm:px-0 xs:px-0">
                <Container>
                    <h6 className="font-serif text-darkgray text-center font-medium mb-[60px] md:mb-[50px]">
                        Customer Satisfaction
                    </h6>
                    <Row className="justify-center">
                        <Col lg={6}>
                            <ProgressBar
                                theme="progressbar-style-02"
                                className=""
                                trailColor="#f7f7f7"
                                height="8px"
                                data={ProgressBarData02}
                                color={["#3844F7", "#902CFC"]}/>
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}

        {/* Section Start */}
        <m.section
                className="py-[100px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-no-repeat bg-center"
                style={{background: 'white',}} {...fadeIn} >
                <Container>
                    <Row className="justify-center align-items-center">
                        <Col md={9} className="text-center mb-[6%]">
                            <h6 className="font-serif text-darkgray font-medium">
                                We believe in quality-driven custom software development
                            </h6>
                        </Col>
                    </Row>
                    <Row className="row-cols-lg-2 justify-center">
                        <Col md={12} lg={12}>
                            <TestimonialsCarousel01
                                data={TestimonialsCarouselData1}
                                className="swiper-navigation-04 swiper-navigation-light swiper-pagination-dark swiper-pagination-big black-move"
                                carouselOption={{
                                    slidesPerView: 1,
                                    loop: true,
                                    navigation: false,
                                    autoplay: {delay: 5000, disableOnInteraction: false},
                                    pagination: {dynamicBullets: false, clickable: true},
                                    keyboard: {enabled: true, onlyInViewport: true},
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}

            {/* Section Start */}
            <m.section className="py-[100px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs;py-[50px] bg-lightgray" {...fadeIn}>
                <Container>
                    <Row>
                        <Col className="mb-[4%]">
                            <h6 className="font-serif text-darkgray text-center font-medium mb-[25px] lg:mb-[15px]">
                                Our Commitment? Your success, powered by our software
                            </h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} xs={12} className="px-[15px] md:mb-[15px]">
                            <div className="bg-transparent  sm:p-[30px]">
                                <p className="text-darkgray text-[1.2em] text-center lg:mb-[45px]">
                                    Transforming Challenges Into Opportunities
                                    <br/>
                                    <br/>
                                    Dedicated to bridging businesses with technological excellence, our mission is to deliver intuitive resource management software solutions that cater to both SMEs and enterprises, simplifying challenges into opportunities.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}  xs={12} className="px-[15px] md:mb-[15px]">
                            <div className="text-darkgray text-[1.2em] text-center sm:p-[34px]">
                                <p>
                                    Empowering Growth Through Solutions
                                    <br/>
                                    <br/>
                                    Our vision is to empower businesses worldwide by turning their challenges into robust solutions, leveraging our diverse capabilities to serve the evolving needs of both SMEs and enterprises.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}

        {/* Lazy Load HTML */}
        <InViewPort>
            {/* Section Start */}
            <m.section className="py-[100px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs;py-[50px] bg-white" {...fadeIn}>
                <Container>
                    <Row>
                        <Col className="mb-[4%]">
                            <h4 className="font-serif text-dark text-center font-medium lg:mb-[15px]">
                                Our Mission?
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} xs={12} className="px-[15px] md:mb-[15px]">
                            <div className="bg-transparent sm:p-[30px]">
                                <h6 className="text-black lg:mb-[45px]">
                                    Empowering Businesses and Enriching Lives: Where Heart Meets Software for
                                    Transformational Growth
                                </h6>
                            </div>
                        </Col>
                        <Col lg={7}  xs={12} className="px-[15px] md:mb-[15px]">
                            <div className="bg-transparent text-black sm:p-[34px]">
                                <p>
                                    Our mission is to revolutionize business improvement through the infusion of heart
                                    into software solutions. We believe in harnessing the power of technology not just
                                    for efficiency, but for fostering genuine connections, empathy, trust, and
                                    understanding within organizations. By putting heart into software, we aim to create
                                    transformative experiences that empower businesses to thrive, enriching the lives of
                                    both employees and customers alike.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}

            {/*/!* Section Start *!/*/}
            {/*<section className="pt-[120px] lg:pt-[95px] md:pt-[80px] sm:pt-[50px] switch-tabs">*/}
            {/*    <div className="text-center">*/}
            {/*        <h6 className='text-darkgray font-medium font-serif mb-16 xs:mb-20'>Our Team</h6>*/}
            {/*    </div>*/}
            {/*    */}
            {/*            <section className="py-20">*/}
            {/*                <Container>*/}
            {/*                    <Team*/}
            {/*                        themeColor="dark"*/}
            {/*                        theme="team-style-01"*/}
            {/*                        className="text-white"*/}
            {/*                        data={TeamData01}*/}
            {/*                        grid="row-cols-1 row-cols-lg-4 row-cols-sm-2 landscape:row-cols-1 landscape:row-cols-lg-4 landscape:row-cols-sm-2 landscape:justify-center gap-y-10"*/}
            {/*                        animation={fadeIn}*/}
            {/*                        animationDelay={0.2}*/}
            {/*                        carousel={false}*/}
            {/*                        overlay={["#2ed47ce6", "#e8a626e6"]}*/}
            {/*                        carouselOption={{*/}
            {/*                            slidesPerView: 1,*/}
            {/*                            spaceBetween: 30,*/}
            {/*                            loop: true,*/}
            {/*                            navigation: true,*/}
            {/*                            autoplay: {delay: 3000, disableOnInteraction: false},*/}
            {/*                            pagination: {dynamicBullets: true, clickable: true},*/}
            {/*                            breakpoints: {*/}
            {/*                                1200: {slidesPerView: 3},*/}
            {/*                                992: {slidesPerView: 3},*/}
            {/*                                768: {slidesPerView: 2}*/}
            {/*                            }*/}
            {/*                        }}*/}
            {/*                    />*/}
            {/*                </Container>*/}
            {/*            </section>*/}
            {/*       */}
            {/*</section>*/}
            {/*/!* Section End *!/*/}

            {/* Footer Start */}
            <Footer className="startup-footer bg-no-repeat bg-right" theme="light">
                <Container fluid className="xs:opacity-0 xs:hidden">
                    <Row>
                        <Col className="h-[65px] lg:h-[30px] bg-top bg-no-repeat"
                             style={{backgroundImage: "url(/assets/img/webp/home-startup-footer-shadow.webp)"}}>
                        </Col>
                    </Row>
                </Container>
                <div className="py-[4%] lg:py-[7%] md:py-[50px]">
                    <Container>
                        <Row md={4} className="justify-center gap-y-[25px]">
                            <FooterMenu data={Footer_Data} md={3} sm={6} className="xl:px-[15px]"
                                        titleClass="capitalize text-dark"/>
                        </Row>
                    </Container>
                </div>
            </Footer>
            {/* Footer End */}
        </InViewPort>
    </div>)
}

export default HomeStartupPage