import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import HotJobCard from "../../components/HotJobCard";
import { Link } from "react-router-dom";

const MyAddedJobs = () => {
  const { user } = useAuth();

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user]);
  return (
    <div className="my-4">
      <h2 className="text-center font-bold my-6 text-3xl text-white">
        Your Posted Jobs
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Applicantsr</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {jobs.map((job, idx) => (
              <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>
                  <Link
                    to={`/viewApplications/${job._id}`}
                    className="btn btn-sm"
                  >
                    View Application
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedJobs;
