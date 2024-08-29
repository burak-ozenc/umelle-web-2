import React, {lazy, useEffect, useState} from 'react'

// Libraries
import {Link} from 'react-router-dom';
import {Col, Container, Navbar, Row,} from "react-bootstrap";
import {m} from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from 'swiper/modules';


// Functions
import {fadeIn, fadeInLeft} from '../../../Functions/GlobalAnimations';

// Components
import {analyticsEvent, ScrollToAnchor} from "../../../Functions/Utilities";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import InViewPort from '../../../Components/InViewPort';
import Lists from '../../../Components/Lists/Lists';
import Services from '../../../Components/Services/Services';
import { TextAnime } from '../../../Components/FancyText/FancyText';
import FancyTextBox from '../../../Components/FancyTextBox/FancyTextBox';

// Data
import FooterData from '../../../Components/Footers/FooterData';
import Buttons from "../../../Components/Button/Buttons";
import {AccordionDataSolutions} from "../../../Components/Accordion/AccordionData";
import SEO from "../../../Components/Umelle/SEO";
import {Parallax} from 'react-scroll-parallax';
import {ListDataPortal} from '../../../Components/Lists/ListsData';
import {serviceDataPortal} from '../../../Components/Services/ServicesData';
import { fancyTextBox07 } from '../../../Components/FancyTextBox/FancyTextBoxData';
import portalimage1 from "../../../Assets/img/Product/portal/MEMBER SELF-SERVICE INTERFACE.png";
import portalimage2 from "../../../Assets/img/Product/portal/AUTOMATED DOCUMENT HANDLING.png";
import portalimage3 from "../../../Assets/img/Product/portal/DATA ENTRY AND VALIDATION.png";
import bannerbot1 from '../../../Assets/img/Product/banner-01.jpg';

const Header = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Header})))
const HeaderNav = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.HeaderNav})))
const Menu = React.lazy(() => import("../../../Components/Header/Header").then((module) => ({default: module.Menu})))

const SideButtons = lazy(() => import("../../../Components/SideButtons"))

// Filter the blog data category wise
const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

// var hash = window.decodeURIComponent(window.location.hash);

  const TestimonialsCarouselData = [
    {
      img: portalimage1,
      title: "MEMBER SELF-SERVICE INTERFACE",
      number: "01",
      content:
        "Reduce administrative workload and enhances member satisfaction by empowering users with control over their interactions.",
    },
    {
      img: portalimage2,
      title: "AUTOMATED DOCUMENT HANDLING",
      number: "02",
      content:
        "Ensure that documents are always up-to-date and available for all parties without manual intervention.",
    },
    {
      img: portalimage3,
      title: "DATA ENTRY AND VALIDATION",
      number: "03",
      content:
        "Provide validation checks to ensure data accuracy and integrity, preventing errors that can arise from manual data entry.",
    },
  ];
  
const ProductPortal = (props) => {
    const swiperRef = React.useRef(null);

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
            backgroundImage: `url(/assets/img/SolutionsHeader_v1.webp)`,
          }}
        ></Parallax>
        <Container className="relative">
          <Row className="items-center h-[100vh] md:h-[650px] sm:h-[450px]">
            <Col lg={5} md={6} sm={8}>
              <span className="text-xmd font-serif font-medium uppercase text-gradient bg-gradient-to-r from-[#3844F7] to-[#902CFC] block mb-[35px] xs:mb-[15px]">
              STREAMLINED MEMBER ACCESS 
              </span>
              <h1 className="font-serif font-bold text-[#2f2f2f] uppercase mb-[2.5rem] tracking-[-5px] sm:mb-[20px] xs:mb-[15px]">
              CENTRALIZED DOCUMENT MANAGEMENT
              </h1>
              <p className="text-xmd leading-[30px] w-[73%] mb-12 lg:w-[90%] md:w-full xs:mb-[15px]">
              A central hub where all member-generated documents are automatically consolidated and made available for immediate access.
              </p>
              <Link to = "/contact" offset={0} delay={0} spy={true} smooth={true} duration={800} className="cursor-pointer">
              <Buttons ariaLabel="button"
                                     href="/contact"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center"
                                     themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                     title="REQUEST DEMO"/>
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

      {/* Lazy Load HTML */}
        <InViewPort>
            {/* Section Start*/}
        <m.section
          {...{ ...fadeIn, transition: { delay: 0.3 } }}
          id="about"
          className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
        >
          <Container>
            <Row className="items-center md:justify-center">
              <Col lg={4} md={8} className="md:text-center md:mb-24">
                <span className="font-serif text-md text-gradient bg-gradient-to-r from-[#3844F7] to-[#902CFC] uppercase font-medium mb-[25px] inline-block sm:mb-[10px]">
                THE PREMIUM CHOICE FOR POOLED INSURERS
                </span>
                <h2 className="heading-5 font-serif text-[#2f2f2f] font-bold uppercase tracking-[-1px] w-[80%] mb-[20px] lg:w-[90%] md:w-full">
                OPTIMIZED MEMBER PORTAL 
                </h2>
                <p className="w-[80%] mb-[35px] lg:w-full">
                Effortlessly manage large member groups and simplify essential insurance processes through our 
                specialized portal designed for pooled insurers. Streamline data entry, document management, 
                and premium calculations, making administration smooth and error-free. 
                </p>
                <Link to = "/contact" offset={0} delay={0} spy={true} smooth={true} duration={800} className="cursor-pointer">
              <Buttons ariaLabel="button"
                                     href="/contact"
                                     className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center"
                                     themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                     title="REQUEST DEMO"/>
              </Link>
              </Col>
              <Col lg={8} md={12}>
                <Services
                  grid="row-cols-1 row-cols-md-2 justify-center text-left gap-y-10 md:gap-y-[45px]"
                  theme="service-style-01"
                  data={serviceDataPortal}
                  animation={fadeIn}
                  animationDelay={0.5}
                />
              </Col>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

        {/* Section Start */}
        <m.section
          className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-lightgray overflow-hidden"
          {...fadeIn}
        >
          <Container>
            <Row className="items-center justify-center">
              <Col lg={6} md={9} className="p-0 md:mb-[30px]">
                <m.div className="relative" {...fadeIn}>
                  <div
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    className="btn-slider-prev bg-darkgray z-[11] text-[#fff] w-[50px] h-[50px] left-[15px] transition-default leading-[40px] m-0 right-auto absolute top-[47%] flex item-center justify-center hover:bg-white hover:text-darkgray  cursor-pointer"
                  >
                    <button className="text-xmd" aria-label="prev btn">
                      <i className="feather-arrow-left"></i>
                    </button>
                  </div>

                  <div
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className="btn-slider-next btn-slider-next bg-darkgray z-[11] text-[#fff] w-[50px] transition-default h-[50px] right-[15px] leading-[40px] m-0 left-auto absolute top-[47%] flex item-center justify-center hover:bg-white hover:text-darkgray  cursor-pointer"
                  >
                    <button className="text-xmd" aria-label="next btn">
                      <i className="feather-arrow-right"></i>
                    </button>
                  </div>
                  <Swiper
                    className="black-move swiper-pagination-medium h-full"
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                      delay: 6000,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                  >
                    {TestimonialsCarouselData.map((item, i) => {
                      return (
                        <SwiperSlide key={i} className="p-[15px]">
                          <div className="h-full bg-[#fff] box-shadow">
                            <img className="w-full" src={item.img} alt="TestimonialsCarousel" width={555} height={432} />
                            <div className="items-center justify-center text-center flex px-[4.5rem] py-14 flex-row	xs:p-8">
                              <div className="grow-0 shrink-0 basis-auto flex-initial pr-[40px] xs:pr-[15px]">
                                <h2 className="heading-4 font-semibold text-darkgray font-serif mb-0">
                                  {item.number}
                                </h2>
                              </div>
                              <div className="overflow-hidden max-w-full pl-[40px] border-basecolor border-l-[2px] text-left xs:pl-[15px]"
                              style={{
                                borderLeft: "2px solid transparent",
                                borderImage: "linear-gradient(180deg, #3844F7, #902CFC) 1",
                              }}
                              >
                                <span className="mb-[5px] font-medium text-darkgray text-xmd font-serif block">
                                  {item.title}
                                </span>
                                <p className="mb-0">{item.content}</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </m.div>
              </Col>
              <m.div
                className="col-lg-5 col-md-9 offset-lg-1"
                {...fadeInLeft}
              >
                <h2 className="heading-4 mb-[40px] leading-[40px] font-semibold tracking-[-2px] text-darkgray font-serif xs:mb-[20px]">
                  <span className="p-0 block">PoolInsure PROVIDES</span>
                  <TextAnime
                    duration={3000}
                    color="#232323"
                    className="font-semibold animated-text-black"
                    animation="slide"
                    data={["MEMBER INTERFACE", "DOCUMENT HANDLING", "DATA TRANSPARENCY"]}
                  />
                </h2>
                <p className="w-[90%] mb-[30px] xs:w-full">
                Designed not just to keep up with the demands of modern pooled insurance providers
                 but to anticipate future needs, ensuring scalable and adaptable solutions 
                 that grow with your business 
                </p>
                <m.div className="col w-[85%] xs:w-full">
                  <Lists
                    className="font-medium"
                    theme="list-style-01"
                    data={ListDataPortal}
                  />
                </m.div>
              </m.div>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

        {/* Section start */}
      <m.section className="pt-0 pb-[10%] px-[10%] xl:px-[3%] md:px-[30px] sm:px-0 xs:px-0" {...fadeIn}>
        <div className="bg-gradient-to-tr from-[#902CFC] via-[#3844F7] to-[#4423C4] rounded-[5px] overflow-hidden pt-[126px] md:pt-[72px]">
          <Container>
            <Row className="justify-center items-center">
              <Col xl={5} lg={{ span: 6, order: 2 }} className="font-medium text-white font-serif pb-[100px] ml-[97px] lg:ml-[0px] md:text-center md:pb-24">
                <span className="mb-[35px] text-lg -tracking-[.5px] inline-block relative whitespace-nowrap border-b border-solid border-white md:text-xmd">TAKE THE NEXT STEP TOWARDS SUCCESS</span>
                <h4 className="-tracking-[1px] mb-[45px] xs:w-[99%]">READY TO SEE WHERE WE CAN TAKE YOU? </h4>
                <Buttons ariaLabel="button link" href="/contact" className="font-medium font-serif uppercase btn-expand" size="lg" color="#fff" themeColor="#2cbafc" title="Schedule Demo" />
              </Col>
              <Col xl={{ offset: 1, span: 5 }} lg={{ span: 5, order: 1 }} className="p-[0px] xs:px-[15px]">
                <img width="" height="" src= {bannerbot1} alt="Our Team" className="md:mx-auto" />
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

export default ProductPortal