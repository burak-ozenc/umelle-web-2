import React, {lazy} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Navbar, Row} from "react-bootstrap";
import * as Yup from 'yup';
import {AnimatePresence, m} from 'framer-motion';
import {Form, Formik} from 'formik';

// Functions
import {fadeInDown, fadeInUp, rotateInDown} from '../../../Functions/GlobalAnimations';

// Components
import {resetForm, ScrollToAnchor, sendEmail} from "../../../Functions/Utilities";
import { Input} from '../../../Components/Form/Form'
import InViewPort from '../../../Components/InViewPort';
import SEO from "../../../Components/Umelle/SEO";

// Data
const HamburgerMenu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HamburgerMenu})))
const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))
const SearchBar = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.SearchBar})))

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

const ComingSoon = (props) => {
    ScrollToAnchor();
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='Umelle Insurance Management System UI MS | Coming Soon'
            description='A revolutionary software created to cater to all insurance providers and with unmatched efficiency. Coming soon!'
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


        {/* Section Start */}
        <div className="h-[100vh] md:landscape:h-auto flex flex-col">
            <section
                className="p-[0px] md:landscape:py-[50px] overflow-hidden bg-[#fff] flex-1 flex items-center justify-center relative">
                <Row className="justify-center relative z-10">
                    <Col xs={12} className="text-center">
                        <m.h1 {...{...fadeInDown, transition: {delay: 1, ease: "easeOut", duration: 0.5}}}
                              className="inline-block font-serif text-gradient bg-gradient-to-r from-[#2CBAFC] to-[#902CFC] font-semibold pb-[10px] xl:text-[50px] xl:leading-none xs:text-[38px]">We
                            are <br/>launching soon
                        </m.h1>
                        {/*<m.p {...{...fadeInDown, transition: {delay: 1.7, ease: "easeOut", duration: 0.5}}}*/}
                        {/*     className="text-xmd w-2/5 mx-auto mb-[30px] xl:text-xs xs:w-[90%]">We're currently*/}
                        {/*    working hard on this page. Subscribe our newsletter to get update when it'll be live.*/}
                        {/*</m.p>*/}
                    </Col>
                </Row>

                {/* Elements */}
                <div className="h-full w-full min-w-[1500px] absolute bottom-0 left-1/2 -translate-x-1/2">
                    <m.img
                        {...{...rotateInDown, transition: {delay: 3.5, ease: "easeOut", duration: 0.5}}}
                        alt="stick"
                        src="https://i.ibb.co/ss2LhDx/154x158.png"
                        className="absolute top-1/4 left-[20%] max-w-[200px] w-[10%]"
                    />
                    <m.img
                        {...{...rotateInDown, transition: {delay: 2.7, ease: "easeOut", duration: 0.5}}}
                        alt="coffee-cup"
                        src="https://i.ibb.co/0FGKr9D/207x199-01.png"
                        className="absolute top-1/4 right-[20%]"
                    />
                    {/*<m.img*/}
                    {/*    {...{...rotateInDown, transition: {delay: 2.5, ease: "easeOut", duration: 0.5}}}*/}
                    {/*    alt="envelope"*/}
                    {/*    src="https://i.ibb.co/4JMG5Fd/234x211-01.png"*/}
                    {/*    className="absolute top-[calc(25%+100px)] right-[15%]"*/}
                    {/*/>*/}
                    <m.img
                        {...{...fadeInUp, transition: {delay: 3, ease: "easeOut", duration: 0.5}}}
                        alt="plant"
                        src="https://i.ibb.co/Ht0cxFH/293x240-01.png"
                        className="absolute bottom-[0px] left-[calc(15%-220px)] max-w-[300px] w-[15%]"
                    />
                    <m.img
                        {...{...fadeInUp, transition: {delay: 3, ease: "easeOut", duration: 0.5}}}
                        alt="alphabate"
                        src="https://i.ibb.co/3MNpW6P/d027814f-af17-471b-a946-1f3646fd2604.png"
                        className="absolute bottom-[65%] right-[0] max-w-[200px] w-[10%]"
                        width="200"
                        height="200"
                    />
                    <m.img
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 2.5, ease: "easeOut"}}
                        alt="brush"
                        src="https://i.ibb.co/4JMG5Fd/234x211-01.png"
                        className="absolute bottom-[0%] right-[0%]"
                    />
                </div>


             
            </section>
        </div>
        {/* Section End */}

        {/* Lazy Load HTML */}
        <InViewPort>
            {/* Section Start */}
           

        </InViewPort>
    </div>)
}

export default ComingSoon