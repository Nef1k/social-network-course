import './index.css';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderEntireTree() {
  root.render(
    <React.StrictMode>
      <App store={store} /> {/*state={state} addNewPost={addNewPost} changeNewPostText={changeNewPostText}/>*/}
    </React.StrictMode>
  );
}

rerenderEntireTree();

store.subscribeUpdater(rerenderEntireTree);
