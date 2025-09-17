import React from 'react'
import { IoMdArrowDropup } from 'react-icons/io';

// CSS :
import './up-arrow-solid.scss'


const UpArrowSolid = (props) => {
    const { fontSize, color, marginRight } = props;
    return (
        <IoMdArrowDropup
            className="cursor"
            style={{
                fontSize: fontSize || '25px',
                color: color || '#8091a5',
                marginRight: marginRight || '-2px'
            }}
        />
    )
}

export default UpArrowSolid
