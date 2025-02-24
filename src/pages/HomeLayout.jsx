import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="mx-auto max-w-6xl px-8 py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
