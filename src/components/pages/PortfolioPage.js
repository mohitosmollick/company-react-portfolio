import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../../assets/portfolio-img1.png";
import { fadeIn } from "../../variants";

const PortfolioPage = () => {
  return (
    <>
      <section className="">
        <div className="container mx-auto ">
          <div className="flex justify-center gap-y-8 lg:gap-x-12 ">
            <motion.div
              variants={fadeIn("top", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex items-center text-center  mb-12 lg:mb-0"
            >
              <div>
                <h2 className="text-[35px] lg:text-[50px] leading-none mb-6">
                  Out Previous Project
                </h2>
                <h4 className="text-xl lg:text-3xl uppercase text-accent font-medium  mb-2 tracking-wide ">
                  total project :
                  <span className="lg:text-[40px] text-[35px] font-tertiary  text-gradient ">
                    K+
                  </span>
                </h4>
              </div>
            </motion.div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-8">
              <h4 className=" text-xl lg:text-3xl uppercase font-medium  mb-2 tracking-wide ">
                E-Commerce :
              </h4>
              <Link to="/categorysite" className="text-gradient">
                See All >>
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img1}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
                  <span className="text-gradient">
                    <Link to="#contact">UI/UX Design</Link>
                  </span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                  <span className="text-white text-3xl">Project Title</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transtion-all duration-700 z-50">
                  <span className=" text-gradient text-sm">
                    <Link to="#contact">See Live..</Link>
                  </span>
                </div>
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mt-8">
              <h4 className=" text-xl lg:text-3xl uppercase font-medium  mb-2 tracking-wide ">
                Blog/Newspaper :
              </h4>
              <Link to="" className="text-gradient">
                See All >>
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img1}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
                  <span className="text-gradient">
                    <Link to="#contact">UI/UX Design</Link>
                  </span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                  <span className="text-white text-3xl">Project Title</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transtion-all duration-700 z-50">
                  <span className=" text-gradient text-sm">
                    <Link to="#contact">See Live..</Link>
                  </span>
                </div>
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mt-8">
              <h4 className=" text-xl lg:text-3xl uppercase font-medium  mb-2 tracking-wide ">
                Company/Business :
              </h4>
              <Link to="/categorysite" className="text-gradient">
                See All >>
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img1}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
                  <span className="text-gradient">
                    <Link to="#contact">UI/UX Design</Link>
                  </span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                  <span className="text-white text-3xl">Project Title</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transtion-all duration-700 z-50">
                  <span className=" text-gradient text-sm">
                    <Link to="#contact">See Live..</Link>
                  </span>
                </div>
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
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
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-20 mx-auto"></div>
      </section>
    </>
  );
};

export default PortfolioPage;
