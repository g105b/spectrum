;"use strict";(function() {

var
	colourList = document.querySelector("main>ol"),
$;

function setLefts() {
	[].forEach.call(this.querySelectorAll(".card"), function(card) {
		card.style.left = [card.parentNode.offsetLeft, "px"].join("");
	});
}

colourList.addEventListener("DOMNodeInserted", setLefts);
colourList.addEventListener("DOMNodeRemoved", setLefts);
setLefts.call(colourList);

})();