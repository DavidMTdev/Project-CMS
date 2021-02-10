import Vue, { CreateElement } from 'vue';
export default class Component extends Vue {
    tag: string;
    content: string | undefined;
    className: string | null;

    constructor(tag: string, className: string | null, content?: string) {
        super();
        this.tag = tag;
        this.content = content;
        this.className = className;
    }

    createElement(event: DragEvent | any): void {
        const oldTarget: Element | null = document.querySelector(`[data-select="true"]`);
        const editPreview: Element | null = document.querySelector(".edit-preview");

        oldTarget?.removeAttribute("data-select");

        const target: Element | any = event.target;

        target.innerHTML += `<${this.tag} class="${this.className}" data-select="true">${this.content}</${this.tag}>`
        target?.removeAttribute("data-height");
        target?.removeAttribute("data-select");

        let newTarget: Element | null = document.querySelector(`[data-select="true"]`);

        if (this.className == null) {
            // targetEdit?.classList.add(this.className);
            newTarget?.removeAttribute("class");
        }
        
        // if (this.tag == "div") {
        //     newTarget?.setAttribute("data-height", "100px")
        // }  

        if (this.content == "") {
            newTarget?.setAttribute("data-height", "100px")
        }  

        target.addEventListener("mouseenter", () => {
            newTarget = document.querySelector(`[data-select="true"]`);

            if (newTarget != null) {
                let toolsMenu = document.querySelector(".tools-menu");

                console.log(toolsMenu);
                

                newTarget.addEventListener("mouseenter", (e) => {
                    if (toolsMenu == null) {
                        newTarget.innerHTML += `<div class="tools-menu">
                    <div class="tools edit">e</div>
                    <div class="tools drag">d</div>
                    <div class="tools remove">r</div>
                    </div>`
                    }
    
                    toolsMenu = document.querySelector(".tools-menu")
    
                    if (toolsMenu != null) {
                        const dragTool: Element | null = document.querySelector(".tools-menu .tools.drag")
            
                        dragTool?.addEventListener("mouseover", (e) => {
                            newTarget.setAttribute("draggable", "true");
                        })
            
                        dragTool?.addEventListener("mouseleave", (e) => {
                            newTarget.removeAttribute("draggable");
                        })
                    }
        
                })
    
                newTarget.addEventListener("mouseleave", (e) => {
                    toolsMenu = document.querySelector(".tools-menu")
        
                    toolsMenu?.remove()
                })
            }
        })

        
 
    }
}