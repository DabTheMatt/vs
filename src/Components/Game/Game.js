import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Board from "../Board/Board";
import Board3 from "../Board/Board3";


export default function Game() {

   

    return (
      <div>
        <h1>Game</h1>

            <Board3 />

        <div>
            <Link to="/vs">Home Page</Link>
        </div>
       
        <div>v0.1-beggining</div>
      </div>
    );
  }