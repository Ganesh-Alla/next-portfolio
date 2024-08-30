"use client";
import React, { useEffect } from "react";
import { CiShare1 } from "react-icons/ci";
import { FaDownload, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Dept from '@/public/assets/department.png'
import Fac from '@/public/assets/FACULTY-LOAD-ALLOCATION.png'
import Code from '@/public/assets/codeCombat.png'
import Flight from '@/public/assets/flight.png'

const Projects = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="projects"
      className={`min-h-screen py-12 ${
        darkMode ? "bg-white" : ""
      } bg-gray-800 `}
    >
      <h1
        className={`mb-12 text-4xl font-semibold text-center  ${
          darkMode ? "text-gray-800 " : "text-white"
        }  lg:text-5xl xl:text-6xl`}
      >
        Projects
      </h1>
      <div className="container grid grid-cols-1 gap-8 mx-auto  lg:grid-cols-2">
        {/* Card 1 */}
        <div
          className="flex mx-6 md:mx-3 bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-up"
        >
          <Image
            src={Fac}
            alt="Project 1"
            className="object-contain h-full bg-white w-1/3 rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              FACULTY LOAD ALLOCATION
            </h2>
            <p className="mb-4 text-sm text-white text-justify">
              Faculty Load Allocation is a Next.js-based Full-stack website
              designed to efficiently assign exam invigilation duties to
              available professors. This system ensures a balanced and fair
              distribution of tasks, making scheduling easy for administrators
              and managing faculty workloads effectively.
            </p>
            <div className="flex gap-5">
            <a
              href="https://faculty-load.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                <CiShare1 />
                Visit
              </button>
            </a>
            <a
              href="https://github.com/Ganesh-Alla/QuizApp"
              target="_blank"
              rel="noopener noreferrer"
            ><button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
            <FaGithub />
            Repo
          </button></a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex mx-6 md:mx-3 bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image
            src={Code}
            alt="Project 2"
            className="object-cover  w-1/3 h-full max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              CODE COMBAT QUIZ
            </h2>
            <p className="mb-4 text-sm text-white text-justify">
              CodeCombat is a quiz application designed for the NIPUNA event,
              organized by ISTE, to determine the winner of the coding
              competition. The application features multiple-choice questions
              (MCQs) that test participants coding knowledge, providing a fair
              and engaging way to finalize the competition results.
            </p>
            <div className="flex gap-5">
            <a
              href="https://codecombat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                <CiShare1 />
                Visit
              </button>
            </a>
            <a
              href="https://codecombat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            > <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                  <FaGithub />
                  Repo
                </button></a></div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="flex mx-6 md:mx-3 bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Image
            src={Flight}
            alt="Project 3"
            className="object-fill w-1/3 h-auto max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              FLIGHT BOOKING SYSTEM
            </h2>
            <p className="mb-4 text-sm text-white text-justify">
              I created a user-friendly flight booking system using HTML, CSS,
              Node.js, Express.js, and MongoDB. This system simplifies the
              process of booking flights and effectively manages data with
              MongoDB, ensuring a smooth and efficient user experience.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/Ganesh-Alla/FlightBookingSystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                  <FaGithub />
                  Repo
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div
          className="flex mx-6 md:mx-3 bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-up"
          data-aos-delay="400"
        >
<Image
  src={Dept}
  alt="Project 3"
  className="object-cover w-1/3 h-auto max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg" />

          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Department Website
            </h2>
            <p className="mb-4 text-sm text-white text-justify">
              Our team has created a comprehensive website built with HTML, CSS, JavaScript,  offering essential course details, placement information, and event updates for a colleges department, providing a centralized resource for students and faculty.
              </p>
            <div className="flex gap-5">
            <a
              href="https://srkrcse.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                <CiShare1 />
                Visit
              </button>
            </a>
              <a
                href="https://github.com/Ganesh-Alla/SRKRCSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                  <FaGithub />
                  Repo
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Add more cards here */}
      </div>
    </div>
  );
};

export default Projects;
