import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <div>
            <Link to="/vs/game">PLAY</Link>
        </div>
       
        <div>v0.1-beggining</div>
      </div>
    );
  }