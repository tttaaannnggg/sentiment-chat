import React, { useReducer } from "react";
import Input from "./Input";
import Vis from "./Vis";
import MessagesContainer from "./MessagesContainer";
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
        <MessagesContainer hist = {state.history} />
        <Vis sent = {state.sent} />
        <Input dispatch={dispatch} state={state}/>
      </div>
      );
}
