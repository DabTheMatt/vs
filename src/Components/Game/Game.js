import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Board from "../Board/Board";
import Board2 from "../Board/Board2";


export default function Game() {

   

    return (
      <div>
        <h1></h1>
            <Board2 />
        <div>
            <Link to="/vs">Home Page</Link>
        </div>
       
        <div>v0.3-return-to-v-1</div>
      </div>
    );
  }