import React, {lazy} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {domMax, LazyMotion, m} from 'framer-motion';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import { ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import {
    TestimonialsCarouselData1
} from "../../../Components/TestimonialCarousel/TestimonialsCarouselData";
import TestimonialsCarousel01 from "../../../Components/TestimonialCarousel/TestimonialsCarousel01";
import SEO from "../../../Components/Umelle/SEO";
// import Team from "../../../Components/Team/Team";
// import {TeamData01} from "../../../Components/Team/TeamData";
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

        <SideButtons/>

        {/* Section start */}
        <section className="overflow-visible cover-background"
                 style={{backgroundImage: `url(/assets/img/CompanyPage_header.webp)`}}>
            <Container>
                <LazyMotion strict features={domMax}>
                    <Row
                        className="full-screen md:h-[650px] sm:h-[350px] xs:h-[450px] align-items-center justify-center">
                        <Col xs={12} lg={6} md={6}
                             className="justify-center items-center">
                            <h1 className="font-serif leading-[120px] font-semibold tracking-[0px] mb-0 mt-auto text-darkgray text-[3rem] md:leading-[90px] md:text-[9rem] sm:leading-[70px] sm:-tracking-[5px] xs:leading-[70px]">
                                We are...
                                <br/>
                                <span
                                    className="text-border text-[130px] text-border-width-2px fill-transparent inline-block tracking-[-6px] lg:text-[110px] md:text-[90px] md:leading-[85px] sm:text-[65px] sm:leading-[50px] sm:-tracking-[.5px]">
                                UMELLE
                            </span>
                            </h1>
                        </Col>
                        <Col xs={12} lg={6} md={6}
                             className="justify-center items-center my-0 mx-auto relative flex flex-col">
                            <div className="flex font-serif items-center font-medium text-xmd text-darkgray mt-auto">
                                {/*<span className="flex-shrink-0 h-[2px] w-[20px] bg-darkgray item-center mr-[15px]"></span>*/}
                                <div className="grow tracking-[-.5px] text-[24px]">Committed to delivering top-notch, custom software solutions with precision and artistry.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </LazyMotion>
            </Container>
        </section>
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