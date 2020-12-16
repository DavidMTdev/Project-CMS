export default class ComponentH{
    tag: string;
    content: string;

    constructor(tag: string, content: string){
        this.tag = tag
        this.content = content
    }

    createElement(event: any): void{
        const e = document.createElement(this.tag);

        e.innerHTML = "mon super titre";

        event.target.appendChild(e);
    }
}