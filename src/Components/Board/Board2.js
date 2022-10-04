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
        {type: 'plain', id: 1, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 2, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 3, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 4, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 5, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'river', id: 6, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'woods', id: 7, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'woods', id: 8, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 9, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 10, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 11, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'woods', id: 12, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'woods', id: 13, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 14, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 15, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'river', id: 16, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 17, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 18, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 19, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 20, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 21, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'woods', id: 22, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'woods', id: 23, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 24, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'river', id: 25, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'river', id: 26, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 27, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 28, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 29, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 30, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 31, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'woods', id: 32, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 33, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 34, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'river', id: 35, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 36, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 37, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 38, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 39, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 40, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 41, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 42, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 43, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 44, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'river', id: 45, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 46, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 47, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 48, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 49, color: 'red', mouseOver: '', transparency: '', selected: ''},
        {type: 'plain', id: 50, color: 'red', mouseOver: '', transparency: '', selected: ''},
      
    ]);

    const [units, setUnits] = useState([
        {selected: '', type: 'unit', id: 1, animal: 'cat', position: 3, attack: 3, defense: 6, moovement: 3, fighting: '', destroyed: false, dying: ''},
        {selected: '', type: 'unit', id: 2, animal: 'dog', position: 17, attack: 4, defense: 5, moovement: 2, fighting: '', destroyed: false, dying: ''},
        {selected: '', type: 'unit', id: 3, animal: 'cat', position: 2, attack: 3, defense: 6, moovement: 3, fighting: '', destroyed: false, dying: ''},
        {selected: '', type: 'unit', id: 4, animal: 'dog', position: 28, attack: 4, defense: 5, moovement: 2, fighting: '', destroyed: false, dying: ''},
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
    
    const [dogsColor, setDogsColor] = useState('#005F73');
    const [catsColor, setCatsColor] = useState('#CA6702');
 
    

    const handleMouseOver = (e, index) => {
        handleMouseOut(e, index);
        console.log('index', index);
        let tempBoard = board;
        let row = 4;
        let column = 4;

        let arrayOfUnitsId = units.map((unit) => {
            return (
                unit.position
            )
        })
        console.log('unit ids', arrayOfUnitsId);
        tempBoard.forEach((div) => {

            if(div.id === index && arrayOfUnitsId.includes(div.id)) {

                if(index === 1) {
                    div.selected = 'over';
                if(tempBoard[index]){
                    tempBoard[index].selected = 'over';
                    }
                // if(tempBoard[index+2]){
                //     tempBoard[index+2].selected = 'over';
                //     }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = 'over';
                    }
                if(tempBoard[index+4]){
                    tempBoard[index+4].selected = 'over';
                    }
                } else if (index === 4) {
                    if(tempBoard[index-2]){
                        tempBoard[index-2].selected = 'over';
                        }
                    if(tempBoard[index-5]){
                        tempBoard[index-5].selected = 'over';
                        }
                    div.selected = 'over';
                if(tempBoard[index+2]){
                    tempBoard[index+2].selected = 'over';
                    }
                // if(tempBoard[index+2]){
                //     tempBoard[index+2].selected = 'over';
                //     }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = 'over';
                    }
                
                }
                
                
                else if (index === 5) {
                    if(tempBoard[index-4]){
                        tempBoard[index-4].selected = 'over';
                        }
                    if(tempBoard[index-5]){
                        tempBoard[index-5].selected = 'over';
                        }
                    div.selected = 'over';
                if(tempBoard[index]){
                    tempBoard[index].selected = 'over';
                    }
                // if(tempBoard[index+2]){
                //     tempBoard[index+2].selected = 'over';
                //     }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = 'over';
                    }
                if(tempBoard[index+4]){
                    tempBoard[index+4].selected = 'over';
                    }
                } else if (index === 8) {
                    if(tempBoard[index-2]){
                        tempBoard[index-2].selected = 'over';
                        }
                    if(tempBoard[index-6]){
                        tempBoard[index-6].selected = 'over';
                        }
                    if(tempBoard[index-5]){
                        tempBoard[index-5].selected = 'over';
                        }
                    div.selected = 'over';
                if(tempBoard[index+2]){
                    tempBoard[index+2].selected = 'over';
                    }
                // if(tempBoard[index+2]){
                //     tempBoard[index+2].selected = 'over';
                //     }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = 'over';
                    }
                
                }
                
                
                else if (index === 9) {
                    if(tempBoard[index-4]){
                        tempBoard[index-4].selected = 'over';
                        }
                    if(tempBoard[index-5]){
                        tempBoard[index-5].selected = 'over';
                        }
                    div.selected = 'over';
                if(tempBoard[index]){
                    tempBoard[index].selected = 'over';
                    }
                // if(tempBoard[index+2]){
                //     tempBoard[index+2].selected = 'over';
                //     }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = 'over';
                    }
                if(tempBoard[index+4]){
                    tempBoard[index+4].selected = 'over';
                    }
                }   else if (index === 12) {
                    if(tempBoard[index-2]){
                        tempBoard[index-2].selected = 'over';
                        }
                    if(tempBoard[index-6]){
                        tempBoard[index-6].selected = 'over';
                        }
                    if(tempBoard[index-5]){
                        tempBoard[index-5].selected = 'over';
                        }
                    div.selected = 'over';
                if(tempBoard[index+2]){
                    tempBoard[index+2].selected = 'over';
                    }
                // if(tempBoard[index+2]){
                //     tempBoard[index+2].selected = 'over';
                //     }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = 'over';
                    }
                
                }

                else if (index === 13) {
                    if(tempBoard[index-4]){
                        tempBoard[index-4].selected = 'over';
                        }
                    if(tempBoard[index-5]){
                        tempBoard[index-5].selected = 'over';
                        }
                    div.selected = 'over';
                if(tempBoard[index]){
                    tempBoard[index].selected = 'over';
                    }
                // if(tempBoard[index+2]){
                //     tempBoard[index+2].selected = 'over';
                //     }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = 'over';
                    }
                if(tempBoard[index+4]){
                    tempBoard[index+4].selected = 'over';
                    }
                } else if (index === 16) {
                    if(tempBoard[index-2]){
                        tempBoard[index-2].selected = 'over';
                        }
                    if(tempBoard[index-6]){
                        tempBoard[index-6].selected = 'over';
                        }
                    if(tempBoard[index-5]){
                        tempBoard[index-5].selected = 'over';
                        }
                    div.selected = 'over';
                    if(tempBoard[index]){
                        tempBoard[index].selected = 'over';
                        }
                if(tempBoard[index+2]){
                    tempBoard[index+2].selected = 'over';
                    }
                // if(tempBoard[index+2]){
                //     tempBoard[index+2].selected = 'over';
                //     }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = 'over';
                    }
                
                }
                
                
                else  {
                    console.log('e', e.target.className);
                if(tempBoard[index-2]){
                    tempBoard[index-2].selected = 'over';
                    }
                if(tempBoard[index-4]){
                    tempBoard[index-4].selected = 'over';
                    }
                if(tempBoard[index-5]){
                    tempBoard[index-5].selected = 'over';
                    }
                if(tempBoard[index-6]){
                    tempBoard[index-6].selected = 'over';
                    }
                div.selected = 'over';
                if(tempBoard[index]){
                    tempBoard[index].selected = 'over';
                    }
                if(tempBoard[index+2]){
                    tempBoard[index+2].selected = 'over';
                    }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = 'over';
                    }
                if(tempBoard[index+4]){
                    tempBoard[index+4].selected = 'over';
                    }
                }

            }
            
            setBoard([...tempBoard]);
        })
    }
    const handleMouseOut = (e, index) => {
        console.log('index', index);
        let tempBoard = board;
        tempBoard.forEach((div) => {
            if(div.id === index) {
                if(tempBoard[index-2]){
                    tempBoard[index-2].selected = '';
                    }
                if(tempBoard[index-4]){
                    tempBoard[index-4].selected = '';
                    }
                if(tempBoard[index-5]){
                    tempBoard[index-5].selected = '';
                    }
                if(tempBoard[index-6]){
                    tempBoard[index-6].selected = '';
                    }
                div.selected = '';
                if(tempBoard[index]){
                    tempBoard[index].selected = '';
                    }
                if(tempBoard[index+2]){
                    tempBoard[index+2].selected = '';
                    }
                if(tempBoard[index+3]){
                    tempBoard[index+3].selected = '';
                    }
                if(tempBoard[index+4]){
                    tempBoard[index+4].selected = '';
                    }
                
                
            }
            setBoard([...tempBoard]);
        })
    }

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const handleFieldClick = (e, id) => {
        console.log('eeerere', id)
        let tempUnits = units;
        tempUnits.forEach((unit) => {
            if(unit.id !== id) {
                console.log('ffff')
                if(unit.selected === 'selected') {
                unit.selected = ''
                }
            }
        })
        // setUnits([...tempUnits]);
    }
    
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
       

        console.log('units1', units);

        let fightingUnits = units.filter(unit => unit.position === id);
        fightingUnits.forEach((unit) => {
            unit.fighting = 'fighting';
        })

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

        let sorted = fightingUnits.sort((a, b) => parseFloat(a.attack) - parseFloat(b.attack));
        let looserId = sorted[0].id;

        console.log('looser', looserId);

        let tempUnits = units;

        tempUnits.forEach((unit) => {
            if (unit.id === looserId) {
                unit.dying = 'dying';
            }
        })
        console.log('minus looser', tempUnits[1].id);

        const dyingTimeout = setTimeout(destroyUnit, 2000);

        function destroyUnit(){
            let tempUnits = units;

        tempUnits.forEach((unit) => {
            if (unit.id === looserId) {
                unit.destroyed = 'destroyed';
            }
        })

        setUnits([...tempUnits]);
        }

        fightingUnits.forEach((unit) => {
            if(unit.selected === 'selected') {
                unit.selected = '';
            }
                setUnits([...tempUnits]);
                console.log('units2', units);
                setBoard([...tempBoard]);

        })
        const myTimeout = setTimeout(closeFight, 2000);

        function closeFight() {
            tempBoard.map((field) => {
                if (field.id !== id) {
                    field.transparency = '';
                } else if (field.id === id) {
                    field.type = 'plain';
                }
            })

            let tempUnits = units.filter(unit => unit.position === id);
        tempUnits.forEach((unit) => {
            unit.fighting = ''
        })
        
            // setBoard(board);
            // setUnits(tempUnits);
        }
    }
  
    return (<div>
        <div className={`fightMask ${fightStyle}`}></div>
        
      <div className="board2" >
            {board.map((el, index)=>{
                return(
                    <div 
                    // onClick={(e) => handleFieldClick(e, el.id)}
                    // onClick={(e) => handleMouseOver(e, el.id)}
                    // onMouseOut={(e) => handleMouseOut(e, el.id)} 
                     onContextMenu={(e) => handleNewPosition(e, el.id)} className={`field2 ${el.selected} ${el.transparency} ${el.type}`} key={el.id} id={el.id}><span className="field-id">{el.id}</span>
                        {units.map((unit, index)=>{
                            if(unit.position === el.id && !unit.destroyed)
                            return(
                                <div key={unit.id}>
                                    <Unit 
                                        animal={unit.animal}
                                        id={unit.id}
                                        attack={unit.attack}
                                        defense={unit.defense}
                                        moovement={unit.moovement}
                                        position={unit.position}
                                        selected={unit.selected}
                                        handleClick={handleUnitClick}
                                        fighting={unit.fighting}
                                        dying={unit.dying}
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