import { useState, useRef, useEffect } from "react";

export default function Bird(props) {


    return (
        <div className="bird">
            <p className="unit-name">{props.name}</p>
            <p className="unit-stats">{props.attack} / {props.defense}</p>
        </div>
    );
  }