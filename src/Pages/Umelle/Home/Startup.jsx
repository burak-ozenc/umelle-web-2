import React, {lazy, useEffect} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row,} from "react-bootstrap";

// Functions

// Components
import {analyticsEvent, ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import PortfolioBordered from '../../../Components/Portfolio/PortfolioBordered';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import portimg1 from '../../../Assets/img/HomePage/Artboard-1.webp';
import portimg2 from '../../../Assets/img/HomePage/Artboard-2.webp';
import portimg3 from '../../../Assets/img/HomePage/Artboard-3.webp';
import portimg4 from '../../../Assets/img/HomePage/Artboard-4.webp';
import portimg5 from '../../../Assets/img/HomePage/Artboard-5.webp';
import portimg6 from '../../../Assets/img/HomePage/Artboard-6.webp';
import portimg7 from '../../../Assets/img/HomePage/Artboard 7.webp';


const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const SEO = lazy(() => import('../../../Components/Umelle/SEO'))

const PortfolioData = [
    {
        title: "ORION DATAWORKS",
        img: portimg1,
        category: ["Branding", "Logo"],
        subtitle: "Discover why ORION is the ideal data software for insurance pools",
        link: "/products",
        double_col: false
    },
    {
        title: "CUSTOM INSURANCE SOFTWARE DEVELOPMENT",
        img: portimg2,
        category: ["Graphics", "Logo"],
        subtitle: "Learn how we can build a data software that aligns with your business logic",
        link: "/solutions",
        double_col: false
    },
    {
        title: "CLOUD SOLUTIONS",
        img: portimg3,
        category: ["Branding", "Photography"],
        subtitle: "Discover how our seamless migration and scalable solutions boost cost savings",
        link: "/cloud-services",
        double_col: false
    },
    {
        title: "API DEVELOPMENT & INTEGRATIONS",
        img: portimg4,
        category: ["Graphics", "Photography"],
        subtitle: "Learn how our secure, scalable connectivity  can streamline your operations and enhance functionality",
        link: "/api-development-and-integration",
        double_col: false
    },
    {
        title: "TESTEMONIALS & CASTE STUDIES ",
        img: portimg5,
        category: ["Branding", "Graphics", "Logo"],
        subtitle: "Discover our client success stories",
        link: "/testemonials",
        double_col: false
    },
    {
        title: "BUILD YOUR OWN SOLUTION",
        img: portimg6,
        category: ["Logo", "Photography"],
        subtitle: "Shape your custom data insurance software experience",
        link: "/custom-solution",
        double_col: false
    },
    {
        title: "BUSINESS INTELLIGENCE & ANALYTICS",
        img: portimg7,
        category: ["Branding", "Graphics", "Photography"],
        subtitle: "Discover how our advanced reporting and real-time analytics drive informed, data-driven decisions",
        link: "/portfolio/single-project-page-02",
        double_col: false
    },

]


// Filter the blog data category wise
const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const HomeStartupPage = (props) => {
    ScrollToAnchor();
    
    useEffect(() => {
        analyticsEvent('page_view',null);
    },[])

    
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='UMELLE | Custom Software Solutions for Pooled Insurance Providers'
            description='UMELLE offers innovative custom software solutions to streamline operations and enhance management for pooled insurance providers. Discover how our tailored technology can optimize your business.'
            name='UMELLE'
            type='website'/>
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

        {/* Section Start */}
        <section className=" border-t border-mediumgray pb-0 ">
                    <PortfolioBordered
                        className="design-agency-portfolio-bordered"
                        grid="grid grid-4col xl-grid-4col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col"
                        data={PortfolioData}
                    />
                </section>
                {/* Section End */}
        
        {/* Lazy Load HTML */}
        <InViewPort>
            

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