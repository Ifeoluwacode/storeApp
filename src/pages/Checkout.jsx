import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => async() => {
  const user = store.getState().userState.user  
  
if (!user) {
  toast.warn('you must be logged in')
  return redirect('/login')
}
return null
}

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);


  
  if (cartTotal === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }

  return (
    <> 
    <SectionTitle text='Place your order' />
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div> 
      </> 
 
  );
};

export default Checkout;
