import React from 'react'
import { Link } from 'react-router-dom'
import { ViewBtn } from './Button'

//ASSERT


export default function ProjectCard({ tittle, number, paragraph }) {
  return (
    <div className="project-card">
      <div className="project-card-number"> <span>{number}</span> </div>
      <div className="project-card-tittle">
        <h2>{tittle}</h2>
      </div>
      <div className="project-card-paragraph">
        <p>{paragraph}</p>
        <Link to="/slider-effect" className="btn-view-more">
          <ViewBtn text="View Project" />
        </Link>
      </div>
    </div>
  )
}
