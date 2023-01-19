import { useQuery } from '@tanstack/react-query';
import React from 'react';

const SideBar = ({ handleFilter, setSidebarLoading }) => {
  const { data: category = [] } = useQuery({
    queryKey: ['category'],
    queryFn: () => fetch(`list_category.json`).then((res) => res.json()),
  });

  const { data: models = [] } = useQuery({
    queryKey: ['models'],
    queryFn: () => fetch(`list_models.json`).then((res) => res.json()),
  });
  const { data: brands = [] } = useQuery({
    queryKey: ['brands'],
    queryFn: () => fetch(`list_brand.json`).then((res) => res.json()),
  });

  console.log(brands);
  return (
    <div className="w-full px-2 space-y-4 ">
      <div className="collapse collapse-open collapse-plus border border-base-300 bg-base-100 rounded-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Category</div>
        <div className="collapse-content">
          <ul className=" text-left">
            {category.map((cat) => (
              <li
                onClick={() => handleFilter('product_category_name', cat?.name)}
                key={category?.category_id}
              >
                <button className="w-full text-left py-3 hover:bg-gray-200 px-4 rounded-md">
                  {cat?.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Models</div>
        <div className="collapse-content">
          <ul className=" text-left">
            {models.map((model) => (
              <li
                onClick={() =>
                  handleFilter('product_model_name', model?.model_name)
                }
                key={model?.model_id}
              >
                <button className="w-full text-left py-3 hover:bg-gray-200 px-4 rounded-md">
                  {model?.model_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Brands</div>
        <div className="collapse-content">
          <ul className=" text-left">
            {brands.map((brand) => (
              <li
                onClick={() => handleFilter('product_brand_name', brand?.name)}
                key={brand?.brand_id}
              >
                <button className="w-full text-left py-3 hover:bg-gray-200 px-4 rounded-md">
                  {brand?.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
