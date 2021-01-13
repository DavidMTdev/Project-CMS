import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/templates/test.html'

import '@/assets/sass/test.scss';

import ComponentH from './ComponentH';
import ComponentDiv from './ComponentDiv';

@WithRender
@Component
export default class Test extends Vue {
    compo: Array<any> = [];
    element!: any;

    mounted() {
        this.compo.push(new ComponentH("h1", "mon super titre"));  
        this.compo.push(new ComponentDiv("div"));  
    }

    startDrag(event: any, item: any){
        this.element = item   
    }

    onDrop(event: any) { 
        this.element?.createElement(event); 
  }
}