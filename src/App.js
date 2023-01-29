import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";

const App = (props) => {
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
              <Route path="/" element={<Profile store={props.store} /> }
              />
              <Route path="/dialogs/*" element={<Dialogs store={props.store}/>}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
