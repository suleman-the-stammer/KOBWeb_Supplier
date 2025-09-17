import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoTimer } from 'react-icons/io5';

// ANT-D :
import { Badge } from 'antd';

// CSS :
import './land-scape-card.scss'


const LandScapeCard = (props) => {
    const { path, data, isClosed } = props;
    const [show, setShow] = useState(true);

    return (
        <div className="product-card">
            <div className="prod-image">
                {isClosed && <div className="available">Closed</div>}
                <Link to={path}>
                    <img src={data.imagePath} alt="ERROR" />
                </Link>
            </div>
            <div className="prod-detail">
                <div className="card-header">
                    <div className="left">
                        <div className="icon">
                            {!isClosed ?
                                <Badge count={
                                    show ? (
                                        <IoTimer
                                            style={{
                                                color: 'red',
                                                fontSize: "15px"
                                            }}
                                        />
                                    ) : (
                                        0
                                    )
                                } size="small" color="#203247" offset={[1, 12]}>
                                    <img src="./images/store.png" alt="" />
                                </Badge> :
                                <img src="./images/store.png" alt="" />
                            }
                        </div>
                        <div>
                            <div className="date">Ends: Jan 08, Fri,00:00:00 PM</div>
                        </div>
                    </div>
                    <div className="static-image">
                        <img src="./images/statics.png" alt="" />
                    </div>
                </div>
                <div className="flex-card-content">
                    <div className="card-content">
                        <div className="title">
                            <Link to={path}>Refurbished Samsung Galaxy A50 US Version Factory Sprint Cell Phone with 512GB Memory, 6.4" Screen, Blackk</Link>
                        </div>
                        <p className="description">
                            Refurbished Samsung Galaxy A50 US Version Factory Sprint Cell Phone with 512GB Memory, 6.4" Screen, BlackRefurbished Samsung Galaxy A50 US Version Factory Sprint Cell Phone with 512GB Memory, 6.4" Screen, Black...Refurbished Samsung Galaxy A50 US Version Factory Sprint Cell Phone with 512GB Memory, 6.4" Screen, Black...
                        </p>
                    </div>
                    <div className="flex-prod-prices">
                        <div className="prod-prices">
                            <div className="panel">#Buyer(s)</div>
                            <div className="price">$865</div>
                        </div>
                        <div className="prod-prices">
                            <div className="panel">Qty. Requested</div>
                            <div className="price">999</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandScapeCard
