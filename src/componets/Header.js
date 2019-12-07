import React, { useRef, useEffect, useState } from 'react'

export default function Header() {
  let header = useRef(null)
  useEffect(() => {
    header.parentElement.classList.add('home-layout')
  })

  return (
    <header className="home-header" style={headerStyle} ref={el => header = el}>
      <h1>Hello form header</h1>
    </header>
  )
}

const headerStyle = {
  maxHeight: '45vh',
  display: 'flex',
  margin: '0 auto',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'lightgrey',

}
