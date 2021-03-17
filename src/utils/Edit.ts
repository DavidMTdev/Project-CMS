import Hex from "./Hex"

export default class Edit {
    element!: any
    color!: string

    getElement() {
        return this.element
    }

    setElement(element: any) {
        this.element = element

        this.color = new Hex(getComputedStyle(this.element)).getHex()
    }

    changeColor(event: any) {
        this.element.style.color = event.target.value
    }
}