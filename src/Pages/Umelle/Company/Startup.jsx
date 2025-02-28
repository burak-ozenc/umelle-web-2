import React from 'react';

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import Atropos from "atropos/react";
import {m} from 'framer-motion';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';
import Buttons from '../../../Components/Button/Buttons';

// Components
import { ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import ProgressBar from "../../../Components/ProgressBar/ProgressBar";
import {ProgressBarData02} from "../../../Components/ProgressBar/ProgressBarData";
import Overlap from '../../../Components/Overlap/Overlap';
import ProcessStep from '../../../Components/ProcessStep/ProcessStep';
import {ProcessStepDataAbout} from '../../../Components/ProcessStep/ProcessStepData';
import FancyTextBox from '../../../Components/FancyTextBox/FancyTextBox';
import {fancyTextBoxAbout} from '../../../Components/FancyTextBox/FancyTextBoxData';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import {
    TestimonialsCarouselData1
} from "../../../Components/TestimonialCarousel/TestimonialsCarouselData";
import TestimonialsCarousel01 from "../../../Components/TestimonialCarousel/TestimonialsCarousel01";
import SEO from "../../../Components/Umelle/SEO";
import { Parallax } from 'react-scroll-parallax';
import ourStory from '../../../Assets/img/umelle/About/our story-01.png';
import reachOut from '../../../Assets/img/Product/pricing/ProductPricing_Header-01.png';
import aboutPar1 from '../../../Assets/img/About/AboutPar1.webp';
import aboutPar2 from '../../../Assets/img/About/AboutPar2.webp';

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))


const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const HomeStartupPage = (props) => {
    ScrollToAnchor();
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title="Umelle Software: Enterprise Solutions for Insurance Management"
            description="Discover Umelle Software's enterprise-level insurance applications, specializing in custom, quality-driven software development for pooled insurance providers. Learn how our tailored solutions enhance operations, integrate seamlessly, and drive business growth with advanced analytics and superior customer service."
            name="UMELLE"
            type="article"/>
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

        {/* Lazy Load HTML */}
        <InViewPort>
                {/* Parallax Scrolling Start */}
                <div className="pt-[130px] pb-[632px] lg:pt-[95px] lg:pb-[600px] md:pt-[70px] md:pb-[400px] sm:pt-[50px] sm:py-[70px] overflow-hidden relative">
                    <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[100px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/webp/our-story-bg.webp)` }}></Parallax>
                    <Container>
                    <Row xs={1} className="justify-center">
                        <Col xl={8} lg={10} className="text-center">
                        <div className="w-[40px] h-[2px] bg-gradient-to-tr from-[#ff6557] to-[#ff367c] transform rotate-90 my-[30px] inline-block"></div>
                        <h3 className="font-serif font-medium text-darkgray -tracking-[1px] relative mb-0">We specialize in enterprise level insurance <span className="text-gradient bg-gradient-to-tr from-[#ff6557] to-[#ff367c] font-semibold">applications and solutions </span></h3>
                        </Col>
                    </Row>
                    </Container>
                </div>
            {/* Parallax Scrolling End */}
            
            {/* Section Start */}
                <section className="pb-[130px] lg:pb-[95px] md:pb-[70px] sm:py-[50px] bg-gradient-to-tr from-[#fbb03b] via-[#ed1e79] to-[#0071bc]">
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
                            <img loading="lazy" src={ourStory} className="relative z-10 rounded-[6px]" alt="" data-no-retina="" />
                            </Atropos>
                        </Col>
                        </Overlap>
                    </Row>
                    </Container>
                    <Container>
                    <Row className="justify-center">
                        <Col md={12} sm={8}>
                        <ProcessStep theme="process-step-style-05 md:px-0 sm:mb-8" className="our-story-process-step-style overflow-hidden sm:inline-block text-center text-[#fff]" data={ProcessStepDataAbout} animation={fadeIn} />
                        </Col>
                    </Row>
                    </Container>
                </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="bg-lightgray py-[130px] lg:py-[95px] md:py-[70px] sm:py-[50px] our-story-fancy-text-box">
                <Container>
                <Row className="text-center justify-center">
                    <Col md={6} className="col-12 text-center mb-[4.5rem]">
                    <span className="font-serif mb-[10px] block uppercase text-md font-medium">RAPID DELIVERY AND GROWTH</span>
                    <h5 className="font-serif text-darkgray font-medium mb-[25px] -tracking-[1px] xs:mb-[15px]">Our Story</h5>
                    </Col>
                </Row>
                <FancyTextBox
                    grid="row-cols-1 row-cols-lg-2 gap-y-10 lg:gap-y-[30px] xs:gap-y-[15px]"
                    className="col-12 col-lg-6 col-md-9 col-sm-10"
                    theme="fancy-text-box-03"
                    data={fancyTextBoxAbout}
                    animation={fadeIn} />
                </Container>
            </section>
            {/* Section End */}


            {/* Section Start */}
                <m.section
                    className="py-[55px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px] bg-white lg:px-0 md:px-0 sm:px-0 xs:px-0">
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
                        className="py-[100px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-no-repeat bg-lightgray bg-center" {...fadeIn} >
                        <Container>
                            <Row className="justify-center align-items-center">
                                <Col md={9} className="text-center mb-[6%]">
                                    <h6 className="font-serif text-darkgray font-medium">
                                    WE BELIEVE IN QUALITY DRIVEN SOFTWARE DEVELOPMENT
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
                                            autoplay: {delay: 6000, disableOnInteraction: false},
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
                <section className="py-[130px] lg:py-[95px] md:py-[70px] sm:py-[50px] relative overflow-visible">
                    <Container>
                    <Row className="items-center">
                        <m.div className="col-lg-6 relative mt-[70px] lg:mt-[30px] md:mb-[50px]" {...fadeIn}>
                        <div className="relative">
                            <Parallax className="lg-no-parallax w-[70%] rounded-[6px] lg:relative lg:!top-[-20px]" speed={0}>
                            <div className="absolute top-0 left-0 w-full h-full rounded-[6px] opacity-50 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                            <img loading="lazy" src={aboutPar2} className="rounded-[6px] w-full" width="394.8" height="466.34" alt="our-process" />
                            </Parallax>
                            <Parallax className="lg-no-parallax flex rounded-[6px] justify-center items-center w-[70%] bg-no-repeat absolute bottom-0 right-[15px] lg:!top-[20px] lg:ml-auto" speed={20}>
                            <img loading="lazy" src={aboutPar1} className="rounded-[6px]" width="394.8" height="466.34" alt="our-process" />
                            </Parallax>
                        </div>
                        </m.div>
                        <m.div className="col-lg-5 offset-lg-1" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
                        <div className="font-serif text-xmd font-medium mb-[30px]">
                            <span className="w-[50px] h-[1px] bg-fastblue inline-block align-middle mr-[20px]"></span>
                            <span className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] inline-block">ONE SIZE DOES NOT FIT ALL</span></div>
                        <h5 className="font-serif text-darkgray font-medium mb-[30px] w-full">TAILORED APPROACH TO UNDERSTAND AND MEET YOUR UNIQUE NEEDS</h5>
                        <p className="w-[95%] mb-[35px]">We combine cutting-edge innovation with a deep commitment to understanding your specific challenges in the insurance sector, delivering solutions that are both forward-thinking and perfectly aligned with your objectives.</p>
                        <div className="xs:flex">
                            <Buttons to="/solutions" className="font-medium rounded-none font-serif uppercase hover:text-white bg-transparent btn-slide-right" color="#232323" size="md" themeColor="#232323" title="EXPLORE SOLUTIONS" />
                            <Buttons to="/services" className="font-medium rounded-none font-serif uppercase hover:text-white bg-transparent btn-slide-right" color="#232323" size="md" themeColor="#232323" title="EXPLORE SERVICES" />
                        </div>
                        </m.div>
                    </Row>
                    </Container>
                </section>
            {/* Section End */}

            {/* Section Start */}
            <m.section className="py-[8%] xs:py-[50px] relative bg-cover overflow-hidden bg-fixed bg-no-repeat bg-center lg:bg-local" style={{backgroundImage: `url(${reachOut})` }}>
                <div className="absolute h-full w-full opacity-75 top-0 left-0 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"></div>
                <Container>
                <Row className="row justify-center">
                    <Col xl={7} lg={8} md={10} className="relative text-center">
                    <h3 className="font-serif text-white font-semibold mb-[35px]">REACH OUT</h3>
                    <p className="text-white opacity-70 font-serif text-lg md:text-xmd md:leading-[22px] w-[80%] mx-auto leading-[32px] mb-[45px] sm:w-full">Whether you have questions, have something on your mind, or wish to collaborate.</p>
                    <Buttons to="/contact" className="btn-fill drop-shadow-md font-medium font-serif uppercase rounded-[50px] btn-shadow text-[15px] md:mb-[15px]" size="lg" themeColor="#fff" color="#000" title="GET IN TOUCH" />
                    </Col>
                </Row>
                </Container>
            </m.section>
            {/* Section End */}

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