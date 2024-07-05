
import React from 'react'

export default function About(props) {
        

    // const [mystyle, setmystyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
      
    //   });
    let mystyle = {
      color: props.mode === 'Dark' ? 'white' : 'black', 
      backgroundColor: props.mode === 'Dark' ? '#185053' : '#274472',

    }
    
  return (
    <div className="container mt-4 p-4" style={mystyle}>
    <h1 className="mb-3">About Us</h1>
    <div className="accordion" id="accordionExample" >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button fs-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={mystyle}
          >
           <strong>Analyze Your Text</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" >
            Textutils give you way to analyze your text quickly and efficiently. Be it word count, character count or remove extra spaces.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed fs-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={mystyle}
          >
           <strong>Free To Use</strong> 
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" >
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.  
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header ">
          <button
            className="accordion-button collapsed fs-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={mystyle}
          >
          <strong>Browser Compatible</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" >
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. 
          </div>
        </div>
      </div>
    </div> 
   
    </div>
  )
}

