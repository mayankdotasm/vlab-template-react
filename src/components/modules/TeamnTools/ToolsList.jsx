import React from "react";

const tools = [
  "React - for building the user interface",
  "Vite - for bundling and development server",
  "CSS - for styling the web page",
  "Figma - for designing figures and UI mockups",
];

export default function ToolsList() {
  return (
    <ul className="tools-list">
      {tools.map((tool, index) => (
        <li key={index}>
          <span>{tool}</span>
        </li>
      ))}
    </ul>
  );
}
