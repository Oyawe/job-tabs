import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //current item

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      {/* button coontainer */}
      <BtnContainer jobs={jobs} />
      {/* job info */}
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
