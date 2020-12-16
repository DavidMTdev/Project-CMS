import Vue, { CreateElement } from 'vue';

export default class ComponentDiv extends Vue {
    tag: string;

    constructor(tag: string){
        super();
        this.tag = tag
    }

    createElement(event: any): void{
        const e = document.createElement(this.tag);

        e.classList.add("container");

        event.target.appendChild(e);
    }

    // render(h: CreateElement){
    //     return h("div", 
    //         {
    //             "class": "foo"
    //         }, 
    //         [this.tag]
    //     );
    // }
}