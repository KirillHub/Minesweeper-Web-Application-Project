'use strict'

export class GlobalGameData {

	constructor() {
		this.WIDTH;
		this.BOMBS_COUNT;
		this.flagsCounter;
		this.index;
		this.column;
		this.row;

		this.flagsCounterBlock = document.querySelector(".main-title__flags-counter");
		this.field = document.querySelector('.field');
		this.fieldCellsChildren = document.querySelectorAll('.fields__cell');
		this.buttonsParentDiv = document.querySelector('.buttons-config');
		this.endGameText = document.querySelector('.end-game');

		this.cells = new Array();
		this.bombsFirstClickAnimationArray = new Array();
		this.bombsRandomArrayGenerated = new Array();
		this.arrayBombNeighboursOnFirstClick = new Array();
		this.arrayChildrenCells = new Array();
		this.setObjectOfRandomMines = new Set();
		this.flagsLocationCoords = new Set();
	};

	getTargetIndex() {
		if (this.cells.length !== 0) this.index = this.cells.indexOf(event.target);
	};

	getBoardWidth() {
		if (Math.ceil(this.cells.length / 10) === 10) this.WIDTH = 10;
		if (Math.ceil(this.cells.length / 15) === 15) this.WIDTH = 15;
		if (Math.ceil(this.cells.length / 20) === 20) this.WIDTH = 20;
	};

	getNumberBoardColumn() {
		this.getTargetIndex();
		this.getBoardWidth();

		if (typeof this.index !== 'undefined' &&
			typeof this.WIDTH !== 'undefined') this.column = this.index % this.WIDTH;
	};

	getNumberBoardRow() {
		this.getTargetIndex();
		this.getBoardWidth();

		if (typeof this.index !== 'undefined' &&
			typeof this.WIDTH !== 'undefined') this.row = Math.floor(this.index / this.WIDTH);
	};

	getArrayChildrenCells() {
		this.fieldCellsChildren = document.querySelectorAll('.fields__cell');
		this.cells = [...this.fieldCellsChildren];

		this.fieldCellsChildren.forEach(item => {
			this.arrayChildrenCells.push(item)
		});
	};

	getBombsCount() {
		if (this.cells.length === 100) this.BOMBS_COUNT = 12;
		if (this.cells.length === 225) this.BOMBS_COUNT = 35;
		if (this.cells.length === 400) this.BOMBS_COUNT = 80;
	};

	getBoardDataStates = () => {
		this.getArrayChildrenCells();
		this.getTargetIndex();
		this.getBoardWidth();
		this.getNumberBoardColumn();
		this.getNumberBoardRow();
		this.getBombsCount();
	};

};



