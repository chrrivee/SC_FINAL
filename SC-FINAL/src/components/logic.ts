import anime from "animejs";


/* -------------------------------------------------------------------------- */


class ClickHandler {
	public static handleClick(fx: () => any | undefined ): boolean | null | undefined | {} {
		if (fx != undefined) fx();
		else { const err = new Error()
			return {
			"error": "No function provided",
			"trace": err.stack
		} }
	}
	static AnimePresets = class {
		public static fadeIn(element: string, duration: number, delay: number = 0, debug?: boolean): any {
			anime({
				targets: element,
				opacity: [0, 1],
				duration: duration,
				easing: "easeInOutQuad",
				delay: delay
			})
			if(debug) {
				console.log(`Fading in ${element} over ${duration}ms`)
				return new Error().stack;
			}
		}
		public static fadeOut(element: string, duration: number, delay: number = 0, debug?: boolean): any {
			anime({
				targets: element,
				opacity: [1, 0],
				duration: duration,
				easing: "easeInOutQuad",
				delay: delay
			})
			if(debug) {
				console.log(`Fading out ${element} over ${duration}ms`)
				return new Error().stack;
			}
		}
		public static slideIn(element: string, duration: number, delay: number = 0, debug?: boolean): any {
			anime({
				targets: element,
				translateX: [100, 0],
				opacity: [0, 1],
				duration: duration,
				easing: "easeInOutQuad",
				delay: delay
			})
			if(debug) {
				console.log(`Sliding in ${element} over ${duration}ms`)
				return new Error().stack;
			}
		}
		public static slideOut(element: string, duration: number, delay: number = 0, debug?: boolean): any {
			anime({
				targets: element,
				translateX: [0, 100],
				opacity: [1, 0],
				duration: duration,
				easing: "easeInOutQuad",
				delay: delay
			})
			if(debug) {
				console.log(`Sliding out ${element} over ${duration}ms`)
				return new Error().stack;
			}
		}
		public static typeWriter(element: HTMLElement, delay: number, debug?: boolean): any {
			const text = element.innerText;
			console.log(text)
			element.innerHTML = "";
			let i = 0;
			const speed = delay;
			function typeWriter() {
				if (i < text.length) {
					element.innerHTML += text.charAt(i);
					i++;
					setTimeout(typeWriter, speed);
				}
			}
			typeWriter();
			if(debug) {
				console.log(`Typing out ${element} over ${delay}ms`)
				return new Error().stack;
			}
		}
	}
}

export default ClickHandler;




