import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  console.log(props.store);
  const friends = props.store.getState().common.friends;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <div className="content-wrapper">
          <div className="sidebar">
            <Navbar/>
            <Friends friends={friends}/>
          </div>
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <Profile
                    store={props.store}
                    // profilePage={props.store.getState().profilePage}
                    // addNewPost={props.store.addNewPost}
                    // changeNewPostText={props.store.changeNewPostText}
                  />
                }
              />
              <Route
                path="/dialogs/*"
                element={<Dialogs messages={props.store.getState().dialogsPage}/>}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
