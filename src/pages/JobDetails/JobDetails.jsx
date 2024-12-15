import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { BsBriefcase, BsCalendar, BsCurrencyDollar } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  return (
    <div className="max-w-4xl md:mx-auto p-6 bg-base-200 shadow-lg border border-gray-700 rounded-md my-6 mx-2 ">
      {/* Company Header */}
      <div className="flex items-center justify-between mb-6 ">
        <div className="flex items-center ">
          <img
            src={job?.company_logo || "/default-logo.png"}
            alt="Company Logo"
            className="w-16 h-16 rounded-lg mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-200">{job?.title}</h1>
            <p className="text-sm text-gray-300">
              {job?.company} | {job?.category}
            </p>
          </div>
        </div>
        <div>
          <span className="text-green-500 text-lg font-semibold">
            {job?.jobType}
          </span>
        </div>
      </div>

      {/* Job Meta Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-gray-300">
          <FaMapMarkerAlt className="mr-2 text-blue-500" />
          <p>{job?.location}</p>
        </div>
        <div className="flex items-center text-gray-300">
          <BsBriefcase className="mr-2 text-blue-500" />
          <p>{job?.jobType}</p>
        </div>
        <div className="flex items-center text-gray-300">
          <BsCurrencyDollar className="mr-2 text-blue-500" />
          <p>
            {job?.salaryRange.min} - {job?.salaryRange.max}{" "}
            {job?.salaryRange.currency.toUpperCase()}
          </p>
        </div>
        <div className="flex items-center text-gray-300">
          <BsCalendar className="mr-2 text-blue-500" />
          <p>Deadline: {job?.applicationDeadline}</p>
        </div>
      </div>

      {/* Job Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">
          Job Description
        </h2>
        <p className="text-gray-300">{job?.description}</p>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">
          Responsibilities
        </h2>
        <ul className="list-disc pl-5 text-gray-300">
          {job?.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">
          Requirements
        </h2>
        <div className="flex flex-wrap gap-2">
          {job?.requirements.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-md bg-gray-800 text-gray-200 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className="p-4 bg-gray-800 border border-blue-200 rounded-md">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Contact HR</h2>
        <p className="text-gray-300">
          If you have any queries or want to apply, please contact:
        </p>
        <div className="flex items-center mt-2 text-gray-700">
          <FaEnvelope className="mr-2 text-blue-500" />
          <p>
            <span className="text-white"> {job?.hr_name} -</span>{" "}
            <a
              href={`mailto:${job?.hr_email}`}
              className="text-blue-500 underline"
            >
              {job?.hr_email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

// // Example Usage
// const jobData = {
//   _id: "675e7505bee214ff19e110f0",
//   title: "Software Engineer",
//   location: "Halishohor, Chittagong",
//   jobType: "Hybrid",
//   category: "Engineering",
//   applicationDeadline: "2024-12-31",
//   salaryRange: { min: 40000, max: 60000, currency: "bdt" },
//   description:
//     "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
//   company: "Favorite IT",
//   requirements: ["JavaScript", "React", "Node.js", "MongoDB"],
//   responsibilities: [
//     "Develop and maintain software",
//     "Collaborate with the team",
//     "Participate in code reviews",
//   ],
//   status: "active",
//   hr_email: "hr@techsolutions.com",
//   hr_name: "Farhan Rahman",
//   company_logo: "https://i.ibb.co/mXD5MNf/facebook.png",
// };

// export default function JobPage() {
//   return <JobDetails job={jobData} />;
// }
