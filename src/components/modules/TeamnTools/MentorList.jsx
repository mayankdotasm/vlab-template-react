import React from "react";

const mentors = [
  { name: "Prof. " }
];

export default function MentorList() {
  return (
    <ul className="ref-list">
      {mentors.map((mentor, index) => (
        <li key={index}>
          <span>{mentor.name}</span>
        </li>
      ))}
    </ul>
  );
}
