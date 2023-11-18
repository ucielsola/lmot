export function dragNode(node, touchEndCallback) {
	const windowH = window.innerHeight;
	const footerH = node.offsetHeight;

	if (!node) return;

	let dragged;
	let direction;
	node.addEventListener('touchstart', touchstart);
	node.addEventListener('touchmove', touchmove);
	node.addEventListener('touchend', touchend);

	function touchstart() {
		dragged = undefined;
	}

	function touchmove(e) {
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();

		direction = dragged - windowH > e.touches[0].clientY - windowH ? 'up' : 'down';

		dragged = e.touches[0].clientY;

		const newPosition = dragged - windowH;

		if (newPosition > 0 || Math.abs(newPosition) >= footerH) return;
		node.style.transform = `translateY(${newPosition}px)`;
	}

	function touchend() {
		if (!dragged) return;

		if (direction === 'up') {
			node.style.transform = `translateY(-${footerH}px)`;
		} else {
			touchEndCallback();
			node.style.transform = `translateY(0)`;
		}
	}
}
