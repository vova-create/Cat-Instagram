import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import CatList from "./components/CatList";
import { Routes, Route, Link } from "react-router-dom";
import MyPage from "./components/MyPage";
import DownLoadMyPage from "./components/DownLoadMyPage";

function App() {


  return (
    <div className="App">
        <div className='links'>
        <Link to="/">CatList</Link>
        <Link to="/my-page">My Page</Link>
        <Link to="/download-my-page">Download my page</Link>
        </div>
        <Routes>
        <Route path="/" element={<CatList/>}/>
          <Route path="/my-page" element={<MyPage/>}/>
          <Route path="/download-my-page" element={<DownLoadMyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
