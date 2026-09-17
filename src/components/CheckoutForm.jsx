import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const action = (store) => async ({request}) => {
const formData = await request.formData()
const {name, address} = Object.fromEntries(formData)
const user = store.getState().userState.user

const {cartItems, orderTotal, numItemsIncart} = store.getState().cartState

const info = {
  name, address, numItemsInCart:numItemsIncart, chargeTotal:orderTotal, cartItems, orderTotal: formatPrice(orderTotal)
}
try {
  const response = await customFetch.post('/orders', {data:info},
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

  )
  store.dispatch(clearCart())
  toast.success('order placed successfully')
  return redirect('/orders')

} catch (error) {

  const errorMessage =
    error?.response?.data?.error?.message ||
    'there was an error placing your order';
    toast.error(errorMessage);
    if (error?.response?.status === 401 || error?.response?.status === 403) return redirect('/login')
    
  return null;
}
}
const CheckoutForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Form method='POST' className='flex flex-col gap-y-4 bg-base-100 p-8 rounded-2xl shadow-md border border-base-200'>
        <h4 className='font-extrabold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-1'>Shipping Information</h4>
        <FormInput label='first name' name='name' type='text' />
        <FormInput label='address' name='address' type='text' />
        <div className='mt-6'>
          <SubmitBtn text='Place Your Order' />
        </div>
      </Form>
    </motion.div>
  );
}

export default CheckoutForm