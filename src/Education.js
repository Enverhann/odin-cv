import React from "react";
import { useState } from "react";

const Education = ({onSubmit}) => {
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [date, setDate] = useState("");
  const [editing, setEditing] = useState(true);

  const handleSubmit = () => {
    onSubmit({ school, study, date });
    setEditing(false);
  };

  return (
    <div className="education">
      <h2>Educational Experience</h2>
      {editing ? (
        <>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="School Name"
          />
          <input
            type="text"
            value={study}
            onChange={(e) => setStudy(e.target.value)}
            placeholder="Title of Study"
          />
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date of Study"
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>School: {school}</p>
          <p>Title of Study: {study}</p>
          <p>Date of Study: {date}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Education;
