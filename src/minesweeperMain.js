'use strict';

import { GlobalGameData } from "./GameGlobalData/GameGlobalData.js";
import { activatorGameStatesMode } from "./Core/UI/activatorGameDataStates.js";
import { createBoard } from "./Core/UI/gameBoardCreation.js";
import { openFieldCells, isValidForOpenCells, isBomb, getCellsCount } from "./Core/Modules/openFieldCells.js";
import { bombsFirstClickAnimation } from "./Core/Modules/bombsFirstClickAnimation.js";
import { rebootGameWindow } from "./Core/Util/util.js";
import { flagCounter } from "./Core/UI/flagsAnimation.js";
import MusicComponents from "./Core/Modules/MusicComponents.js";
import endGame from "./Core/Modules/endGame.js";

/*============================================================================================================*/
//! globals variables
const globalGameData = new GlobalGameData();

// create visual board for user
createBoard(15, 15, 35);

//! start game
activatorGameStatesMode(createBoard);
/*============================================================================================================*/

//? clicks animation
//TODO: forget about any first click's implementation
globalGameData.field.addEventListener('click', event => {
	event.preventDefault();
	const selector = event.target;
	MusicComponents.musicSounds('../music/clicks.wav');
	if (selector.tagName !== 'DIV') return;

	endGame(selector);

	globalGameData.buttonsParentDiv.addEventListener('click', e => rebootGameWindow(e));

	//create array with cells
	globalGameData.getArrayChildrenCells();
	globalGameData.getTargetIndex();
	globalGameData.getBoardWidth();
	globalGameData.getNumberBoardColumn();
	globalGameData.getNumberBoardRow();
	globalGameData.getBombsCount();

	let bombsFirstClickAnimationArray = new Array();

	bombsFirstClickAnimationArray = bombsFirstClickAnimation(globalGameData.row,
		globalGameData.column, globalGameData.WIDTH, globalGameData.BOMBS_COUNT,
		globalGameData.arrayBombNeighboursOnFirstClick, globalGameData.cells);

	if (!bombsFirstClickAnimationArray || typeof bombsFirstClickAnimationArray === "undefined" ||
		bombsFirstClickAnimationArray.length === 0) {
		bombsFirstClickAnimationArray = new Array();
		globalGameData.cells.forEach((item, index) => {

			if (item.classList.contains('bomb-cell')) {
				bombsFirstClickAnimationArray.push(index);
			}
		});
	};

	openFieldCells(globalGameData.row, globalGameData.column, selector,
		globalGameData.WIDTH, globalGameData.cells, bombsFirstClickAnimationArray);
	isBomb(globalGameData.row, globalGameData.column, globalGameData.WIDTH,
		bombsFirstClickAnimationArray);
	isValidForOpenCells(globalGameData.row, globalGameData.column, globalGameData.WIDTH,
		bombsFirstClickAnimationArray);
	getCellsCount(globalGameData.row, globalGameData.column, globalGameData.WIDTH,
		bombsFirstClickAnimationArray);

	return globalGameData.bombsFirstClickAnimationArray = bombsFirstClickAnimationArray;
});


// right click animation 
globalGameData.field.addEventListener('contextmenu', (event) => {
	event.preventDefault();
	flagCounter(event);
});
