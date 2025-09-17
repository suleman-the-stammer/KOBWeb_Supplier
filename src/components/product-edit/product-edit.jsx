import React, { useState } from "react";

// Components :
import {
  ProductImage,
  ProductDescription,
  ProductDetailsDrawer
} from "./components";

// CSS :
import "./product-edit.scss";


const ProductEdit = (props) => {
  const { subTitle, title, isClosed } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="product-detail-container">
      <div className="flex-detail-container">
        <ProductImage />
        <ProductDescription open={open} setOpen={setOpen} />
      </div>
      <ProductDetailsDrawer
        open={open}
        title={title}
        setOpen={setOpen}
        subTitle={subTitle}
      />
    </div >
  );
};

export default ProductEdit;
