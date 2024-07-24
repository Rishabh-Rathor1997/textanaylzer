import React from 'react'

export default function Loder(props) {
  return (
    
      
        props.mode === "Dark" ? (<div className="loader-d">
          <span className="loader-text-d"></span>
        </div>
        ) :(
      
    
    <div className="main"> 
  <div className="up">
    <div className="loaders">
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
    </div>
    <div className="loadersB">
      <div className="loaderA">
        <div className="ball0"></div>
      </div>
      <div className="loaderA">
        <div className="ball1"></div>
      </div>
      <div className="loaderA">
        <div className="ball2"></div>
      </div>
      <div className="loaderA">
        <div className="ball3"></div>
      </div>
      <div className="loaderA">
        <div className="ball4"></div>
      </div>
      <div className="loaderA">
        <div className="ball5"></div>
      </div>
      <div className="loaderA">
        <div className="ball6"></div>
      </div>
      <div className="loaderA">
        <div className="ball7"></div>
      </div>
      <div className="loaderA">
        <div className="ball8"></div>
      </div>
    </div>
  </div>
</div>
        )
      

  )
}
