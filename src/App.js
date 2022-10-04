import './styles.css';
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Game from './Components/Game/Game';

export default function App() {
  return (
    <div>
      
      <Routes>

          <Route path="/vs/" element={<HomePage />} />
          <Route path="/vs/game" element={<Game />} />
          


          <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Ups! Nothing here - check url :)</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
