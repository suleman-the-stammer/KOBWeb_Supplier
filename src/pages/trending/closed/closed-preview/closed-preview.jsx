import React from "react";

// Components :
import { Input, ProductPage } from "src/components";


const ClosedPreview = () => {
  return (
    <ProductPage
      input={Input}
      title="Closed"
      isClosed={true}
      subTitle="Trending"
      path="/closed/edit-product"
    />
  );
};

export default ClosedPreview;
