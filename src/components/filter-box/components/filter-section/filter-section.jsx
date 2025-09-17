import React, { useState } from 'react'
import { GoChevronDown, GoChevronUp } from "react-icons/go";

import { Button, Rate, Slider } from 'antd'

import './filter-section.scss'


const FilterSection = ({ title, items }) => {
  const [isCollapes, setIsCollapes] = useState(false);
  const [priceRanges, setPriceRanges] = useState([10, 25]);

  const onChange = (newValue) => {
    setPriceRanges(newValue)
  };
  const handleCollapes = () => {
    setIsCollapes(!isCollapes);
  }
  return (
    <div className="filter-section-container">
      <div className="sections-heading">
        {title}
        <div className="manage-collapse-icons" onClick={handleCollapes}>
          {isCollapes ?
            <GoChevronUp className='icon cursor' />
            :
            <GoChevronDown className='icon cursor' />
          }
        </div>
      </div>
      {title === "Customer Reviews:" ?
        isCollapes &&
        <div className="customer-reviews">
          <div className="rate">
            <Button>
              <Rate disabled defaultValue={5} className='rating' />
            </Button>
            <Button>
              <Rate disabled defaultValue={5} className='rating' />
            </Button>
            <Button>
              <Rate disabled defaultValue={5} className='rating' />
            </Button>
            <Button>
              <Rate disabled defaultValue={5} className='rating' />
            </Button>
          </div>
          {/* <div className="rate">
            <Button>
              <Rate disabled defaultValue={3} className='rating' />
            </Button>
            <Button>
              <Rate disabled defaultValue={2} className='rating' />
            </Button>
          </div> */}
        </div>
        :
        title === "Price Rage:" ?
          isCollapes &&
          <div className="pricing-range">
            <div className="flex-ranges">
              <div className="range">${priceRanges[0]}</div>
              <div className="range">${priceRanges[1]}</div>
            </div>
            <Slider range defaultValue={[20, 50]} onChange={onChange} />
          </div> :
          isCollapes &&
          <div className="filter-buttons">
            {items?.map((item, i) => <Button key={i}>{item}</Button>)}
          </div>

      }
    </div>
  )
}

export default FilterSection
