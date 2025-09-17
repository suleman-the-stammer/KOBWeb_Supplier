import React, { useState } from 'react'
import { GoChevronDown, GoChevronUp } from "react-icons/go";
// ANT-D :
import { Slider } from 'antd'

// Components :
import { FilterSection } from './components'

// CSS :
import './filter-box.scss'


const FilterBox = () => {
    // const [priceRanges, setPriceRanges] = useState([10, 25])
    // const onChange = (newValue) => {
    //     setPriceRanges(newValue)
    // };
    return (
        <div className='filter-container'>
            <div className="filter-header">
                <div className="header-heading">Select Attributes</div>
                <a>Clear</a>
            </div>
            <div className="filter-body">
                {/* <div className="price-rang">
                    <div className="heading">
                        Select Price Rage:
                        <GoChevronDown />
                    </div>
                    <div className="ranges">
                        <div className="rang">${priceRanges[0]}</div>
                        <div className="rang">${priceRanges[1]}</div>
                    </div>
                    <Slider range defaultValue={[20, 50]} onChange={onChange} />
                </div> */}
                <FilterSection title="Price Rage:" />
                <FilterSection title="Customer Reviews:" items={[5, 4, 3, 2, 1]} />
                <FilterSection title="Brand:" items={['Motorola', 'OnePlus', 'Google', 'LG', 'Nokia', 'Sony', 'HTC',]} />
                <FilterSection title="Condition:" items={["New", "New-Open Box", "Used - Good", "Used - Very Good", "Refurbished",]} />
                <FilterSection title="Modal Year:" items={["2017", "2018", "2019", "2020", "2021", "2022"]} />
                <FilterSection title="Storage:" items={["Up to 3.9 GB", "4 GB", "8 GB", "16 GB", "32 GB", "64 GB", "128 GB", "256 GB"]} />
                <FilterSection title="Display Type:" items={["Up to 3.9 GB", "4 GB", "8 GB", "16 GB", "32 GB", "64 GB", "128 GB", "256 GB"]} />
            </div>
        </div>
    )
}

export default FilterBox
