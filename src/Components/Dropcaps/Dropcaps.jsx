import React, { memo } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

const Dropcaps = (props) => {
    const dropcapsStyle = {
        float: 'left',
        fontSize: '30px',
        height: '55px',
        lineHeight: '25px',
        padding: '15px 0',
        width: '55px',
        margin: '5px 20px 0 0',
        color: '#fff',
        backgroundColor: 'darkgray',
        textAlign: 'center',
        fontWeight: '500', // for font-medium
    };

    return (
        <m.div className={`${props.theme} ${props.className} contents`} {...props.animation}>
            <p className="contents">
                <span style={dropcapsStyle}>
                    {props.content && props.content.charAt(0)}
                </span>
                {props.content && props.content.slice(1)}
            </p>
        </m.div>
    );
};

Dropcaps.defaultProps = {
    theme: 'dropcaps-style02'
};

Dropcaps.propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
    content: PropTypes.string,
    animation: PropTypes.object,
};

export default memo(Dropcaps);
