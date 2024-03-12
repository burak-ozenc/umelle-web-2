import React, { memo } from 'react'

// Libraries
import { Link } from 'react-router-dom'
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
                                <div className='service-style min-h-[26rem]'>
                                    {props.theme === "service-style-03" && <span className='verticalline'></span>}
                                    {item.title && <span className="title font-medium text-darkgray block font-serif mb-[10px]">{item.title}</span>}
                                    {item.content && <p>{item.content}</p>}
                                    {(props.theme === "service-style-02" || props.theme === "service-style-05") && <div className='info-service'>
                                        {(item.linkTitle || item.icon) && <Link aria-label="services" to={item.link ? item.link : "#"} className="no-underline font-serif font-medium text-gray-900 text-sm uppercase block">{item.linkTitle}<i className={item.icon}></i></Link>}
                                    </div>}
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