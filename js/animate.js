class AnimateCell {
	constructor (fromCell, toCell){
		this.element = creatAndAppend({className: 'cell animate'});
		this.element.setAttribute('cell-count', fromCell.element.getAttribute('cell-count'));

		this.element.style.top = fromCell.element.offsetTop + 'px';
		this.element.style.left = fromCell.element.offsetLeft + 'px';


		fromCell.fieldElement.appendChild(this.element);


		this.element.style.top = toCell.element.offsetTop + 'px';
		this.element.style.left = toCell.element.offsetLeft + 'px';

		setTimeout(function() {
			fromCell.fieldElement.removeChild(this.element);
		}.bind(this), 1000);
	}
}