import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  //   handle input Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const jobApplication = {
    job_id: id,
    applicant_email: user?.email,
    ...formData,
  };
  // console.log(jobApplication)
  //   handle application Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Jop Application Succeessfull.",
            background: "#2d2d2d", // Dark background
            color: "#ffffff", // Light text color
            timer: 1500,
            showConfirmButton: false,
          });
          navigate('/my-application')
        }
      });
  };

  return (
    <div>
      <div className="max-w-lg mx-auto mt-8 bg-gray-800 p-6 rounded-md shadow mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Profile Links Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Resume Link */}
          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Resume Link
            </label>
            <input
              type="url"
              id="resume"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              placeholder="Enter your resume link"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* GitHub Link */}
          <div className="mb-4">
            <label
              htmlFor="github"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              GitHub Link
            </label>
            <input
              type="url"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="Enter your GitHub profile link"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* LinkedIn Link */}
          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              LinkedIn Link
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="Enter your LinkedIn profile link"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
