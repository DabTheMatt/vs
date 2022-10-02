import React from "react";
import { useState, useRef, useEffect, useCallback, useReducer } from "react";

import Unit2 from "../Unit/Unit2";

export default function Board3() {

	const plainField = {
		type: 'plain',
		moovmentCost: 1,
	}

	const [fieldBoard, setFieldBoard] = useState([
		{id: 1, type: 'plain', mouseOverField: false},
		{id: 2, type: 'plain', mouseOverField: false},
		{id: 3, type: 'plain', mouseOverField: false},
		{id: 4, type: 'river', mouseOverField: false},
		{id: 5, type: 'plain', mouseOverField: false},
		{id: 6, type: 'woods', mouseOverField: false},
		{id: 7, type: 'plain', mouseOverField: false},
		{id: 8, type: 'plain', mouseOverField: false},
		{id: 9, type: 'plain', mouseOverField: false},
		{id: 10, type: 'plain', mouseOverField: false},
		{id: 11, type: 'woods', mouseOverField: false},
		{id: 12, type: 'river', mouseOverField: false},
		{id: 13, type: 'plain', mouseOverField: false},
		{id: 14, type: 'plain', mouseOverField: false},
		{id: 15, type: 'plain', mouseOverField: false},
		{id: 16, type: 'plain', mouseOverField: false},
		{id: 17, type: 'plain', mouseOverField: false},
		{id: 18, type: 'plain', mouseOverField: false},
		{id: 19, type: 'plain', mouseOverField: false},
		{id: 20, type: 'river', mouseOverField: false},
		{id: 21, type: 'river', mouseOverField: false},
		{id: 22, type: 'plain', mouseOverField: false},
		{id: 23, type: 'plain', mouseOverField: false},
		{id: 24, type: 'plain', mouseOverField: false},
		{id: 25, type: 'plain', mouseOverField: false},
		{id: 26, type: 'woods', mouseOverField: false},
		{id: 27, type: 'plain', mouseOverField: false},
		{id: 28, type: 'plain', mouseOverField: false},
		{id: 29, type: 'river', mouseOverField: false},
		{id: 30, type: 'plain', mouseOverField: false},
		{id: 31, type: 'woods', mouseOverField: false},
		{id: 32, type: 'plain', mouseOverField: false},
		{id: 33, type: 'plain', mouseOverField: false},
		{id: 34, type: 'plain', mouseOverField: false},
		{id: 35, type: 'plain', mouseOverField: false},
		{id: 36, type: 'plain', mouseOverField: false},
		{id: 37, type: 'river', mouseOverField: false},
		{id: 38, type: 'plain', mouseOverField: false},
		{id: 39, type: 'plain', mouseOverField: false},
		{id: 40, type: 'plain', mouseOverField: false},
	]);

	const [units, setUnits] = useState([
		{id: 1, type: 'turtle', position: 10, selected: false, moovement: 1, attackRange: 1, attack: 1, defense: 5, lifes: 3},
		{id: 2, type: 'dog', position: 17, selected: false, moovement: 2, attackRange: 1, attack: 3, defense: 3, lifes: 2},
		{id: 3, type: 'cat', position: 24, selected: false, moovement: 3, attackRange: 1, attack: 2, defense: 3, lifes: 3},
		{id: 4, type: 'bird', position: 13, selected: false, moovement: 4, attackRange: 2, attack: 2, defense: 2, lifes: 1},
	])

	return (
	<div className="field-board-wrapper">
		{fieldBoard.map((field) => {
			return(
				<div className={`field ${field.type}`}>
					{units.map((unit) => {
						if(field.id === unit.position){
							return(
							<Unit2
								type={unit.type}
								position={unit.position}
								moovement={unit.moovement}
								attack={unit.attack}
								defense={unit.defense}
								lifes={unit.lifes}
							/>
						)
						}
						
					})}
				</div>
				)
			})}
			
			</div>
	);
  }