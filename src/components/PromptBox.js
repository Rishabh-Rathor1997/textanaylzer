import React from 'react'
import Loder from './Loder'

const Promptbox = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <div value = {props.apiResponse} ref={ref} className={`${props.mode === "Dark" ? "bx-d text-summary-d " : "bx-l text-summary-l"}`}>
              {props.loading ?? true ? <Loder mode={props.mode} /> : <pre>
               {props.apiResponse}   
                </pre>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Promptbox;