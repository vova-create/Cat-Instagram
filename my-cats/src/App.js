
import './App.css';
import CatList from "./components/CatList";
import { Routes, Route, Link } from "react-router-dom";
import MyPage from "./components/MyPage";
import DownLoadMyPage from "./components/DownLoadMyPage";

function App() {
  return (
    <div className="App">
        <div className='allWrapper'>
        <Link className='links' to="/">CatList</Link>
        <Link className='links' to="/my-photo">My cat photo</Link>
        <Link className='links' to="/download-my-photo">Download my cat photo</Link>
        </div>
        <Routes>
            <Route path="/" element={<CatList/>}/>
          <Route path="/my-photo" element={<MyPage/>}/>
          <Route path="/download-my-photo" element={<DownLoadMyPage/>}/>
      </Routes>
    </div>
  );
}
export default App;
