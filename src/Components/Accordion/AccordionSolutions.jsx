import React, {memo} from 'react'

// Libraries
import { Accordion } from 'react-bootstrap'
import { PropTypes } from "prop-types";

// Data
import {AccordionDataSolutions} from './AccordionData'

// css
import "../../Assets/scss/components/_accordion.scss"
const AccordionSolution = (props) => {
    // const [hashKey  , setHashKey] = useState(0)
    
    
    // useEffect(() => {
    //    
    // }, [id])
    return (
        <div className={`${props.theme} ${props.themeColor}${props.className ? ` ${props.className}` : ""}`}>
            <Accordion defaultActiveKey={props.activeKey}>
                {
                    props.data.map((item, key) => {
                        return (
                            <div  id={item.id} className={`accordion-item-wrapper`}
                                key={key}
                                {...{ ...props.animation, transition: { delay: key * props.animationDelay } }}
                            >
                                <Accordion.Item  key={item.key} eventKey={item.key}>
                                    {item.title && 
                                        <Accordion.Header >
                                            { item.icon && <i className={`text-[2em] m-2 ${item.icon}`}></i>}
                                            { item.time && <span className="panel-time">{item.time}</span>}
                                            { item.title && <span  className="panel-title">{item.title}</span>}
                                            { item.author && <span className="panel-speaker">{item.author}</span>}
                                        </Accordion.Header>
                                    }
                                    {item.content && <Accordion.Body> {item.content} </Accordion.Body>}
                                </Accordion.Item>
                            </div>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

AccordionSolution.defaultProps = {
    data: AccordionDataSolutions,
    animationDelay: 0.2,
    theme: "accordion-style-01",
    themeColor: "light",
    activeKey: 0
}

Accordion.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string,
            content: PropTypes.string,
            icon: PropTypes.string,
            id: PropTypes.string,
            key: PropTypes.number,
        })
    ),
    animation: PropTypes.object,
    animationDelay: PropTypes.number,
    theme: PropTypes.string,
    themeColor: PropTypes.string,
    activeKey: PropTypes.number,
}

export default memo(AccordionSolution)