import React from "react";

// Components :
import { Input, ProductPage } from "src/components";


const CompaignDemand = () => {
  return (
    <ProductPage
      input={Input}
      title="Demand"
      subTitle="Campaign"
      path="/compaign-demand/edit-product"
    />
  );
};

export default CompaignDemand;
