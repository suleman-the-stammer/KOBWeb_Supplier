import React from "react";

// Components :
import { Input, ProductPage } from "src/components";


const OpenPreview = () => {
  return (
    <ProductPage
      title="Open"
      input={Input}
      subTitle="Trending"
      path="/open/edit-product"
    />
  );
};

export default OpenPreview;
