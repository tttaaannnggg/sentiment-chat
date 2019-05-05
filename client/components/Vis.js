import React from "react";

export default (props)=>{
  const {sent, text} = props;
  return(
    <div>
      <p>
        {text}
      </p>
      <p>
        {sent}
      </p>
    </div>
  )
}
