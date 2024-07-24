import React from 'react'
import Ganeratebutton from "./Ganerate_button";

function Counter(props) {


  const constcalculateReadingTime= (wordCount) => {
    const wordsPerMinute = 200;
    const screenReadingAdjustment = 0.60;
  
    if (wordCount < 200) {
      const seconds = (wordCount / wordsPerMinute) * 60;
      return Math.round(seconds) + " sec" + (seconds === 1? "" : " ");
    } else {
      const minutes = wordCount / wordsPerMinute;
      const decimalMinutes = minutes - Math.floor(minutes);
      const adjustedSeconds = decimalMinutes * 60 * screenReadingAdjustment;
  
      const totalMinutes = Math.floor(minutes) + (adjustedSeconds >= 30? 1 : 0);
  
      return totalMinutes + " min" + (totalMinutes === 1? "" : " ");
    }
  };

 
  




  return (
   <>
       <div className="container mb-2 ">
        <div className="row  p-1">
          <div className="col-md-2 col-6  d-flex justify-content-center align-items-lg-center p-1 ">
          <span className={`text-center ${props.mode === "Dark" ? "bx-d" : "bx-l"} text-counter`}>
            Word : {typeof props.text === 'string' ? props.text.split(/\s+/).filter((element) => { return element.length !== 0 }).length : 0}
          </span>
          </div>
          <div className="col-md-2 col-6  d-flex justify-content-center align-items-lg-center p-1">
          <span className={`text-center ${props.mode === "Dark" ? "bx-d" : "bx-l"} text-counter`}>
            Char : {typeof props.text === 'string' ? props.text.replace(/\s+/g, "").length : 0}
          </span>
          </div>
          <div className="col-md-2 col-6  d-flex justify-content-center align-items-lg-center p-1">
           <span className={`text-center ${props.mode === "Dark" ? "bx-d" : "bx-l"} text-counter`}>
            Time : {constcalculateReadingTime(props.text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)}
           </span>
          </div>

          <div className="col-md-6 col-6 d-flex justify-content-center align-items-center p-1">
            <Ganeratebutton text = {props.text} handleSubmit={props.handleSubmit}/>
          </div>

        </div>
      </div>
   </>
  )
}

export default Counter
