import React from "react";
import sentimentReducer from "../reducers/sentimentReducer";


export default (props)=>{
  const {dispatch, text} = props;
  const handleKeyPress = (e)=>{
    if (e.key === 'Enter'){
      dispatch({
        type: 'send',
        payload: e.target.value
      })
    }
  }
  const handleInput = (e)=>{
    console.log(e.target.value);
    dispatch({
      type: 'update',
      payload: e.target.value
    })
  }
  return(
        <div>
          <input type ="text" value = {text} onChange ={ handleInput } onKeyPress = {handleKeyPress} />
        </div>
      )
}
