import React, { useState } from "react";
import { BsCheckLg } from 'react-icons/bs';
import { IoIosArrowForward } from "react-icons/io";

// ANT-D :
import { Switch } from "antd";

// Components :
import { ConfirmationModal, TermsConditionsModal } from "src/components/common";

// CSS :
import "./product-description.scss";


const ProductDescription = (props) => {
  const { setOpen } = props;

  const [checked, setChecked] = useState(false);
  const [shouldOpen, setShouldOpen] = useState(false);
  const [showAvailModal, setShowAvailModal] = useState(false);
  const [showAvailModal2, setShowAvailModal2] = useState(false);
  // const [showAvail, setShouldOpen] = useState(false);
  const [shouldButtonEnable, setShouldButtonEnable] = useState(false);

  const handleSwitch = (checked) => {
    setShouldOpen(checked);
    if (!checked) {
      setChecked(false);
      setShouldButtonEnable(false);
    }
  };
  const showDrawer = () => { setOpen(true); };
  const handleDecline = () => { setShouldOpen(false); };

  const handleAccept = () => {
    setShouldOpen(false);
    setChecked(true);
    setShouldButtonEnable(true);
  }

  const handleSubmit = () => {
    setShowAvailModal(true);
  }
  const handleModelClose = () => {
    setShowAvailModal(false);
    setShowAvailModal2(true);

  }
  const handleAvailablityModal = () => {
    setShouldOpen(true);
    setShowAvailModal(false);
  }
  const handleAvailablityModal2 = () => {
    setShowAvailModal2(false);
  }

  return (
    <>
      <div className="prod-detail-container">
        <div className="details">
          <div className="heading-section">
            <div className="sub-heading">Product</div>
            <div className="heading">Details</div>
          </div>
          <div className="flex-description">
            <p className="description">
              <div className="heading">Dolby Vision™ HDR</div>
              <p className="para">
                Dolby Vision™ transforms your TV experience with dramatic imaging – incredible brightness, contrast, and color that bring entertainment to life before your eyes.
              </p>
            </p>
            <p className="description">
              <div className="heading">Full Array Backlight</div>
              <p className="para">LEDs are evenly distributed across the screen's backlight for superior light uniformity and picture performance.</p>
            </p>
            <div className="description vizio">
              <div className="heading">VIZIO IQ Active™ 4K HDR Processor</div>
              <p className="para">
                Inside, the lightning-fast IQ Active™ processor delivers superior picture processing, and more intelligent 4K upscaling engine displaying your favorite HD entertainment in spectacular 4K quality with 60Hz refresh{" "}
              </p>
            </div>
            <p className="description">
              <div className="heading">Dolby Vision™ HDR</div>
              <p className="para">
                Dolby Vision™ transforms your TV experience with dramatic imaging – incredible brightness, contrast, and color that bring entertainment to life before your eyes.
              </p>
            </p>
          </div>
        </div>
        <div className="specification">
          <div className="heading-section">
            <div className="sub-heading">Technical</div>
            <div className="heading">Specification</div>
          </div>
          <div className="table">
            <div className="column">
              <div className="name">Screen Size</div>
              <div className="values">6.4"</div>
            </div>
            <div className="column">
              <div className="name">Processor</div>
              <div className="values">Samsung Exynos 9 Octa 9611</div>
            </div>
            <div className="column">
              <div className="name">Main Camera</div>
              <div className="values">48 MP + 8 MP + 5 MP</div>
            </div>
            <div className="column">
              <div className="name">Front Camera</div>
              <div className="values">32 MP</div>
            </div>
            <div className="column">
              <div className="name">Battery</div>
              <div className="values">4000 mAh</div>
            </div>
            <div className="column">
              <div className="name">Operating System</div>
              <div className="values">Android</div>
            </div>
            <div className="column">
              <div className="name">Cellular</div>
              <div className="values">GSM</div>
            </div>
            <div className="column">
              <div className="name">Weight</div>
              <div className="values">166 g</div>
            </div>
            <div className="column">
              <div className="name">Storage</div>
              <div className="values">512GB</div>
            </div>
            <div className="column">
              <div className="name">Color</div>
              <div className="values">Black</div>
            </div>
            <div className="column">
              <div className="name">Condition</div>
              <div className="values">Refurbished</div>
            </div>
          </div>
        </div>
        <div className="supplier">
          <div className="heading-section">
            <div className="heading">Note to Supplier</div>
          </div>
          <div className="flex-description">
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="border"></div>
            <div className="switch">
              <div className="heading">Confirm Product Availability</div>
              <Switch size="medium" checked={checked} onChange={handleSwitch} />
              <TermsConditionsModal
                open={shouldOpen}
                handleAccept={handleAccept}
                handleDecline={handleDecline}
              />
            </div>
          </div>
        </div>
        {shouldButtonEnable ? (
          <button className="submit cursor" onClick={showDrawer}>
            <div className="heading">Start Quote</div>
            <IoIosArrowForward className="icon" />
          </button>
        ) : (
          <button className="submit cursor" onClick={handleSubmit}>
            <div className="heading">Submit</div>
            <IoIosArrowForward className="icon" />
          </button>
        )}
      </div>
      <ConfirmationModal
        width="360px"
        primaryButton="Yes"
        secondaryButton="No"
        handleSuccess={handleAvailablityModal}
        handleReject={handleModelClose}
        shouldModalOpen={showAvailModal}
        title="Product Availability"
        icon={<BsCheckLg style={{ fontSize: "50px", color: "green" }} />}
      />
      <ConfirmationModal
        width="380px"
        primaryButton="OK"
        shouldModalOpen={showAvailModal2}
        handleSuccess={handleAvailablityModal2}
        title="Thank You for Confirming Product Availability"
        icon={<BsCheckLg style={{ fontSize: "50px", color: "green" }} />}
      />
    </>
  );
};

export default ProductDescription;
