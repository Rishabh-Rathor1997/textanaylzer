
import React from 'react'

export default function About(props) {
        

    // const [mystyle, setmystyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
      
    //   });
   
    
  return (
    <div className="container mt-4 p-4">
    <h1 className={`mb-3 mx-auto ${props.mode === "Dark" ? "about-text-d" : "about-text-l"}`}>About Us</h1>
    <div className={`accordion ${props.mode === "Dark" ? "accordion-d" : "accordion-l"}`}
    id="accordionExample" >
      <div className={`accordion-item ${props.mode === "Dark" ? "accordion-item-d" : "accordion-item-l"} mb-3`}>
        <h2 className="accordion-header">
          <button
                  className={`accordion-button  fs-5 collapsed ${props.mode === "Dark" ? "accordion-button-d" : "accordion-button-l"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            
          >
           <strong>Analyze Your Text with TextUtils - Ai Tools</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body ${props.mode === "Dark" ? "accordion-body-d" : "accordion-body-l"}`} >
          Textutils - Ai Tools is a free character counter tool that provides instant character count & word count statistics for a given text. And this Ai tools is based on the concept of AI.
                            Take Input Text from user and modify the text with Google Gamini ai  Want to user modify the text in the way you want?
                            And Other Useful tools in TextUtils Extra spaces Remover, Unicode and Special Characters remover, and the ability to convert text to uppercase and lowercase.
          </div>
        </div>
      </div>
      <div className={`accordion-item ${props.mode === "Dark" ? "accordion-item-d" : "accordion-item-l"} mb-3`}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button  fs-5 collapsed ${props.mode === "Dark" ? "accordion-button-d" : "accordion-button-l"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            
          >
           <strong>Free To Use This Ai Tools</strong> 
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body ${props.mode === "Dark" ? "accordion-body-d" : "accordion-body-l"}`} >
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.  
          </div>
        </div>
      </div>
        <div className={`accordion-item ${props.mode === "Dark" ? "accordion-item-d" : "accordion-item-l"} `}>
        <h2 className="accordion-header ">
          <button
           className={`accordion-button  fs-5 collapsed ${props.mode === "Dark" ? "accordion-button-d" : "accordion-button-l"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            
          >
          <strong>Browser Compatible</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
         <div className={`accordion-body ${props.mode === "Dark" ? "accordion-body-d" : "accordion-body-l"}`} >
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. 
          </div>
        </div>
      </div>
    </div> 
   
    </div>
  )
}

