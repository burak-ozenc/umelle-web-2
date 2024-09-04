import React, {lazy, useEffect, useState} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Accordion, Col, Container, Navbar, Row} from "react-bootstrap";
import {m} from 'framer-motion';

// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent, ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import IconWithText from '../../../Components/IconWithText/IconWithText';
import {IconWithTextData_13, IconWithTextData_12} from '../../../Components/IconWithText/IconWithTextData';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import Counter from "../../../Components/Counters/Counter";
import {CounterData05} from "../../../Components/Counters/CounterData";
import Services from "../../../Components/Services/Services";
import {serviceData5} from "../../../Components/Services/ServicesData";
import {ProcessStepData02} from "../../../Components/ProcessStep/ProcessStepData";
import Buttons from "../../../Components/Button/Buttons";
import {AccordionDataSolutions} from "../../../Components/Accordion/AccordionData";
import SEO from "../../../Components/Umelle/SEO";
import {Parallax} from 'react-scroll-parallax';
import ownSolution from '../../../Assets/img/umelle/ProductPage_Overview-01.png';

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const StartupPageBannerSlider = lazy(() => import('../Home/StartupBanner'))
const ProcessStep = lazy(() => import('../../../Components/ProcessStep/ProcessStep'))
const SideButtons = lazy(() => import("../../../Components/SideButtons"))

// Filter the blog data category wise
const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

// var hash = window.decodeURIComponent(window.location.hash);

const HomeStartupPage = (props) => {
    
    // useEffect(() => {
    //     // Google Analytics page view tracking
    //     if (window.gtag) {
    //         window.gtag('config', 'G-3XCZ8B0MR9', {
    //             'page_path': location.pathname + location.search,
    //         });
    //     }
    // }, [location]); // This ensures the tracking code runs every time the route changes
    ScrollToAnchor();
    const [anchorKey, setAnchorKey] = useState(0)
    // ScrollToAnchor();

    useEffect(() => {
        analyticsEvent('page_view',null);
    },[])


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
        
        {/* Section Start */}
        <StartupPageBannerSlider/>
        {/* Section End */}

        
        
        {/* Section start */}
        {/*<section className="overflow-visible cover-background"
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
        */}
        {/* Section End */}

        
        {/* Section Start */}
        {/*
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
            </Tabs>
        </section>
        {/* Section End */}

        {/* Section Start */}
      <section className="py-[160px] overflow-hidden lg:py-[60px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row className="justify-center">
          <Col xl={{ span: 7, offset: 2 }} lg={8}>
              <IconWithText grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]" theme="icon-with-text-01" data={IconWithTextData_12} animation={fadeIn} animationDelay={0.2} />
            </Col>
            <m.div className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
              <div className="mb-[20px] md:text-center sm:mb-[10px]">
                <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">About company</span>
              </div>
              <h3 className="alt-font text-darkgray font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">Insurance Management</h3>
              <div className="mt-auto mx-auto mx-lg-0">
                <Buttons href="/" className="font-medium font-serif uppercase bg-[#fff] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title="Discover litho" />
              </div>
            </m.div>    
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section start */}
      <m.div className="relative overflow-hidden py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] sm:px-[15px]" {...fadeIn}>
        <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[-30px] left-0 h-[100vh] lg:h-[64vh] lg:top-[-75px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-0 sm:h-[56vh] xs:h-[50vh] w-full" translateY={[-40, 40]} style={{ backgroundImage: `url(${ownSolution})` }}></Parallax>
        <div className="left-0 top-0 h-full w-full absolute bg-darkslateblue opacity-75"></div>
        <Container className="relative">
          <Row className="justify-center items-center">
            <Col xl={7} md={8} sm={10} className="md:mb-[30px] sm:mb-[30px]">
              <h4 className="font-serif font-semibold text-white mb-0 sm:text-center">Build your own Solution:</h4>
            </Col>
            <Col xl={5} md={4} className="md:flex md:justify-center text-end">
              <Buttons ariaLabel="button" to="/custom-solution" className="font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px]" themeColor={["#902cfc", "#4423c4"]} size="xl" color="#fff" title="Get Started" />
            </Col>
          </Row>
        </Container>
      </m.div>
      {/* Section end */ }

      {/* Section Start */}
      <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row className="justify-center">
            <m.div className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
              <div className="mb-[20px] md:text-center sm:mb-[10px]">
                <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">About company</span>
              </div>
              <h3 className="alt-font text-darkgray font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">Operations Management</h3>
              <div className="mt-auto mx-auto mx-lg-0">
                <Buttons href="/" className="font-medium font-serif uppercase bg-[#fff] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title="Discover litho" />
              </div>
            </m.div>
            <Col xl={{ span: 7, offset: 2 }} lg={8}>
              <IconWithText grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]" theme="icon-with-text-01" data={IconWithTextData_13} animation={fadeIn} animationDelay={0.2} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

        {/* Lazy Load HTML */}
        <InViewPort>

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
                    <Row style={{backgroundImage: `url('/assets/img/Untitled-6-01.webp')`}}
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