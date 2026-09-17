import { motion } from "framer-motion";

function OurTeam() {
  const teamMembers = [
    {
      name: "Henry Cleff",
      role: "Founder & CEO",
      imageSrc: "/images/Cleff.jpg",
      isGrayscale: true,
      socials: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Bodunde Tolulope",
      role: "SM Manager",
      imageSrc: "/images/Tolu.jpg",
      isGrayscale: false,
      socials: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Ajao Ifeoluwa",
      role: "Developer",
      imageSrc: "/images/Ajao.png",
      isGrayscale: true,
      socials: {
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[1300px] mx-auto">
        <motion.article 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl sm:rounded-4xl shadow-2xl p-8 sm:p-12 border border-base-200 bg-base-100"
        >
          <div className="">
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-2">
              Our Team
            </h2>
            <p className="mt-6 text-xl leading-8 tracking-tighter font-mono text-base-content/80">
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

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={itemVariants} className="group cursor-pointer">
                <div className="aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-lg group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={member.imageSrc}
                    alt={`Photo of ${member.name}`}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:grayscale-0 grayscale"
                  />
                </div>
                <div className="pl-2.5 mt-4">
                  <h3 className="text-xl leading-8 font-serif font-bold text-base-content">
                    {member.name}
                  </h3>
                  <p className="text-sm my-1.5 leading-7 font-InterMedium text-primary">
                    {member.role}
                  </p>
                </div>
                <div className="flex pl-2">
                  <a
                    href={member.socials.instagram}
                    className="w-9 h-9 rounded-full text-base-content/60 hover:bg-base-200 hover:text-primary flex items-center justify-center transition-colors text-xl"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>

                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-full text-base-content/60 hover:bg-base-200 hover:text-primary flex items-center justify-center transition-colors text-xl ml-2"
                    title="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}

export default OurTeam;
