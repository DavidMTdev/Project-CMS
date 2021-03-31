import Projet from "@/views/Projet"
import Hex from "./Hex"

export default class Edit {
    element!: any
    sectionEditable!: object
    style = {
        color: '#000000',
        padding: {"right": 0, "left": 0, "top": 0, "bottom": 0},
        margin: 0
    }

    getElement() {
        return this.element
    }

    setElement(element: any) {
        this.element = element

        this.style.color = new Hex(getComputedStyle(this.element)).getHex()
        this.style.padding = {
            "right" : parseInt(getComputedStyle(this.element).paddingRight.split("p")[0]),
            "left": parseInt(getComputedStyle(this.element).paddingLeft.split("p")[0]),
            "top": parseInt(getComputedStyle(this.element).paddingTop.split("p")[0]),
            "bottom": parseInt(getComputedStyle(this.element).paddingBottom.split("p")[0])
        }
    }

    getStyle(){
        return this.style;
    }

    setSectionEditable(sectionEditable: object, Project: Projet){
        this.sectionEditable = sectionEditable
        Project.isSelect = true
    }

    changeColor(event: any) {
        this.element.style.color = event.target.value        
    }

    changePaddingRight(event: any) {
        this.element.style.paddingRight = event.target.value + "px"
    }
    changePaddingLeft(event: any) {
        this.element.style.paddingLeft = event.target.value + "px"
    }
    changePaddingTop(event: any) {
        this.element.style.paddingTop = event.target.value + "px"
    }
    changePaddingBottom(event: any) {
        this.element.style.paddingBottom = event.target.value + "px"
    }
}