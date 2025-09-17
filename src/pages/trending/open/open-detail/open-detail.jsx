import React from "react";

// Components :
import { PageHeader } from "src/components";
import ProductEdit from "src/components/product-edit/product-edit";


const OpenDetail = () => {
  return (
    <>
      <PageHeader title="Request for Information/Quote" subTitle="Demand" isBack={true} />
      <ProductEdit isClosed={true} title="Request for Quote" subTitle="Demand" />
    </>
  );
};

export default OpenDetail;
