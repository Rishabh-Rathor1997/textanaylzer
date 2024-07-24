import React from 'react'

function CopyPrompt(props) {
  const handleCopyPropmt = () => {
    // i want to copy prompt Box to clipboard
    navigator.clipboard.writeText(props.apiResponse);
    props.showAlert({ type : "Successfully" , message : "Copy Prompt Box"} );
    // props.showalert("Copy to clipboard", "Successfully", "primary");
  }

  const handleSpeakText = () => {
    let utterance = new SpeechSynthesisUtterance(props.apiResponse);
    window.speechSynthesis.speak(utterance);
  };
  return (
    <>
       <div className="container mb-2">
        <div className="row">
          <div className="col-12  col-md-3">
            <h3 className= {`text-center ${props.mode === "Dark" ? "example-d text-color-d " : "example-l  text-color-l"}  `}   style={{"height": "65px"}}>Text Summary</h3>
          </div>
          <div className="col-6 col-md-2">
            <ul className={` ${props.mode === "Dark" ? "example-d" : "example-l"} ex-1`}>
            <li className="icon-content">
      <button
        data-social="tools"
        aria-label="tools"
        type="button"
        disabled={props.apiResponse.length === 0}
       onClick={handleCopyPropmt }
       
       
      >
        <div className="filled"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
        </svg>
      </button>
      <div className="tooltip">Copy Prompt</div>
       </li>
            </ul>
          </div>

      <div className="col-6 col-md-2">
            <ul className={` ${props.mode === "Dark" ? "example-d" : "example-l"} ex-1`}>
            <li className="icon-content">
      <button
        data-social="tools"
        aria-label="tools"
        type="button"
       onClick={handleSpeakText}
       disabled={props.apiResponse.length === 0}
       
       
      >
        <div className="filled"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
</svg>
      </button>
      <div className="tooltip"> Speak Text </div>
       </li>
            </ul>
          </div>
        </div>
        </div>
    </>
  )
}

export default CopyPrompt
