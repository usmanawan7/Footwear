import React from "react";
import Wrapper from "@/components/Wrapper";
import Services from "@/components/Services";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Wrapper>
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mx-auto mt-20 lg:mt-32 m-b-20 lg:mb-32"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red">Quality </span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">{/* <Button label='View details' /> */}</div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src="/shoes-about-us.svg"
            alt="product detail"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
    </Wrapper>
  );
};

export default AboutUs;
