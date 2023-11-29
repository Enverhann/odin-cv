import React from "react";
import { useState } from "react";

const Experience = ({onSubmit}) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [editing, setEditing] = useState(true);

  const handleSubmit = () => {
    onSubmit({ company, position, responsibilities, fromDate, toDate });
    setEditing(false);
  };

  return (
    <div className="experience">
      <h2>Practical Experience</h2>
      {editing ? (
        <>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company Name"
          />
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position Title"
          />
          <textarea
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            placeholder="Main Responsibilities"
          ></textarea>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            placeholder="Date From"
          />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            placeholder="Date To"
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>Company: {company}</p>
          <p>Position Title: {position}</p>
          <p>Main Responsibilities: {responsibilities}</p>
          <p>Date From: {fromDate}</p>
          <p>Date To: {toDate}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Experience;
