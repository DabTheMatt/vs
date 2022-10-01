import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect, useCallback, useReducer } from "react";
import Field from "../Field/Field";
import Dog from "../Dog/Dog";
import Cat from "../Cat/Cat";
import Bird from "../Bird/Bird";
import Empty from "../Empty/Empty";
import Unit from "../Unit/Unit";
import React from "react";

export default function Board2() {

  

    const [board, setBoard] = useState([
        {type: 'plain', id: 1, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 2, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 3, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 4, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 5, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 6, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 7, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 8, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 9, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 10, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 11, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 12, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 13, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 14, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 15, color: 'red', mouseOver: '', transparency: ''},
        {type: 'plain', id: 16, color: 'red', mouseOver: '', transparency: ''},
    ]);

    const [units, setUnits] = useState([
        {selected: '', type: 'unit', id: 1, animal: 'cat', position: 3, attack: 3, defense: 6, fighting: ''},
        {selected: '', type: 'unit', id: 2, animal: 'dog', position: 7, attack: 4, defense: 5, fighting: ''},
        {selected: '', type: 'unit', id: 3, animal: 'cat', position: 2, attack: 3, defense: 6, fighting: ''},
        {selected: '', type: 'unit', id: 4, animal: 'dog', position: 8, attack: 4, defense: 5, fighting: ''},
    ])

   
    const [selectedCoordinatesX, setSelectedCoordinatesX] = useState(null);
    const [selectedCoordinatesY, setSelectedCoordinatesY] = useState(null);
    const [unitSelect, setUnitSelect] = useState('');
    const [newPosition, setNewPosition] = useState(null);
    const [counter, setCounter] = useState(1);
    const [tempPosition, setTempPosition] = useState(null);

    const [rerender, setRerender] = useState(false);
    const [over, setOver] = useState(null);

    const [fightStyle, setFightStyle] = useState('');
    const [transparent, setTransparent] = useState('');

 
    

    const handleMouseOver = (e, index) => {
        console.log('index', index);
        let tempBoard = board;
        tempBoard.forEach((div) => {
            if(div.id === index) {
                div.selected = 'over';
            }
            setBoard([...tempBoard]);
        })
    }
    const handleMouseOut = (e, index) => {
        console.log('index', index);
        let tempBoard = board;
        tempBoard.forEach((div) => {
            if(div.id === index) {
                div.selected = '';
            }
            setBoard([...tempBoard]);
        })
    }

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

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

    useEffect(() => {
        console.log('zuza');
    }, [units])



    const handleNewPosition = (e, id) => {
        e.preventDefault();
            setNewPosition(id);
            let tempUnits = units;
        tempUnits.forEach((unit) => {
            
            if(unit.selected === 'selected') {
                unit.position = id;
            }

        })
        console.log('out if');
        setUnits([...tempUnits]);
       //setNewPosition(null);
        fight(id);
        
    }

    const fight = (id) => {
        setFightStyle('fightStyle')
        console.log('figt', units);
        let tempBoard = board;
        tempBoard.map((field) => {
            if (field.id !== id) {
                field.transparency = 'transparent';
            } else if (field.id === id) {
                field.type = 'white';
            }
        })
        let tempUnits = units.filter(unit => unit.position === id);
        tempUnits.forEach((unit) => {
            unit.fighting = 'fighting'
        })
        tempUnits.forEach((unit) => {
            if(unit.selected === 'selected') {
                unit.selected = '';
            }
        })
        console.log('fight array', tempUnits);
        const myTimeout = setTimeout(closeFight, 5000);

        function closeFight() {
            tempBoard.map((field) => {
                if (field.id !== id) {
                    field.transparency = '';
                } else if (field.id === id) {
                    field.type = 'plain';
                }
                 let tempUnits = units.filter(unit => unit.position === id);
        tempUnits.forEach((unit) => {
            unit.fighting = 'fighting'
        })
            })

           
        
        }
    }
  
    return (<div>
        <div className={`fightMask ${fightStyle}`}></div>
      <div className="board2" >
            {board.map((el, index)=>{
                return(
                    <div onMouseOver={(e) => handleMouseOver(e, el.id)} onMouseOut={(e) => handleMouseOut(e, el.id)} onContextMenu={(e) => handleNewPosition(e, el.id)} className={`field2 ${el.selected} ${el.transparency} ${el.type}`} key={el.id} id={el.id}>
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
                                        fighting={unit.fighting}
                                /></div>
                            )
                        })}
                    </div>
                )
            })}
      </div>
      </div>
    );
  }