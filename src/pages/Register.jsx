import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { motion } from "framer-motion";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (!data.username || !data.email || !data.password) {
    toast.error("Please provide all credentials");
    return null;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    toast.error("Please provide a valid email address");
    return null;
  }

  if (data.password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return null;
  }

  try {
    const response = await customFetch.post("/auth/local/register", data);

    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";

    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center bg-base-200/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Form
          method="POST"
          className="card w-96 p-8 bg-base-100 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border border-base-200 flex flex-col gap-y-4"
        >
          <h4 className="text-center text-4xl font-extrabold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Register
          </h4>
          <FormInput type="text" label="username" name="username" />
          <FormInput type="email" label="email" name="email" />
          <FormInput type="password" label="password" name="password" />
          <div className="mt-4">
            <SubmitBtn text="register" />
          </div>
          <p className="text-center mt-2 text-sm text-base-content/80">
            Already a member?
            <Link
              to="/login"
              className="ml-2 link link-hover link-primary capitalize font-semibold"
            >
              login
            </Link>
          </p>
        </Form>
      </motion.div>
    </section>
  );
};

export default Register;
