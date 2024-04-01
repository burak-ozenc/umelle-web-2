import React, {lazy, useRef, useState} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row, Tab, Tabs} from "react-bootstrap";
import {AnimatePresence, m} from 'framer-motion';
import {Form, Formik} from 'formik';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {resetForm, ScrollToAnchor} from "../../../Functions/Utilities";
import {Checkbox, Input} from '../../../Components/Form/Form'
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import {IconWithTextData_02} from "../../../Components/IconWithText/IconWithTextData";
import Accordions from "../../../Components/Accordion/Accordion";
import ProgressBar from "../../../Components/ProgressBar/ProgressBar";
import {ProgressBarData02} from "../../../Components/ProgressBar/ProgressBarData";
import {ContactFormStyle02Schema} from "../../../Components/Form/FormSchema";
import ReCAPTCHA from "react-google-recaptcha";
import * as emailjs from "@emailjs/browser";


const IconWithText = lazy(() => import('../../../Components/IconWithText/IconWithText'))
const HamburgerMenu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HamburgerMenu})))
const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const Buttons = lazy(() => import('../../../Components/Button/Buttons'))
const ReactCustomScrollbar = lazy(() => import("../../../Components/ReactCustomScrollbar"))
const MessageBox = lazy(() => import('../../../Components/MessageBox/MessageBox'))
const SocialIcons = lazy(() => import("../../../Components/SocialIcon/SocialIcons"))
const SideButtons = lazy(() => import("../../../Components/SideButtons"))
const StaticInstagram = lazy(() => import('../../../Components/Instagram/StaticInstagram'))
const StartupPageBannerSlider = lazy(() => import('./StartupBanner'))
const SEO = lazy(() => import('../../../Components/Umelle/SEO'))


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

    const form1 = useRef(null)
    const recaptcha = useRef()
    
    const [sent, setSent] = useState(true)
    const [message, setMessage] = useState('')

    const sendEmail = (values) => {
        emailjs
            .send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_FEATURES_TEMPLATE_ID, values, {
                publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSent(false)
                    setMessage("We received your application. Thanks for submitting.")
                },
                (error) => {
                    console.log('FAILED...', error);
                    setSent(false)
                    setMessage("An error occured while submitting. Please send email to admin@umelle.com")
                },
            );
    };
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='Test React Helmet'
            description='Beginner friendly page for learning React Helmet.'
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
            <m.section
                className="py-[55px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px] bg-lightgray lg:px-0 md:px-0 sm:px-0 xs:px-0">
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
            <section
                className="py-[90px] lg:py-[120px] md:py-[80px] xs:py-[50px] bg-transparent cover-background relative cover-background" {...fadeIn}
                style={{backgroundImage: `url(/assets/img/CheckBox4-01.png)`}}
            >
                {sent ?
                    (<Container>
                        <Row>
                            <Col className='mb-[6%]'>
                                <h6 className="font-serif text-white text-center font-medium mb-[25px] lg:mb-[15px]">
                                    Stop overpaying for unused features and never miss out on the functionalities you
                                    need
                                </h6>
                                <div>
                                    <p className="font-serif text-white text-center font-medium mb-[1px] lg:mb-[15px]">
                                        Shape your custom software experience now by checking the functions and features
                                        you need
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="m-auto">
                            <Col xl={12} lg={12} md={12}>
                                <Formik
                                    initialValues={{name: '', email: '', phone: '', comment: '', recaptcha: ''}}
                                    validationSchema={ContactFormStyle02Schema}
                                    onSubmit={async (values, actions) => {
                                        actions.setSubmitting(true)
                                        if (values.recaptcha !== '') {
                                            const response = await sendEmail(values)
                                            response.status === "success" && resetForm(actions, recaptcha);
                                        } else {
                                            recaptcha.current.captcha.classList.add("error")
                                        }
                                    }}
                                >
                                    {({isSubmitting, status, setFieldValue}) => (
                                        <Form ref={form1}>
                                            <Row>
                                                <Col xl={7} md={7} xs={12}>
                                                    <Row className="p-1 m-2">
                                                        <h4 className="text-center font-serif"
                                                            style={{color: '#FFFFFF'}}>
                                                            Features
                                                        </h4>
                                                        <Col xl={6} md={6} xs={12}>
                                                            <Checkbox type="checkbox" name="certificatesOfCoverage"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Certificates of Coverage
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="policyManagement"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Policy Management 
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="vendorManagement "
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Vendor Management 
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="iabilityPayroll"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Liability Payroll
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="claims"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Claims  
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="cntacts"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Contacts  
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="programs"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Programs   
                                                    </span>
                                                            </Checkbox>
                                                        </Col>
                                                        <Col xl={6} md={6} xs={12}>
                                                            <Checkbox type="checkbox" name="externalInternalCompliance"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        External/Internal Compliance 
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="property"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Property   
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="standAlonePrograms "
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Stand Alone Programs 
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="kPIsScorecards"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        KPIs/Scorecards 
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox"
                                                                      name="reportingAnalyticsDashboards "
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Reporting/Analytics/Dashboards 
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox"
                                                                      name="underwritingAndQuestionnaires "
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Underwriting and Questionnaires 
                                                    </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="otherFeatures"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Other
                                                    </span>
                                                            </Checkbox>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col className="p-1 m-2" xl={4} md={4} xs={12}>
                                                    <h4 className="text-center font-serif" style={{color: '#FFFFFF'}}>
                                                        Functions
                                                    </h4>
                                                    <Checkbox type="checkbox" name="automatedInvoicing "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Automated Invoicing 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="programManagementWizard "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Program Management Wizard 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="internalChat "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Internal Chat 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="customBusinessSettings "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Custom Business Settings 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="discountManagement "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Discount Management 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="automatedCertificateRenewal "
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Automated Certificate Renewal 
                                                    </span>
                                                    </Checkbox>
                                                    <Checkbox type="checkbox" name="otherFunction"
                                                              className="inline-block"
                                                              labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-white font-serif">
                                                        Other 
                                                    </span>
                                                    </Checkbox>
                                                </Col>
                                            </Row>
                                            <Row className="row-cols-1 row-cols-md-1 mt-5">
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
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={5} lg={5}>
                                                    {process.env.REACT_APP_GRECAPTCHA_API_KEY && (
                                                        <ReCAPTCHA
                                                            ref={recaptcha}
                                                            className="mb-[35px]"
                                                            sitekey={process.env.REACT_APP_GRECAPTCHA_API_KEY}
                                                            onChange={(response) => {
                                                                setFieldValue("recaptcha", response)
                                                            }}
                                                        />
                                                    )}
                                                </Col>
                                                <Col xs={12} md={5} lg={5}>
                                                    <Buttons ariaLabel="form button" type="submit"
                                                             className={`font-medium font-serif rounded-none uppercase text-[11px]${isSubmitting ? " loading" : ""}`}
                                                             themeColor={["#0039e3", "#8600d4"]} size="md" color="#fff"
                                                             title="get feedback"/>
                                                    <AnimatePresence>
                                                        {status && <m.div initial={{opacity: 0}} animate={{opacity: 1}}
                                                                          exit={{opacity: 0}}><MessageBox
                                                            className="mt-[35px] py-[10px] tracking-[1px]"
                                                            theme="message-box01"
                                                            variant="success"
                                                            message="Your message has been sent successfully!"/>
                                                        </m.div>}
                                                    </AnimatePresence>
                                                </Col>
                                            </Row>
                                        </Form>
                                    )}
                                </Formik>
                            </Col>
                        </Row>
                    </Container>)
                    :
                    (
                        <Container>
                            <Row md={12} className="justify-center text-black font-[2em] align-items-center text-center m-5 min-w-5">
                            <p style={{ color: 'white' }}> {message}</p>
                            </Row>

                        </Container>
                    )
                }

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
                    <Row style={{backgroundImage: `url('/assets/img/Untitled-6-01.png')`}}
                         className="cover-background relative cover-background lg:py-[90px] md:py-[75px] sm:py-[50px] text-center">
                        <Col xs={12} className="text-center my-[5rem] md:my-[7.5rem]">
                            <div className="justify-center align-items-center text-center d-flex flex-col">
                                <h6 className="text-center bg-white m-3 w-[300px]">
                                    Let's discuss your project
                                </h6>
                                <Link to="/contact">
                                    <Buttons ariaLabel="button"
                                             className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center mt-4"
                                             themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                             title="Schedule a meeting"/>
                                </Link>
                            </div>
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