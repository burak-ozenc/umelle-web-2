import React, {lazy} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import * as Yup from 'yup';
import {AnimatePresence, m} from 'framer-motion';
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
import {
    TestimonialsCarouselData1
} from "../../../Components/TestimonialCarousel/TestimonialsCarouselData";
import TestimonialsCarousel01 from "../../../Components/TestimonialCarousel/TestimonialsCarousel01";
import TextBox from "../../../Components/TextBox/TextBox";
import {TextBoxData02} from "../../../Components/TextBox/TextBoxData";
import Team from "../../../Components/Team/Team";
import {TeamData01} from "../../../Components/Team/TeamData";

const HamburgerMenu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HamburgerMenu})))
const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))
const SearchBar = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.SearchBar})))


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
                <Row className="full-screen md:h-[650px] sm:h-[350px] xs:h-[450px]">
                    <Col md={6} sm={6} className="flex flex-col py-64">
                        <h1 className="font-serif leading-[120px] font-semibold tracking-[0px] mb-0 mt-auto text-darkgray text-[3rem] md:leading-[90px] md:text-[9rem] sm:leading-[70px] sm:-tracking-[5px] xs:leading-[70px]">
                            We are...
                            <br></br>
                            <span
                                className="text-border text-[130px] text-border-width-2px fill-transparent inline-block tracking-[-6px] lg:text-[110px] md:text-[90px] md:leading-[85px] sm:text-[65px] sm:leading-[50px] sm:-tracking-[.5px]">
                                UMELLE
                            </span>
                        </h1>

                    </Col>
                    <Col md={6} sm={6} className="flex py-64">
                        <div className="flex font-serif items-center font-medium text-xmd text-darkgray mt-auto">
                            {/*<span className="flex-shrink-0 h-[2px] w-[20px] bg-darkgray item-center mr-[15px]"></span>*/}
                            <div className="grow tracking-[-.5px] text-[24px]">We are a European-based company who
                                meticulously
                                plans, designs, engineers, tests, refines, and delivers custom-built software to align
                                with you, your business needs
                            </div>
                        </div>
                    </Col>
                </Row>
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
            <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs;py-[50px]" {...fadeIn}>
                <Container>
                    <Row>
                        <Col className="mb-[4%]">
                            <h4 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
                                Our Mission?
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} className="px-[15px] md:mb-[15px]">
                            <div className="bg-lightgray p-[40px] sm:p-[30px]">
                                <h6 className="text-darkgray lg:mb-[45px]">
                                    Empowering Businesses and Enriching Lives: Where Heart Meets Software for
                                    Transformational Growth.
                                </h6>

                            </div>
                        </Col>
                        <Col lg={7} className="px-[15px] md:mb-[15px]">
                            <div className="bg-lightgray p-[33px] sm:p-[34px]">
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

            {/* Section Start */}
            <m.section
                className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-no-repeat bg-center"
                style={{background: 'white',}} {...fadeIn} >
                <Container>
                    <Row className="justify-center align-items-center">
                        <Col md={9} className="text-center mb-[6%]">
                            <h6 className="font-serif text-darkgray font-medium">
                                What we believe in? Quality-driven custom software development
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
                                    autoplay: {delay: 4500, disableOnInteraction: false},
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
            <section className="py-[160px] border-t lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                <Container>
                    <Row>
                        <Col className="mb-[8%]">
                            <h6 className="font-serif text-darkgray text-center font-medium mb-[25px] lg:mb-[15px]">
                                Our Commitment? Your success, powered by our software.
                            </h6>
                        </Col>
                    </Row>
                    <TextBox
                        className=""
                        grid="row-cols-1 row-cols-lg-2 row-cols-md-2 justify-center gap-y-10"
                        theme="text-box-style-02 flex-wrap"
                        data={TextBoxData02}
                        animation={fadeIn}/>
                </Container>
            </section>
            {/* Section End */}

            {/* Sextion Start */}
            <section className="pt-[120px] lg:pt-[95px] md:pt-[80px] sm:pt-[50px] switch-tabs">
                <div className="text-center">
                    <h6 className='text-darkgray font-medium font-serif mb-16 xs:mb-20'>Our Team</h6>
                </div>
                
                        <section className="py-20">
                            <Container>
                                <Team
                                    themeColor="dark"
                                    theme="team-style-01"
                                    className="text-white"
                                    data={TeamData01}
                                    grid="row-cols-1 row-cols-lg-4 row-cols-sm-2 landscape:row-cols-1 landscape:row-cols-lg-4 landscape:row-cols-sm-2 landscape:justify-center gap-y-10"
                                    animation={fadeIn}
                                    animationDelay={0.2}
                                    carousel={false}
                                    overlay={["#2ed47ce6", "#e8a626e6"]}
                                    carouselOption={{
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                        loop: true,
                                        navigation: true,
                                        autoplay: {delay: 3000, disableOnInteraction: false},
                                        pagination: {dynamicBullets: true, clickable: true},
                                        breakpoints: {
                                            1200: {slidesPerView: 3},
                                            992: {slidesPerView: 3},
                                            768: {slidesPerView: 2}
                                        }
                                    }}
                                />
                            </Container>
                        </section>
                   
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