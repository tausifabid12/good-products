import { useQuery } from '@tanstack/react-query';

const UseProducts = (filterKey, filterValue) => {
  //   console.log(filterKey, filterValue);
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', filterKey, filterValue],
    queryFn: () => fetch(`list_products.json`).then((res) => res.json()),
  });

  if (filterKey) {
    const result = products.filter((p) => p[filterKey] === filterValue);
    return [result, isLoading];
  } else {
    return [products, isLoading];
  }
};

export default UseProducts;
