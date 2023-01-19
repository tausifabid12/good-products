import React from 'react';
import { useState } from 'react';
import UseProducts from '../../hooks/UseProducts';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
import SideBar from '../SideBar/SideBar';

const AllProducts = () => {
  const [filterKey, setFilterKey] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sidebarLoading, setSidebarLoading] = useState(false);
  const [products, isLoading] = UseProducts(filterKey, filterValue);

  const handleFilter = (key, value) => {
    setFilterKey(key);
    setFilterValue(value);
  };
  if (isLoading && sidebarLoading) {
    return (
      <div className="w-full h-screen grid place-content-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="lg:px-5">
      <div className="flex justify-between pt-12 px-2">
        <h2 className="text-primary text-4xl font-bold">All Products</h2>
        <div className="flex">
          <select className="select select-sm select-bordered w-full max-w-xs">
            <option selected>Shot By</option>
            <option>Coming Soon</option>
          </select>
        </div>
      </div>

      <div className="grid gap-2 grid-cols-1 lg:grid-cols-5 mt-10 px-2">
        <div className="hidden md:block">
          {
            <SideBar
              handleFilter={handleFilter}
              setSidebarLoading={setSidebarLoading}
            />
          }
        </div>
        <div className="grid gap-x-5 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-4">
          {products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
