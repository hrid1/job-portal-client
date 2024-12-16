function JobForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log("Submitted Form Data:", data);
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
        <div>
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
