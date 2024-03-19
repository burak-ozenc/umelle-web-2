import React, {lazy, useEffect, useRef, useState} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Accordion, Col, Container, Navbar, Row, Tab, Tabs} from "react-bootstrap";
import * as Yup from 'yup';
import {AnimatePresence, domMax, LazyMotion, m} from 'framer-motion';
import {Form, Formik} from 'formik';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {resetForm, sendEmail} from "../../../Functions/Utilities";
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

const HamburgerMenu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HamburgerMenu})))
const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const ProcessStep = lazy(() => import('../../../Components/ProcessStep/ProcessStep'))
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

// var hash = window.decodeURIComponent(window.location.hash);

const HomeStartupPage = (props) => {
    const form1 = useRef(null)
    const recaptcha = useRef()
    const [anchorKey, setAnchorKey] = useState(0)
    // ScrollToAnchor();
    console.log(window.location.hash.split('#'))


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

            console.log('hash ', hash)
            console.log('key ', searchByKey(AccordionDataSolutions, hash))
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
        {/* Header Start */}
        <Header topSpace={{md: true}} type="reverse-scroll">
            <HeaderNav fluid="fluid" theme="white" expand="lg"
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
                 style={{backgroundImage: `url("https://i.ibb.co/hHCtj1f/homeheader-v1-01.png")`}}>
            <Container>
                <LazyMotion strict features={domMax}>
                    <Row
                        className="full-screen  pt-20 md:h-[650px] sm:h-[350px] xs:h-[450px] align-items-center justify-center">
                        <Col xs={6} lg={6} md={6}
                             className="justify-center items-center my-0 mx-auto relative flex flex-col">
                            <h6 className="font-serif block text-[42px] leading-[48px] mb-[35px] font-light text-black xs:text-base xs:mb-[40px]">
                                Tailor-Made Insurance Data Software Designed Around Your Business Needs
                            </h6>
                            <m.span initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                    animate={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
                                    transition={{duration: 0.5, delay: 0.8, ease: "easeIn"}}
                                    className="font-serif block text-[19px] leading-[28px] mb-[35px] font-light text-black xs:text-base xs:mb-[20px]">
                                The Premier Choice for Pooled Insurance Providers
                            </m.span>
                        </Col>
                        <Col xs={6} lg={6} md={6}
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
                <h6 className="font-serif text-darkgray text-center font-medium mb-[5%]">
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
            <section className="bg-lightgray lg:py-[5px] md:py-[75px]  xs:py-[50px]">
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mt-5 mb-[7%]">
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
                                className="font-medium text-darkgray mb-[25px] lg:mb-[15px] font-serif xs:text-[30px] m-[100px]">
                                Empowering Pooled Insurance with Tailor-Made Solutions
                            </m.h5>
                        </m.div>
                        <m.div className="col-12 p-0 col-lg-6" {...{...fadeIn, transition: {delay: 0.36}}} >
                            <m.div
                                className="bg-gradient-to-r from-[#3844F7]  to-[#902CFC] px-24 py-28 lg:py-20 lg:px-16 md:p-20 text-white text-center">
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
                className="bg-white border-t lg:py-[20px] md:py-[95px] sm:py-[80px] xs:py-[50px] mb-5" {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center m-5 mb-[7%]">
                            <h6 className="font-serif text-black font-medium">Crafted for Unmatched Efficiency</h6>
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
            <m.section>
                <Container>
                    <Row>
                        <h6 className="text-center text-black justify-center align-items-center m-5">
                            Transforming Industries: Real-World Success Story
                        </h6>
                    </Row>
                    <Row className="mt-[40px]">
                        <Col md={4}>
                            <div>
                                <p>
                                    <span className="font-bold">Client Name: </span>
                                    ACWA JPIA
                                </p>
                                <br/>
                                <p>
                                    <span className="font-bold">Industry: </span>
                                    Pooled Insurer in the Water and Water Infrastructure
                                </p>
                                <br/>
                                <p>
                                    <span className="font-bold">Client Overview: </span>
                                    ACWA JPIA is a pooled insurer providing insurance services to more than 350
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
                                                <Accordion.Item key={1} eventKey={1}>
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
            <m.section className="py-[60px] lg:py-[120px] md:py-[80px] xs:py-[50px] bg-lightgray" {...fadeIn}>
                <Container>
                    <Row>
                        <Col className='mb-[6%]'>
                            <h6 className="font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]">
                            Stop overpaying for unused features and never miss out on the functionalities you
                                need. Build your own solution by selecting the Features and Functions you need. Send your build to our solution team and we will get back to you:
                            </h6>
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
                                            <Col xl={7} md={7} xs={7}>
                                                <Row className="bg-lightgray p-3 m-2">
                                                    <h4 className="text-center">
                                                        Features
                                                    </h4>
                                                    <Col xl={6} md={6} xs={6}>
                                                        <Checkbox type="checkbox" name="checkbox_1_1"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Certificates of Coverage
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_2"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Policy Management 
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_3"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Vendor Management 
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_4"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Liability Payroll
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_5"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Claims  
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_6"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Contacts  
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_7"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Programs   
                                                    </span>
                                                        </Checkbox>
                                                    </Col>
                                                    <Col xl={6} md={6} xs={6}>
                                                        <Checkbox type="checkbox" name="checkbox_1_8"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        External/Internal Compliance 
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_9"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Property   
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_10"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Stand Alone Programs 
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_11"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        KPIs/Scorecards 
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_12"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Reporting/Analytics/Dashboards 
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_13"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Underwriting and Questionnaires 
                                                    </span>
                                                        </Checkbox>
                                                        <Checkbox type="checkbox" name="checkbox_1_14"
                                                                  className="inline-block"
                                                                  labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Other
                                                    </span>
                                                        </Checkbox>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col className="bg-lightgray p-3 m-2" xl={4} md={4} xs={4}>
                                                <h4>
                                                    Functions
                                                </h4>
                                                <Checkbox type="checkbox" name="checkbox_2_1" className="inline-block"
                                                          labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Automated Invoicing 
                                                    </span>
                                                </Checkbox>
                                                <Checkbox type="checkbox" name="checkbox_2_2" className="inline-block"
                                                          labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Program Management Wizard 
                                                    </span>
                                                </Checkbox>
                                                <Checkbox type="checkbox" name="checkbox_2_3" className="inline-block"
                                                          labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Internal Chat 
                                                    </span>
                                                </Checkbox>
                                                <Checkbox type="checkbox" name="checkbox_2_4" className="inline-block"
                                                          labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Custom Business Settings 
                                                    </span>
                                                </Checkbox>
                                                <Checkbox type="checkbox" name="checkbox_2_5" className="inline-block"
                                                          labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Discount Management 
                                                    </span>
                                                </Checkbox>
                                                <Checkbox type="checkbox" name="checkbox_2_6" className="inline-block"
                                                          labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Automated Certificate Renewal 
                                                    </span>
                                                </Checkbox>
                                                <Checkbox type="checkbox" name="checkbox_2_7" className="inline-block"
                                                          labelClass="flex items-center mb-[5px]">
                                                    <span className="ml-[10px] text-base">
                                                        Other 
                                                    </span>
                                                </Checkbox>
                                            </Col>
                                        </Row>
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
                                            <Col xs={5}>
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
                </Container>
            </m.section>
            {/* Section End */}

            {/* CTA Banner Section Start */}
            <section className="lg:pt-[160px] md:pt-[10px] sm:pt-[50px] ">
                <Container fluid>
                    <Row style={{backgroundImage: `url(https://i.ibb.co/cNtVkT3/homepage-bottompagebanner-CTA-01.png)`}}
                         className="cover-background relative cover-background lg:py-[90px] md:py-[75px] sm:py-[50px]">
                        <Col xs={12} className="text-center my-[5rem] md:my-[7.5rem]">
                            <Buttons ariaLabel="button"
                                     href="/contact"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center"
                                     themeColor={["#556fff", "#ff798e"]} size="md" color="#fff"
                                     title="SCHEDULE A MEETING"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* CTA Banner Section End */}

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
        <div id="test-sol"
        ></div>
    </div>)
}

export default HomeStartupPage