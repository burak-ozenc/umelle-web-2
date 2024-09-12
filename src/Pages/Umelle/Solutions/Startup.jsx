import React, {lazy, useEffect} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {m} from 'framer-motion';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import IconWithText from '../../../Components/IconWithText/IconWithText';
import {IconWithTextData_13, IconWithTextData_12} from '../../../Components/IconWithText/IconWithTextData';
import InteractiveBanners04 from "../../../Components/InteractiveBanners/InteractiveBanners04";
import {InteractiveBannersData21,InteractiveBannersData22} from "../../../Components/InteractiveBanners/InteractiveBannersData";


// Data
import FooterData from '../../../Components/Footers/FooterData';
import Counter from "../../../Components/Counters/Counter";
import {CounterData05} from "../../../Components/Counters/CounterData";
import {ProcessStepData02} from "../../../Components/ProcessStep/ProcessStepData";
import Buttons from "../../../Components/Button/Buttons";
import SEO from "../../../Components/Umelle/SEO";
import {Parallax} from 'react-scroll-parallax';
import ownSolution from '../../../Assets/img/umelle/ProductPage_Overview-01.webp';

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const StartupPageBannerSlider = lazy(() => import('../Home/StartupBanner'))
const ProcessStep = lazy(() => import('../../../Components/ProcessStep/ProcessStep'))
const SideButtons = lazy(() => import("../../../Components/SideButtons"))

// Filter the blog data category wise
const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

// var hash = window.decodeURIComponent(window.location.hash);

const HomeStartupPage = (props) => {
    
    // useEffect(() => {
    //     // Google Analytics page view tracking
    //     if (window.gtag) {
    //         window.gtag('config', 'G-3XCZ8B0MR9', {
    //             'page_path': location.pathname + location.search,
    //         });
    //     }
    // }, [location]); // This ensures the tracking code runs every time the route changes
    

    useEffect(() => {
        analyticsEvent('page_view',null);
    },[])
    

    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='Solutions by UMELLE | Tailored Software for Your Business Needs'
            description='Explore UMELLE’s custom software solutions designed to meet the unique challenges of pooled insurance providers. Learn more about how our technology can drive your business forward.'
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

        <SideButtons/>
        
        {/* Section Start */}
        <StartupPageBannerSlider/>
        {/* Section End */}

        {/* Section Start */}
        <section id="insurance-management" className="py-[160px] overflow-hidden lg:py-[60px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
            <Container>
            <Row className="justify-center">
            <Col xl={{ span: 7, offset: 2 }} lg={8}>
                <IconWithText grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]" theme="icon-with-text-01" data={IconWithTextData_12} animation={fadeIn} animationDelay={0.2} />
                </Col>
                <m.div className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                <div className="mb-[20px] md:text-center sm:mb-[10px]">
                    <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">Custom Solutions</span>
                </div>
                <h3 className="alt-font text-darkgray font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">Insurance Management</h3>
                <div className="mt-auto mx-auto mx-lg-0">
                    <Buttons href="/contact" className="font-medium font-serif uppercase bg-[#fff] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title="GET QUOTE" />
                </div>
                </m.div>    
            </Row>
            </Container>
        </section>
        {/* Section End */}

        {/* Section start */}
        <m.div className="relative overflow-hidden py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] sm:px-[15px]" {...fadeIn}>
            <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[-30px] left-0 h-[100vh] lg:h-[64vh] lg:top-[-75px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-0 sm:h-[56vh] xs:h-[50vh] w-full" translateY={[-40, 40]} style={{ backgroundImage: `url(${ownSolution})` }}></Parallax>
            <div className="left-0 top-0 h-full w-full absolute bg-darkslateblue opacity-75"></div>
            <Container className="relative">
            <Row className="justify-center items-center">
                <Col xl={7} md={8} sm={10} className="md:mb-[30px] sm:mb-[30px]">
                <h4 className="font-serif font-semibold text-white mb-0 sm:text-center">Build your own Solution:</h4>
                </Col>
                <Col xl={5} md={4} className="md:flex md:justify-center text-end">
                <Buttons ariaLabel="button" to="/custom-solution" className="font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px]" themeColor={["#902cfc", "#4423c4"]} size="xl" color="#fff" title="Get Started" />
                </Col>
            </Row>
            </Container>
        </m.div>
        {/* Section end */ }

        {/* Section Start */}
        <section id="operations-management" className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
            <Container>
            <Row className="justify-center">
                <m.div className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                <div className="mb-[20px] md:text-center sm:mb-[10px]">
                    <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">Custom Solutions</span>
                </div>
                <h3 className="alt-font text-darkgray font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">Operations Management</h3>
                <div className="mt-auto mx-auto mx-lg-0">
                    <Buttons href="/contact" className="font-medium font-serif uppercase bg-[#fff] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title="GET Quote" />
                </div>
                </m.div>
                <Col xl={{ span: 7, offset: 2 }} lg={8}>
                <IconWithText grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]" theme="icon-with-text-01" data={IconWithTextData_13} animation={fadeIn} animationDelay={0.2} />
                </Col>
            </Row>
            </Container>
        </section>
        {/* Section End */}

        {/* Lazy Load HTML */}
        <InViewPort>

            {/* Section Start */}
        <section className="py-[55px] lg:py-[95px] md:py-[70px] sm:py-[50px] relative overflow-visible bg-lightgray">
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
                                className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] inline-block">Customization at Its Core</span>
                        </div>
                        <h5 className="font-serif text-darkgray font-medium mb-[30px] w-full">Empowering Pooled Insurance with Tailor-Made Solutions</h5>
                        <p className="w-[95%] mb-[35px]">What truly sets our solution apart is our custom architecture. 
                        Recognizing that no two insurance providers are the same, 
                        we offer the ultimate flexibility: you can add features and functions based on your business needs and ensure your program fits nicely with your business requirements.</p>
                    </m.div>
                </Row>
            </Container>
        </section>
        {/* Section End */}

            {/* Section Start */}
            <m.section className="bg-white py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
                <Container>
                    <Counter
                        theme="counter-style-05"
                        grid="row-cols-1 row-cols-md-3 text-center gap-y-10"
                        className="text-black"
                        duration={2}
                        data={CounterData05}
                        animation={fadeIn}
                        animationDelay={0.2}
                    />
                </Container>
            </m.section>
            {/* Section End */}
            
            {/*/!* Section Start *!/*/}
            <m.section className="bg-lightgray py-[80px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                <h6 className="font-serif text-gray-900 text-center font-medium mb-24">Let's redefine what's possible
                    together</h6>
                <Container>
                    <ProcessStep grid="row-cols-1 row-cols-sm-2 row-cols-lg-5 gap-y-10" className=""
                                 theme="process-step-style-03" data={ProcessStepData02} animation={fadeIn}/>
                </Container>
            </m.section>
            {/*/!* Section End *!/*/}

            {/* Section Start */}
            <section className="py-[60px] lg:py-[60px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-white">
                <Container fluid className="px-[30px] xs:px-[15px]">
                <h6 className="font-serif text-gray-900 text-center font-medium mb-[91px] xl:mb-[105px] lg:mb-[74px] md:mb-[65px] sm:mb-[53px] xs:mb-[46px] xxs:mb-[40px]">Crafted for Unmatched Efficiency</h6>
                <InteractiveBanners04
                    grid="row-cols-12 gap-y-10 sm:justify-center"
                    overlay={["#0039e3cc", "#4132e0cc", "#5e28ddcc", "#741bd9cc", "#8600d4cc"]}
                    data={InteractiveBannersData21}
                    animation={fadeIn} />
                <InteractiveBanners04
                    grid="row-cols-12 gap-y-10 sm:justify-center py-7"
                    overlay={["#0039e3cc", "#4132e0cc", "#5e28ddcc", "#741bd9cc", "#8600d4cc"]}
                    data={InteractiveBannersData22}
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
        <div id="test-sol"
        ></div>
    </div>)
}

export default HomeStartupPage