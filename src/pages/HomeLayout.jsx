import { Outlet, useNavigate } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";

const HomeLayout = () => {
  const navigation = useNavigate();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="mx-auto max-w-6xl px-8 py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
