import React, {lazy} from 'react';

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row, Tab, Tabs} from "react-bootstrap";
import { domMax, LazyMotion, m} from 'framer-motion';


// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent, ScrollToAnchor} from "../../../Functions/Utilities";
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
import {IconWithTextData_02} from "../../../Components/IconWithText/IconWithTextData";
import {Parallax} from 'react-scroll-parallax';
import ownSolution from '../../../Assets/img/umelle/ProductPage_Overview-01.png';

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))
const SideButtons = lazy(() => import("../../../Components/SideButtons"))

const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

const HomeStartupPage = (props) => {
    ScrollToAnchor();

    useEffect(() => {
        analyticsEvent('page_view',null);
    },[])
    
    
    return (<div style={props.style}>
        {/*SEO Starts*/}
        <SEO
            title='UMELLE Services | Advanced Software Development for Efficiency'
            description='UMELLE specializes in creating custom software solutions that enhance operational efficiency, optimize workflows, and support long-term growth for businesses.'
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
                    <Menu {...props}/>
                </Navbar.Collapse>
                <Col lg={2} xs={"auto"} className="justify-end pe-0 flex items-center"></Col>
            </HeaderNav>
        </Header>
        {/* Header End */}

        <SideButtons/>

        {/* Section start */}
        <section className="overflow-visible cover-background"
                 style={{backgroundImage: `url(assets/img/servicespage_header_v2-01.webp)`}}>
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
                            Lets Get Started:
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
              <Buttons ariaLabel="button" to="/custom-solution" className="font-medium font-serif uppercase rounded-none lg:mb-[15spx] landscape:lg:mb-[15px]" themeColor={["#902cfc", "#4423c4"]} size="xl" color="#fff" title="Get Started" />
            </Col>
          </Row>
        </Container>
      </m.div>
      {/* Section end */ }
      
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

            {/* Section Start */}
            <m.section
                className="py-[60px] bg-white lg:py-[100px] md:py-[95px] sm:py-[80px] xs:py-[0px]"  {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mb-[6%]">
                            <h6 className="font-serif text-darkgray font-medium">Our Tech Stack</h6>
                        </Col>
                    </Row>
                    <Tabs className="tab-style-01 font-serif mb-[7.4rem] flex border-b-0 font-medium text-center md:mb-[60px] sm:mb-[20px]">
                        <Tab className="tab-style-01 mb-[7.4rem]" key={1} eventKey={1} title={ "Technologies"}>
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
                        <Tab className="tab-style-01 mb-[7.4rem]" key={2} eventKey={2} title={ "Languages"}>
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
                        <Tab className="tab-style-01 mb-[7.4rem]" key={3} eventKey={3} title={ "Data Formats"}>
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
                    <Row style={{backgroundImage: `url('/assets/img/ServicesPage_CTRBanner_LV-01-01-01.webp')`}}
                         className="cover-background relative cover-background lg:py-[90px] md:py-[75px] sm:py-[50px]">
                        <Col xs={12} className="text-center my-[5rem] md:my-[7.5rem]">
                        <div className="justify-center align-items-center text-center d-flex flex-col">
                                <h6 className="text-center font-serif bg-trasparent text-black m-3 w-[400px]">
                                Connect with Our Experts and Get a Free Quote
                                </h6>
                            </div>
                            <Buttons ariaLabel="button"
                                     href="/contact"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center"
                                     themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
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