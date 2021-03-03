export default class Dom {
    nodes: Array<any> = []

    printDom(body: any, target: any) {
        this.allChildren(body, false)
        target.innerHTML = ""
        this.nodes.forEach(element => {
            this.printElement(element, target, 0)

            if (element.children.length != 0) {
                this.allChildren(element, true).forEach(element => {
                    this.printElement(element, target, 1)
                    if (element.children.length != 0) {
                        this.allChildren(element, true).forEach(element => {
                            this.printElement(element, target, 2)
                            if (element.children.length != 0) {
                                this.allChildren(element, true).forEach(element => {
                                    this.printElement(element, target, 3)
                                    if (element.children.length != 0) {
                                        this.allChildren(element, true).forEach(element => {
                                            this.printElement(element, target, 4)
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        });
    }

    printElement(element: any, target: any, children: number) {
        // Fonction qui affiche un element du dom avec sa/ses classes et son id si il en a
        const newElement = document.createElement("div")
        newElement.classList.add(`dom-indent-${children}`)
        newElement.setAttribute("data-id", element.getAttribute("data-id"))

        const imageArrow = document.createElement("img")
        imageArrow.src = require('@/assets/icon/arrow.svg')
        newElement.appendChild(imageArrow)

        const newDiv = document.createElement("div")
        newDiv.innerHTML += `<span class="tagName">${element.localName}</span>`

        if (element.id != "") {
            newDiv.innerHTML += `<span class="idName">#${element.id}</span>`
        }

        if (element.classList != []) {
            element.classList.forEach(async (className: any) => {
                newDiv.innerHTML += `<span class="className">.${className}</span>`
            });
        }
        newDiv.classList.add('element')
        newElement.appendChild(newDiv)

        target.appendChild(newElement)
    }


    allChildren(noeud: any, isChild: boolean) {
        // Fonction qui recupere tout les enfants d'un element du dom
        const child = []
        if (typeof (noeud) !== 'object') return [];
        let n = noeud.firstChild;
        while (n) {
            if (isChild) {
                child.push(n)
            } else {
                if (n.nodeType == 1) this.nodes.push(n);
            }

            n = n.nextSibling;
        }
        if (isChild) {
            return child
        }
        return this.nodes;
    }

    elementDomClick() {
        const dom = document.querySelector(".dom")
        
        dom?.childNodes.forEach(element => {
            element.addEventListener('click', (event: any) => {
                const elementClass = event.path[2].className.split('-');              
                let elementClick: any
            
                if (elementClass[1] == "indent"){
                    elementClick = event.path[2]

                }else{
                    if(event.path[0].tagName != 'IMG'){
                        if(event.path[0].className.split('-')[1] == "indent"){
                            elementClick = event.path[0]
                        }else{
                            elementClick = event.path[1]
                        }
                    }
                }
                
                if(elementClick){
                    const idElementDom = elementClick.getAttribute("data-id")
                    const currentElement = document.querySelector(`.edit-preview [data-id='${idElementDom}']`)
                    const oldElement = document.querySelector(`.edit-preview [data-select="true"]`)

                    oldElement?.setAttribute("data-select", "false")
                    currentElement?.setAttribute("data-select", "true")
                }
                
                
                })
            });




    }
}