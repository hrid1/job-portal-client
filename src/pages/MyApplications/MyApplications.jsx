import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { section } from "motion/react-client";

const MyApplications = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/job-application/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newApplications = applications.filter((app) => app._id !== id);
        setApplications(newApplications);
      });
  };
  return (
    <div>
      <h2>HI</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SN.</th>
              <th>Name</th>
              <th>Job</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, idx) => (
              <tr key={idx}>
                <th>
                  <label>{idx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={application?.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{application?.title}</div>
                      <div className="text-sm opacity-50">
                        {application?.company}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>

                <th>
                  <button
                    onClick={() => handleDelete(application._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
