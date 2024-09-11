import React, {lazy, useRef, useState, useEffect} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {AnimatePresence, m} from 'framer-motion';
import {Form, Formik} from 'formik';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent, resetForm, ScrollToAnchor} from "../../../Functions/Utilities";
import {Checkbox, Input} from '../../../Components/Form/Form'
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import {ContactFormStyle02Schema} from "../../../Components/Form/FormSchema";
import ReCAPTCHA from "react-google-recaptcha";
import * as emailjs from "@emailjs/browser";

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const Buttons = lazy(() => import('../../../Components/Button/Buttons'))
const MessageBox = lazy(() => import('../../../Components/MessageBox/MessageBox'))
const SEO = lazy(() => import('../../../Components/Umelle/SEO'))

// Filter the blog data category wise
const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const CustomSolution = (props) => {
    ScrollToAnchor();

    const form1 = useRef(null)
    const recaptcha = useRef()
    
    const [sent, setSent] = useState(true)
    const [message, setMessage] = useState('')
    
    
    useEffect(() => {
        analyticsEvent('page_view',null);
    },[])
    
    const sendEmail = (values) => {
        emailjs
            .send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_FEATURES_TEMPLATE_ID, values, {
                publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    window.location.href = process.env.REACT_APP_CONTACT_SUCCESS_2
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
            <section
                className="py-[90px] lg:py-[120px] md:py-[80px] xs:py-[50px] bg-transparent cover-background relative cover-background" {...fadeIn}
                style={{backgroundImage: `url(/assets/img/CheckBox4-01.webp)`}}
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
                                            analyticsEvent('featuresFormSubmit',values);
                                            const response = await sendEmail(values);
                                            response.status === "success" && analyticsEvent('FeaturesFunctions',values);
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
                                                        <Checkbox type="checkbox" name="property"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                            Property   
                                                            </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="generalLiability"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                            General Liability
                                                            </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="workersCompensation"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                            Workers Compensation  
                                                            </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="claims"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                            Claims  
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
                                                            <Checkbox type="checkbox" name="cntactManagement"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                            Contact Management
                                                            </span>
                                                            </Checkbox>                                                           
                                                        </Col>
                                                        <Col xl={6} md={6} xs={12}>
                                                            <Checkbox type="checkbox" name="compliance"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                            Compliance 
                                                            </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="certificatesOfCoverage"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                            Certificates of Coverage
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
                                                                      name="reportingAnalytics"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                            Reporting/Analytics 
                                                            </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox"
                                                                      name="underwriting"
                                                                      className="inline-block"
                                                                      labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                            Underwriting 
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
                                                <Col>
                                                    <Row className="p-1 m-2">
                                                        <h4 className="text-center font-serif"
                                                            style={{color: '#FFFFFF'}}>
                                                            Functions
                                                        </h4>
                                                        <Col Col xl={10} md={10} xs={12}>
                                                            <Checkbox type="checkbox" name="automatedInvoicing "
                                                                className="inline-block"
                                                                labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                                Automated Invoicing 
                                                            </span>
                                                            </Checkbox>
                                                            <Checkbox type="checkbox" name="processWizard "
                                                                className="inline-block"
                                                                labelClass="flex items-center mb-[5px]">
                                                            <span className="ml-[10px] text-white font-serif">
                                                                Process Wizard 
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
                                                             title="Free Quote"/>
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

export default CustomSolution