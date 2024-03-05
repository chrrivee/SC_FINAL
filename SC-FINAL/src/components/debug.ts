class debug {
	private elem = document.createElement("div");
	constructor(p?: {w: string, h: string}, init?: string) {
		if(init != undefined) this.getElement().appendChild(document.createTextNode(init));
		if(p) {
			this.getElement().style.position = "absolute";
			this.getElement().style.top = p.w;
			this.getElement().style.left = p.h;
			this.getElement().setAttribute("id", "debug");
		}
	}
	public modifyTxt(txt: string): void {
		this.elem.innerHTML = txt;
	}
	public getElement(): HTMLDivElement {
		return this.elem;
	}
	public effect(fx?: () => {} , trace: boolean = false): {} | void {
		const flag = document.getElementById("debug") == null ? true : false;
		if(fx != undefined) {
			fx();
		} else {
			return {
				"element": {exsists: flag, e: this.elem},
				"error": "No function provided",
				"trace": trace ? new Error().stack : undefined
			}
		}
	}
}

export default debug;