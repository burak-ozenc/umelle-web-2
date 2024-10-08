import React, {useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation, EffectFade, Autoplay} from "swiper/modules";
import {LazyMotion, domMax, m} from 'framer-motion';
import {Container, Row, Col} from 'react-bootstrap';
import {fadeIn} from "../../../Functions/GlobalAnimations";
import Lists from "../../../Components/Lists/Lists";
import {ListData01} from "../../../Components/Lists/ListsData";
import Buttons from "../../../Components/Button/Buttons";
// `url(/assets/img/SolutionsHeader_v1.png)`
const StartupPageBannerSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const swiperData = [
        {
            img: "/assets/img/SolutionsHeader_v1.webp",
            title: "",
            subTitle: "Pooled insurance management solutions tailored to your unique business logic"
        }
        ,
        {
            img: "/assets/img/SolutionsHeader_v1.webp",
            title: "",
            subTitle: "A blend of fiscal precision and superior member service"
        },
        {
            img: "/assets/img/SolutionsHeader_v1.webp",
            title: "",
            subTitle: "Designed to streamline operations across all your programs and policies"
        }
    ]

    return (
        <section className="bg-darkgray home-startup-swiper">
            <LazyMotion strict features={domMax}>
                <Swiper
                    effect="fade"
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    navigation={true}
                    pagination={true}
                    autoplay={{delay: 5000, disableOnInteraction: false}}
                    fadeEffect={{crossFade: true}}
                    modules={[Pagination, Navigation, EffectFade, Autoplay]}
                    onSlideChange={(swiperCore) => {
                        const {realIndex} = swiperCore;
                        setActiveSlide(realIndex)
                    }}
                    breakpoints={{767: {pagination: false}}}
                    className="startup swiper-navigation-04 swiper-navigation-light swiper-pagination-03 swiper-pagination-light swiper-pagination-medium sm-nav-hidden">
                    {swiperData.map((item, i) => {
                        return (
                            <SwiperSlide key={i} className="overflow-hidden">
                                <m.div initial={{scale: 1.2}} animate={{scale: activeSlide === i ? 1 : 1.2}}
                                       transition={{duration: 1.7, ease: "easeInOut"}}
                                       style={{backgroundImage: `url(${item.img})`}}
                                       className="overflow-hidden absolute h-full w-full top-0 left-0 cover-background"></m.div>
                                <m.div className="opacity-0 absolute h-full w-full top-0 left-0 bg-darkgray"></m.div>
                                <Container className="text-center">
                                    <Row className="full-screen items-center justify-center md:landscape:h-[500px]">
                                        <Col xs={12} lg={6} md={6}
                                             className="justify-center items-center my-0 mx-auto relative flex flex-col">
                                            <m.h1 initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                                  animate={{clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                                  transition={{duration: 0.5, delay: 0.5, ease: "easeIn"}}
                                                  className="font-serif font-semibold pb-[10px] text-[70px] tracking-[-2px] text-black mb-[35px] lg:text-[55px] lg:leading-[60px] xs:text-[35px] xs:leading-[40px] xs:mb-[20px]">{item.title}</m.h1>
                                            <m.span initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                                    animate={{clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                                    transition={{duration: 0.5, delay: 0.8, ease: "easeIn"}}
                                                    style={{fontSize:'2em'}}
                                                    className="font-serif block text-[4em] leading-[52px] mb-[35px] font-light text-black xs:text-base xs:mb-[20px]">{item.subTitle}</m.span>
                                            <m.div initial={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                                   animate={{clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}
                                                   transition={{duration: 0.5, delay: 0.9, ease: "easeIn"}}>
                                                <Buttons ariaLabel="button"
                                                         href="/contact"
                                                         className="mx-[10px] font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px] justify-center align-items-center mt-4"
                                                         themeColor={["#3844F7", "#902CFC"]} size="md" color="#fff"
                                                         title="Get In Touch"/>
                                            </m.div>

                                        </Col>
                                        <Col xs={12} lg={6} md={6}
                                             className="justify-center items-center my-0 mx-auto relative flex flex-col">
                                            
                                            <Row className='justify-center'>
                                                <Col xl={12} lg={12} md={12}>
                                                    <Lists theme="list-style-01" className="" data={ListData01}
                                                           animation={fadeIn}/>
                                                </Col>
                                            </Row>
                                            
                                        </Col>
                                    </Row>
                                </Container>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </LazyMotion>
        </section>
    )
}

export default StartupPageBannerSlider