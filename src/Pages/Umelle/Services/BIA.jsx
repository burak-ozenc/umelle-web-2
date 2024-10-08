import React from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import { domMax, LazyMotion, m} from 'framer-motion';


// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent, ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import InteractiveBanners04 from "../../../Components/InteractiveBanners/InteractiveBanners04";
import {InteractiveBannersData19} from "../../../Components/InteractiveBanners/InteractiveBannersData";
import FancyTextBox from '../../../Components/FancyTextBox/FancyTextBox';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import Buttons from "../../../Components/Button/Buttons";
import IconWithText from "../../../Components/IconWithText/IconWithText";
import SEO from "../../../Components/Umelle/SEO";
import { useEffect } from 'react';
import { fancyTextBoxServices } from '../../../Components/FancyTextBox/FancyTextBoxData';

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const FeaturesData = [
    {
        icon: "line-icon-Navigation-LeftWindow text-basecolor text-[40px] text-gradient bg-gradient-to-r from-[#975ade] via-[#af63d2] to-[#e6686f]",
        title: "Expertise in Data Solutions",
        content: "Our team has extensive experience in business intelligence and data analytics, ensuring high-quality solutions.",
    },
    {
        icon: "line-icon-Cursor-Click2 text-basecolor text-[40px] text-gradient bg-gradient-to-r from-[#975ade] via-[#af63d2] to-[#e6686f]",
        title: "Tailored Insights",
        content: "We customize our analytics solutions to meet your specific business needs, providing relevant and actionable insights.",
    },
    {
        icon: "line-icon-Gear-2 text- text-[40px] text-gradient bg-gradient-to-r from-[#975ade] via-[#af63d2] to-[#e6686f]",
        title: "Scalable Analytics Platforms",
        content: "Our solutions are built to scale with your business, accommodating growing data volumes and complexity.",
    },
    {
        icon: "line-icon-Talk-Man text-basecolor text-[40px] text-gradient bg-gradient-to-r from-[#975ade] via-[#af63d2] to-[#e6686f]",
        title: "Proven Methodologies",
        content: "We use proven methodologies to deliver reliable and effective business intelligence solutions that drive success.",
    }
]

const BIA = (props) => {
    ScrollToAnchor();

    useEffect(() => {
        analyticsEvent('page_view',null);
    },[])
    
    
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='Data-Driven Insights for Strategic Decisions | UMELLE'
            description='Empower your business with advanced reporting, interactive dashboards, and real-time analytics. Leverage UMELLE’s expertise for comprehensive data integration and visualization solutions that drive strategic decisions.'
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

        {/* Section start */}
        <section className="overflow-visible cover-background"
                 style={{backgroundImage: `url(assets/img/servicespage_header_v2-01.webp)`}}>
            <Container>
                <LazyMotion strict features={domMax}>
                    <Row
                        className="full-screen md:h-[650px] sm:h-[350px] xs:h-[450px] align-items-center justify-center">
                        <Col xs={12} lg={6} md={6}
                             className="justify-center items-left my-0 mx-auto relative flex flex-col">
                            <m.h4 initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                  animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
                                  transition={{duration: 0.5, delay: 0.5, ease: "easeIn"}}
                                  style={{fontSize:'2em'}}
                                  className="font-serif block leading-[48px] mb-[35px] font-light text-black xs:text-base xs:mb-[40px]">
                                Data-Driven Insights for Strategic Decisions
                            </m.h4>
                            <m.span initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                    animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
                                    transition={{duration: 0.5, delay: 0.8, ease: "easeIn"}}
                                    className="font-serif block text-[19px] leading-[28px] mb-[35px] font-light text-black xs:text-base xs:mb-[20px]">
                                Our solutions feature advanced reporting, interactive dashboards, and real-time analytics, enabling you to make informed decisions with comprehensive data integration and visualization.
                            </m.span>
                        </Col>
                        <Col xs={12} lg={6} md={6}
                             className="justify-center items-center my-0 mx-auto relative flex flex-col">
                            <div initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                 animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                 transition={{duration: 0.5, delay: 0.9, ease: "easeIn"}}>
                                <Buttons ariaLabel="button"
                                         href="/contact"
                                         className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center mt-4"
                                         themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                         title="Schedule a meeting"/>
                            </div>
                        </Col>
                    </Row>
                </LazyMotion>
            </Container>
        </section>
        {/* Section End */}
        
        {/* Lazy Load HTML */}
        <InViewPort>
             {/* Section Start */}
      <m.section {...fadeIn}>
        <Container fluid className="px-0">
          <FancyTextBox
            grid="row-cols-1 row-cols-xl-6 row-cols-md-3 row-cols-sm-2 gx-0"
            theme="fancy-text-box-01"
            data={fancyTextBoxServices}
            themeColor="light"
            animation={fadeIn}
          />
        </Container>
      </m.section>
      {/* Section End */}
            {/* Section Start */}
            <m.section id="about" className="border-b border-mediumgray py-[30px] lg:py-[40px] sm:pb-[50px] md:pt-0 sm:pt-[50px]" {...fadeIn}>
                    <Container>
                        <Row className="justify-center">
                            <Col lg={6} sm={8} className="text-center mb-24 md:mb-16 sm:mb-8 mt-14">
                                <span className="font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#975ade] via-[#e05fc4] to-[#ff798e] tracking-[.5px] uppercase inline-block mb-[20px] sm:mb-[10px]">Why Work with Umelle?</span>
                                <h2 className="heading-4 font-serif font-light text-darkgray tracking-[-1px]">Get Meaning From Data</h2>
                            </Col>
                            <IconWithText grid="row-cols-1 row-cols-lg-4 row-cols-sm-2 text-center md:gap-y-[15px]" theme="icon-with-text-03" data={FeaturesData} animation={fadeIn} animationDelay={0.3} />
                        </Row>
                    </Container>
                </m.section>
            {/* Section End */}

            {/* Section Start */}
            <section className="py-[60px] lg:py-[60px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray">
                <Container fluid className="px-[30px] xs:px-[15px]">
                <h6 className="font-serif text-gray-900 text-center font-medium mb-[91px] xl:mb-[105px] lg:mb-[74px] md:mb-[65px] sm:mb-[53px] xs:mb-[46px] xxs:mb-[40px]">Create Custom Reports And Gain Unique Analytics </h6>
                <InteractiveBanners04
                    grid="row-cols-12 gap-y-10 sm:justify-center"
                    overlay={["#0039e3cc", "#4132e0cc", "#5e28ddcc", "#741bd9cc", "#8600d4cc"]}
                    data={InteractiveBannersData19}
                    animation={fadeIn} />
                </Container>
            </section>
            {/* Section End */}

            {/* CTA Banner Section Start */}
            <m.section id="download"
                className="py-[160px] cover-background lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
                style={{backgroundImage: `url(/assets/img/BottomCTABanner_LandingPage_TESTT-01-01.webp)`}} {...fadeIn}>
                <Container>
                    <Row className="items-center">
                        <Col lg={8} md={8} className="col-12 text-left font-serif uppercase sm:mb-[30px] sm:text-center">
                            <span
                                className="font-medium text-md text-white bg-transparent tracking-[.5px] inline-block mb-[15px] sm:mb-[10px]">
                                WE BUILD BETTER SOFTWARE 
                            </span>
                            <h2 className="heading-4 font-semibold text-white -tracking-[1px] mb-0">
                                DISCOVER YOUR TRUE PORTENTIAL
                            </h2>
                        </Col>
                        <Col lg={{offset: 1}} md={3} className="flex sm:justify-center ps-lg-0">
                            <Buttons ariaLabel="button"
                                    href="/contact"
                                    className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center mt-4"
                                    themeColor={["#3844F7", "#902CFC"]} size="xl" color="#fff"
                                    title="GET IN TOUCH"
                            />
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* CTA Banner Section End */}


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

export default BIA