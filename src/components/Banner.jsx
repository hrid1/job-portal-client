import React from "react";
import { motion } from "motion/react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-10 pb-8 mx-auto lg:gap-10 xl:gap lg:py-16 lg:grid-cols-12 lg:pt-8">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Building digital <br /> products &amp; brands.
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              This free and open-source landing page template was built using
              the utility classNamees from
              <a target="_blank" className="hover:underline">
                Tailwind CSS
              </a>{" "}
              and based on the components from the{" "}
              <a href="#/" className="hover:underline" target="_blank">
                Flowbite Library
              </a>{" "}
              and the
              <a
                href="https://flowbite.com/blocks/"
                target="_blank"
                className="hover:underline"
              >
                Blocks System
              </a>
              .
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                to="/"
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
              >
                <FaBriefcase className="mr-2.5" />
                Find Jobs
              </Link>
            </div>
          </div>

          <div className="lg:mt-0 lg:col-span-5 ">
            <motion.img
              src={team1}
              alt=""
              animate={{ y: [35, 100, 35] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="w-56 md:w-64 rounded-t-[36px] rounded-br-[36px] border-l-[5px] border-b-[5px] border-blue-500 shadow-xl"
            />
            <motion.img
              src={team2}
              alt=""
              animate={{ x: [125, 190, 125] }}
              transition={{ duration: 10, repeat: Infinity, delay: 5 }}
              className="w-56 md:w-64 rounded-t-[36px] rounded-br-[36px] border-l-[6px] border-b-[6px] border-blue-500 shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
