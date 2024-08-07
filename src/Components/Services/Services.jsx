import React, { memo } from 'react'

// Libraries
import { Row } from 'react-bootstrap'
import { PropTypes } from "prop-types";
import { m } from "framer-motion"

// Data
import { serviceData1 } from './ServicesData'

// css
import "../../Assets/scss/components/_services.scss"

const Services = (props) => {
    return (
        <Row className={props.grid}>
            {
                props.data.map((item, i) => {
                    return (
                        <m.div key={i} className={`col px-[15px]${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay } }}>
                            <div className={props.theme}>
                            <div className="img-wrapper">
                                    {item.img && <img src={item.img} alt={item.title} className="service-image" />}
                                    <div className="services-box-hover">
                                        <a href={item.link}>
                                            <i className={item.icon}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className='service-style min-h-[18rem]'>
                                    {props.theme === "service-style-03" && <span className='verticalline'></span>}
                                    {item.title && <span className="title font-medium text-darkgray block font-serif mb-[10px]">{item.title}</span>}
                                    {item.content && <p>{item.content}</p>}
                                </div>
                            </div>
                        </m.div>
                    )
                })
            }
        </Row>
    )
}

Services.defaultProps = {
    data: serviceData1,
    theme: "service-style-01",
    animationDelay: 0.2
}

Services.propTypes = {
    grid: PropTypes.string,
    theme: PropTypes.string,
    animationDelay: PropTypes.number,
    animation: PropTypes.object,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            icon: PropTypes.string,
            title: PropTypes.string,
            img: PropTypes.string,
            content: PropTypes.string,
            link: PropTypes.string,
            linkTitle: PropTypes.string,
        })
    ),
}


export default memo(Services)