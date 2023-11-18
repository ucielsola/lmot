export function clickOutside(element, { stopPropagation, handler }) {
	function onClick(event) {
		if (!element.id !== event.target.id) {
			if (stopPropagation) event.stopPropagation();
			if (typeof handler !== 'function') return;
			handler();
		}
	}

	document.addEventListener('click', onClick);

	return {
		update(newCallbackFunction) {
			handler = newCallbackFunction;
		},
		destroy() {
			document.removeEventListener('click', onClick);
		},
	};
}
