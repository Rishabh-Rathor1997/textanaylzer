import React from 'react'

function Alert(props) {
    const Capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        
    }
  return (
    <div className="mb-1" style={{height: '50px'}}>
    
    {props.alert && (
    <div className={`alert alert-${props.alert.alertcls} alert-dismissible fade show`} role="alert">
    <strong>{Capitalize(props.alert.type)}!</strong> {props.alert.mes}
    </div>
    )}
   </div>
  )
}

export default Alert;

