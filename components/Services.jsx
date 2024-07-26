import React from "react";
import {  services } from "../utils/data"; // Assuming the path to data file is correct
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} label={service.label} subtext={service.subtext} imgURL={service.imgURL} />
      ))}
    </section>
  );
};

export default Services;