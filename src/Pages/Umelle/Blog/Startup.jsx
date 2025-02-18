import React, {useState, useEffect} from "react";

// Libraries
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Keyboard, Pagination} from "swiper/modules";
import {m} from "framer-motion";

// Components
import {Header, HeaderNav, Menu} from "../../../Components/Header/Header";
import BlogWidget from "../../../Components/Blogs/BlogWidget";
// import BlogClean from "../../..//Components/Blogs/BlogClean";
// import BlogClassic from "../../../Components/Blogs/BlogClassic";
import SideButtons from "../../../Components/SideButtons";
import FooterMenu, {Footer} from '../../../Components/Footers/Footer';
import {formatBlogDate, getBlogPosts, getBlogSwiperData} from "../../../Functions/Utilities";

// Data,
import FooterData from '../../../Components/Footers/FooterData';


// const swiperData = [
//     {
//         category: "Branding",
//         title: "Be happy for this moment this moment is your life",
//         link: "/blogs/blog-post-layout-01",
//         author: "Jay benjamin",
//         date: "22 October 2020",
//         backgroundImage: "https://via.placeholder.com/1368x801",
//     },
//     {
//         category: "Branding",
//         title: "Make business easy with beautiful application",
//         link: "/blogs/blog-post-layout-02",
//         author: "Bill gardner",
//         date: "18 October 2020",
//         backgroundImage: "https://via.placeholder.com/1368x801",
//     },
//     {
//         category: "Development",
//         title: "Everything designed things are designed well",
//         link: "/blogs/blog-post-layout-03",
//         author: "Lindsey bucki",
//         date: "15 October 2020",
//         backgroundImage: "https://via.placeholder.com/1368x801",
//     },
//     {
//         category: "Branding",
//         title: "Be happy for this moment this moment is your life",
//         link: "/blogs/blog-post-layout-01",
//         author: "Jay benjamin",
//         date: "22 October 2020",
//         backgroundImage: "https://via.placeholder.com/1368x801",
//     },
//     {
//         category: "Branding",
//         title: "Make business easy with beautiful application",
//         link: "/blogs/blog-post-layout-02",
//         author: "Bill gardner",
//         date: "18 October 2020",
//         backgroundImage: "https://via.placeholder.com/1368x801",
//     },
//     {
//         category: "Development",
//         title: "Everything designed things are designed well",
//         link: "/blogs/blog-post-layout-03",
//         author: "Lindsey bucki",
//         date: "15 October 2020",
//         backgroundImage: "https://via.placeholder.com/1368x801",
//     },
// ];


const Footer_Data = [FooterData[0], FooterData[1], FooterData[4], FooterData[3]]

// Filter the blog data category wise
// const blogMasonryData = blogData
//   .filter((item) => item.blogType === "clean")
//   .filter((item) => item.category.includes("classicblog"));

const Blog = (props) => {
    const swiperRef = React.useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [blogs, setBlogs] = useState(null);
    const [swiperData, setSwiperData] = useState(null);
    // const blogWidgetData = blogData.filter((item) => item.blogType === "widget");
    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetchData();
    }, [])


    const fetchData = async () => {
        try {
            const data = await getBlogPosts()
            console.log(data)
            const rawSwiperData = await getBlogSwiperData()

            // const duplicatedArray = new Array(30).fill(data[0]);

            setBlogs(data)
            setSwiperData(rawSwiperData)
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <div>
            <SideButtons/>
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

            {/* Section Start */}
            <section className="bg-[#fff]">
                {swiperData?.length > 0 && (
                    <Swiper
                        modules={[Pagination, Autoplay, Keyboard]}
                        autoplay={{delay: 4500, disableOnInteraction: false}}
                        loop={true}
                        keyboard={{enable: true, onlyInViewport: true}}
                        centeredSlides={true}
                        ref={swiperRef}
                        onSlideChange={(swiperCore) => {
                            const {realIndex} = swiperCore;
                            setActiveSlide(realIndex);
                        }}
                        spaceBetween={18}
                        breakpoints={{
                            991: {slidesPerView: 2},
                            767: {slidesPerView: 1},
                            effect: "slide",
                        }}
                        className="lifestyle-swiper h-[700px] lg:h-[600px] md:h-[550px] sm:h-[500px] xs:h-[450px] swiper-navigation-04 swiper-navigation-light black-move"
                    >
                        <div
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                            className="btn-slider-next -translate-y-1/2 absolute top-1/2 left-[40px] bg-[#00000080] hover:bg-white text-[#fff] hover:text-black transition-default w-[50px] h-[50px] z-[2] rounded-[50%] flex justify-center items-center right-inherit cursor-pointer sm:h-[35px] sm:w-[35px] sm:left-[10px] xs:hidden"
                        >
                            <i className="feather-arrow-left text-[15px]"></i>
                        </div>
                        {swiperData.map((item, i) => (
                            <SwiperSlide
                                key={i}
                                className={`bg-cover bg-no-repeat bg-center relative overflow-hidden transition-default flex items-end h-full${activeSlide !== i ? ' opacity-60' : ''}`}
                                style={{backgroundImage: `url(${item.img})`}}
                            >
                                <m.div
                                    initial={{opacity: 0, y: "30%"}}
                                    animate={{
                                        opacity: activeSlide === i ? 1 : 0,
                                        y: activeSlide === i ? "0" : "30%",
                                    }}
                                    viewport={{once: true}}
                                    transition={{ease: "circOut", duration: 0.8}}
                                    className="w-[60%] mx-auto text-center bg-white mb-[6.5rem] p-20 xl:px-[2rem] lg:w-[70%] lg:px-[2rem] sm:w-[75%] sm:px-[2rem]"
                                >
                                    <button
                                        aria-label="swiper btn"
                                        className="relative inline-flex items-center justify-center p-[2px] mb-[30px] overflow-hidden text-sm font-medium text-darkgray group bg-gradient-to-br from-[#556fff] to-[#ff798e]"
                                    >
                                        <span className="relative px-[16px] py-[4px] bg-white uppercase font-serif">
                                            <Link
                                                aria-label="link for"
                                                to={item?.link}
                                                className="tracking-[.5px] text-xs hover:text-darkgray"
                                            >
                                                {item.category}
                                            </Link>
                                        </span>
                                    </button>
                                    <h2 className="heading-5 mb-[30px] xs:mb-[15px]">
                                        <Link
                                            aria-label="link for"
                                            to={item?.link}
                                            className="text-darkgray hover:text-darkgray font-serif font-medium -tracking-[1px] mb-[30px]"
                                        >
                                            {item.title}
                                        </Link>
                                    </h2>
                                    <div className="font-serif text-md uppercase flex justify-center xs:flex-col">
                                        <span className="text-spanishgray block sm:inline-block">
                                            {formatBlogDate(item.date)}
                                        </span>
                                        <span
                                            className="mx-[10px] text-[20px] opacity-60 relative sm:inline-block xs:hidden">
                                            •
                                        </span>{" "}
                                        <Link
                                            aria-label="link for"
                                            to={item.link}
                                            className="text-spanishgray hover:text-spanishgray"
                                        >
                                            {item.author}
                                        </Link>
                                    </div>
                                </m.div>
                            </SwiperSlide>
                        ))}
                        <div
                            onClick={() => swiperRef.current.swiper.slideNext()}
                            className="btn-slider-prev -translate-y-1/2 absolute top-1/2 right-[40px] bg-[#00000080] hover:bg-white text-[#fff] hover:text-black transition-default w-[50px] h-[50px] z-[2] rounded-[50%] flex justify-center items-center left-inherit cursor-pointer sm:h-[35px] sm:w-[35px] sm:right-[10px] xs:hidden"
                        >
                            <i className="feather-arrow-right text-[15px]"></i>
                        </div>
                    </Swiper>
                )}
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section
                className="px-[11%] relative p-[130px] bg-lightgray lg:px-[2%] lg:p-[90px] md:pb-[75px] sm:py-[50px] xs:px-0">
                <Container>
                    <Row className="justify-center">
                        <Col lg={4} md={6} className="text-center mb-16 md:mb-16">
                            <div className="flex flex-row items-center justify-center text-center mb-[5px]">
                                <span className="w-[25px] h-[1px] bg-mediumgray"></span>
                                <div
                                    className="font-serif text-xmd font-medium px-[10px] text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
                                    updated daily
                                </div>
                                <span className="w-[25px] h-[1px] bg-mediumgray"></span>
                            </div>
                            <h2 className="heading-5 font-serif font-semibold text-darkgray uppercase -tracking-[1px]">
                                READERS CHOICE
                            </h2>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="justify-center">
                        <Col xs={12} lg={12} sm={10} className="xs:px-0">
                            {blogs && <BlogWidget
                                grid="grid grid-3col xl-grid-3col lg-grid-2col md-grid-1col sm-grid-1col xs-grid-1col gutter-double-extra-large"
                                data={blogs.slice(0, 10)}
                            />}
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            {/* {blogs &&
                <section
                    className="relative px-[11%] py-[130px] xl:px-[2%] lg:py-[90px] md:py-[75px] sm:py-[50px] xs:px-0">
                    <Container fluid className="xs:px-0">
                        <BlogClassic
                            grid="grid grid-5col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large"
                            data={blogs.slice(12, 22)}
                        />
                    </Container>
                </section>} */}
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
        </div>
    );
};

export default Blog;