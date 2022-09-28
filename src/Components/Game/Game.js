import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Board from "../Board/Board";


export default function Game() {

   

    return (
      <div>
        <h1>Game</h1>

            <Board />

        <div>
            <Link to="/vs">Home Page</Link>
        </div>
       
        <div>v0.1-beggining</div>
      </div>
    );
  }