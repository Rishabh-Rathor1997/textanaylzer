import React from 'react';

function Alert(props) {
    if (!props.alert) {
        return null;
    }

    return (
        <div className='alert-container'>
            <div className="alert alert-primary alert-dismissible opacity-75 fade show" role="alert">
                <strong>{props.alert.type} !</strong> {props.alert.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Alert;