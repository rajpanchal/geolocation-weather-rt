import React from 'react';
import './Loading.css'

const Loading = (props) => {
  return(
    <div className="ui segment big">
      <div className="ui active dimmer big">
        <div className="ui text loader big">{props.message}</div>
      </div>
    </div>
  );
};

//HOW TO FIX THIS?
// Loading.defaultProps = {
//   message = "Loading..."
// }

export default Loading;
