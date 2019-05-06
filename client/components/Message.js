import React from "react"

export default (props)=>{
  const {msg} = props;
  return (
      <div>
        <p> text: {msg.text} </p>
        <p> sentiment: {msg.sent} </p>
      </div>
      )
}
