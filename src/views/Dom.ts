export default class Dom{
    dom: Array<Element> = []

    printDom(dom: any): Array<Element>{
        for (let index = 0; index < dom.children.length; index++) {
            this.dom.push(dom.children[index])
        }
        return this.dom
    }

    getDom(){
        return this.dom
    }
}