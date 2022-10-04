import React from "react";
import { useState, useRef, useEffect, useCallback, useReducer } from "react";

import Unit2 from "../Unit/Unit2";

export default function Board3() {

	const plainField = {
		type: 'plain',
		moovmentCost: 1,
	}

	const [fieldBoard, setFieldBoard] = useState([
		{id: 1, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 2, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 3, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 4, category: 'map', type: 'river', mouseOverField: ''},
		{id: 5, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 6, category: 'map', type: 'woods', mouseOverField: ''},
		{id: 7, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 8, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 9, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 10, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 11, category: 'map', type: 'woods', mouseOverField: ''},
		{id: 12, category: 'map', type: 'river', mouseOverField: ''},
		{id: 13, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 14, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 15, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 16, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 17, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 18, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 19, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 20, category: 'map', type: 'river', mouseOverField: ''},
		{id: 21, category: 'map', type: 'river', mouseOverField: ''},
		{id: 22, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 23, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 24, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 25, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 26, category: 'map', type: 'woods', mouseOverField: ''},
		{id: 27, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 28, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 29, category: 'map', type: 'river', mouseOverField: ''},
		{id: 30, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 31, category: 'map', type: 'woods', mouseOverField: ''},
		{id: 32, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 33, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 34, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 35, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 36, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 37, category: 'map', type: 'river', mouseOverField: ''},
		{id: 38, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 39, category: 'map', type: 'plain', mouseOverField: ''},
		{id: 40, category: 'map', type: 'plain', mouseOverField: ''},
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

	const handleMouseOver = (position) => {
		let temPlBoard = playBoard;
		playBoard.forEach((field) => {
			if(field.id === position) {
				console.log('uId', field.uId)
				field.mouseOverField = 'selected'
			}
		})
		setPlayBoard([...temPlBoard]);
	}

	return (
	<div className="field-board-wrapper">
		{playBoard.map((field) => {
			if (field.category === 'map') {
				return (
					<div key={field.id} className={`field ${field.type}` } onMouseOver={(e)=>handleMouseOver(field.position)}>
				</div>
				)
			} 
			else if (field.category === 'unit') {
				return (
					<div key={field.uId} className={`field ${field.standingOn} ${field.selected}`} onMouseOver={(e)=>handleMouseOver(field.position)}>
						<div className={`unit ${field.name} unit-text-color`}>
							<p className="unit-title">{field.name}</p>
							<p className="unit-attributes">{field.moovement} / {field.attack} / {field.defense}</p>
							<div className="lifes-squeres-wrapper">
								{Array.from(Array(field.lifes).keys()).map((life, index) => {
									return <div key={index} className="life-squere"></div>
								})}
							</div>
						</div>
					</div>
				)
			}
			
				
				
			})}
			
			</div>
	);
  }