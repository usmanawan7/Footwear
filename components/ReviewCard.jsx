import React, { Fragment } from "react";
import { reviews } from "@/utils/data";

const ReviewCard = () => {
  return (
    <Fragment>
    {reviews.map((review, index) => (
      <div key={index} className='flex justify-center items-center flex-col'>
        <img
          src={review.imgURL}
          alt='customer'
          className='rounded-full object-cover w-[120px] h-[120px]'
        />
        <p className='mt-6 max-w-sm text-center info-text'>{review.feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
          <img
            src="/icons/star.svg"
            width={24}
            height={24}
            alt='rating star'
            className='object-contain m-0'
          />
          <p className='text-xl font-montserrat text-slate-gray'>({review.rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
          {review.customerName}
        </h3>
      </div>
    ))}

    </Fragment>
  );
};

export default ReviewCard;
