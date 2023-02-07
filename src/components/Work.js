import { motion } from "framer-motion";
import React from "react";
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";
// import { BsArrowUpRight } from "react-icons/bs";
// import { Link } from "react-scroll";
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-12">
          <div className="flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0">
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
              <button className="btn btn-sm">View all porject</button>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
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
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-8"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl max-h-[285px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                <span className="text-white text-3xl">Project Title</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl max-h-[285px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                <span className="text-white text-3xl">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
