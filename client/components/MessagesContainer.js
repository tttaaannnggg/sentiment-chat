import React from "react";
import Message from "./Message";

export default (props)=>{
  const {hist} = props;
  const messages = hist.map(
      item=>(
        <Message msg={item}/>
        )
      )
  return(
    <div>
      {messages}
    </div>
  )
}
