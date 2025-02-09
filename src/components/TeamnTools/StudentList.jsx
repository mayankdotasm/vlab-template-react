import React from "react";

const students = [
  {
    name: "abc",
    link: "https://www.linkedin.com/in"
  },
  {
    name: "abc",
    link: "https://www.linkedin.com/in/"
  },
];

export default function StudentList() {
  return (
    <ul className="ref-list">
      {students.map((student, index) => (
        <li key={index}>
          <a href={student.link} rel="noopener" target="_blank">
            <span>{student.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
