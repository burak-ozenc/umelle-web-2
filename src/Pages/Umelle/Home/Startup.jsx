import React, {lazy, useEffect} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row, Tab, Tabs} from "react-bootstrap";
import {m} from 'framer-motion';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent, ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import PortfolioBordered from '../../../Components/Portfolio/PortfolioBordered';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import {IconWithTextData_02} from "../../../Components/IconWithText/IconWithTextData";
import Accordions from "../../../Components/Accordion/Accordion";
import { FilterData } from '../../../Components/Portfolio/PortfolioData';
import portimg1 from '../../../Assets/img/HomePage/Artboard 1.png';
import portimg2 from '../../../Assets/img/HomePage/Artboard 2.png';
import portimg3 from '../../../Assets/img/HomePage/Artboard 3.png';
import portimg4 from '../../../Assets/img/HomePage/Artboard 4.png';
import portimg5 from '../../../Assets/img/HomePage/Artboard 5.png';
import portimg6 from '../../../Assets/img/HomePage/Artboard 6.png';
import portimg7 from '../../../Assets/img/HomePage/Artboard 7.png';


const IconWithText = lazy(() => import('../../../Components/IconWithText/IconWithText'))
const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const Buttons = lazy(() => import('../../../Components/Button/Buttons'))
const SideButtons = lazy(() => import("../../../Components/SideButtons"))
const StartupPageBannerSlider = lazy(() => import('./StartupBanner'))
const SEO = lazy(() => import('../../../Components/Umelle/SEO'))

const PortfolioData = [
    {
        title: "MOTION",
        img: portimg1,
        category: ["Branding", "Logo"],
        subtitle: "Identity",
        link: "/portfolio/single-project-page-01",
        double_col: false
    },
    {
        title: "BIOLATOR",
        img: portimg2,
        category: ["Graphics", "Logo"],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-02",
        double_col: false
    },
    {
        title: "OSLANDS",
        img: portimg3,
        category: ["Branding", "Photography"],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-03",
        double_col: false
    },
    {
        title: "FINANCIAL",
        img: portimg4,
        category: ["Graphics", "Photography"],
        subtitle: "Photography",
        link: "/portfolio/single-project-page-04",
        double_col: false
    },
    {
        title: "DUPONT",
        img: portimg5,
        category: ["Branding", "Graphics", "Logo"],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-05",
        double_col: false
    },
    {
        title: "GARDNER",
        img: portimg6,
        category: ["Logo", "Photography"],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-01",
        double_col: false
    },
    {
        title: "TRUENORTH",
        img: portimg7,
        category: ["Branding", "Graphics", "Photography"],
        subtitle: "Photography",
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
            title='Insurance and Operations Management Solutions and Software '
            description='Specializing in insurance, we create custom software solutions tailored to your business needs, combining cost efficiency with cutting-edge modular architecture.'
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

        {/* Section Start */}
        <section className="py-[160px] border-t border-mediumgray pb-0 lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <PortfolioBordered
                        title="Amazing work"
                        className="design-agency-portfolio-bordered"
                        grid="grid grid-4col xl-grid-4col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col"
                        data={PortfolioData}
                        filterData={FilterData}
                    />
                </section>
                {/* Section End */}
        
        <SideButtons/>
        
        {/* Section Start */}
        <StartupPageBannerSlider/>
        {/* Section End */}

        
        {/* Lazy Load HTML */}
        <InViewPort>
            {/* Section Start */}
            <section id="test" className="bg-white pt-20 switch-tabs">
                <Col className="text-center">
                    <h6 className="font-serif text-darkgray text-center font-medium mb-[1%]">
                        We understand the unique challenges and needs of pooled insurance providers
                    </h6>
                    <p className="m-[30px] text-[23px] mb-[0px]">
                        That's why we've meticulously crafted a solution that not only meets these needs but exceeds
                        them, providing a blend of fiscal precision and superior member service.
                    </p>
                </Col>
                <Tabs
                    defaultActiveKey="light"
                    id="uncontrolled-tab-example"
                    className="justify-center"
                    style={{display: 'none'}}
                >
                    {/* Accordion style 03 ( Light ) start */}
                    <Tab eventKey="light" title="LIGHT">
                        <m.section className="py-[55px] bg-white">
                            <Container>
                                <Row className="justify-center">
                                    <Col lg={10} md={10}>
                                        <Accordions theme="accordion-style-03" className="test" animation={fadeIn}/>
                                    </Col>
                                </Row>
                            </Container>
                        </m.section>
                    </Tab>
                    {/* Accordion style 03 ( Light ) end */}
                </Tabs>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="bg-lightgray py-[55px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                <Container>
                    <Row>
                        <Col className="mb-[55px]">
                            <h6 className="font-serif text-dark text-center font-medium mb-[0px] lg:mb-[15px]">
                                Transforming Challenges into Opportunities
                            </h6>
                        </Col>
                    </Row>
                    <Row className="justify-center">
                        <Col xs={12} lg={12} md={9}>
                            <IconWithText
                                grid="row-cols-1 row-cols-lg-2 gap-y-[30px] xs:gap-y-[15px]"
                                theme="icon-with-text-02"
                                data={IconWithTextData_02}
                                animation={fadeIn}
                                animationDelay={0.2}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* CTA Banner Section Start */}
            <section className="lg:pt-[160px] md:pt-[10px] sm:pt-[50px] ">
                <Container fluid>
                    <Row style={{backgroundImage: `url('/assets/img/Untitled-6-01.webp')`}}
                         className="cover-background relative cover-background lg:py-[90px] md:py-[75px] sm:py-[50px] text-center align-items-center">
                        <Col xs={12} md={6} className="my-[5rem] md:my-[7.5rem] d-flex justify-content-end align-items-center">
                            <h6 className="bg-transparent text-md-end text-center text-black m-0 w-[500px]">
                                LET'S DISCUSS YOUR PROJECT
                            </h6>
                        </Col>
                        <Col md={3} className="d-flex justify-content-center align-items-center">
                            <Link to="/contact">
                                <Buttons ariaLabel="button"
                                    className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center mt-0"
                                    themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                    title="Schedule a meeting"/>
                            </Link>
                        </Col>
                    </Row> 
                </Container>
            </section>
            {/* CTA Banner Section End */}

            {/*/!* Section start *!/*/}
            {/*<section className="overflow-visible h-[225px]2"*/}
            {/*         style={{backgroundImage: `url("https://i.ibb.co/XZsnq0w/homepage-bottompagebanner-CTA-v2-01.png")`}}>*/}
            {/*    <Container>*/}
            {/*        <LazyMotion strict features={domMax}>*/}
            {/*            <Row*/}
            {/*                className="md:h-[450px] sm:h-[450px] xs:h-[450px] align-items-center justify-center "*/}
            {/*            >*/}
            {/*                <Col xs={6} lg={6} md={6}*/}
            {/*                     className="justify-center align-items-center items-center my-0 mx-auto relative flex flex-col">*/}
            {/*                    <div initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}*/}
            {/*                         animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}*/}
            {/*                         transition={{duration: 0.5, delay: 0.9, ease: "easeIn"}}*/}
            {/*                         className="justify-center m-[7rem] align-items-center"*/}
            {/*                    >*/}
            {/*                        <Buttons ariaLabel="button"*/}
            {/*                                 href="/contact"*/}
            {/*                                 className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center"*/}
            {/*                                 themeColor={["#556fff", "#ff798e"]} size="md" color="#fff"*/}
            {/*                                 title="SCHEDULE A MEETING"/>*/}
            {/*                    </div>*/}
            {/*                </Col>*/}
            {/*            </Row>*/}
            {/*        </LazyMotion>*/}
            {/*    </Container>*/}
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