;"use strict";(function() {

var
	colourList = document.querySelector("main>ol"),
	addButton = document.querySelector("#btn-add"),
$;

function setLefts() {
	var
		i = 0,
	$;

	[].forEach.call(this.querySelectorAll(".card"), function(card) {
		var
			left = [card.parentNode.offsetLeft, "px"].join(""),
			offset = 150,
			translatePercent = (offset * i) - (offset * 1.5),
		$;

		card.style.transform = [
			"translateY(55vw)",
			"scale(0.125)",
			"translateX(-150%)",
			"translateX(",
			translatePercent,
			"%)",
		].join("");

		++i;
	});
}

function createColourToggleItems() {
	var
		liTemplate = colourList.querySelector(".colourToggleItem"),
		li,
		numLi = 6,
		i = 0,
	$;

	liTemplate.remove();

	for(; i < numLi; ++i) {
		li = liTemplate.cloneNode(true);
		li.querySelector("input").id += i;
		li.querySelector("label").setAttribute("for",
			li.querySelector("label").getAttribute("for") + i);

		colourList.appendChild(li);
	}

	colourList.querySelector(".toggle").checked = true;
}

colourList.addEventListener("DOMNodeInserted", setLefts);
colourList.addEventListener("DOMNodeRemoved", setLefts);
setLefts.call(colourList);

createColourToggleItems();

})();