import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/templates/test.html'

import '@/assets/sass/test.scss';

import ComponentH from './ComponentH';
import ComponentDiv from './ComponentDiv';
import Dom from './Dom'


@WithRender
@Component
export default class Test extends Vue {
    compo: Array<any> = [];
    element: any = null;
    dom: Array<Element> = [];

    mounted() {
        this.compo.push(new ComponentH("h1", "mon super titre"));
        this.compo.push(new ComponentDiv("div"));
        // this.dom = dom.getDom(this.$refs.test,this.$refs.resultDom)
        // console.log(this.dom)
        // console.log(this.$refs.test)

    }

    startDrag(event: any, item: ComponentH) {
        // event.dataTransfer.dropEffect = 'move';
        // event.dataTransfer.effectAllowed = 'move';

        this.element = item
    }

    onDrop(event: any) {

        if (this.element != null) {
            this.element.createElement(event);
            
        }

        this.element = null;
        const dom =  new Dom();
        this.dom = dom.printDom(this.$refs.test);
    }
}