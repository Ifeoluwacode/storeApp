import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckBox";
import { motion } from "framer-motion";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, catergory, company, order, price, shipping } = params;
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Form className="bg-base-100/80 backdrop-blur-lg rounded-2xl px-8 py-8 shadow-lg border border-base-200/60 mt-4">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-base-200">
          <h3 className="text-xl font-bold text-base-content/80 tracking-wide">Refine Search</h3>
        </div>
        
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
          {/* SEARCH */}
          <FormInput
            type="search"
            label="search product"
            name="search"
            size="input-sm"
            defaultValue={search}
          />
          {/* CATEGORIES */}
          <FormSelect
            label="select category"
            name="category"
            list={meta.categories}
            size="select-sm"
            defaultValue={catergory}
          />
          {/* COMPANY */}
          <FormSelect
            label="select company"
            name="company"
            list={meta.companies}
            size="select-sm"
            defaultValue={company}
          />
          {/* ORDER */}
          <FormSelect
            label="sort by"
            name="order"
            list={["a-z", "z-a", "high", "low"]}
            size="select-sm"
            defaultValue={order}
          />
          {/* PRICE */}
          <FormRange
            name="price"
            label="select price"
            size="range-sm"
            price={price}
          />
          {/* SHIPPING */}
          <FormCheckbox
            name="shipping"
            label="free shiping"
            size="checkbox-sm"
            defaultValue={shipping}
          />
        </div>
        
        {/* BUTTONS */}
        <div className="flex gap-4 mt-8 pt-6 border-t border-base-200 justify-end">
          <button type="submit" className="btn btn-primary shadow-lg hover:shadow-primary/50 transition-all hover:-translate-y-0.5 px-8">
            Search
          </button>
          <Link to="/products" className="btn btn-accent btn-outline shadow-sm hover:shadow-accent/50 transition-all hover:-translate-y-0.5 px-8">
            Reset
          </Link>
        </div>
      </Form>
    </motion.div>
  );
};

export default Filters;
