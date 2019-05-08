import React from "react";
import sentimentReducer from "../reducers/sentimentReducer";


export default (props)=>{
  const {dispatch, state} = props;
  const handleKeyPress = (e)=>{
    if (e.key === 'Enter'){
      dispatch({
        type: 'send',
        payload: e.target.value
      })
    }
  }
  const handleInput = (e)=>{
    dispatch({
      type: 'update',
      payload: e.target.value
    })
  }
  return(
        <div>
          <input type ="text" value = {state.text} onChange ={ handleInput } onKeyPress = {handleKeyPress} />
        </div>
      )
}
