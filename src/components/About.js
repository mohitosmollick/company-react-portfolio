import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex items-center text-center  mb-12 lg:mb-0"
          >
            <div>
              <h2 className="text-[35px] lg:text-[50px] leading-none mb-6">
                Out Happy Client
              </h2>
              <h4 className="text-xl lg:text-3xl uppercase text-accent font-medium  mb-2 tracking-wide ">
                total client :
                <span className="lg:text-[40px] text-[35px] font-tertiary  text-gradient ">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                  K+
                </span>
              </h4>
              <button className="btn btn-sm">
                <Link to="/client">View all Client</Link>
              </button>

              <div className="flex  gap-x-8 max-w-max mx-auto mt-6 lg:mx-0 ">
                <div className="flex border border-2 border-white/50  flex-col items-center rounded-lg p-6">
                  <div className="flex items-center justify-content-around">
                    <span className="text-gray-400 text-sm">2d ago</span>
                    <span className="text-emerald-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </span>

                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <p class="ml-2 text-sm font-medium text-white-500 dark:text-gray-400">
                        4.95 out of 5
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 w-fit mx-auto">
                    <img
                      src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                      claclassNamess="rounded-full w-28 "
                      alt=" "
                      srcset=""
                    />
                  </div>

                  <div className="mt-4 ">
                    <h2 className="text-white font-bold text-2xl tracking-wide">
                      Jonathan Smith
                    </h2>
                  </div>
                  <p className="text-emerald-400 font-semibold mt-2.5">
                    I'm a Freelancer Front-end Developer with over 5 year of
                    experience.Freelancer Front-end Developer with over 5 year
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                  K+
                </div>
                <div>
                  Satisfied <br />
                  Client
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <Link to="contact">Contact Me</Link>
              </button>
              <Link to="/portfolio" className="text-gradient btn-link">
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
