import React, {lazy} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import * as Yup from 'yup';
import {AnimatePresence, domMax, LazyMotion, m} from 'framer-motion';
import {Form, Formik} from 'formik';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {resetForm, sendEmail} from "../../../Functions/Utilities";
import {Input} from '../../../Components/Form/Form'
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import Counter from "../../../Components/Counters/Counter";
import {CounterData05} from "../../../Components/Counters/CounterData";
import Services from "../../../Components/Services/Services";
import {serviceData5} from "../../../Components/Services/ServicesData";
import {ProcessStepData02} from "../../../Components/ProcessStep/ProcessStepData";
import FancyTextBox from "../../../Components/FancyTextBox/FancyTextBox";
import {fancyTextBox06} from "../../../Components/FancyTextBox/FancyTextBoxData";

const HamburgerMenu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HamburgerMenu})))
const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))
const SearchBar = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.SearchBar})))

const ProcessStep = lazy(() => import('../../../Components/ProcessStep/ProcessStep'))
const Overlap = lazy(() => import('../../../Components/Overlap/Overlap'))
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
    return (<div style={props.style}>
        {/* Header Start */}
        <Header topSpace={{md: true}} type="reverse-scroll">
            <HeaderNav fluid="fluid" theme="dark" expand="lg"
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
                    <SearchBar/>
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
                 style={{backgroundImage: `url("https://via.placeholder.com/1920x1080")`}}>
            <Container>
                <LazyMotion strict features={domMax}>
                    <Row
                        className="full-screen md:h-[650px] sm:h-[350px] xs:h-[450px] align-items-center justify-center">
                        <Col xs={6} lg={6} md={6}
                             className="justify-center items-center my-0 mx-auto relative flex flex-col">
                            <m.h4 initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                  animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
                                  transition={{duration: 0.5, delay: 0.5, ease: "easeIn"}}
                                  className="font-serif font-semibold pb-[10px] text-[60px] tracking-[0px] text-white mb-[35px] lg:text-[55px] lg:leading-[20px] xs:text-[35px] xs:leading-[40px] xs:mb-[20px]">
                                Tailor-Made Insurance Data Software Designed Around Your Business Needs
                            </m.h4>
                            <m.span initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                    animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
                                    transition={{duration: 0.5, delay: 0.8, ease: "easeIn"}}
                                    className="font-serif block text-[19px] leading-[28px] mb-[35px] font-light text-white xs:text-base xs:mb-[20px]">
                                The Premier Choice for Pooled Insurance Providers
                            </m.span>
                        </Col>
                        {/*<Col md={6} sm={6} className="text-center align-items-center justify-center">*/}
                        {/*    <h6 className="font-serif text-darkgray text-center font-medium mb-[5%]">*/}
                        {/*        Tailor-Made Insurance Data Software Designed Around Your Business Needs*/}
                        {/*    </h6>*/}
                        {/*    <p className="m-[150px] text-[23px] mb-[100px]">*/}
                        {/*        That's why we've meticulously crafted a solution that not only meets these needs but exceeds*/}
                        {/*        them, providing a blend of fiscal precision and superior member service.*/}
                        {/*    </p>*/}
                        {/*</Col>*/}
                        <Col xs={6} lg={6} md={6}
                             className="justify-center items-center my-0 mx-auto relative flex flex-col">
                            <div initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                 animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                 transition={{duration: 0.5, delay: 0.9, ease: "easeIn"}}>
                                <Link aria-label="started now" to="/page/contact-classic"
                                      className="uppercase startup-link font-medium">
                                    SCHEDULE A MEETING
                                    <div>
                                        <i className="fas fa-play"></i>
                                    </div>
                                </Link>
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
            <section className="sm:pt-[50px] mb-[130px] md:mb-[50px] sm:mb-0 inline-block w-full">
                <Overlap>

                </Overlap>
            </section>
            {/* Section End */}
            
            {/* Section Start */}
            <m.section className="bg-white py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
                <Container>
                    <Row>
                        <Col className="mb-[4%]">
                            <h6 className="font-medium text-darkgray mb-[25px] lg:mb-[15px] font-serif xs:text-[20px]">
                                Empowering Pooled Insurance with Tailor-Made Solutions
                            </h6>
                            <p>
                                Off-the-shelf software often falls short. Recognizing this gap, we offer solutions and
                                experience to help meet your precise needs by providing targeted benefits through our
                                core competencies.
                            </p>
                        </Col>
                    </Row>
                    <FancyTextBox
                        grid="row-cols-1 row-cols-lg-2 gap-y-10 justify-center"
                        className="col-12 col-lg-4 col-md-6 col-md-9"
                        theme="fancy-text-box-04"
                        data={fancyTextBox06}
                        animation={fadeIn}/>
                </Container>
            </m.section>
            {/* Section End */}

            {/* Info Banner Style 07 */}
            <section className="py-[160px] lg:py-[95px] md:py-[75px]  xs:py-[50px]">
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mb-[7%]">
                            <h4 className="font-serif text-darkgray font-medium">Customization at Its Core</h4>
                        </Col>
                    </Row>
                    <Row className="gx-0">
                        <m.div className="col-12 col-lg-6 bg-cover bg-center md:h-[400px] m-auto justify-center m-3"
                               style={{margin: '0px'}} {...{
                            ...fadeIn,
                            transition: {delay: 0.2}
                        }} >
                            <m.h5
                                className="font-medium text-darkgray mb-[25px] lg:mb-[15px] font-serif xs:text-[20px] m-[100px]">
                                Empowering Pooled Insurance with Tailor-Made Solutions
                            </m.h5>
                        </m.div>
                        <m.div className="col-12 p-0 col-lg-6" {...{...fadeIn, transition: {delay: 0.36}}} >
                            <m.div
                                className="bg-gradient-to-tr from-[#556fff] via-[#ff77dd] to-[#f767a6] px-24 py-28 lg:py-20 lg:px-16 md:p-20 text-white text-center">
                                
                                
                                <h6 className="font-serif text-white font-medium mb-[40px]">
                                    What truly sets our solution apart is our custom architecture. Recognizing that no
                                    two insurance providers are the same, we offer the ultimate flexibility: you can add
                                    features and functions based on your business needs and ensure your program fits
                                    nicely with your business requirements.
                                </h6>
                            </m.div>
                        </m.div>
                    </Row>
                </Container>
            </section>
            {/* Info Banner Style 07 */}

            {/* Section Start */}
            <m.section
                className="bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
                <Container>
                    <Row>
                        <Col className="mb-[6%]">
                            <h6 className="font-serif text-darkgray text-center font-medium mb-[25px] lg:mb-[15px]">Counters
                                style 05</h6>
                        </Col>
                    </Row>
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

            {/* Section Start */}
            <m.section
                className="bg-lightgray border-t py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mb-[7%]">
                            <h6 className="font-serif text-darkgray font-medium">Crafted for Unmatched Efficiency</h6>
                        </Col>
                    </Row>
                    <Row className="justify-center">
                        <Col lg={12} md={11} xs={12} className="md:px-0">
                            <Services grid="row-cols-lg-3 row-cols-1 md:my-0 md:mx-auto gap-y-10 justify-center"
                                      theme='service-style-05' className="col-md-10" data={serviceData5}
                                      animation={fadeIn}/>
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}

            {/* Section Start */}
            <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray">
                <h6 className="font-serif text-gray-900 text-center font-medium mb-24">Understand and apply the business
                    process</h6>
                <Container>
                    <ProcessStep grid="row-cols-1 row-cols-sm-2 row-cols-lg-5 gap-y-10" className=""
                                 theme="process-step-style-03" data={ProcessStepData02} animation={fadeIn}/>
                </Container>
            </section>
            {/* Section End */}

            {/* Footer Start */}
            <Footer className="startup-footer bg-no-repeat bg-right" theme="light"
                    style={{backgroundImage: "url(/assets/img/webp/home-startup-footer-down-bg.webp)"}}>
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
                <div className="pt-[1%] pb-[6%] border-t border-[#ffffff1a]">
                    <Container>
                        <Row>
                            <Link to="/"
                                  className="col-sm-4 col-12 sm:mb-[20px] flex justify-start xs:justify-center">
                                <img src="/assets/img/webp/logo-green-dark.webp" alt="logo" width="111"
                                     height="36"/>
                            </Link>
                            <p className="col-sm-8 col-12 flex justify-end items-center sm:mb-[20px] xs:text-center xs:justify-center mb-0">© {new Date().getFullYear()} Litho
                                is Proudly Powered by&nbsp;<a aria-label="ThemeZaa link"
                                                              className="text-darkgray font-sans underline underline-offset-4 font-medium text-base inline-block hover:text-basecolor"
                                                              href="https://www.themezaa.com/" target="_blank"
                                                              rel="noreferrer">ThemeZaa</a></p>
                        </Row>
                    </Container>
                </div>
            </Footer>
            {/* Footer End */}
        </InViewPort>
    </div>)
}

export default HomeStartupPage