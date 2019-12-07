import React, { useEffect, useState } from 'react'
// import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ProjectCard from './ProjectCard'
import data from '../projectData'

export default function ProjectList() {

  const [projectList, setList] = useState(data)

  console.log(projectList)

  console.log(console.log)

  return (
    <React.Fragment>

      <Header />
      <div className="project-list">
        {projectList.map(project => <ProjectCard
          key={project.id}
          number={project.id}
          tittle={project.tittle}
          paragraph={project.about}
        />)}
      </div>


      <Footer />

    </React.Fragment>

  )
}
