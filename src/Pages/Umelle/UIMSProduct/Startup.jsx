import React, {lazy, useEffect, useState} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row,} from "react-bootstrap";
import {m} from 'framer-motion';
// import { Link as ScrollTo } from "react-scroll";


// Functions
import {fadeIn} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent, ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import CustomModal from '../../../Components/CustomModal';
import Tab07 from '../../../Components/Tab/Tab07';
import IconWithText from '../../../Components/IconWithText/IconWithText';
import Lists from '../../../Components/Lists/Lists';


// Data
import FooterData from '../../../Components/Footers/FooterData';
import Buttons from "../../../Components/Button/Buttons";
import {AccordionDataSolutions} from "../../../Components/Accordion/AccordionData";
import SEO from "../../../Components/Umelle/SEO";
import {Parallax} from 'react-scroll-parallax';
import productImage from "../../../Assets/img/umelle/ProductPage_Overview-01.png";
import FancyTextBox from "../../../Components/FancyTextBox/FancyTextBox";
import {fancyTextBox07} from "../../../Components/FancyTextBox/FancyTextBoxData";
import {TabData07} from "../../../Components/Tab/TabData";
import { IconWithTextData_07 } from '../../../Components/IconWithText/IconWithTextData';
import { ListData02 } from '../../../Components/Lists/ListsData';

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const SideButtons = lazy(() => import("../../../Components/SideButtons"))

// Filter the blog data category wise
const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

// var hash = window.decodeURIComponent(window.location.hash);

const HomeStartupPage = (props) => {
    
    ScrollToAnchor();
    const [,setAnchorKey] = useState(0)
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

        {/* Parallax Section Start */}
      <div className="overflow-hidden relative">
        <Parallax
          className="lg-no-parallax bg-cover absolute top-[0px] left-0 w-full h-[100vh] md:h-[90vh] sm:h-[500px]"
          translateY={[-40, 40]}
          style={{
            backgroundImage: `url(${productImage})`,
          }}
        ></Parallax>
        <Container className="relative">
          <Row className="items-center h-[100vh] md:h-[650px] sm:h-[450px]">
            <Col lg={5} md={6} sm={8}>
              <span className="text-xmd font-serif font-medium uppercase text-[#8bb867] block mb-[35px] xs:mb-[15px]">
              THE PERFECT FIT
              </span>
              <h1 className="font-serif font-bold text-[#2f2f2f] uppercase mb-[2.5rem] tracking-[-2px] sm:mb-[20px] xs:mb-[15px]">
              DEDICATED SOFTWARE FOR POOLED INSURERS
              </h1>
              <p className="text-xmd leading-[30px] w-[73%] mb-12 lg:w-[90%] md:w-full xs:mb-[15px]">
              Unified platform for end-to-end insurance data management.
              </p>
              <Link to = "/contact" offset={0} delay={0} spy={true} smooth={true} duration={800} className="cursor-pointer">
              <Buttons ariaLabel="button"
                                     href="/contact"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center"
                                     themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                     title="Shecule Demo"/>
              </Link>
            </Col>
          </Row>
          {/* <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="w-full absolute bottom-[50px] left-0 right-0 z-[1] flex justify-center items-center xs:hidden cursor-pointer">
            <i className="fas fa-arrow-down text-[#2f2f2f] bg-white shadow-[0_0_25px_rgba(0,0,0,0.08)] w-[45px] h-[45px] leading-[46px] rounded-full flex justify-center items-center"></i>
          </ScrollTo> */}
        </Container>
      </div>
      {/* Parallax Section End */}

      {/* Section Start */}
      <m.section {...fadeIn}>
        <Container fluid className="px-0">
          <FancyTextBox
            grid="row-cols-1 row-cols-xl-6 row-cols-md-3 row-cols-sm-2 gx-0"
            theme="fancy-text-box-01"
            data={fancyTextBox07}
            themeColor="light"
            animation={fadeIn}
          />
        </Container>
      </m.section>
      {/* Section End */}

      {/* Section Start */}
      <m.section className="py-[60px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] border-b border-solid" {...fadeIn}>
                <Container>
                    <Row className="row-cols-1 justify-center">
                        <Col xl={8} lg={10} className="text-center">
                            <div className="w-[40px] h-[2px] bg-gradient-to-tr from-[#ff6557] via-[#ff4271] to-[#ff367c] transform rotate-90 my-[30px] inline-block"></div>
                            <h3 className="font-serif font-medium text-darkgray -tracking-[1px]">PoolInsure AMS aligns with your <span className="text-gradient bg-gradient-to-tr from-[#ff6052] to-[#ff367c] font-semibold">needs and challenges</span></h3>
                        </Col>
                    </Row>
                </Container>
            </m.section>
        {/* Section End */}

         {/* Tab Section Start */}
         <section className="py-[160px] pt-0 border-t border-lightgray overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <Tab07 data={TabData07} />
                </section>
                {/* Tab Section End */}

        {/* Lazy Load HTML */}
        <InViewPort>
            {/* Section Start */}
        <section className="bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row className="justify-center">
              <Col lg={6} md={7} sm={8} className="text-center mb-24">
                <m.h2 className="heading-4 font-semibold -tracking-[1px] text-darkgray font-serif" {...fadeIn} >
                  Manage All Of Your Data With One Tool
                </m.h2>
              </Col>
            </Row>
            <IconWithText
              grid="row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-center"
              theme="icon-with-text-07"
              data={IconWithTextData_07}
              animation={fadeIn}
            />
          </Container>
        </section>
        {/* Section End */}
        {/* About section Start */}
        <section className="py-[160px] overflow-hidden cover-background lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" style={{ backgroundImage: `url('/assets/img/webp/home-consulting-about-bg.webp')` }}>
                <Container>
                    <Row className="items-center justify-center">
                        <m.div className="col-lg-6 col-md-10 md:mb-20 consulting-about" {...fadeIn}>
                            <h2 className="heading-4 font-serif font-medium text-darkgray tracking-[-1px] mb-16 w-[80%] lg:w-[90%] md:mb-12 xs:mb-16 xs:w-full">Predictable <span className="text-[#bf8c4c] font-semibold text-decoration-line-bottom-thick">Pricing</span></h2>
                            <p className="w-[70%] mb-[40px] lg:w-[90%] md:mb-[45px] xs:mb-[25px]">No unnecessary expense. No hidden costs. Our pricing plans are designed to get you up and running fast.  </p>
                            <Lists theme="list-style-01" data={ListData02} />
                            <div className="mt-[50px] md:mt-[25px] xs:mt-[35px] landscape:md:mt-[40px]">
                                <Buttons to="/contact" className="mr-[35px] btn-fill btn-fancy rounded-none font-medium font-serif uppercase md:mb-[15px] xs:mb-0" themeColor="#232323" color="#fff" size="sm" title="REQUEST PRICING" />
                                <Buttons to="/contact" className="font-medium pt-0 font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-darkgray hover:text-darkgray xs:mb-0" size="xl" color="#232323" title="REQUEST DEMO" />
                            </div>
                        </m.div>
                        <m.div className="col-lg-5 offset-lg-1 col-md-10" {...fadeIn}>
                            <div className="relative">
                                <div className="bg-darkslateblue absolute h-full w-full top-0 left-0 opacity-20"></div>
                                <img className="w-full" alt="" src="https://via.placeholder.com/457x607" width="457.5px" height="607.66px" />

                                {/* Modal Component Start */}
                                <CustomModal.Wrapper
                                    className="absolute top-0 items-center flex h-full left-[-50px] md:right-0 md:justify-center md:w-full md:left-0"
                                    modalBtn={<Buttons ariaLabel="modal button" type="submit" className="btn-sonar border-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]" themeColor="#fff" color="#bf8c4c" size="xxl" title={<i className="feather-play text-[35px]" />} />} >
                                    <div className="w-[1020px] max-w-full relative rounded mx-auto">
                                        <div className="fit-video">
                                            <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                        </div>
                                    </div>
                                </CustomModal.Wrapper>
                                {/* Modal Component End */}
                            </div>
                        </m.div>
                    </Row>
                </Container>
            </section>
            {/* About section End */}

            {/* Section start */}
      <m.section className="pt-0 pb-[10%] px-[10%] xl:px-[3%] md:px-[30px] sm:px-0 xs:px-0" {...fadeIn}>
        <div className="bg-gradient-to-tr from-[#f5bb8d] via-[#ffaea8] to-[#f3aaca] rounded-[5px] overflow-hidden pt-[126px] md:pt-[72px]">
          <Container>
            <Row className="justify-center items-center">
              <Col xl={5} lg={{ span: 6, order: 2 }} className="font-medium text-darkgray font-serif pb-[100px] ml-[97px] lg:ml-[0px] md:text-center md:pb-24">
                <span className="mb-[35px] text-lg -tracking-[.5px] inline-block relative whitespace-nowrap border-b border-solid border-darkgray md:text-xmd">Ready to see where PoolInsure AMS can take you?</span>
                <h4 className="-tracking-[1px] mb-[45px] xs:w-[99%]">GET<span className="font-semibold"> STARTED</span><span className = "-tracking-[1px] mb-[45px] xs:w-[99%]"> NOW</span></h4>
                <Buttons ariaLabel="button link" href="/contact" className="font-medium font-serif uppercase btn-expand" size="lg" color="#fff" themeColor="#902CFC" title="Schedule Demo" />
              </Col>
              <Col xl={{ offset: 1, span: 5 }} lg={{ span: 5, order: 1 }} className="p-[0px] xs:px-[15px]">
                <img width="" height="" src='https://via.placeholder.com/406x506' alt="Our Team" className="md:mx-auto" />
              </Col>
            </Row>
          </Container>
        </div>
      </m.section>
    {/* Section end */}

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