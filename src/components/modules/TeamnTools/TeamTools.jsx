import React from "react";
import StudentList from "./StudentList";
import MentorList from "./MentorList";
import ToolsList from "./ToolsList";
import "./teamtools.css"; 

export default function TeamTools() {
  return (
    <div className="team-tools-page">
      <div className="section">
        <h3>Students</h3>
        <StudentList />
      </div>

      <div className="section">
        <h3>Mentors</h3>
        <MentorList />
      </div>

      <div className="section">
        <h3>Tools Used</h3>
        <ToolsList />
      </div>
    </div>
  );
}
