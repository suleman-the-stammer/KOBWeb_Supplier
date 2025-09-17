import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoTimer } from "react-icons/io5";

// ANT-D :
import { Badge } from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';

// CSS :
import "./Product-card.scss";


const ProductCard = (props) => {
  const { path, data, isClosed } = props;
  const [show, setShow] = useState(true);
  return (
    <div className="card-container">
      {isClosed && <div className="available">Closed</div>}
      <div className="card">
        <div className="head">
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
        <div className="image">
          <Link to={path}>
            <img src={data.imagePath} alt="ERROR" />
          </Link>
        </div>
        <div className="description">
          <Link to={path}>New APPLE iPhone 8 Plus, Sprint, 512GB, BlackNew...</Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="total-count">
        <div className="buyer">
          <div className="total">Total Buyer(s)</div>
          <div className="count">1000</div>
        </div>
        <div className="dividers"></div>
        <div className="requested">
          <div className="total">Requested Qty.</div>
          <div className="count">1000</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
