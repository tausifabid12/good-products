import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [filterFaq, setFilterFaq] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const { data: allFaq = [] } = useQuery({
    queryKey: ['allFaq', filterFaq],
    queryFn: () => fetch(`list_faq.json`).then((res) => res.json()),
  });

  const { data: faqCat = [] } = useQuery({
    queryKey: ['faqCat'],
    queryFn: () => fetch(`faq_category.json`).then((res) => res.json()),
  });

  const handleFilter = (key, value) => {
    const filteredFaq = allFaq.filter((faq) => faq[key] === value);
    setFilterFaq(filteredFaq);
    setIsFilter(true);
  };

  return (
    <div className="lg:px-5">
      <div className=" pt-12 mb-24">
        <p className="p-2 text-sm text-primary font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-16 text-4xl text-primary font-bold leading-none text-center sm:text-5xl ">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mx-5">
          <div className="flex flex-col divide-y  divide-gray-700">
            {(isFilter ? filterFaq : allFaq).map((faq) => (
              <details key={faq?.faq_id}>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  {faq?.question}
                </summary>
                <div className="px-4 pb-4">
                  <p>{faq?.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4  w-60 h-52 rounded-md bg-primary  text-base-content">
            {/* <h3 className="text-2xl font-bold  p-4"> Category</h3> */}
            {faqCat.map((cat) => (
              <li
                className="text-white rounded-lg font-semibold hover:bg-[#253946]"
                onClick={() => handleFilter('faq_cat_id', cat?.faq_cat_id)}
                key={cat?.faq_cat_id}
              >
                <Link>{cat?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
