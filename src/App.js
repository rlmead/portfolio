import React from "react";
import Footer from "./components/Footer";
import ProjectBox from "./components/ProjectBox";
import projectsData from "./data/projects";

function App() {
  return (
    <div
      className="text-primary text-center my-auto"
      md="7">
      <h4>
        data engineer, full stack developer, linguist, maker
            </h4>
      <h1>r. l. mead</h1>
      <p>interested in sustainability, design, science, creativity, and social cooperation</p>
      {
        projectsData.slice(0, 1).map((item, index) =>
          <ProjectBox data={item} key={index} />
        )
      }
      <Footer />
    </div >
  )
}

export default App;