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
import {resetForm, ScrollToAnchor, sendEmail} from "../../../Functions/Utilities";
import {Checkbox, Input, TextArea} from '../../../Components/Form/Form'
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import { ContactFormStyle03Schema} from "../../../Components/Form/FormSchema";
const HamburgerMenu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HamburgerMenu})))
const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))
const SearchBar = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.SearchBar})))

const Buttons = lazy(() => import('../../../Components/Button/Buttons'))
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
    ScrollToAnchor();
    return (<div style={props.style}>
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
        

        {/* Lazy Load HTML */}
        <InViewPort>
            {/* Section Start */}
            <section className="sm:pt-[50px] mb-[130px] md:mb-[50px] sm:mb-0 inline-block w-full">
                <Overlap>

                </Overlap>
            </section>
            {/* Section End */}
            
            {/* Section Start */}
            <m.section
                className="py-[160px] lg:py-[120px] md:py-[75px] sm:py-[50px] xs:py-[80px] xxs:py-[50px]"  {...fadeIn}>
                <Container>
                    <Row>
                        <Col className='mb-[6%]'>
                            <h6 className="font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]">
                                Let's discuss your project
                            </h6>
                        </Col>
                    </Row>
                    <Row className="justify-center">
                        <Col>
                            <Formik
                                initialValues={{name: '', email: '', phone: '', terms_condition: false}}
                                validationSchema={ContactFormStyle03Schema}
                                onSubmit={async (values, actions) => {
                                    actions.setSubmitting(true)
                                    const response = await sendEmail(values)
                                    response.status === "success" && resetForm(actions)
                                }}
                            >
                                {({isSubmitting, status}) => (
                                    <Form>
                                        <Row className="row-cols-1 row-cols-md-2">
                                            <Col className="mb-16 lg:mb-[25px] sm:mb-0">
                                                <Input showErrorMsg={false} type="text" name="name"
                                                       className="py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]"
                                                       labelClass="mb-[25px]" placeholder="Your name"/>
                                                <Input showErrorMsg={false} type="text" name="company"
                                                       className="py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]"
                                                       labelClass="mb-[25px]" placeholder="Your company"/>
                                                <Input showErrorMsg={false} type="email" name="email"
                                                       className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]"
                                                       labelClass="mb-[25px]" placeholder="Your email address"/>
                                                <Input showErrorMsg={false} type="tel" name="phone"
                                                       className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]"
                                                       labelClass="sm:mb-[25px]" placeholder="Your position"/>
                                            </Col>
                                            <Col className="mb-16 lg:mb-[25px]">
                                                <TextArea
                                                    className="border-[1px] border-solid border-[#dfdfdf] w-full h-full py-[15px] px-[20px] text-md resize-none"
                                                    name="comment" labelClass="h-full sm:h-[200px]"
                                                    placeholder="Your message"></TextArea>
                                            </Col>
                                            <Col className="text-left sm:mb-[20px]">
                                                <Checkbox type="checkbox" name="terms_condition"
                                                          className="inline-block mt-[4px]"
                                                          labelClass="flex items-start">
                                                    <span className="ml-[10px] text-sm w-[85%] md:w-[90%] xs:w-[85%]">I accept the terms & conditions and I understand that my data will be hold securely in accordance with the&nbsp;
                                                        <Link to="/privacy" target="_blank"
                                                              className="text-darkgray underline hover:text-fastblue">privacy policy</Link>.</span>
                                                </Checkbox>
                                            </Col>
                                            <Col className="text-right sm:text-center">
                                                <Buttons ariaLabel="form button" type="submit"
                                                         className={`text-xs tracking-[1px] rounded-none py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""}`}
                                                         themeColor={["#556fff", "#ff798e"]} size="md" color="#fff"
                                                         title="Send Message"/>
                                            </Col>
                                        </Row>
                                        <AnimatePresence>
                                            {status && <Row><Col xs={12}>
                                                <m.div initial={{opacity: 0}} animate={{opacity: 1}}
                                                       exit={{opacity: 0}}><MessageBox className="mt-[20px] py-[10px]"
                                                                                       theme="message-box01"
                                                                                       variant="success"
                                                                                       message="Your message has been sent successfully!"/>
                                                </m.div>
                                            </Col></Row>}
                                        </AnimatePresence>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </m.section>
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