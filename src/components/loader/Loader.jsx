import { Spin } from "antd";

// CSS :
import "./Loader.scss";

const Loader = ({ isFullHeight }) => {
  return (
    <div className="loader" style={{ height: isFullHeight && "100vh" }}>
      <Spin size="large" />
    </div>
  );
};
export default Loader;
