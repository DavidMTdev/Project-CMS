import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/templates/test.html'

import '@/assets/sass/test.scss';

import ComponentH from './ComponentH';
import ComponentDiv from './ComponentDiv';


@WithRender
@Component
export default class Test extends Vue {
    compo: Array<any> = [];
    element: any = null;

    mounted() {
        this.compo.push(new ComponentH("h1", "mon super titre"));  
        this.compo.push(new ComponentDiv("div"));  
    }

    startDrag(event: any, item: ComponentH){
        // event.dataTransfer.dropEffect = 'move';
        // event.dataTransfer.effectAllowed = 'move';

        this.element = item

        console.log(this.element);
        
    }

    onDrop(event: any) { 

        if (this.element != null) {
            this.element.createElement(event);
            
        }

        this.element = null;
  }
}