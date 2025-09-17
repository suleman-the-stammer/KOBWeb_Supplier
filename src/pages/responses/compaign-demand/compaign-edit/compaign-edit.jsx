import React from "react";
import { PageHeader, ProductEdit } from "src/components";

const CompaignEdit = () => {
  return (
    <>
      <PageHeader title="Request for Information/Quote" subTitle="Demand" isBack={true} />
      <ProductEdit title="Request for Quote" subTitle="Demand" />
    </>
  );
};

export default CompaignEdit;
