import Projet from "@/views/Projet"
import Hex from "./Hex"

export default class Edit {
    element!: any
    sectionEditable!: object
    style = {
        color: '#000000',
        padding: {"right": 0, "left": 0, "top": 0, "bottom": 0},
        margin: {"right": 0, "left": 0, "top": 0, "bottom": 0},
        border: {"right": 0, "left": 0, "top": 0, "bottom": 0},
        size: {"height": 0, "width": 0}
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
        this.style.margin = {
            "right" : parseInt(getComputedStyle(this.element).marginRight.split("p")[0]),
            "left": parseInt(getComputedStyle(this.element).marginLeft.split("p")[0]),
            "top": parseInt(getComputedStyle(this.element).marginTop.split("p")[0]),
            "bottom": parseInt(getComputedStyle(this.element).marginBottom.split("p")[0])
        }
        this.style.border = {
            "right" : parseInt(getComputedStyle(this.element).borderRight.split("p")[0]),
            "left": parseInt(getComputedStyle(this.element).borderLeft.split("p")[0]),
            "top": parseInt(getComputedStyle(this.element).borderTop.split("p")[0]),
            "bottom": parseInt(getComputedStyle(this.element).borderBottom.split("p")[0])
        }
        this.style.size = {
            "height": parseInt(getComputedStyle(this.element).getPropertyValue('height')),
            "width": parseInt(getComputedStyle(this.element).getPropertyValue('width'))
        }       
    }

    getStyle(){
        return this.style;
    }

    setSectionEditable(sectionEditable: object, Project: Projet){
        this.sectionEditable = sectionEditable
        console.log(this.sectionEditable);
        
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

    changeMarginRight(event: any) {
        this.element.style.marginRight = event.target.value + "px"
    }
    changeMarginLeft(event: any) {
        this.element.style.marginLeft = event.target.value + "px"
    }
    changeMarginTop(event: any) {
        this.element.style.marginTop = event.target.value + "px"
    }
    changeMarginBottom(event: any) {
        this.element.style.marginBottom = event.target.value + "px"
    }

    changeBorderRight(event: any) {
        this.element.style.borderRight = event.target.value + "px"
    }
    changeBorderLeft(event: any) {
        this.element.style.borderLeft = event.target.value + "px"
    }
    changeBorderTop(event: any) {
        this.element.style.borderTop = event.target.value + "px"
    }
    changeBorderBottom(event: any) {
        this.element.style.borderBottom = event.target.value + "px"
    }

    changeSizeHeight(event: any) {
        this.element.style.height = event.target.value + "px"
    }

    changeSizeWidth(event: any) {
        this.element.style.width = event.target.value + "px"
    }
}