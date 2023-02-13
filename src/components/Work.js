import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/portfolio-img1.png";
// import { BsArrowUpRight } from "react-icons/bs";
// import { Link } from "react-scroll";
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="h2 leading-tight text-accent">
              My Latest <br />
              Work
            </h2>
            <p className="max-w-sm mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              Lorem ipsum dolor sit amet . Lorem ipsum dolor sit amet .
            </p>
            <button className="btn btn-sm">
              <Link to="/portfolio">View all porject</Link>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
          >
            <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={img1}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
              <span className="text-gradient">UI/UX Design</span>
            </div>

            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
              <span className="text-white text-3xl">Project Title</span>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="group relative overflow-hidden  border-2 border-white/50 rounded-xl"
          >
            <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={img1}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
              <span className="text-gradient">UI/UX Design</span>
            </div>

            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
              <span className="text-white text-3xl">Project Title</span>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="group relative overflow-hidden max-h-[285px] border-2 border-white/50 rounded-xl"
          >
            <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={img1}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
              <span className="text-gradient">UI/UX Design</span>
            </div>

            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
              <span className="text-white text-3xl">Project Title</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
