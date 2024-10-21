import ServicesGrid from "../../componentServices/ServicesGrid";
import ServiceHeader from "../../componentServices/ServiceHeader";
import React from "react";
import Newsletter from "../../components/Newsletter";

function Services() {
  return (
    <>
      <ServiceHeader />
      <ServicesGrid />
      <Newsletter />
    </>
  );
}

export default Services;
