import React, {lazy, useEffect} from 'react';

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {m} from 'framer-motion';


// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent, ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import TestimonialTab from '../../../Components/Tab/TestimonialTab';
import ProgressBar from '../../../Components/ProgressBar/ProgressBar';
import {ProgressBarData02} from '../../../Components/ProgressBar/ProgressBarData';
import TestimonialsCarousel03 from '../../../Components/TestimonialCarousel/TestimonialsCarousel03';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import {TestimonialsCarouselData3} from '../../../Components/TestimonialCarousel/TestimonialsCarouselData';
import reachOut from '../../../Assets/img/Product/pricing/ProductPricing_Header-01.png';
import testemonials from '../../../Assets/img/Testemonials/testimonials-01.png';

const TabData = [
    {
      tabTitle: 'Challenge',
      tabicons: "ti-light-bulb",
      subtitle: 'ACWA JPIA faced inefficiencies and high costs due to fragmented systems, unreliable vendor support, and manual data entry with spreadsheets.',
      img: testemonials,
      title: 'Transforming Operations: ACWA JPIAs Success Story',
    },
    {
      tabTitle: 'Solution',
      tabicons: "ti-timer",
      img: testemonials,
      title: 'Transforming Operations: ACWA JPIAs Success Story',
      subtitle: 'We delivered a tailored management system for ACWA JPIA that streamlined General Liability, Workers Compensation, and data management, integrating advanced features like Business Intelligence and automated invoicing.',
    },
    {
      tabTitle: 'Process',
      tabicons: "ti-pie-chart",
      img: testemonials,
      title: 'Transforming Operations: ACWA JPIAs Success Story',
      subtitle: 'We used Agile methodology to iteratively refine each module, ensuring the final product continuously met ACWA JPIA’s evolving needs and objectives.',
    },
    {
      tabTitle: 'Impact',
      tabicons: "ti-crown",
      img: testemonials,
      title: 'Transforming Operations: ACWA JPIAs Success Story',
      subtitle: 'Over 15 months, we delivered a comprehensive data management solution that integrated all aspects of ACWA JPIA’s operations, from member policies to third-party data and automated invoicing, creating a unified, efficient powerhouse.',
    },
  ]
  

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const Buttons = lazy(() => import('../../../Components/Button/Buttons'))
const SEO = lazy(() => import('../../../Components/Umelle/SEO'))

// Filter the blog data category wise
const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const Testemonials = (props) => {
    ScrollToAnchor();
    
    
    useEffect(() => {
        analyticsEvent('page_view',null);
    },[])

    
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title="Insurance and Operations Management Solutions and Software"
            description="Specializing in insurance, we create custom software solutions tailored to your business needs, combining cost efficiency with cutting-edge modular architecture."
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
            
            {/* Section Start */}
                <m.section className="py-[60px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] border-b border-solid" {...fadeIn}>
                    <Container>
                        <Row className="row-cols-1 justify-center">
                            <Col xl={8} lg={10} className="text-center">
                                <div className="w-[40px] h-[2px] bg-gradient-to-tr from-[#ff6557] via-[#ff4271] to-[#ff367c] transform rotate-90 my-[30px] inline-block"></div>
                                <h3 className="font-serif font-medium text-darkgray -tracking-[1px]">Explore how we drive <span className="text-gradient bg-gradient-to-tr from-[#ff6052] to-[#ff367c] font-semibold">client success</span></h3>
                            </Col>
                        </Row>
                    </Container>
                </m.section>
            {/* Section End */}

            {/* Section Start */}
                <m.section className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px]"{...fadeIn}>
                    <Container>
                    <Row>
                        <Col>
                        <TestimonialTab data={TabData} className="about-me-page-tab"/>
                        </Col>
                    </Row>
                    </Container>
                </m.section>
            {/* Section End */}

            {/* Section Start */}
            <m.section className="py-[95px] lg:py-[95px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-black" {...fadeIn} >
                    <h6 className="font-serif text-white text-center font-medium mb-16 xs:mb-16">
                        Testimonials
                    </h6>
                    <Container>
                        <Row className="justify-center">
                            <Col xl={6} md={9}>
                                <TestimonialsCarousel03
                                    data={TestimonialsCarouselData3}
                                    className="white-move"
                                    carouselOption={{
                                        slidesPerView: 1,
                                        loop: true,
                                        navigation: false,
                                        autoplay: { delay: 6000, disableOnInteraction: false },
                                    }}
                                />
                            </Col>
                        </Row>
                    </Container>
                </m.section>
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

export default Testemonials