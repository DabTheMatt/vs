import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Field from "../Field/Field";

export default function Board() {

    const [board, setBoard] = useState([]);

    const boardSize = useRef([...Array(parseInt(59)).keys()]);
    console.log('boardSize', boardSize.current);

    useEffect(() => {
        for (let i = 0; i < boardSize.current; i++) {
            setBoard(board => [...board, 2])
        }
        console.log('board', board);
    }, [board])

    return (
      <div className="board-wrapper">
        {boardSize.current.map(function(field, key) {
            return (
                <Field key="key" index={key} />
            )
        })}
        <Field />
      </div>
    );
  }