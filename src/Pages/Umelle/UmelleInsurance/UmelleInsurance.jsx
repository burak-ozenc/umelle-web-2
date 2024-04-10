import React, {lazy, useEffect} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {m} from 'framer-motion';
import ReactGA from 'react-ga4';

// Components
import {analyticsEvent, ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import {Parallax} from 'react-scroll-parallax';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import {fadeIn} from "../../../Functions/GlobalAnimations";
import IconWithText from "../../../Components/IconWithText/IconWithText";
import SEO from "../../../Components/Umelle/SEO";

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const Buttons = lazy(() => import('../../../Components/Button/Buttons'))
const Overlap = lazy(() => import('../../../Components/Overlap/Overlap'))
const SideButtons = lazy(() => import("../../../Components/SideButtons"))

// Filter the blog data category wise
const FeaturesData = [
    {
        icon: "line-icon-Add-UserStar text-basecolor text-[40px] text-gradient bg-gradient-to-r from-[#3844F7]  to-[#902CFC]",
        title: "Member and User Services",
        content: "Enhance security, reliability, and efficiency, simplifying user access, member management, and claims processing in one comprehensive, intuitive solution",
    },
    {
        icon: "line-icon-Archery-2 text-basecolor text-[40px] text-gradient bg-gradient-to-r from-[#3844F7]  to-[#902CFC]",
        title: "Seamless Compliance",
        content: "Simplify compliance while ensuring operational consistency and hassle-free adherence to regulations through automated updates and alerts ",
    },
    {
        icon: "line-icon-Monitor-Analytics text- text-[40px] text-gradient bg-gradient-to-r from-[#3844F7]  to-[#902CFC]",
        title: "Advanced Analytics ",
        content: "Gain crucial insights, discern trends, and make informed choices with our analytics suite, delivering the intelligence to refine strategies and reach your objectives ",
    }
]


const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const UmelleInsuranceManagementSuite = (props) => {
    ScrollToAnchor();
    
    useEffect(() => {
        // Send pageview with a custom path
        ReactGA.send({hitType: "pageview", page: "/aw-stg-landingp", title: "Landing Page"});
    }, [])

    useEffect(() => {
        analyticsEvent('page_view',null);
    },[])
    
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='Landing Page'
            description=''
            name='UMELLE'
            type=''/>
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

        <SideButtons/>


        {/* Section Start */}
        <section className="bg-cover bg-no-repeat overflow-visible bg-center"
                 style={{backgroundImage: "url(/assets/img/Header_LandingPage_TESTT-02-03-01.webp)"}}>
            <Container>
                <Row className="justify-center sm:text-center">
                    <Col lg={7} xl={7} md={7} sm={8}
                         className="h-[100vh] flex flex-col items-start justify-center pb-40 pt-24 lg:pt-40 lg:pb-32 md:pt-24 md:pb-40 sm:h-auto sm:pb-20 md:h-[650px]">
                        <span
                            className="font-serif font-semibold text-md leading-[24px] tracking-[1px] text-white inline-block uppercase mb-[45px] sm:mt-0 sm:mx-auto sm:mb-[35px]">
                            EXPERIENCE THE FUTURE OF INSURANCE MANAGEMENT
                        </span>
                        <h1 className="font-serif font-bold text-justify-center block leading-[48px] mb-[1px] text-white xs:text-base xs:mb-[40px] xs:ml-auto  xs:mr-auto"
                            style={{fontSize:'2.1em'}}
                        >
                            INSURANCE AND OPERATIONS
                        </h1>
                        <h2 className="font-serif font-bold block text-[24px] leading-[48px] mb-[0px] text-white xs:text-base xs:mb-[10px] text-[1.4em]">
                            Management Solution Aligned to your Business Needs
                        </h2>
                        <br/>
                        <br/>
                        <h2 className="font-serif text-lg uppercase leading-[25px] text-white mb-[25px] w-[95%] sm:w-full md:text-xmd sm:mb-[15px] xs:leading-[22px]">
                            The premier choice for pooled insurance providers
                        </h2>
                        {/*<ScrollTo href='#' to="download" offset={0} delay={0} spy={true} smooth={true} duration={800}*/}
                        {/*          className="sm:contents">*/}
                        <Link to="/solutions">
                            <Buttons ariaLabel="button"
                                     href="/solutions"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center mt-4"
                                     themeColor={["#fff", "#fff"]} size="lg" color="#4423C4"
                                     title="LEARN MORE"/>
                        </Link>
                        {/*</ScrollTo>*/}
                    </Col>
                </Row>
            </Container>
        </section>
        {/* Section End*/}

        {/* Section Start*/}
        <m.section id="about"
                   className="border-b border-mediumgray py-[55px] lg:py-[90px] sm:pb-[50px] md:pt-0 sm:pt-[50px]" {...fadeIn}>
            <Container>
                <Row className="justify-center">
                    <Col lg={8} sm={8} className="text-center mb-24 md:mb-16 sm:mb-8 mt-10">
                        <span
                            className="font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#975ade] via-[#e05fc4] to-[#ff798e] tracking-[.5px] uppercase inline-block mb-[55px] sm:mb-[10px]">
                        WE CRAFTED A SOLUTION THAT NOT ONLY MEETS THESE NEEDS BUT EXCEEDS THEM, PROVIDING A BLEND OF FISCAL PERCISION AND SUPERIOR MEMBER SERVICES  
                        </span>
                        <h2 className="heading-4 font-serif font-light text-darkgray tracking-[-1px]">
                            We understand the unique challenges and needs of pooled insurance providers </h2>
                    </Col>
                    <IconWithText grid="row-cols-1 row-cols-lg-3 row-cols-sm-2 text-center md:gap-y-[15px]"
                                  theme="icon-with-text-03" data={FeaturesData} animation={fadeIn}
                                  animationDelay={0.3}/>
                </Row>
            </Container>
        </m.section>
        {/* Section End */}


        {/* Section Start */}
        {/* <m.section className="py-[100px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs;py-[50px] bg-lightgray" {...fadeIn}>
            <Container>
                <Row>
                    <Col className="mb-[4%]">
                        <h4 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
                            Transforming Challenges into Opportunities
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="px-[10px] md:mb-[15px]">
                        <div className="bg-transparent p-[40px] sm:p-[30px]">
                            <h6 className="lg:mb-[45px] text-[1.8em]" style={{color: '#2CBAFC'}}>
                                Is your off-the-shelf software falling short? <br/><br/> Are you overpaying for superfluous features and missing out on the functionalities you need?
                            </h6>
                        </div>
                    </Col>
                    <Col lg={7} className="px-[15px] md:mb-[15px]">
                        <div className="bg-transparent text-black p-[33px] sm:p-[34px] text-[1.5em] min-h-[230px]">
                            <p>
                                We offer the perfect balance of cost and utility, by delivering specialized solutions and expertise tailored to your exact requirements, ensuring you receive focused advantages through our key strengths.
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </m.section> */}
        {/* Section End */}

        {/* Section Start */}
        <section className="py-[55px] lg:py-[95px] md:py-[70px] sm:py-[50px] relative overflow-visible">
            <Container>
                <Row className="items-center">
                    <m.div className="col-lg-6 relative mt-[70px] lg:mt-[30px] md:mb-[50px]" {...fadeIn}>
                        <div className="relative">
                            <Parallax className="lg-no-parallax w-[70%] rounded-[6px] lg:relative lg:!top-[-20px]"
                                      speed={0}>
                                <div
                                    className="absolute top-0 left-0 w-full h-full rounded-[6px] opacity-50 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                <img loading="lazy" src="/assets/img/landing_page_section_back-01.webp"
                                     className="rounded-[6px] w-full" width="394.8" height="466.34" alt="our-process"/>
                            </Parallax>
                            <Parallax
                                className="lg-no-parallax flex rounded-[6px] justify-center items-center w-[70%] bg-no-repeat absolute bottom-0 right-[15px] lg:!top-0 lg:ml-auto"
                                speed={20}>
                                <img loading="lazy" src="/assets/img/landing_page_section_front-01.webp"
                                     className="rounded-[6px] w-full" width="394.8" height="466.34" alt="our-process"/>
                            </Parallax>
                            {/* <img src="/assets/img/landing_page_section_front-01.png" alt=""></img> */}
                        </div>
                    </m.div>
                    <m.div className="col-lg-5 offset-lg-1" {...{...fadeIn, transition: {delay: 0.5}}}>
                        <div className="font-serif text-xmd font-medium mb-[30px]">
                            <span className="w-[50px] h-[1px] bg-fastblue inline-block align-middle mr-[20px]"></span>
                            <span
                                className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] inline-block">Is your off-the-shelf software falling short?</span>
                        </div>
                        <h5 className="font-serif text-darkgray font-medium mb-[30px] w-full">Are you overpaying for
                            useless features or missing out on the functionalities you need?</h5>
                        <p className="w-[95%] mb-[35px]">We offer the perfect balance of cost and utility, by delivering
                            specialized solutions and expertise tailored to your exact requirements, ensuring you
                            receive focused advantages through our key strengths.</p>
                        <div className="xs:flex">
                            <Buttons ariaLabel="button"
                                     href="/solutions"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center mt-4"
                                     themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                     title="LEARN MORE"/></div>
                    </m.div>
                </Row>
            </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <m.section id="download"
                   className="py-[160px] cover-background lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
                   style={{backgroundImage: `url(/assets/img/BottomCTABanner_LandingPage_TESTT-01-01.webp)`}} {...fadeIn}>
            <Container>
                <Row className="items-center">
                    <Col lg={8} md={8} className="col-12 text-left font-serif uppercase sm:mb-[30px] sm:text-center">
                        <span
                            className="font-medium text-md text-white bg-transparent tracking-[.5px] inline-block mb-[15px] sm:mb-[10px]">
                            WE BUILD FOR YOUR BUSINESS NEEDS 
                        </span>
                        <h2 className="heading-4 font-semibold text-white -tracking-[1px] mb-0">
                            DISCOVER THE FULL SET OF FUNCTIONALITIES AND FEATURES
                        </h2>
                    </Col>
                    <Col lg={{offset: 1}} md={3} className="flex sm:justify-center ps-lg-0">
                        <Buttons ariaLabel="button"
                                 href="/solutions"
                                 className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center mt-4"
                                 themeColor={["#3844F7", "#902CFC"]} size="xl" color="#fff"
                                 title="LEARN MORE"
                        />
                    </Col>
                </Row>
            </Container>
        </m.section>
        {/* Section End */}


        {/* Lazy Load HTML */}
        <InViewPort>
            {/* Section Start */}
            <section className="sm:pt-[50px] mb-[130px] md:mb-[50px] sm:mb-0 inline-block w-full">
                <Overlap>

                </Overlap>
            </section>
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

export default UmelleInsuranceManagementSuite