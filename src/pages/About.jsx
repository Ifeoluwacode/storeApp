import AboutFirm from "../components/AboutFirm";
import OurTeam from "../components/OurTeam";

const About = () => {
  return (
    <>
      <div className="flex gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-tight sm:text-6xl">
        <h1 className="">About US</h1>
      </div>
      <AboutFirm />
      <OurTeam />
    </>
  );
};

export default About;
