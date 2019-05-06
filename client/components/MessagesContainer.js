import React from "react";
import Message from "./Message";

export default (props)=>{
  const {hist} = props;
  const messages = hist.map(
      item=>(
        <div>
          <p>{item.sent}</p>
        </div>
        )
      )
  return(
    <div>
      {messages}
    </div>
  )
}
