import Vue, { CreateElement } from 'vue';
import ToolsMenu from './ToolsMenu';
export default class ComponentDiv extends Vue {
    tag: string;

    constructor(tag: string) {
        super();
        this.tag = tag
    }

    createElement(event: any): void {
        const e = document.createElement(this.tag);

        e.classList.add("container");
        e.style.height = "100px";

        event.target.appendChild(e);

        e.addEventListener("mouseenter", (event) => {
            e.classList.add("tools-line");

            e.innerHTML += `<div class="tools-menu">
            <div class="tools edit">e</div>
            <div class="tools drag">d</div>
            <div class="tools remove">r</div>
            </div>`

            const tools = document.querySelector(".tools-menu .tools.drag")

            tools?.addEventListener("mouseover", (event) => {
                e.setAttribute("draggable", "true");
            })

            tools?.addEventListener("mouseleave", (event) => {
                e.removeAttribute("draggable");
            })
        })

        e.addEventListener("mouseleave", (event) => {
            const tools: Element | null = document.querySelector(".tools-menu")

            tools?.remove()

            e.classList.remove("tools-line");
        })

        console.log(e);
        
    }
}