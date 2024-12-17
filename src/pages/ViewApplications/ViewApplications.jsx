import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const ViewApplications = () => {
  const applications = useLoaderData();
  const handleStatusUpdate = (e, id) => {
    // console.log(e.target.value, id);
    const data = { status: e.target.value };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount){
            toast.success("Succeffuly Update Status!")
        }
      });
  };
  return (
    <div>
      <h1>Application For This Job: {applications.length}</h1>

      <section>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {applications.map((app, idx) => (
                <tr key={app._id}>
                  <th>{idx + 1}</th>
                  <td>{app.applicant_email}</td>
                  <td>{app._id}</td>
                  <td>
                    <select
                      onChange={(e) => handleStatusUpdate(e, app._id)}
                      defaultValue={app.status || "Chnage Status"}
                      className="select select-ghost w-4/5 max-w-xs border border-gray-500"
                    >
                      <option disabled>Pick One</option>
                      <option>Under Review</option>
                      <option>Rejcted</option>
                      <option>Hired</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ViewApplications;
