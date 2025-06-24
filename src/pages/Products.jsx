import { Filters, Paginationcontainer, ProductContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  const url = "/products";
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, { params });

  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};
const Products = () => {
  return (
    <>
      <Filters />
      <ProductContainer />
      <Paginationcontainer />
    </>
  );
};

export default Products;
