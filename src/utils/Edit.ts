import Projet from "@/views/Projet"
import Hex from "./Hex"

export default class Edit {
    element!: any
    color!: string
    sectionEditable!: Array<Array<string | boolean>>

    getElement() {
        return this.element
    }

    setElement(element: any) {
        this.element = element

        this.color = new Hex(getComputedStyle(this.element)).getHex()
        console.log(this.element);
        
    }

    setSectionEditable(sectionEditable: Array<Array<string | boolean>>, Project: Projet){
        this.sectionEditable = sectionEditable
        Project.isSelect = true
    }

    changeColor(event: any) {
        this.element.style.color = event.target.value
    }
}