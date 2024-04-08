import React, {lazy, useEffect, useRef, useState} from 'react'

// Libraries
import {useNavigate} from 'react-router-dom';
import {Accordion, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {AnimatePresence, domMax, LazyMotion, m} from 'framer-motion';
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
import Counter from "../../../Components/Counters/Counter";
import {CounterData05} from "../../../Components/Counters/CounterData";
import Services from "../../../Components/Services/Services";
import {serviceData5} from "../../../Components/Services/ServicesData";
import {ProcessStepData02} from "../../../Components/ProcessStep/ProcessStepData";
import AccordionSolutions from "../../../Components/Accordion/AccordionSolutions";
import Buttons from "../../../Components/Button/Buttons";
import {ContactFormStyle02Schema} from "../../../Components/Form/FormSchema";
import ReCAPTCHA from "react-google-recaptcha";
import {AccordionDataSolutions} from "../../../Components/Accordion/AccordionData";
import * as emailjs from "@emailjs/browser";
import SEO from "../../../Components/Umelle/SEO";
import { useLocation } from 'react-router-dom';
import {Parallax} from 'react-scroll-parallax';
import ReactPixel from "react-facebook-pixel";
import UmelleHeader from "../../../Components/Header/UmelleHeader";
const ProcessStep = lazy(() => import('../../../Components/ProcessStep/ProcessStep'))
const MessageBox = lazy(() => import('../../../Components/MessageBox/MessageBox'))
const SideButtons = lazy(() => import("../../../Components/SideButtons"))

// Filter the blog data category wise
const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

// var hash = window.decodeURIComponent(window.location.hash);

const HomeStartupPage = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        // Your existing useEffect code for handling hash, if any, remains here
        analyticsEvent('page_view',null);

        // Google Analytics page view tracking
        if (window.gtag) {
            window.gtag('config', 'G-3XCZ8B0MR9', {
                'page_path': location.pathname + location.search,
            });
        }
    }, [location]); // This ensures the tracking code runs every time the route changes
    ScrollToAnchor();
    const form1 = useRef(null)
    const recaptcha = useRef()
    const [anchorKey, setAnchorKey] = useState(0)
    // ScrollToAnchor();
    console.log(window.location.hash.split('#'))


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
                    navigate(`/contact-success-custom`);
                },
                (error) => {
                    console.log('FAILED...', error);
                    setSent(false)
                    setMessage("An error occured while submitting. Please send email to admin@umelle.com")
                },
            );
    };
    
    
    
    // const sendEmail = (values) => {
    //     emailjs
    //         .send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_FEATURES_TEMPLATE_ID, values, {
    //             publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
    //         })
    //         .then(
    //             () => {
    //                 console.log('SUCCESS!');
    //                 setSent(false)
    //                 setMessage("We received your application. Thanks for submitting.")
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error);
    //                 setSent(false)
    //                 setMessage("An error occured while submitting. Please send email to admin@umelle.com")
    //             },
    //         );
    // };

    
    
        // const hashParts = window.location.hash.split('#');
    // if (hashParts.length > 1) {
    //     const hash = hashParts.slice(-1)[0];
    //     console.log(hash)
    // }    

    // const scrollToAnchor = () => {
    //     const hashParts = window.location.hash.split('#');
    //     if (hashParts.length > 1) {
    //         const hash = hashParts.slice(-1)[0];
    //
    //
    //         function searchByKey(array, id) {
    //             for (let i = 0; i < array.length; i++) {
    //                 if (array[i].id === id) {
    //                     return array[i].key;
    //                 }
    //             }
    //             // Return null if id is not found
    //             return 0;
    //         }
    //
    //         console.log(hash)
    //         console.log(searchByKey(AccordionDataSolutions, hash))
    //         setAnchorKey(searchByKey(AccordionDataSolutions, hash))
    //         // document.querySelector(`#${hash}`).scrollIntoView();
    //     }
    // };
    //
    // scrollToAnchor();
    // window.onhashchange = scrollToAnchor;


    useEffect(() => {
        // Decode entities in the URL
        // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
        window.location.hash = window.decodeURIComponent(window.location.hash);
        // const scrollToAnchor = () => {
        const hashParts = window.location.hash.split('#');
        if (hashParts.length > 1) {
            const hash = hashParts.slice(-1)[0];


            function searchByKey(array, id) {   
                for (let i = 0; i < array.length; i++) {
                    if (array[i].id === id) {
                        return array[i].key;
                    }
                }
                // Return null if id is not found
                return 0;
            }
            
            setAnchorKey(searchByKey(AccordionDataSolutions, hash))
            // document.querySelector(`#${hash}`).scrollIntoView();
        }
        // };

        // scrollToAnchor();
        // window.onhashchange = scrollToAnchor;

        // Cleanup function to remove event listener
        return () => {
            window.onhashchange = null;
        };
    }, []); // Empty dependency array to run only once after initial mount
    

    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='Insurance and Operations Management for Pooled Insurance Providers'
            description='Our custom architecture allows ultimate flexibility from superior member and user management to fully customizable features and functionalities.'
            name='UMELLE'
            type='article'/>
        {/*SEO Ends*/}

        {/* Header Start */}
        <UmelleHeader/>
        {/* Header End */}

        <SideButtons/>

        {/* Section start */}
        <section className="overflow-visible cover-background"
                 style={{backgroundImage: `url(/assets/img/SolutionsHeader_v1.webp)`}}>
            <Container>
                <LazyMotion strict features={domMax}>
                    <Row
                        className="full-screen  pt-20 md:h-[650px] sm:h-[350px] xs:h-[450px] align-items-center justify-center">
                        <Col xs={12} lg={6} md={6}
                             className="justify-center items-center my-0 mx-auto relative">
                            <h6 className="font-serif block leading-[48px] mb-[35px] font-light text-black xs:text-base xs:mb-[40px]"
                                style={{fontSize:'2.2em'}}
                            >
                                Tailor-Made Insurance Data Software Designed Around Your Business Needs
                            </h6>
                            <m.span initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                    animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
                                    transition={{duration: 0.5, delay: 0.8, ease: "easeIn"}}
                                    style={{fontSize:'1.8em'}}
                                    className="font-serif block leading-[28px] mb-[35px] font-light text-black xs:text-base xs:mb-[20px]">
                                The Premier Choice for Pooled Insurance Providers
                            </m.span>
                        </Col>
                        <Col xs={12} lg={6} md={6}
                             className="justify-center items-center my-0 mx-auto relative flex flex-col">
                            <Buttons ariaLabel="button"
                                     href="/contact"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center mt-4"
                                     themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                     title="Schedule a meeting"/>
                        </Col>
                    </Row>
                </LazyMotion>
            </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section className="bg-white pt-20 switch-tabs">
            <Col className="text-center">
                <h6 className="font-serif text-darkgray text-center font-medium mb-[2%]">
                    Empowering Pooled Insurance with Tailor-Made Solutions
                </h6>
                <p className="m-[50px] text-[23px] mb-[10px]">
                    Off-the-shelf software often falls short. Recognizing this gap, we offer solutions and experience to
                    help meet your precise needs by providing targeted benefits through our core competencies.
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
                    <m.section className="py-20 white">
                        <Container>
                            <Row className="justify-center">
                                <Col lg={10} md={10}>
                                    {anchorKey !== 0 ?
                                        (<AccordionSolutions theme="accordion-style-03" animation={fadeIn}
                                                             activeKey={anchorKey}/>)
                                        :
                                        (<AccordionSolutions theme="accordion-style-03" animation={fadeIn}
                                                             activeKey={9}/>)
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </m.section>
                </Tab>
                {/* Accordion style 03 ( Light ) end */}
            </Tabs>
        </section>
        {/* Section End */}

        {/* Lazy Load HTML */}
        <InViewPort>

            {/* Info Banner Style 07 */}
            {/* <section className="bg-lightgray lg:py-[5px] md:py-[75px]  xs:py-[50px]">
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mt-5 mb-[3%]">
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
                                className="font-medium text-darkgray mb-[100px] lg:mb-[15px] font-serif xs:text-[30px] m-[100px]">
                                Empowering Pooled Insurance with Tailor-Made Solutions
                            </m.h5>
                        </m.div>
                        <m.div className="col-12 p-0 col-lg-6" {...{...fadeIn, transition: {delay: 0.36}}} >
                            <m.div
                                className="bg-gradient-to-r from-[#3844F7]  to-[#902CFC] px-20 py-16 lg:py-20 lg:px-16 md:p-20 text-white text-center">
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
            </section> */}
            {/* Info Banner Style 07 */}

            {/* Section Start */}
        <section className="py-[55px] lg:py-[95px] md:py-[70px] sm:py-[50px] relative overflow-visible">
            <Container>
                <Row className="items-center">
                    <m.div className="col-lg-6 relative mt-[70px] lg:mt-[30px] md:mb-[50px]" {...fadeIn}>
                        <div className="relative">
                            <Parallax className="lg-no-parallax w-[70%] rounded-[6px] lg:relative lg:!top-[-20px]"
                                      speed={0}>
                                <div
                                    className="absolute top-0 left-0 w-full h-full rounded-[6px] opacity-50 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                <img loading="lazy" src="/assets/img/landing_page_section_back-01.webp"
                                     className="rounded-[6px] w-full" width="394.8" height="466.34" alt="our-process"/>
                            </Parallax>
                            <Parallax
                                className="lg-no-parallax flex rounded-[6px] justify-center items-center w-[70%] bg-no-repeat absolute bottom-0 right-[15px] lg:!top-0 lg:ml-auto"
                                speed={20}>
                                <img loading="lazy" src="/assets/img/landing_page_section_front-01.webp"
                                     className="rounded-[6px] w-full" width="394.8" height="466.34" alt="our-process"/>
                            </Parallax>
                            {/* <img src="/assets/img/landing_page_section_front-01.png" alt=""></img> */}
                        </div>
                    </m.div>
                    <m.div className="col-lg-5 offset-lg-1" {...{...fadeIn, transition: {delay: 0.5}}}>
                        <div className="font-serif text-xmd font-medium mb-[30px]">
                            <span className="w-[50px] h-[1px] bg-fastblue inline-block align-middle mr-[20px]"></span>
                            <span
                                className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] inline-block">Customization at Its Core</span>
                        </div>
                        <h5 className="font-serif text-darkgray font-medium mb-[30px] w-full">Empowering Pooled Insurance with Tailor-Made Solutions</h5>
                        <p className="w-[95%] mb-[35px]">What truly sets our solution apart is our custom architecture. 
                        Recognizing that no two insurance providers are the same, 
                        we offer the ultimate flexibility: you can add features and functions based on your business needs and ensure your program fits nicely with your business requirements.</p>
                    </m.div>
                </Row>
            </Container>
        </section>
        {/* Section End */}

            {/* Section Start */}
            <m.section className="bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
                <Container>
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
                                            const response = await sendEmail(values)
                                            response.status === "success" && resetForm(actions, recaptcha);
                                            ReactPixel.track('featuresFormSubmit', values);
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

            
            {/*/!* Section Start *!/*/}
            <m.section className="bg-lightgray py-[80px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                <h6 className="font-serif text-gray-900 text-center font-medium mb-24">Let's redefine what's possible
                    together</h6>
                <Container>
                    <ProcessStep grid="row-cols-1 row-cols-sm-2 row-cols-lg-5 gap-y-10" className=""
                                 theme="process-step-style-03" data={ProcessStepData02} animation={fadeIn}/>
                </Container>
            </m.section>
            {/*/!* Section End *!/*/}

            {/* Section Start */}
            <m.section className="bg-white">
                <Container>
                    <Row>
                        <Col>
                            <h6 className="font-serif text-center text-black justify-center align-items-center m-5">
                                Transforming Industries: Real-World Success Story
                            </h6>
                        </Col>
                    </Row>
                    <Row className="mt-[40px]">
                        <Col md={4}  xs={12} className="mb-3">
                            <div>
                                <p>
                                    <span className="font-bold text-black">Client Name: </span>
                                    ACWA JPIA
                                </p>
                                <br/>
                                <p>
                                    <span className="font-bold text-black">Industry: </span>
                                    Pooled Insurer for Water Supply and Infrastructure
                                </p>
                                <br/>
                                <p>
                                    <span className="font-bold text-black">Client Overview: </span>
                                    ACWA JPIA is a pooled insurer, providing insurance services to more than 350
                                    members. Part of the larger JPIA group of like-minded Insurers and Service
                                    Providers,
                                    they provide top-level services to their members and clients.
                                </p>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Row className="justify-center">
                                <Col lg={10} md={10}>
                                    <div
                                        id="testx"
                                        className={`accordion-style-03 ${props.themeColor}${props.className ? ` ${props.className}` : ""}`}>
                                        <Accordion defaultActiveKey={1}>
                                            <div id={1} className={`accordion-item-wrapper`}
                                                 key={1}
                                                 {...{
                                                     ...props.animation,
                                                     transition: {delay: 0 * props.animationDelay}
                                                 }}
                                            >
                                                <Accordion.Item key={1} eventKey={null}>
                                                    <Accordion.Header>
                                                        The Challenge
                                                    </Accordion.Header>

                                                    <Accordion.Body>
                                                        <div>
                                                            <p>
                                                                ACWA JPIA saw the opportunity to optimize and modernize
                                                                their operations and business management software.
                                                            </p>
                                                            <br/>
                                                            <p>
                                                                Canned products were dragging the organization down with
                                                                undue cost and complex procedures that didn't meet their
                                                                standards.
                                                            </p>
                                                            <br/>
                                                            <p>
                                                                Using several vendors to provide services created
                                                                issues, as some services were not meeting scalability
                                                                and flexibility standards.
                                                            </p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>
                                            <div id={2} className={`accordion-item-wrapper`}
                                                 key={2}
                                                 {...{
                                                     ...props.animation,
                                                     transition: {delay: 0 * props.animationDelay}
                                                 }}
                                            >
                                                <Accordion.Item key={2} eventKey={2}>
                                                    <Accordion.Header>
                                                        The Solution
                                                    </Accordion.Header>

                                                    <Accordion.Body>
                                                        <div>
                                                            <p>
                                                                We crafted an end-to-end member and resource management
                                                                system aimed solely at solving the problems of the
                                                                company and their members. The system offers a full host
                                                                of features, including:
                                                            </p>
                                                            <br/>
                                                            <ol>
                                                                <li>Business Intelligence, Reporting and Analytics</li>
                                                                <li>Custom Wizzard</li>
                                                                <li>User Management</li>
                                                                <li>Member Management and Services</li>
                                                                <li>Data Repositories and Templates</li>
                                                                <li>Automated Invoicing</li>
                                                                <li>Liability</li>
                                                                <li>Workers Compensation</li>
                                                                <li>Property</li>
                                                                <li>Incident and Claims Management</li>
                                                                <li>Dashboard</li>
                                                                <li>Contact Management</li>
                                                                <li>Finance Management</li>
                                                            </ol>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>

                                            <div id={3} className={`accordion-item-wrapper`}
                                                 key={3}
                                                 {...{
                                                     ...props.animation,
                                                     transition: {delay: 0 * props.animationDelay}
                                                 }}
                                            >
                                                <Accordion.Item key={3} eventKey={3}>
                                                    <Accordion.Header>
                                                        Process and Collaboration:
                                                    </Accordion.Header>

                                                    <Accordion.Body>
                                                        <div>
                                                            <p>
                                                                Our collaboration used the strengths of the Agile
                                                                methodology to maximize feedback and allow for
                                                                successful module iterations that ultimately delivered
                                                                on the organization's needs.
                                                            </p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>

                                            <div id={4} className={`accordion-item-wrapper`}
                                                 key={4}
                                                 {...{
                                                     ...props.animation,
                                                     transition: {delay: 0 * props.animationDelay}
                                                 }}
                                            >
                                                <Accordion.Item key={4} eventKey={4}>
                                                    <Accordion.Header>
                                                        The Impact
                                                    </Accordion.Header>

                                                    <Accordion.Body>
                                                        <div>
                                                            <p>
                                                                This process also allowed our team to understand the
                                                                business in more detail, which led to many breakthroughs
                                                                and innovations in the way the solution was delivered.
                                                                Through a robust relationship and collaboration, UMELLE
                                                                was able to deploy this experience to develop a unique
                                                                solution and optimize the operations of several key
                                                                functions; allowing the organization to focus on new
                                                                horizons.
                                                            </p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>


                                            {/*<div id={item.id} className={`accordion-item-wrapper`}*/}
                                            {/*     key={key}*/}
                                            {/*     {...{*/}
                                            {/*         ...props.animation,*/}
                                            {/*         transition: {delay: key * props.animationDelay}*/}
                                            {/*     }}*/}
                                            {/*>*/}
                                            {/*    <Accordion.Item key={key} eventKey={key}>*/}
                                            {/*        {item.title &&*/}
                                            {/*            <Accordion.Header>*/}
                                            {/*                {item.icon &&*/}
                                            {/*                    <i className={`text-[2em] m-2 ${item.icon}`}></i>}*/}
                                            {/*                {item.time && <span*/}
                                            {/*                    className="panel-time">{item.time}</span>}*/}
                                            {/*                {item.title && <span*/}
                                            {/*                    className="panel-title">{item.title}</span>}*/}
                                            {/*                {item.author && <span*/}
                                            {/*                    className="panel-speaker">{item.author}</span>}*/}
                                            {/*            </Accordion.Header>*/}
                                            {/*        }*/}
                                            {/*        {item.content &&*/}
                                            {/*            <Accordion.Body> {item.content} </Accordion.Body>}*/}
                                            {/*    </Accordion.Item>*/}
                                            {/*</div>*/}
                                        </Accordion>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section Start */}

            {/* Section Start */}
            <m.section
                className="bg-lightgray py-[55px] border-t lg:py-[100px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center m-5 mb-[7%]">
                            <h6 className="font-serif text-black font-medium">
                                Crafted for Unmatched Efficiency
                            </h6>
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

            {/* CTA Banner Section Start */}
            <section className="lg:pt-[160px] md:pt-[10px] sm:pt-[50px]">
                <Container fluid>
                    <Row style={{backgroundImage: `url('/assets/img/HomePage_CTRBanner_LV-01.webp')`}}
                         className="cover-background relative cover-background lg:py-[90px] md:py-[75px] sm:py-[50px]">
                        <Col xs={12} className="text-center my-[5rem] md:my-[7.5rem]">
                            <div className="justify-center align-items-center text-center d-flex flex-col">
                                <h6 className="text-center font-serif bg-transparent text-black m-3 w-[400px]">
                                Streamline Your Operations Now
                                </h6>
                            </div>
                            <Buttons ariaLabel="button"
                                     href="/contact"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center"
                                     themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                     title="Schedule a Meeting"/>
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
        <div id="test-sol"
        ></div>
    </div>)
}

export default HomeStartupPage