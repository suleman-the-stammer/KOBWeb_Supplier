import React, { useState } from 'react'

// ANT-D :
import { Input } from 'antd';

// CSS :
import './amount-input.scss'


const AmountInput = ({ id, value, readOnly,disable, handleInputChange }) => {

    return (
        <Input
            id={id}
            prefix="$"
            value={value}
            placeholder='0.00'
            readOnly={readOnly}
            className='price-field'
            disabled={disable}
            onChange={handleInputChange}
        />
    )
}

export default AmountInput
