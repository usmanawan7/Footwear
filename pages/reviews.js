import Wrapper from "@/components/Wrapper";
import ReviewCard from "@/components/ReviewCard";

const AboutUs = () => {
  return (
    <Wrapper>
      <section className="max-container mt-20 mb-10">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>

        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          <ReviewCard />
        </div>
      </section>
    </Wrapper>
  );
};

export default AboutUs;
