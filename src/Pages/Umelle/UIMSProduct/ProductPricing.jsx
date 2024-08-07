import React, {lazy, useEffect} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row,} from "react-bootstrap";
import {m} from 'framer-motion';

// Functions
import {fadeIn, fadeInLeft} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import Lists from '../../../Components/Lists/Lists';
import Accordion from '../../../Components/Accordion/Accordion';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import Buttons from "../../../Components/Button/Buttons";
import {AccordionData} from "../../../Components/Accordion/AccordionData";
import SEO from "../../../Components/Umelle/SEO";
// import productImage from "../../../Assets/img/umelle/UIMS_P.png";
import { ListData01} from '../../../Components/Lists/ListsData';

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const SideButtons = lazy(() => import("../../../Components/SideButtons"))

// Filter the blog data category wise
const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]
  
const ProductPricing = (props) => {

    useEffect(() => {
        analyticsEvent('page_view',null);
    },[])
    

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

        {/* Lazy Load HTML */}
        <InViewPort>
        {/* Section Start */}
        <section
          className="bg-no-repeat bg-cover overflow-hidden relative bg-center border-mediumgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] xs:py-0 xs:border-y"
          style={{
            backgroundImage: `url('https://via.placeholder.com/1920x857')`,
          }}
        >
          <Container className="xs:px-0">
            <Row className="justify-end md:justify-center xs:gx-0">
              <m.div
                className="col col-xl-6 col-lg-7 col-md-9 col-sm-11"
                {...fadeIn}
              >
                <div className="w-full bg-white py-[6rem] px-[7rem] xs:px-[4rem] xs:py-[6rem] box-shadow-large">
                  <m.h2 className="heading-5 font-serif text-[#2f2f2f] font-bold uppercase tracking-[-1px] mb-[45px]" {...{ ...fadeIn, transition: { delay: 0.3 } }}>
                    Litho specializes in insurance policy
                  </m.h2>
                  <Lists
                    theme="list-style-07"
                    data={ListData01}
                    animation={fadeIn}
                    animationDelay={0.5}
                  />
                  <m.div className="mt-[20px] inline-block xs:text-center" {...{ ...fadeIn, transition: { delay: 0.7 } }}>
                    <Buttons
                      aria-label="about company"
                      to="/page/about-us"
                      className="btn-fill btn-fancy rounded-none font-medium font-serif tracking-[1px] uppercase mr-[35px] xs:mt-0 xs:mb-[20px] xs:mx-[40px]"
                      themeColor="#232323"
                      color="#fff"
                      size="sm"
                      title="About company"
                    />
                    <Buttons
                      aria-label="company button"
                      to="/"
                      className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-darkgray hover:text-darkgray top-[-5px]"
                      color="#232323"
                      title="Discover tour"
                      size="xl"
                    />
                  </m.div>
                </div>
              </m.div>
            </Row>
          </Container>
        </section>
        {/* Section End*/}

        {/* Section Start */}
        <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row className="items-center justify-center">
              <m.div
                className="col col-xl-4 col-lg-5 col-md-10 md:mb-20"
                {...fadeIn}
              >
                <h2 className="heading-5 font-serif text-[#2f2f2f] font-bold uppercase tracking-[-1px]">
                  What is business annual conference
                </h2>
                <blockquote className="border-l-[4px] text-darkgray font-medium border-[#8bb867] text-xmd pl-[25px] pr-0 mt-[40px] mb-[30px] lg:w-[95%]"> We work to ensure that your business prospers and brings you sufficient profit
                </blockquote>
                <p className="w-[90%] mb-[25px] md:w-full">
                  Lorem ipsum dolor sit consectetur adipiscing eiusmod tempor
                  incididunt ut labore et dolore magna ut enim ad minim veniam.
                </p>
                <Buttons
                  to="/"
                  className="font-medium mt-[10px] btn-fancy font-serif tracking-[1px] uppercase btn-transparent rounded-none hover:text-white"
                  color="#232323"
                  size="sm"
                  themeColor="#232323"
                  title="Discover litho"
                />
              </m.div>
              <m.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="col-12 col-md-10 col-lg-7 offset-xl-1"
              >
                <img
                  height=""
                  width=""
                  alt="..."
                  src="https://via.placeholder.com/800x496"
                />
              </m.div>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section className="overflow-hidden bg-[#f9f6f3] md:py-[75px] sm:py-[50px]">
                    <Container>
                        <Row className="justify-center">
                            <Col xl={5} lg={6} md={10} className="flex flex-col justify-center md:py-0 md:mb-20">
                                <h2 className="heading-5 font-serif font-medium text-darkgray tracking-[-1px] mb-[4.5rem] w-[75%] md:mb-16 md:w-full">We provide solutions to grow your business</h2>
                                <Accordion theme="accordion-style-03" animation={fadeIn} data={AccordionData} className="consulting-accordion" />
                                <p className="mt-12">Looking for someone in particular?
                                    <Link aria-label="link contatc classic" to="/page/contact-classic" className="text-darkgray font-medium underline underline-offset-4 hover:text-[#BF8C4C] ml-[5px]">Get in touch</Link>
                                </p>
                            </Col>
                            <Col xl={{ offset: 1 }} lg={6} md={10}>
                                <m.div className="mr-[-30vw] relative md:mr-0" {...fadeInLeft}>
                                    <img className="w-full" src="https://via.placeholder.com/944x805" alt="contatc" width={944} height={805} />
                                </m.div>
                            </Col>
                        </Row>
                    </Container>
        </section>
        {/* Section End */}

        {/* Section start */}
      <m.section className="pt-0 pb-[10%] px-[10%] xl:px-[3%] md:px-[30px] sm:px-0 xs:px-0" {...fadeIn}>
        <div className="bg-gradient-to-tr from-[#f5bb8d] via-[#ffaea8] to-[#f3aaca] rounded-[5px] overflow-hidden pt-[126px] md:pt-[72px]">
          <Container>
            <Row className="justify-center items-center">
              <Col xl={5} lg={{ span: 6, order: 2 }} className="font-medium text-darkgray font-serif pb-[100px] ml-[97px] lg:ml-[0px] md:text-center md:pb-24">
                <span className="mb-[35px] text-lg -tracking-[.5px] inline-block relative whitespace-nowrap border-b border-solid border-darkgray md:text-xmd">Ready to see where PoolInsure AMS can take you?</span>
                <h4 className="-tracking-[1px] mb-[45px] xs:w-[99%]">Shedule a <span className="font-semibold">Demo</span><span className = "-tracking-[1px] mb-[45px] xs:w-[99%]"> and get a Free Quote! </span></h4>
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

export default ProductPricing