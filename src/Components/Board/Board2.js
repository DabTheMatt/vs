import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Field from "../Field/Field";
import Dog from "../Dog/Dog";
import Cat from "../Cat/Cat";
import Bird from "../Bird/Bird";
import Empty from "../Empty/Empty";
import Unit from "../Unit/Unit";

export default function Board2() {

    const [board, setBoard] = useState([
        {type: 'plain', id: 1, color: 'red'},
        {type: 'plain', id: 2, color: 'red'},
        {type: 'plain', id: 3, color: 'red'},
        {type: 'plain', id: 4, color: 'red'},
        {type: 'plain', id: 5, color: 'red'},
        {type: 'plain', id: 6, color: 'red'},
        {type: 'plain', id: 7, color: 'red'},
        {type: 'plain', id: 8, color: 'red'},
        {type: 'plain', id: 9, color: 'red'},
        {type: 'plain', id: 10, color: 'red'},
        {type: 'plain', id: 11, color: 'red'},
        {type: 'plain', id: 12, color: 'red'},
        {type: 'plain', id: 13, color: 'red'},
        {type: 'plain', id: 14, color: 'red'},
        {type: 'plain', id: 15, color: 'red'},
        {type: 'plain', id: 16, color: 'red'},
    ]);

    const [units, setUnits] = useState([
        {selected: '', type: 'unit', id: 1, animal: 'cat', position: 3, attack: 3, defense: 6},
        {selected: '', type: 'unit', id: 2, animal: 'dog', position: 7, attack: 4, defense: 5},
        {selected: '', type: 'unit', id: 3, animal: 'cat', position: 2, attack: 3, defense: 6},
        {selected: '', type: 'unit', id: 4, animal: 'dog', position: 8, attack: 4, defense: 5},
    ])

   
    const [selectedCoordinatesX, setSelectedCoordinatesX] = useState(null);
    const [selectedCoordinatesY, setSelectedCoordinatesY] = useState(null);
    const [unitSelect, setUnitSelect] = useState('');
    const [newPosition, setNewPosition] = useState(null);

    const handleUnitClick = (e, position, id) => {
        console.log('unit position', position);
        
        let tempUnits = units;
        tempUnits.forEach((unit) => {
            if(unit.id === id) {
                if(unit.selected === '') {
                    unit.selected = 'selected';
                } else {
                    unit.selected = '';
                }
            } else if (unit.id && unit.id !== id){
                unit.selected = '';
            }
        })
        setUnits([...tempUnits]);
        console.log('units after', units);
    }

    const handleNewPosition = (e, id) => {
        e.preventDefault();
        console.log('field position', id);
        setNewPosition(id);
        let tempUnits = units;
        tempUnits.forEach((unit) => {
            if(unit.selected === 'selected') {
                unit.position = newPosition;
            } else if (unit.selected === '') {
                return
            }
            
        })
        setUnits([...tempUnits]);
    }
  
    return (
      <div className="board2" >
            {board.map((el, index)=>{
                return(
                    <div onClick={(e) => handleNewPosition(e, el.id)} className='field2' key={el.id} id={el.id}>
                        {units.map((unit, index)=>{
                            if(unit.position === el.id)
                            return(
                                <div key={unit.id}>
                                    <Unit 
                                        animal={unit.animal}
                                        id={unit.id}
                                        attack={unit.attack}
                                        defense={unit.defense}
                                        position={unit.position}
                                        selected={unit.selected}
                                        handleClick={handleUnitClick}
                                /></div>
                            )
                        })}
                    </div>
                )
            })}
      </div>
    );
  }