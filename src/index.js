import './index.css';
import state, {addNewPost, changeNewPostText, subscribe} from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderEntireTree(state) {
  root.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost} changeNewPostText={changeNewPostText}/>
    </React.StrictMode>
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree)
