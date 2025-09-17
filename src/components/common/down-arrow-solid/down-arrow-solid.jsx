import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';

// CSS :
import './down-arrow-solid.scss'


const DownArrowSolid = (props) => {
    const { fontSize, color, marginRight } = props;
    return (
        <IoMdArrowDropdown
            className="cursor"
            style={{
                fontSize: fontSize || '24px',
                color: color || '#8091a5',
                marginRight: marginRight || '-2px'
            }}
        />
    )
}

export default DownArrowSolid
