import { useLocation, useNavigate } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";

// CSS :
import "./Page-header.scss";

const PageHeader = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    title,
    input,
    isBack,
    subTitle,
    toggleFilterBox,
    setTogglePageView,
    setToggleFilterBox,
  } = props;

  const handleBack = () => {
    navigate(-1);
  };
  const handleFilter = () => setToggleFilterBox(!toggleFilterBox);
  const showLandscapeProducts = () => setTogglePageView(false);
  const showGridViewProdcuts = () => setTogglePageView(true);

  return (
    <div
      className="page-header-container"
      style={{
        marginTop:
          location.pathname === "/open" ||
            location.pathname === "/closed" ||
            location.pathname === "/rfi-rfq" ||
            location.pathname === "/compaign-demand" ? "60px" : "",
      }}
    >
      <div className="top-page-header">
        <div className="flex-heading">
          {isBack && (
            <div className="back-icon" onClick={handleBack}>
              <BsArrowLeftShort className="icon cursor" />
            </div>
          )}
          <div className="flex-title">
            <div className="sub-title">{subTitle}</div>
            <div className="title">{title}</div>
          </div>
        </div>
      </div>
      {input &&
        <div className="bottom-page-header">
          <div className="search-field"><props.input /></div>
          <div className="product-layouts">
            <FaFilter
              className="icon cursor"
              onClick={handleFilter}
              style={{ fontSize: "12px" }}
            />
            <TbCategory className="icon cursor" onClick={showGridViewProdcuts} />
            <AiOutlineBars className="icon cursor" onClick={showLandscapeProducts} />
          </div>
        </div>
      }
    </div>
  );
};

export default PageHeader;
