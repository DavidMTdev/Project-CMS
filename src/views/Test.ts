import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/templates/test.html'

import '@/assets/sass/test.scss';

import ComponentEdit from '@/utils/Component';

@WithRender
@Component
export default class Test extends Vue {
    compo: Array<any> = [];
    element!: any;

    mounted() {
        this.compo.push(new ComponentEdit("h1", "mon super titre"));  
        this.compo.push(new ComponentEdit("div", "", "container"));  
    }

    startDrag(event: any, item: any){
        this.element = item   
    }

    onDrop(event: DragEvent) { 
        this.element?.createElement(event); 
  }
}