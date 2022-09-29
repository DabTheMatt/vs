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
        '', {type: 'dog',
        id: 'd1',
        name: 'Dog',
        age: 2,
        attack: 3,
        defense: 5,
        selected: 'no'}, '', '', '', '', '', '', '', '', 
        '', {type: 'dog',
        id: 'd2',
        name: 'Dog',
        age: 2,
        attack: 4,
        defense: 5,
        selected: 'no'}, '', '', '', '', 'cat', '', '', '', 
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

    const select = (e, dogId) => {
        let tempUnits = units;
        console.log('tempUnits', tempUnits);
        units.forEach((unit) => {
            console.log('unit id', unit.id);
            console.log('dog id', dogId);
            if(unit.id && unit.id === dogId) {

                unit.selected = 'selected';
                console.log(unit.selected);
            } else if (unit.id && unit.id !== dogId){
                unit.selected = 'no';
            }
        })
        setUnits([...tempUnits]);
    }


    const click = () => {
      console.log('click');
    };

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
                if(unit.type === 'dog') {
                    return (
                        <Dog 
                        name={unit.name}
                        attack={unit.attack}
                        defense={unit.defense}
                        id={unit.id}
                        select={select}
                        selected={unit.selected}
                        selectedStyle={selectedStyle}/>
                    )
                } else if(unit === 'cat') {
                    return (
                        <Cat onClick={click}/>
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