import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addNewPost} from "./redux/state";

export function rerenderEntireTree(state) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost}/>
    </React.StrictMode>
  );
}
