import Swal from "sweetalert2";

function JobForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const initialData = Object.fromEntries(formData.entries());
    // console.log("Submitted Form Data:", data);
    const { salaryMin, salaryMax, currency, ...newJob } = initialData;
    newJob.salaryRange = { salaryMin, salaryMax, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    console.log(newJob); //and send to server

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            background: "#2d2d2d", // Dark background
            color: "#ffffff", // Light text color
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <div className="p-6 lg:w-3/5 md:4/5  mx-auto bg-gray-800 my-4 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Job Posting Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Software Engineer"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block font-medium">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Halishohor, Chittagong"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        {/* job-type */}

        <div className="mb-4">
          <label htmlFor="jobType" className="block font-medium">
            Job Type
          </label>
          <select
            name="jobType"
            id="jobType"
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Select Job Type</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>
        </div>

        {/* category */}

        <div className="mb-4">
          <label htmlFor="jobType" className="block font-medium">
            Job Category
          </label>
          <select
            name="jobType"
            id="jobType"
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Select Job Type</option>
            <option value="Hybrid">Engineering</option>
            <option value="Remote">Marketing</option>
            <option value="On-site">Finance</option>
            <option value="On-site">Teaching</option>
          </select>
        </div>

        {/* salary range */}
        <div className="mb-4">
          <label className="block font-medium">Salary Range</label>
          <div className="flex gap-4">
            {/* min */}
            <input
              type="number"
              name="salaryMin"
              placeholder="Min Salary"
              className="w-full border px-3 py-2 rounded-md"
            />
            {/* max */}
            <input
              type="number"
              name="salaryMax"
              placeholder="Max Salary"
              className="w-full border px-3 py-2 rounded-md"
            />
            {/* currency */}
            <select
              name="currency"
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        {/* <div className="mb-4">
          <label htmlFor="category" className="block font-medium">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Engineering"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div> */}

        <div className="mb-4">
          <label htmlFor="applicationDeadline" className="block font-medium">
            Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            id="applicationDeadline"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium">
            Job Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="We are seeking a skilled Software Engineer..."
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* company name */}
        <div className="mb-4">
          <label htmlFor="company" className="block font-medium">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Favorite IT"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        {/* Job Requirements */}
        <div className="mb-4">
          <label htmlFor="requirements" className="block font-medium">
            Job Reqirements
          </label>
          <textarea
            className="w-full border px-3 py-2 rounded-md"
            name="requirements"
            id="reqirements"
            placeholder="Eash Req. should be single line"
          ></textarea>
        </div>
        {/* Job Responsibilites */}
        <div className="mb-4">
          <label htmlFor="responsibilities" className="block font-medium">
            Job Responsibilities
          </label>
          <textarea
            className="w-full border px-3 py-2 rounded-md"
            name="responsibilities"
            id="responsibilities"
            placeholder="Eash Responsibilities should be single line"
          ></textarea>
        </div>
        {/* hr info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium" htmlFor="hr_name">
              Hr Name
            </label>
            <input
              className="w-full px-3 py-2 rounded-md"
              type="text"
              name="hr_name"
              id="hr_name"
              placeholder="hr"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" htmlFor="hr_email">
              Hr Email
            </label>
            <input
              className="w-full px-3 py-2 rounded-md"
              type="text"
              name="hr_email"
              id="hr_email"
              placeholder="hr@gmail.com"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="font-medium block" htmlFor="company_logo">
            Company Logo URL
          </label>
          <input
            name="company_logo"
            className="px-3 py-2 rounded-md w-full"
            placeholder="Enter Logo URL"
            type="text"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default JobForm;
