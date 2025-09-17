import { Button } from "antd";

// CSS :
import "./filter-popover.scss";

export const FilterPopover = (
  <div className="filter-box">
    <div className="filter-heading">Filter</div>
    <div className="flex-filter">
      <div className="filter">
        <div className="heading">Brand</div>
        <div className="flex-box">
          <div className="box">
            <input type="checkbox" />
            <div className="name">Samgsung</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Apple</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Motorola</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">HTC</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Sony</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">JBL</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Nokia</div>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="heading">Condition</div>
        <div className="flex-box">
          <div className="box">
            <input type="checkbox" />
            <div className="name">Samgsung</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Apple</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Motorola</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">HTC</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Sony</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">JBL</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Nokia</div>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="heading">Modal Year</div>
        <div className="flex-box">
          <div className="box">
            <input type="checkbox" />
            <div className="name">Samgsung</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Apple</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Motorola</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">HTC</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Sony</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">JBL</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Nokia</div>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="heading">Storage</div>
        <div className="flex-box">
          <div className="box">
            <input type="checkbox" />
            <div className="name">Samgsung</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Apple</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Motorola</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">HTC</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Sony</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">JBL</div>
          </div>
          <div className="box">
            <input type="checkbox" />
            <div className="name">Nokia</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-button flex-align">
      <Button size="small" type="default" className="reset-button">
        Reset
      </Button>
      <Button size="small" type="primary" className="apply-button">
        Apply
      </Button>
    </div>
  </div>
);
