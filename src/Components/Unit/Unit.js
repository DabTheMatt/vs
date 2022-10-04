import { useState, useRef, useEffect } from "react";

export default function Unit(props) {

    return (
        <div type={`${props.animal}`} className={`unit ${props.animal} ${props.selected} ${props.fighting} ${props.dying}`} onClick={(e)=>props.handleClick(e, props.position, props.id)}>
            <p className="unit-name">{props.animal}</p>
            <p className="unit-stats"><span className="counter-moovement">{props.moovement}</span> - <span className="counter-attack">{props.attack}</span> - {props.defense}</p>
        </div>
    );
  }