import Projet from "@/views/Projet";
import Edit from "./Edit";

interface Component {
    tagName: string;
    content: string | null;
    className: string | null;
    idName: string | null;
    editStyle: object;
}

export default class DragAndDrop {
    tagName: string;
    content: string | null;
    className: string | null;
    idName: string | null;
    element!: any;
    id!: number;
    sectionEditable!: object

    constructor(component: Component) {     
        this.tagName = component.tagName;
        this.content = component.content;
        this.className = component.className;
        this.idName = component.idName;
        this.sectionEditable = component.editStyle
    }

    createElement(event: DragEvent, id: number, Project: Projet): void {
        const target: any = event.target;
    
        const oldTarget: Element | null = document.querySelector(`[data-select="true"]`);
        
        oldTarget?.setAttribute("data-select", "false");

        this.element = document.createElement(`${this.tagName}`);
        this.element.setAttribute("data-select", "true");
        this.element.setAttribute("data-id", id.toString());

        if (this.idName != null) {
            this.element.setAttribute("id", `${this.idName}`);
        }

        if (this.className != null) {
            this.element.setAttribute("class", `${this.className}`);
        }

        if (this.content == null) {
            this.element.setAttribute("data-height", "100px");
        } else {
            this.element.innerHTML += this.content;
        }

        // this.element.addEventListener('mouseenter', () => {
        //     if (this.element.getAttribute("data-select") == 'false') {
        //         this.element.classList.add('js-over');
        //     } 
        // })

        // this.element.addEventListener('mouseout', () => {
        //     if (this.element.getAttribute("data-select") == 'false') {
        //         this.element.classList.remove('js-over');
        //     }
        // })

        target.appendChild(this.element);

        // dans elementSelect on met l'element selectionner
        Project.elementSelect = this   
        
        // edit
        Project.edit.setElement(this.element)  
        Project.edit.setSectionEditable(this.sectionEditable,Project)
        Project.style = Project.edit.getStyle()
    }

    editableElement(Project: Projet){
        const tagNameEditable = ['h1', 'h2', 'h3', 'h4','h5','p', 'a', 'button', 'label', 'li', 'option'];

        this.element.addEventListener('dblclick', (e: any) => {
            const target: any = e.target;
            
            if (target?.getAttribute("data-select") == "false") {
                const oldTarget: Element | null = document.querySelector(`[data-select="true"]`);

                oldTarget?.setAttribute("data-select", "false");
                target?.setAttribute("data-select", "true");     
                
                // edit
                if (target) {
                    Project.edit.setSectionEditable(this.sectionEditable, Project)
                    Project.edit.setElement(target);
                    Project.style = Project.edit.getStyle()
                }
            }  
        });

        this.element.addEventListener('click', (e: any) => {
            const target: any = e.target;

            if (target?.getAttribute("data-select") == "true") {

                if (tagNameEditable.includes(this.tagName)) {
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

}