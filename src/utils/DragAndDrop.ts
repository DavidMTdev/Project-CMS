import Vue from 'vue';
export default class DragAndDrop extends Vue {
    tagName: string;
    content: string | undefined;
    className: string | null;
    idName: string | null;
    element!: Element;
    id!: number;

    constructor(tagName: string, idName: string | null, className: string | null, content?: string) {
        super();
        this.tagName = tagName;
        this.content = content;
        this.className = className;
        this.idName = idName;
    }

    createElement(event: DragEvent, id: number): void {
        const target: any = event.target;

        const oldTarget: Element | null = document.querySelector(`[data-select="true"]`);
        // oldTarget?.removeAttribute("data-select");
        oldTarget?.setAttribute("data-select", "false");


        this.element = document.createElement(`${this.tagName}`);
        this.element.setAttribute("data-select", "true");
        this.element.setAttribute("data-id", id.toString());
        // this.element.setAttribute("contenteditable", "true")

        if (this.idName != null) {
            this.element.setAttribute("id", `${this.idName}`);
        }

        if (this.className != null) {
            this.element.setAttribute("class", `${this.className}`);
        }

        if (this.content == undefined) {
            this.element.setAttribute("data-height", "100px");
        } else {
            this.element.innerHTML += this.content;
        }

        target.appendChild(this.element);

        // this.editableElement();
        
        // exemple
        // insertAdjacentElement()
        // card.addEventListener('dblclick', function (e) {
        //     card.classList.toggle('large');
        //   });
        // input.toggleAttribute("readonly");
        
    }

    editableElement(){
        const tagNameEditable = ['h1', 'h2', 'h3', 'h4','h5','p', 'a', 'button', 'label', 'li', 'option'];

        this.element.addEventListener('dblclick', (e) => {
            const target: any = e.target;
            console.log(e.target);
            
            if (target?.getAttribute("data-select") == "false") {
                const oldTarget: Element | null = document.querySelector(`[data-select="true"]`);

                oldTarget?.setAttribute("data-select", "false");
                target?.setAttribute("data-select", "true");            
            }  
        });

        this.element.addEventListener('click', (e) => {
            const target: any = e.target;

            if (target?.getAttribute("data-select") == "true") {

                if (tagNameEditable.includes(this.tagName)) {
                    console.log(target?.getAttribute("data-select"));
                    target?.setAttribute("contenteditable", "true");    
                }
            }
        });
        
        window.addEventListener('dblclick', () => {
            if (this.element.getAttribute("data-select") == "false"){
                this.element.removeAttribute("contenteditable");
            }
        })
    }

    // showMenuTools(target: Element, newTarget: Element): void{
    //     target.addEventListener("mouseenter", () => {
    //         newTarget = document.querySelector(`[data-select="true"]`);

    //         if (newTarget != null) {
    //             let toolsMenu = document.querySelector(".tools-menu");

    //             console.log(toolsMenu);
                

    //             newTarget.addEventListener("mouseenter", (e) => {
    //                 if (toolsMenu == null && newTarget != null) {
    //                     newTarget.innerHTML += `<div class="tools-menu">
    //                 <div class="tools edit">e</div>
    //                 <div class="tools drag">d</div>
    //                 <div class="tools remove">r</div>
    //                 </div>`
    //                 }
    
    //                 toolsMenu = document.querySelector(".tools-menu")
    
    //                 if (toolsMenu != null && newTarget != null) {
    //                     const dragTool: Element | null = document.querySelector(".tools-menu .tools.drag")
            
    //                     dragTool?.addEventListener("mouseover", (e) => {
    //                         newTarget?.setAttribute("draggable", "true");
    //                     })
            
    //                     dragTool?.addEventListener("mouseleave", (e) => {
    //                         newTarget?.removeAttribute("draggable");
    //                     })
    //                 }
        
    //             })
    
    //             newTarget.addEventListener("mouseleave", (e) => {
    //                 toolsMenu = document.querySelector(".tools-menu")
        
    //                 toolsMenu?.remove()
    //             })
    //         }
    //     })
    // }    

}
    