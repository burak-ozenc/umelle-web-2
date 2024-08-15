import React, {lazy, useEffect} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row,} from "react-bootstrap";
import {m, AnimatePresence} from 'framer-motion';

// Functions
import {fadeIn, fadeInLeft} from '../../../Functions/GlobalAnimations';
import { sendEmail, resetForm } from '../../../Functions/Utilities';
import { Input } from '../../../Components/Form/Form';
import {ContactFormStyle02Schema} from '../../../Components/Form/FormSchema';

// Components
import {analyticsEvent} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import { Formik, Form } from 'formik';
import MessageBox from '../../../Components/MessageBox/MessageBox';
import Accordion from '../../../Components/Accordion/Accordion';
import FancyTextBox from '../../../Components/FancyTextBox/FancyTextBox';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import Buttons from "../../../Components/Button/Buttons";
import {AccordionData} from "../../../Components/Accordion/AccordionData";
import SEO from "../../../Components/Umelle/SEO";
import pricingtitleImage from "../../../Assets/img/Product/pricing/ProductPricing_Header-01.png";
import pricingSection2Image from '../../../Assets/img/Product/pricing/ProductPriCing_sECTION2-01.png';
import { fancyTextBox07 } from '../../../Components/FancyTextBox/FancyTextBoxData';

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
        <m.section className="py-[160px] bg-cover	bg-no-repeat overflow-hidden relative bg-center lg:py-[120px] md:py-[95px] xs:py-[80px] xxs:py-[50px]" style={{ backgroundImage: `url(${pricingtitleImage})` }} {...fadeIn}>
        <Container className="xs:px-0">
          <Row className="justify-end md:justify-center">
            <Col xl={7} lg={7} md={9} sm={11}>
              <div className="px-[7rem] py-[5rem] rounded-md shadow-[0_0_30px_rgb(0,0,0,0.08)] bg-white sm:p-20 xs:rounded-none xs:px-[3.5rem] xs:py-[6rem]">
                <span className="mb-[15px] font-medium text-center text-[#8bb867] text-md font-serif uppercase block sm:mb-[10px]">REQUEST PRICING </span>
                <h5 className="w-[80%] mb-[40px] font-bold text-center	tracking-[-1px] text-black font-serif uppercase mx-auto xs:w-full">OUR EXPERTS WILL GET IN TOUCH WITH YOU </h5>
                <Formik
                  initialValues={{ name: '', email: '' }}
                  validationSchema={ContactFormStyle02Schema}
                  onSubmit={async (values, actions) => {
                    actions.setSubmitting(true)
                    const response = await sendEmail(values)
                    response.status === "success" && resetForm(actions)
                  }}
                >
                  {({ isSubmitting, status }) => (
                    <Form className="mb-[30px]">
                      <Input showErrorMsg={false} type="text" name="name" labelClass="mb-[25px]" className="rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]" placeholder="Your name" />
                      <Input showErrorMsg={false} type="email" name="email" labelClass="mb-[25px]" className="rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]" placeholder="Your email address" />
                      <Buttons ariaLabel="form button" type="submit" className={`btn-fill text-sm leading-none font-medium tracking-[1px] py-[13px] px-[32px] rounded-[4px] w-full uppercase mb-[5px]${isSubmitting ? " loading" : ""}`} themeColor="#8bb867" color="#fff" size="lg" title="Request a call schedule" />
                      <AnimatePresence>
                        {status && <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MessageBox className="mt-[20px] text-center py-[10px]" theme="message-box01" variant="success" message="Your message has been sent successfully!" /></m.div>}
                      </AnimatePresence>
                    </Form>
                  )}
                </Formik>
                <p className="w-[80%] text-xs leading-6 mx-auto xs:w-full text-center">We are committed to protecting your privacy. We will never collect information about you without your explicit consent.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </m.section>
        {/* Section End*/}

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
        <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row className="items-center justify-center">
              <m.div
                className="col col-xl-4 col-lg-5 col-md-10 md:mb-20"
                {...fadeIn}
              >
                <h2 className="heading-5 font-serif text-[#2f2f2f] font-bold uppercase tracking-[-1px]">
                PRICING MODEL
                </h2>
                <blockquote className="border-l-[4px] text-darkgray font-medium border-[#8bb867] text-xmd pl-[25px] pr-0 mt-[40px] mb-[30px] lg:w-[95%]"> Our pricing model is simple.
                </blockquote>
                <p className="w-[100%] mb-[5px] md:w-full">
                1. Purchase the licenses and permissions you need  
                </p>
                <p className="w-[100%] mb-[5px] md:w-full">
                2. Choose the support plan that best suits you  
                </p>
                <p className="w-[100%] mb-[5px] md:w-full">
                3. A one-time payment for transition and transformation
                </p>
                <Buttons
                  to="/"
                  className="font-medium mt-[10px] btn-fancy font-serif tracking-[1px] uppercase btn-transparent rounded-none hover:text-white"
                  color="#232323"
                  size="sm"
                  themeColor="#232323"
                  title="REQUEST PRICING"
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
                  src= {pricingSection2Image}
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