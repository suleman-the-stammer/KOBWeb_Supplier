import React from "react";
import { PageHeader } from "src/components";
import ProductEdit from "src/components/product-edit/product-edit";

const RfiEdit = () => {
  return (
    <>
      <PageHeader title="Request for Information/Quote" subTitle="Demand" isBack={true}/>
      <ProductEdit title="Request for Quote" subTitle="Demand"/>
    </>
  );
};

export default RfiEdit;