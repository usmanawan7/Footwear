import React, { Fragment } from "react";
const ProductCard = (product) => {
  return (
    <Fragment>
      <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            className="h-full w-full object-cover object-center"
            src={product.data.imageUrl}
          />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {product.data.name}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{product.data.name}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">{product.data.price}$</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
