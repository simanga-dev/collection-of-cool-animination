import React, { useRef, useEffect, useState } from 'react'
import firstImage from '../images/bath-soup.jpg'
import secondImg from '../images/pink-menstrual.jpg'
import thirdImg from '../images/towel-bundle.jpg'
import { BackBtn } from './Button'
import { Link } from 'react-router-dom'



export default function SliderEffect() {
  let projectWrapper = useRef(null)

  useEffect(() => {
    projectWrapper.parentElement.classList.remove('home-layout')

  })

  return (
    <div className="project-wrapper" ref={el => projectWrapper = el}>
      <div className="slider-container">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
        <div className="slider">
          <div className="thumbs">
            <div className="first" style={firstImgStyle}></div>
            <div className="second" style={secondImgStyle}></div>
            <div className="third" style={thirdImgStyle}></div>
          </div>
        </div>
        <Link to="/"  >
          <BackBtn text="Back to Projects" />
        </Link>
      </div>
    </div>
  )
}

const firstImgStyle = { backgroundImage: `url(${firstImage})` }
const secondImgStyle = { backgroundImage: `url(${secondImg})` }
const thirdImgStyle = { backgroundImage: `url(${thirdImg})` }
