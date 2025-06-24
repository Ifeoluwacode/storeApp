function OurTeam() {
  const teamMembers = [
    {
      name: "Henry Cleff",
      role: "Founder & CEO",
      imageSrc: "/src/assets/Cleff.jpg",
      isGrayscale: true,
      socials: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Bodunde Tolulope",
      role: "SM Manager",
      imageSrc: "/src/assets/Tolu.jpg",
      isGrayscale: false,
      socials: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Ajao Ifeoluwa",
      role: "Developer",
      imageSrc: "/src/assets/Ajao.png",
      isGrayscale: true,
      socials: {
        instagram: "#",
        linkedin: "#",
      },
    },
  ];
  return (
    <div className=" py-16 sm:py-24">
      <div className="max-w-[1300px] mx-auto">
        <article className=" rounded-2xl sm:rounded-4xl shadow-[0_4px_14px_rgba(0,0,0,0.25)] p-8 sm:p-12">
          <div className="">
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
              Our Team
            </h2>
            <p className="mt-6 text-xl leading-8 tracking-tighter font-mono">
              Behind every cozy sofa, stylish outfit, and joyful kids' item we
              offer is a dedicated team passionate about helping you create a
              beautiful and comfortable life. From carefully curating quality
              furniture and home essentials to selecting trendy clothing and
              adorable kids’ items, our team works together to bring you a
              one-stop shopping experience you can trust. We’re designers,
              organizers, and customer care champions — all focused on making
              your home feel complete and your shopping experience easy and
              enjoyable. Whether you’re furnishing a room, finding a perfect
              outfit, or picking something fun for the little ones, we’re here
              to help with friendly service and expert care. Come meet the
              people who make it all possible — we’re proud to serve you!
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <div className="aspect-[5/4] w-full overflow-hidden rounded-2xl">
                  <img
                    src={member.imageSrc}
                    alt={`Photo of ${member.name}`}
                    className={[
                      "h-full w-full object-cover object-center transition-all duration-300 ease-in-out hover:scale-105 hover:grayscale-0 grayscale",
                    ]}
                  />
                </div>
                <div className="pl-2.5">
                  <h3 className="mt-6 text-xl  leading-8 text-gray-400 font-serif">
                    {member.name}
                  </h3>
                  <p className="text-sm my-1.5 leading-7 font-InterMedium text-gray-400">
                    {member.role}
                  </p>
                </div>
                <div className="flex ">
                  <a
                    href={member.socials.instagram}
                    className="w-9 h-9 rounded-full  text-gray-500 hover:bg-gray-300 flex items-center justify-center transition-colors text-xl"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>

                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-full  text-gray-500 hover:bg-gray-300 flex items-center justify-center transition-colors text-xl"
                    title="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

export default OurTeam;
