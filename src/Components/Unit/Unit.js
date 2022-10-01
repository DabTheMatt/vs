import { useState, useRef, useEffect } from "react";

export default function Unit(props) {

    return (
        <div className={`${props.animal} ${props.selected} ${props.fighting}`} onClick={(e)=>props.handleClick(e, props.position, props.id)}>
            <p className="unit-name">{props.animal}</p>
            <p className="unit-stats">{props.attack} / {props.defense}</p>
        </div>
    );
  }