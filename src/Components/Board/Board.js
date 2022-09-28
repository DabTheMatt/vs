import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Field from "../Field/Field";
import Dog from "../Dog/Dog";
import Cat from "../Cat/Cat";
import Bird from "../Bird/Bird";
import Empty from "../Empty/Empty";

export default function Board() {

    const [board, setBoard] = useState([
        'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain',
        'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain',
        'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain',
        'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain',
        'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain',
        'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain', 'plain',
    ]);

    const [units, setUnits] = useState([
        '', '', '', '', '', '', '', '', '', '', 
        '', 'dog', '', '', '', '', '', '', '', '', 
        '', 'dog', '', '', '', '', 'cat', '', '', '', 
        '', '', '', '', '', '', '', 'cat', '', '', 
        '', {type: 'bird',
            id: 'b1',
            name: 'Bird',
            age: 12,
            attack: 5,
            defense: 3}, '', '', '', '', 'cat', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
    ])

    const [selectedStyle, setSelectedStyle] = useState('');

    const select = (index) => {
        console.log('clicked', index);
        selectedStyle ? setSelectedStyle('') : setSelectedStyle('selected');
    }

    return (
      <div className="board-wrapper">
        <div className="field-board">
            {board.map(function(field, key) {
                return (
                    <Field fieldType={field} key="key" index={key} />
                )
            })}
        </div>
        <div className="unit-board">
             {units.map(function(unit, key) {
                if(unit === 'dog') {
                    return (
                        <Dog 
                        select={select} 
                        index={key}
                        selectedStyle={selectedStyle}
                        key={key}
                        />
                    )
                } else if(unit === 'cat') {
                    return (
                        <Cat />
                    )
                } else if(unit.type === 'bird') {
                    return (
                        <Bird 
                        name={unit.name}
                        attack={unit.attack}
                        defense={unit.defense}/>
                    )
                } else {
                    return (
                        <Empty />
                    )
                }
                
            })}
        </div>
      </div>
    );
  }