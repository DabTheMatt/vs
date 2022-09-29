import { useState, useRef, useEffect } from "react";

export default function Dog(props) {

    return (
        <div className={`dog ${props.selected}`} onClick={(e)=>props.select(e, props.id)}>
            <p className="unit-name">{props.name}</p>
            <p>{props.selected}</p>
            <p className="unit-stats">{props.attack} / {props.defense}</p>
        </div>
    );
  }