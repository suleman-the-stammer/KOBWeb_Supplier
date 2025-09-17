import React from 'react'

// ANT-D :
import { Rate } from 'antd'

// CSS :
import './product-image.scss'


const ProductImage = () => {
    return (
        <div className="prod-image-container">
            <div className="mobile-section">
                <div className="mobile-header">
                    <div>
                        <div className="date">Ends: Jan 08, Fri, 00:00:00 PM</div>
                    </div>
                    <div className="image">
                        <img src="/images/statics.png" alt="ERROR" />
                    </div>
                </div>
                <div className="mobile-slider">
                    <img src="/images/phone.png" alt="ERROR" />
                </div>
                <div className="mobile-footer">
                    <div className="buyers">
                        <div className="heading">Unique Buye(s)</div>
                        <div className="count">1000</div>
                    </div>
                    <div className="border"></div>
                    <div className="quantity">
                        <div className="heading">Requestd Quantity</div>
                        <div className="count">200</div>
                    </div>
                </div>
            </div>
            <div className="description-section">
                <div className="heading">Refurbished Samsung Galaxy A50 US Version Factory Sprint Cell Phone with 512GB Memory, 6.4" Screen, Black</div>
                <Rate disabled allowHalf defaultValue={3.5} />
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}

export default ProductImage
