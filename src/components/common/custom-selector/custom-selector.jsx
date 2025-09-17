import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';

// ANT-D :  
import { Select } from 'antd';

// CSS :
import './custom-selector.scss'


const CustomSelector = ({ options, placeholder, isDisabled, onChangeFun }) => {
  return (
    <Select
      disabled={isDisabled}
      placeholder={placeholder}
      // onChange={onChangeFun}
      suffixIcon={<FaAngleDown style={{ fontSize: "15px" }} />}
    >
      {options.map((option, index) => (
        <Option key={index} value={option.value}>{option.label}</Option>
      ))}
    </Select>
  );
};
export default CustomSelector
