import React from "react";

// Components :
import { Input, ProductPage } from "src/components";


const RfiPreview = () => {
  return (
    <ProductPage
      title="RFI/RFQ"
      input={Input}
      subTitle="Responses"
      path="/rfi-rfq/edit-product"
    />
  );
};

export default RfiPreview;
