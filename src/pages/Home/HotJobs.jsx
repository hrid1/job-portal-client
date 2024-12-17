import { useEffect, useState } from "react";
import HotJobCard from "../../components/HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.reverse().slice(0, 8)));
  }, []);

  return (
    <div className="bg-slate-800">
      <h2 className="text-center text-4xl font-bold py-6 text-white "> Jobs Of The Day</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </section>
    </div>
  );
};

export default HotJobs;
