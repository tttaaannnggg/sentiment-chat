import React, { useReducer } from "react";
import History from "./History";
import Input from "./Input";
import Vis from "./Vis";
import reducer from "../reducers/reducer";
const initialState = {
        text: '',
        sent: 0,
        history: []
      }

export default (props)=>{
  const [state, dispatch] = useReducer(
      reducer, initialState
    )
  
  return (
      <div>
        <Vis sent={state.sent} text={state.text}/>
        <Input dispatch={dispatch} text={state.text}/>
      </div>
      )
}
