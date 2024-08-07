import React, {memo} from "react";

// Libraries
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {PropTypes} from "prop-types";

// Data
import {TestimonialsCarouselData1} from "./TestimonialsCarouselData";
import {Col, Row} from "react-bootstrap";

const TestimonialsCarousel01 = (props) => {
    const swiperRef = React.useRef(null)
    return (
        <div className={`relative ${props.className}`}>
            <Swiper
                {...props.carouselOption}
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
                className="testimonial-carousel-style-01">
                {props.data.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className="text-center">
                            <Row>
                                <Col lg={3} md={3} sm={3}>
                                    <ol>
                                        {item?.list && item?.list.map((elem, ix) => {
                                            return (
                                                <li className="font-bold text-[20px] font-heavy text-black" key={ix}>
                                                    {elem?.listMember}
                                                </li>
                                            )
                                        })}
                                    </ol>
                                </Col>
                                <Col lg={8} md={8} sm={8}>
                                    {item.content && <span
                                        className="w-[95%] leading-[40px] font-serif font-light text-black text-xlg mb-[49px] inline-block tracking-[-.5px] text-center lg:text-lg md:leading-[26px] md:w-[70%] lg:mb-[3.5rem] xs:w-[95%]" style={{
                                            background: 'linear-gradient(to right, #3844F7, #902CFC)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                        > 
                                        {item.content} 
                                        </span>}
                                </Col>
                            </Row>

                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {
                props.carouselOption.navigation && (
                    <div className="flex">
                        <div onClick={() => swiperRef.current.swiper.slidePrev()}
                             className="btn-slider-next rounded-full flex justify-center items-center text-darkgray bg-white border-[1px] border-solid border-mediumgray h-[40px] w-[40px] cursor-pointer hover:shadow-xl transition-all duration-5000 absolute top-[38%] left-[-90px] right-auto">
                            <i className="feather-arrow-left text-xmd"></i>
                        </div>
                        <div onClick={() => swiperRef.current.swiper.slideNext()}
                             className="btn-slider-prev rounded-full border-[1px] border-solid border-mediumgray bg-white text-darkgray flex justify-center items-center h-[40px] w-[40px] ml-[10px] cursor-pointer hover:shadow-xl transition-all duration-5000 absolute top-[38%] right-[-90px] left-auto">
                            <i className="feather-arrow-right text-xmd"></i>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

TestimonialsCarousel01.defaultProps = {
    data: TestimonialsCarouselData1
}

TestimonialsCarousel01.propTypes = {
    grid: PropTypes.string,
    theme: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            img: PropTypes.string,
            designation: PropTypes.string,
            content: PropTypes.string,
            firstname: PropTypes.string,
            lastname: PropTypes.string,
            title: PropTypes.string,
            thumbimg: PropTypes.string,
            list: PropTypes.arrayOf(
                PropTypes.exact({
                    listMember : PropTypes.string
                })
            )
        })
    ),
}

export default memo(TestimonialsCarousel01);
