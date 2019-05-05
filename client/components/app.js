import React from "react";
import ReactDOM from "react-dom";
import Page from "./page";
const sentiment = new (require('sentiment'))();

console.log(sentiment.analyze('fuck this'));

ReactDOM.render(<Page />, document.querySelector("#app"))
