//создаем ячейки привязывая к род-кому эл-ту
class Cell{
	constructor(fieldElement, game){
		this.game = game;

		this.fieldElement = fieldElement;
		this.element = creatAndAppend({
			className: 'cell',
			parentElement: fieldElement
		});
		if(Math.random() > 0.8) {
			this.spawn();
		}
	}

	get value (){
		return this._value || 0;
	}

	set value(value) {
		this._value = value;
		this.element.innerHTML = value == 0 ? '' : value;
		this.element.setAttribute('cell-count', value);
	
	}

	clear() {
		this.value = '';										
	}

	merge(cell) {
		if (this.value) {
			this.game.addRating(this.value + cell.value);
		}

		new AnimateCell(cell, this);

		this.value += cell.value;	

		this.hightlight();

		cell.clear();	
			//3 дополнили

	}

	isSameTo(cell) {
		return this.value == cell.value; // для движения вправо
	}

	spawn() {
		this.value = Math.random() > 0.5 ? 4 : 2;                 //либо 4 либо 2 
	}

	get isEmpty () {
		return this.value == 0;
	}

	hightlight() {
		this.element.className = 'cell hightlight';
		soundElem.play();
			
		let hightlightTime = 300;

		setTimeout(function() {

			this.element.className = 'cell';
			
		}.bind(this), hightlightTime);
	}
}



