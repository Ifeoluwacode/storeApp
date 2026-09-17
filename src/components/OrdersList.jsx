import day from "dayjs";
import { useLoaderData } from "react-router-dom";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { motion } from "framer-motion";

day.extend(advancedFormat);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const OrdersList = () => {
  const { orders, meta } = useLoaderData();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-8"
    >
      <h4 className="mb-4 capitalize font-medium text-base-content/80">
        total orders : {meta.pagination.total}
      </h4>
      <div className="overflow-x-auto shadow-md rounded-xl border border-base-200">
        <table className="table table-zebra w-full bg-base-100">
          {/* head */}
          <thead className="bg-base-200 text-base-content font-bold">
            <tr>
              <th className="rounded-tl-xl">Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden sm:block rounded-tr-xl">Date</th>
            </tr>
          </thead>
          <motion.tbody
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;

              const date = day(createdAt).format("hh:mm a - MMM Do, YYYY ");
              return (
                <motion.tr variants={itemVariants} key={id} className="hover">
                  <td className="font-medium text-base-content">{name}</td>
                  <td className="text-base-content/80">{address}</td>
                  <td className="font-semibold text-primary">{numItemsInCart}</td>
                  <td className="font-bold text-base-content">{orderTotal}</td>
                  <td className="hidden sm:block text-sm text-base-content/60">{date}</td>
                </motion.tr>
              );
            })}
          </motion.tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default OrdersList