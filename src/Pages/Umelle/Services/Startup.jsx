import React, {lazy} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row, Tab, Tabs} from "react-bootstrap";
import * as Yup from 'yup';
import {AnimatePresence, domMax, LazyMotion, m} from 'framer-motion';
import {Form, Formik} from 'formik';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {resetForm, ScrollToAnchor, sendEmail} from "../../../Functions/Utilities";
import {Input} from '../../../Components/Form/Form'
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import FancyTextBox from "../../../Components/FancyTextBox/FancyTextBox";
import {fancyTextBox04} from "../../../Components/FancyTextBox/FancyTextBoxData";
import Buttons from "../../../Components/Button/Buttons";
import {
    CloudAndDataDatabaseList,
    DataFormatList, FrameworksList,
    LanguagesList, ORMList,
    TechList
} from "../../../Components/Clients/ClientsData";
import Clients from "../../../Components/Clients/Clients";
import IconWithText from "../../../Components/IconWithText/IconWithText";
import {IconWithTextData_06} from "../../../Components/IconWithText/IconWithTextData";
import SEO from "../../../Components/Umelle/SEO";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HamburgerMenu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HamburgerMenu})))
const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const ReactCustomScrollbar = lazy(() => import("../../../Components/ReactCustomScrollbar"))
const MessageBox = lazy(() => import('../../../Components/MessageBox/MessageBox'))
const SocialIcons = lazy(() => import("../../../Components/SocialIcon/SocialIcons"))
const SideButtons = lazy(() => import("../../../Components/SideButtons"))
const StaticInstagram = lazy(() => import('../../../Components/Instagram/StaticInstagram'))

// Filter the blog data category wise
const SocialIconsData = [{
    color: "#3b5998", link: "https://www.facebook.com/", icon: "fab fa-facebook-f"
}, {
    color: "#ea4c89", link: "https://dribbble.com/", icon: "fab fa-dribbble"
}, {
    color: "#00aced", link: "https://twitter.com/", icon: "fab fa-twitter"
}, {
    color: "#fe1f49", link: "https://www.instagram.com/", icon: "fab fa-instagram"
}, {
    color: "#0077b5", link: "https://www.linkedin.com/", icon: "fab fa-linkedin-in"
},]

const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const HomeStartupPage = (props) => {
    const location = useLocation();

    useEffect(() => {
        // Your existing useEffect code for handling hash, if any, remains here

        // Google Analytics page view tracking
        if (window.gtag) {
            window.gtag('config', 'G-3XCZ8B0MR9', {
                'page_path': location.pathname + location.search,
            });
        }
    }, [location]); // This ensures the tracking code runs every time the route changes
    ScrollToAnchor();
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='Quality-Driven Custom Software that Meets Your Operational Goals'
            description='Our team handles everything, optimizing costs, time, and scope. Our comprehensive cloud services cover assessment, migration, management, and optimization.'
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
                <Col lg={2} xs={"auto"} className="justify-end pe-0 flex items-center">
                    <div className="md:hidden pl-[17px]">
                        <HamburgerMenu className="" theme="dark">
                            <Col
                                className="flex flex-col justify-center px-[50px] py-[70px] w-[500px] h-[100vh] shadow-[0_0_20px_rgba(0,0,0,0.3)] right-0 text-center bg-white">
                                <ReactCustomScrollbar className="pl-[15px]" theme="dark">
                                    <div>
                                        <h1 className="mb-0 font-bold tracking-[-3px] text-darkgray font-serif uppercase">Hello</h1>
                                        <p className="text-lg text-[#27ae60] font-serif uppercase block">Let's be
                                            friends.</p>
                                        <div className="my-20 w-full">
                                            <StaticInstagram className=""/>
                                        </div>
                                        <p className="w-[70%] mb-12 text-darkgray leading-[26px] text-lg font-serif mx-auto inline-block">Get
                                            latest update for our trusted applications</p>
                                        <Formik
                                            initialValues={{email: ''}}
                                            validationSchema={Yup.object().shape({email: Yup.string().email("Invalid email.").required("Field is required."),})}
                                            onSubmit={async (values, actions) => {
                                                actions.setSubmitting(true)
                                                const response = await sendEmail(values)
                                                response.status === "success" && resetForm(actions)
                                            }}
                                        >
                                            {({isSubmitting, status}) => (
                                                <div className="relative subscribe-style-05 mb-20">
                                                    <Form className="relative">
                                                        <Input showErrorMsg={false} type="email" name="email"
                                                               className="border-[1px] medium-input rounded-[5px] border-solid border-[#dfdfdf]"
                                                               placeholder="Enter your email address"/>
                                                        <button aria-label="Subscribe" type="submit"
                                                                className={`text-xs leading-[18px] py-[12px] px-[28px] uppercase xs:text-center${isSubmitting ? " loading" : ""}`}>
                                                            <i className="far fa-envelope text-basecolor text-sm leading-none mr-[10px] xs:mr-0"></i>Subscribe
                                                        </button>
                                                    </Form>
                                                    <AnimatePresence>
                                                        {status &&
                                                            <m.div initial={{opacity: 0}} animate={{opacity: 1}}
                                                                   exit={{opacity: 0}}
                                                                   className="mt-[25px] top-[115%] left-0 w-full">
                                                                <MessageBox
                                                                    className="rounded-[4px] text-md py-[10px] px-[22px] z-10"
                                                                    theme="message-box01" variant="success"
                                                                    message="Your message has been sent successfully subscribed to our email list!"/>
                                                            </m.div>}
                                                    </AnimatePresence>
                                                </div>)}
                                        </Formik>
                                        <SocialIcons theme="social-icon-style-05" size="sm" iconColor="dark"
                                                     data={SocialIconsData}/>
                                    </div>
                                </ReactCustomScrollbar>
                            </Col>
                        </HamburgerMenu>
                    </div>
                </Col>
            </HeaderNav>
        </Header>
        {/* Header End */}

        <SideButtons/>

        {/* Section start */}
        <section className="overflow-visible cover-background"
                 style={{backgroundImage: `url(assets/img/servicespage_header_v2-01.png)`}}>
            <Container>
                <LazyMotion strict features={domMax}>
                    <Row
                        className="full-screen md:h-[650px] sm:h-[350px] xs:h-[450px] align-items-center justify-center">
                        <Col xs={12} lg={6} md={6}
                             className="justify-center items-center my-0 mx-auto relative flex flex-col">
                            <m.h4 initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                  animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
                                  transition={{duration: 0.5, delay: 0.5, ease: "easeIn"}}
                                  style={{fontSize:'2em'}}
                                  className="font-serif block leading-[48px] mb-[35px] font-light text-black xs:text-base xs:mb-[40px]">
                                Custom Software That Meets Your Operational Goals
                            </m.h4>
                            <m.span initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                    animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
                                    transition={{duration: 0.5, delay: 0.8, ease: "easeIn"}}
                                    className="font-serif block text-[19px] leading-[28px] mb-[35px] font-light text-black xs:text-base xs:mb-[20px]">
                                We take care of everything with our full-cycle engineering services - all while optimizing the cost, timeframe, and scope of the work. Leaving you to focus on what matters most to you.
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


        {/* Section Start */}
        <m.section className="bg-lightgray py-[100px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
            <Container>
                <Row>
                    <Col className="mb-[7%]">
                        <h4 className="font-serif text-black text-center font-medium mb-[25px] lg:mb-[15px]">
                            What we Offer
                        </h4>
                    </Col>
                </Row>
                <FancyTextBox
                    grid="row-cols-1 row-cols-lg-2 gap-y-10 justify-center"
                    className="col-12 col-lg-4 col-md-6 col-md-9"
                    theme="fancy-text-box-04"
                    data={fancyTextBox04}
                    animation={fadeIn}/>
            </Container>
        </m.section>
        {/* Section End */}
        
        {/* Lazy Load HTML */}
        <InViewPort>
           


            {/* Section Start */}
            <section className="bg-white py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                <Container>
                    <Row>
                        <Col className="mb-[7%]">
                            <h6 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
                                Comprehensive Cloud Services Tailored to Your Needs:
                            </h6>
                        </Col>
                    </Row>
                    <Row className="justify-center">
                        <Col className="mb-[7%]">
                            <p className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
                                Our suite of cloud services encompasses every aspect of cloud technology, from initial assessment and migration to ongoing management and optimization. Discover how we can enhance your operations with our specialized offerings:
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-center">
                        <Col xs={12} sm={8} md={12}>
                            <IconWithText
                                grid="row-cols-1 row-cols-lg-3 row-cols-md-2 row-col-sm-8 justify-center gap-y-10"
                                theme="icon-with-text-06"
                                data={IconWithTextData_06}
                                animation={fadeIn}
                                animationDelay={0.2}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <m.section
                className="py-[60px] bg-lightgray lg:py-[100px] md:py-[95px] sm:py-[80px] xs:py-[0px]"  {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mb-[6%]">
                            <h6 className="font-serif text-darkgray font-medium">Our Tech Stack</h6>
                        </Col>
                    </Row>
                    <Tabs className="tab-style-01 font-serif mb-[7.4rem] flex border-b-0 font-medium text-center justify-center md:mb-[60px] sm:mb-[20px]">
                        <Tab className="tab-style-01" key={1} eventKey={1} title={ "Technologies"}>
                            <m.div className='row items-center' {...{ ...fadeIn, transition: { duration: 0.9 }, viewport: { once: false } }}>
                                <Col lg={{ offset: 1, span: 11 }} md={12} className="md:px-[15px] sm:px-[15px] sm:text-start xs:text-center">
                                    <Clients
                                        theme="client-logo-"
                                        className="swiper-navigation-04 swiper-navigation-light"
                                        data={TechList}
                                        animation={fadeIn}
                                        carousel={true}
                                        carouselOption={{
                                            slidesPerView: 1,
                                            loop: true,
                                            spaceBetween: 20,
                                            autoplay: { delay: 3000, disableOnInteraction: false },
                                            navigation: true,
                                            breakpoints: { 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 3 } }
                                        }}
                                    />
                                </Col>
                            </m.div>
                        </Tab>
                        <Tab className="tab-style-01" key={2} eventKey={2} title={ "Languages"}>
                            <m.div className='row items-center' {...{ ...fadeIn, transition: { duration: 0.9 }, viewport: { once: false } }}>
                                <Col lg={{ offset: 1, span: 11 }} md={12} className="md:px-[15px] sm:px-[15px] sm:text-start xs:text-center">
                                    <Clients
                                        theme="client-logo-"
                                        className="swiper-navigation-04 swiper-navigation-light"
                                        data={LanguagesList}
                                        animation={fadeIn}
                                        carousel={true}
                                        carouselOption={{
                                            slidesPerView: 1,
                                            loop: true,
                                            spaceBetween: 20,
                                            autoplay: { delay: 3000, disableOnInteraction: false },
                                            navigation: true,
                                            breakpoints: { 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 3 } }
                                        }}
                                    />
                                </Col>
                            </m.div>
                        </Tab>
                        <Tab className="tab-style-01" key={3} eventKey={3} title={ "Data Formats"}>
                            <m.div className='row items-center' {...{ ...fadeIn, transition: { duration: 0.9 }, viewport: { once: false } }}>
                                <Col lg={{ offset: 1, span: 11 }} md={12} className="md:px-[15px] sm:px-[15px] sm:text-start xs:text-center">
                                    <Clients
                                        theme="client-logo-"
                                        className="swiper-navigation-04 swiper-navigation-light"
                                        data={DataFormatList}
                                        animation={fadeIn}
                                        carousel={true}
                                        carouselOption={{
                                            slidesPerView: 1,
                                            loop: true,
                                            spaceBetween: 20,
                                            autoplay: { delay: 3000, disableOnInteraction: false },
                                            navigation: true,
                                            breakpoints: { 1200: { slidesPerView: 3 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 3 } }
                                        }}
                                    />
                                </Col>
                            </m.div>
                        </Tab>
                        <Tab className="tab-style-01" key={4} eventKey={4} title={ "Cloud And Data Database"}>
                            <m.div className='row items-center' {...{ ...fadeIn, transition: { duration: 0.9 }, viewport: { once: false } }}>
                                <Col lg={{ offset: 1, span: 11 }} md={12} className="md:px-[15px] sm:px-[15px] sm:text-start xs:text-center">
                                    <Clients
                                        theme="client-logo-"
                                        className="swiper-navigation-04 swiper-navigation-light"
                                        data={CloudAndDataDatabaseList}
                                        animation={fadeIn}
                                        carousel={true}
                                        carouselOption={{
                                            slidesPerView: 1,
                                            loop: true,
                                            spaceBetween: 20,
                                            autoplay: { delay: 3000, disableOnInteraction: false },
                                            navigation: true,
                                            breakpoints: { 1200: { slidesPerView: 3 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 3 } }
                                        }}
                                    />
                                </Col>
                            </m.div>
                        </Tab>
                        <Tab className="tab-style-01" key={5} eventKey={5} title={ "ORM"}>
                            <m.div className='row items-center' {...{ ...fadeIn, transition: { duration: 0.9 }, viewport: { once: false } }}>
                                <Col lg={{ offset: 1, span: 11 }} md={12} className="md:px-[15px] sm:px-[15px] sm:text-start xs:text-center" >
                                    <Clients
                                        theme="client-logo-"
                                        className="swiper-navigation-04 swiper-navigation-light justify-content-center"
                                        data={ORMList}
                                        animation={fadeIn}
                                        carousel={true}
                                        carouselOption={{
                                            slidesPerView: 1,
                                            loop: true,
                                            spaceBetween: 20,
                                            autoplay: { delay: 3000, disableOnInteraction: false },
                                            navigation: true,
                                            breakpoints: { 1200: { slidesPerView: 2 }, 992: { slidesPerView: 2 }, 768: { slidesPerView: 2 } }
                                        }}
                                    />
                                </Col>
                            </m.div>
                        </Tab>
                        <Tab className="tab-style-01" key={6} eventKey={6} title={ "Frameworks"}>
                            <m.div className='row items-center' {...{ ...fadeIn, transition: { duration: 0.9 }, viewport: { once: false } }}>
                                <Col lg={{ offset: 1, span: 11 }} md={12} className="md:px-[15px] sm:px-[15px] sm:text-start xs:text-center">
                                    <Clients
                                        theme="client-logo-"
                                        className="swiper-navigation-04 swiper-navigation-light"
                                        data={FrameworksList}
                                        animation={fadeIn}
                                        carousel={true}
                                        carouselOption={{
                                            slidesPerView: 1,
                                            loop: true,
                                            spaceBetween: 20,
                                            autoplay: { delay: 3000, disableOnInteraction: false },
                                            navigation: true,
                                            breakpoints: { 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 3 } }
                                        }}
                                    />
                                </Col>
                            </m.div>
                        </Tab>
                    </Tabs>
                </Container>
            </m.section>
            {/* Section End */}


            {/* CTA Banner Section Start */}
            <section className="lg:pt-[100px] md:pt-[10px] sm:pt-[50px] ">
                <Container fluid>
                    <Row style={{backgroundImage: `url('/assets/img/Untitled-6-01.png')`}}
                         className="cover-background relative cover-background lg:py-[90px] md:py-[75px] sm:py-[50px]">
                        <Col xs={12} className="text-center my-[5rem] md:my-[7.5rem]">
                            <Buttons ariaLabel="button"
                                     href="/contact"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center"
                                     themeColor={["#556fff", "#ff798e"]} size="md" color="#fff"
                                     title="Get a Quote"/>
                        </Col>
                    </Row>
                </Container>
            </section>
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

export default HomeStartupPage