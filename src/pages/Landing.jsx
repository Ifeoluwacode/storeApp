import { FeaturedProducts, Hero } from "../components";
import { customFecth } from "../utils";

const url = "/products?featured=true";
export const loader = async () => {
  const response = await customFecth(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
