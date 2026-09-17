import { Form, Link, redirect, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    if (!data.identifier || !data.password) {
      toast.error("Please provide both email and password");
      return null;
    }

    try {
      const response = await customFetch.post("/auth/local", data);

      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";

      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      toast.error("guest user login error.please try later.");
    }
  };
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
            Login
          </h4>
          <FormInput
            type="email"
            label="Email"
            name="identifier"
            // defaultValue="test@test.com"
          />
          <FormInput
            type="password"
            label="password"
            name="password"
            // defaultValue="secret"
          />
          <div className="mt-4">
            <SubmitBtn text="login" />
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-outline btn-block capitalize shadow-sm hover:shadow-md transition-all"
            onClick={loginAsGuestUser}
          >
            guest user
          </button>
          <p className="text-center mt-2 text-sm text-base-content/80">
            Not a member yet?{" "}
            <Link
              to="/register"
              className="ml-2 link link-hover link-primary capitalize font-semibold"
            >
              register
            </Link>{" "}
          </p>
        </Form>
      </motion.div>
    </section>
  );
};

export default Login;
