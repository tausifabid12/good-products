import React from 'react';
import noImage from '../../assets/no-image-icon.png';

const ProductCard = ({ product }) => {
  const {
    product_name,
    product_model_name,
    product_category_name,
    product_price,
    product_images,
    product_brand_name,
  } = product;

  return (
    <div className="card w-full rounded-md bg-base-100 shadow-md">
      <figure>
        <img
          className="h-60 w-full"
          src={
            product_images[0]?.product_image
              ? 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
              : noImage
          }
          alt={product_name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.product_name}
          <div className="badge badge-secondary">{product_brand_name}</div>
        </h2>
        <p className="font-semibold">Model : {product_model_name}</p>
        <p className="font-semibold">Category : {product_category_name}</p>
        <p className="font-semibold">Price : {product_price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
