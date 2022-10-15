import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VenueSched = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        const { venue} = data;
        setVenue(venue);
        setSchedule(data.schedules);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, []);
  return (
    <>
      { error && <div className="alert alert-danger" role="alert">{ error }</div> }
      { isPending && <div className="fs-3 text-center">Loading...</div> }
      <div className="row">
        <div className="col-md-4 m-5 shadow-dark">
        <h1 className="text-center m-4">{venue.building}</h1>
        <table className="table">
          <thead>
            <tr className="bg-primary">
              <th className="text-center">ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Building</th>
              <th className="text-center">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        </div>
       
        <div className="col-md-6">
        <Link to="/" className="btn btn-lg btn-primary mb-5 mt-5 float-end">
          Back
        </Link>
        <h1 className="text-center mt-5">Schedules</h1>
        <table className="table table-striped">
          <thead>
            <tr className="bg-primary">
              <th className="fs-5">ID</th>
              <th className="fs-5">Course No.</th>
              <th className="fs-5">Description</th>
              <th className="fs-5">Teacher</th>
              <th className="fs-5">Schedule</th>
              <th className="fs-5">Size</th>
              
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule)?.map((sched, ids) => {
              return (
                <>
                  <tr key={ids}>
                    <td className="fs-5">{schedule[sched].id}</td>
                    <td className="fs-5">{schedule[sched].course_no}</td>
                    <td className="fs-5">{schedule[sched].description}</td>
                    <td className="fs-5">{schedule[sched].teacher}</td>
                    <td className="fs-5">{schedule[sched].schedule}</td>
                    <td className="fs-5">{schedule[sched].size}</td>
                   
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default VenueSched;
