
var creatAndAppend = function({className, parentElement, value}, tag = 'div'){
	let element = document.createElement(tag);
	element.className = className;
	if (value) {
		element.innerHTML = value;
	}
	if(parentElement) {
		parentElement.appendChild(element);
	}

	return element;
}
// создаем нужный э-т и возвращаем его

var soundElem=document.getElementById('sound');



var getRandomInt = function (min, max){
 	return Math.floor(Math.random() * (max - min + 1)) + min;
 }



var game = new Game (document.body, 4);
