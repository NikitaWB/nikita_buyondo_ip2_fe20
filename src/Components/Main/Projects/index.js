import React, { useState, useEffect } from "react";

function Projects() {
  const [gitdata, setGitdata] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/NikitaWB/repos")
      .then((response) => response.json())
      .then((data) => setGitdata(data));
  }, []);
  return (
    <>
      <h2>Projects</h2>
      {gitdata.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
}

export default Projects;
