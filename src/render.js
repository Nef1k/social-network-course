import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addNewPost, changeNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export function rerenderEntireTree(state) {
  root.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost} changeNewPostText={changeNewPostText}/>
    </React.StrictMode>
  );
}
