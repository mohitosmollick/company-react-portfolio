import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me.</h2>
            <h3 className="h3  mb-4">
              I'm a Freelancer Front-end Developer with over 5 year of
              experience.
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              aliquet tincidunt magna ut malesuada. Curabitur auctor lorem
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="lg:text-[40px] text-[35px] font-tertiary  text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="lg:text-[40px] text-[35px] font-tertiary  text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}{" "}
                  K+
                </div>
                <div>
                  Project <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="lg:text-[40px] text-[35px] font-tertiary  text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}{" "}
                  K+
                </div>
                <div>
                  Satisfied <br />
                  Client
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact Me</button>
              <Link to=" " className="text-gradient btn-link">
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
