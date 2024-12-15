import { BsBriefcase, BsClock, BsLightningFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  return (
    <div className="card bg-white shadow-lg border border-gray-200 rounded-lg p-4">
      {/* Company Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img
            src={job?.company_logo || "/default-logo.png"}
            alt="Company Logo"
            className="w-10 h-10 rounded-lg mr-3"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">{job?.company}</h3>
            <p className="text-sm text-gray-500 flex items-center">
              <FaMapMarkerAlt className="mr-1" /> {job?.location}
            </p>
          </div>
        </div>
        <BsLightningFill className="text-green-500 text-xl" />
      </div>

      {/* Job Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{job?.title}</h2>

      {/* Meta Info */}
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span className="flex items-center mr-4">
          <BsBriefcase className="mr-1" /> {job?.jobType}
        </span>
        <span className="flex items-center">
          <BsClock className="mr-1" /> {job?.postedTime || "4 minutes ago"}
        </span>
      </div>

      {/* Job Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {job?.description}
      </p>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job?.requirements.map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-md text-xs bg-gray-200 text-gray-800"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex-grow">

      </div>
      <div className="flex items-center justify-between">
        {/* Hourly Rate */}
        <p className="text-xl font-bold text-blue-600 mb-3">
          ${job?.salaryRange?.max || "500"}/<span className="text-sm">Month</span>
        </p>

        {/* Apply Now Button */}
        <div className="text-center">
          <Link to={`job/${job._id}`} className="w-full px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm">
            Apply Now
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
