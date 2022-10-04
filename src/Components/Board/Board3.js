import React from "react";
import { useState, useRef, useEffect, useCallback, useReducer } from "react";

import Unit2 from "../Unit/Unit2";

export default function Board3() {

	const plainField = {
		type: 'plain',
		moovmentCost: 1,
	}

	const [fieldBoard, setFieldBoard] = useState([
		{id: 1, category: 'map', type: 'plain', mouseOverField: false},
		{id: 2, category: 'map', type: 'plain', mouseOverField: false},
		{id: 3, category: 'map', type: 'plain', mouseOverField: false},
		{id: 4, category: 'map', type: 'river', mouseOverField: false},
		{id: 5, category: 'map', type: 'plain', mouseOverField: false},
		{id: 6, category: 'map', type: 'woods', mouseOverField: false},
		{id: 7, category: 'map', type: 'plain', mouseOverField: false},
		{id: 8, category: 'map', type: 'plain', mouseOverField: false},
		{id: 9, category: 'map', type: 'plain', mouseOverField: false},
		{id: 10, category: 'map', type: 'plain', mouseOverField: false},
		{id: 11, category: 'map', type: 'woods', mouseOverField: false},
		{id: 12, category: 'map', type: 'river', mouseOverField: false},
		{id: 13, category: 'map', type: 'plain', mouseOverField: false},
		{id: 14, category: 'map', type: 'plain', mouseOverField: false},
		{id: 15, category: 'map', type: 'plain', mouseOverField: false},
		{id: 16, category: 'map', type: 'plain', mouseOverField: false},
		{id: 17, category: 'map', type: 'plain', mouseOverField: false},
		{id: 18, category: 'map', type: 'plain', mouseOverField: false},
		{id: 19, category: 'map', type: 'plain', mouseOverField: false},
		{id: 20, category: 'map', type: 'river', mouseOverField: false},
		{id: 21, category: 'map', type: 'river', mouseOverField: false},
		{id: 22, category: 'map', type: 'plain', mouseOverField: false},
		{id: 23, category: 'map', type: 'plain', mouseOverField: false},
		{id: 24, category: 'map', type: 'plain', mouseOverField: false},
		{id: 25, category: 'map', type: 'plain', mouseOverField: false},
		{id: 26, category: 'map', type: 'woods', mouseOverField: false},
		{id: 27, category: 'map', type: 'plain', mouseOverField: false},
		{id: 28, category: 'map', type: 'plain', mouseOverField: false},
		{id: 29, category: 'map', type: 'river', mouseOverField: false},
		{id: 30, category: 'map', type: 'plain', mouseOverField: false},
		{id: 31, category: 'map', type: 'woods', mouseOverField: false},
		{id: 32, category: 'map', type: 'plain', mouseOverField: false},
		{id: 33, category: 'map', type: 'plain', mouseOverField: false},
		{id: 34, category: 'map', type: 'plain', mouseOverField: false},
		{id: 35, category: 'map', type: 'plain', mouseOverField: false},
		{id: 36, category: 'map', type: 'plain', mouseOverField: false},
		{id: 37, category: 'map', type: 'river', mouseOverField: false},
		{id: 38, category: 'map', type: 'plain', mouseOverField: false},
		{id: 39, category: 'map', type: 'plain', mouseOverField: false},
		{id: 40, category: 'map',type: 'plain', mouseOverField: false},
	]);

	const [units, setUnits] = useState([
		{uId: 101, category: 'unit', name: 'turtle', position: 10, selected: false, moovement: 1, attackRange: 1, attack: 1, defense: 5, lifes: 3, standingOn: ''},
		{uId: 102, category: 'unit', name: 'dog', position: 18, selected: false, moovement: 2, attackRange: 1, attack: 3, defense: 3, lifes: 2, standingOn: ''},
		{uId: 103, category: 'unit', name: 'cat', position: 24, selected: false, moovement: 3, attackRange: 1, attack: 2, defense: 3, lifes: 3, standingOn: ''},
		{uId: 104, category: 'unit', name: 'bird', position: 13, selected: false, moovement: 4, attackRange: 2, attack: 2, defense: 2, lifes: 1, standingOn: ''},
	])

	const [playBoard, setPlayBoard] = useState([]);

	useEffect(() => {
		let tempBoard = fieldBoard;
		let newBoard = units;

		newBoard.forEach((unit) => {
			let unitField = tempBoard.map((field) => {
				if(field.id === unit.position){
					tempBoard[field.id] = unit;
					unit.standingOn = field.type;
				}
		})
		setPlayBoard([...tempBoard]);
		})
	}, [])

	const handleMaouseOver = (id) => {
		console.log('a', id);
	}

	return (
	<div className="field-board-wrapper">
		{playBoard.map((field) => {
			return(
				(field.category === 'map') ? 
				(<div key={field.id} className={`field ${field.type}`}>
				</div>) :
				<div key={field.uId} className={`field ${field.standingOn} unit-text-color`}  style={{border: `6px solid ${field.standingOn}`}} >
					<Unit2 
						name={field.name}
						attack={field.attack}
					/>	
				</div>
				
					// (<div onMouseOver={() => handleMaouseOver(field.uId)} key={field.uId} className={`field ${field.standingOn}`}>
					// <div className={`unit ${field.name} unit-text-color`}>
					// 	<p className="unit-title">{field.name}</p>
					// 	<p className="unit-attributes">{field.moovement} / {field.attack} / {field.defense}</p>
					// 	<div className="lifes-squeres-wrapper">
					// 		{Array.from(Array(field.lifes).keys()).map((life) => {
					// 			return <div className="life-squere"></div>
					// 		})}
					// 	</div>
					// </div>
					// </div> )
					
				
				)
			})}
			
			</div>
	);
  }