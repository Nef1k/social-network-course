import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <div className="content-wrapper">
          <Navbar/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Profile/>}/>
              <Route path="/dialogs*" element={<Dialogs/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
