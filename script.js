;"use strict";(function() {

var
	colourList = document.querySelector("main>ol"),
$;

function setLefts() {
	var
		i = 0,
	$;

	[].forEach.call(this.querySelectorAll(".card"), function(card) {
		var
			left = [card.parentNode.offsetLeft, "px"].join(""),
			translatePercent = 150 * i,
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

colourList.addEventListener("DOMNodeInserted", setLefts);
colourList.addEventListener("DOMNodeRemoved", setLefts);
setLefts.call(colourList);

})();