import React from 'react'

function Ganerate_button(props) {
  return (
    <button 
    disabled={props.text.length === 0}
    type="submit"
    onClick={props.handleSubmit}
     className="btn">
    <span className="btn-text-one">Ask Any Qes?</span>
    <span className="btn-text-two"> Generate Ans!</span>
</button>
  )
}

export default Ganerate_button


 