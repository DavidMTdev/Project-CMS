export default class Dom{
    dom: Array<Element> = []
    result: Array<Element> = []

    printDom(dom: any): Array<Element>{
        dom.children.forEach((element: any) => {
            this.dom.push(element)
        });

        this.dom.forEach((element: any) => {
            const el = element.outerHTML.split("><")
            this.result.push(el)
        });
        
        return this.result
    }

}