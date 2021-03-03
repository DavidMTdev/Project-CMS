export default class Dom{
    nodes: Array<any> = [] 

    printDom(body: any, target: any){
        this.allChildren(body, false)
        target.innerHTML = ""
        this.nodes.forEach(element => {
            this.printElement(element, target, 0)

            if(element.children.length != 0){
                this.allChildren(element, true).forEach(element => {
                    this.printElement(element, target, 1)
                    if(element.children.length != 0){
                        this.allChildren(element, true).forEach(element => {
                            this.printElement(element, target, 2)
                            if(element.children.length != 0){
                                this.allChildren(element, true).forEach(element => {
                                    this.printElement(element, target, 3)
                                    if(element.children.length != 0){
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

    printElement(element: any, target: any, children: number){
        // Fonction qui affiche un element du dom avec sa/ses classes et son id si il en a
        const newElement = document.createElement("div")
        newElement.classList.add(`dom-indent-${children}`)

        newElement.innerHTML += `<span class="tagName">${element.localName}</span>`

        if(element.id != ""){
            newElement.innerHTML += `<span class="idName">#${element.id}</span>`
        }

        if (element.classList != []) {
            element.classList.forEach(async (className: any) => {
                newElement.innerHTML += `<span class="className">.${className}</span>`
            });
        }

        target.appendChild(newElement)
    }

    
    allChildren(noeud: any, isChild: boolean){
        // Fonction qui recupere tout les enfants d'un element du dom
        const child = []
        if(typeof(noeud) !== 'object') return [] ;
        let n=noeud.firstChild;
        while(n)   {
            if(isChild){
                child.push(n)
            }else{
                if(n.nodeType==1)  this.nodes.push(n);
            }
            
            n = n.nextSibling ;
        }
        if(isChild){
            return child
        }
        return this.nodes;
    }
}