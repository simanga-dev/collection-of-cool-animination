import React, { useRef, useEffect, useState } from 'react';

import SliderEffect from './componets/SliderEffect'
import ProjectList from './componets/ProjectList'
import DefaultPage from './componets/DefaultPage'
import { Switch, Route } from 'react-router-dom'


//import { TimelineLite, Power3 } from 'gsap'


//ASSERTS
import './scss/App.scss';

const pageHref = window.location.href.split('/').slice(-1) + 'home'
// const pageHref = ""

function App() {

  return (
    <React.Fragment>
      <div className="home-layout">
        <Switch>
          <Route exact path="/" component={ProjectList} />
          <Route path="/slider-effect" component={SliderEffect} />
          <Route component={DefaultPage} />
        </Switch>
      </div>
    </React.Fragment>
  )



}



export default App;
