import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-scroll";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin Lorem ipsum dolor sit amet",
    link: "Learn more",
  },
  {
    name: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscin",
    link: "Learn more",
  },
  {
    name: "Disital Marketion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin Lorem ipsum dolor sit amet",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16 ">
              I'm a Freelancer Front-end Developer with over 5 year of
              experience.
            </h3>
            <button className="btn btn-sm">See my Work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <div
                  className="border-b border-white/20 h-[130px] my-[8px] flex  "
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="tracking-wider front-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <Link
                      to=""
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center "
                    >
                      <BsArrowUpRight />{" "}
                    </Link>
                    <Link to="" className="text-sm text-gradient ">
                      {link}
                    </Link>
                  </div>
                </div>
              );
            })}
            <Link className="btn btn-sm mt-8  items-end">See my Work</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
