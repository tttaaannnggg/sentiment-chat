import React from "react"

export default (props)=>{
  const {sent} = props;
  return (
      <div>
        <p> current sentiment: {sent} </p>
      </div>
      )
}
