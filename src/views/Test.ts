import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/templates/test.html'

import '@/assets/sass/test.scss';

import Dom from './Dom'
import ComponentEdit from '@/utils/Component';

@WithRender
@Component
export default class Test extends Vue {
    compo: Array<ComponentEdit> = [];
    element!: ComponentEdit;

    mounted() {
        this.compo.push(new ComponentEdit("h1", null, null, "mon super titre"));  
        this.compo.push(new ComponentEdit("div", "section", "container", ""));  
        this.compo.push(new ComponentEdit("p", null, "text", "Hanc Atratino si cum qui ignosco acriter Atratino excusationem vel odio si meo est habet spei ignosco nihil optimo liceret hac excusationem habet libidine volueritis causa resistendum nec intolerabili cui si Si Ceteris nihil non necessitati de nisi spei nimis non existimare ego descensurum accusationem voluit excusationem spei meo descensurum volueritis vel ego vel ignosco causa intolerabili accusare optimo excusationem nec non causa speravit acerbo modo niteretur niteretur aetatis descendisset volueritis constituetis nimis fuisse necessario est alicuius sic descensurum necessario nec necessario iussus descensurum ignosco descendisset optimo aliquid iudices iussus modo si iudices Si necessitati est pietatis iudices quicquam etiam."));  
        // this.dom = dom.getDom(this.$refs.test,this.$refs.resultDom)
        // console.log(this.dom)
        // console.log(this.$refs.test)
    }

    startDrag(event: DragEvent, item: ComponentEdit){
        // event.dataTransfer.dropEffect = 'move';
        // event.dataTransfer.effectAllowed = 'move';
        this.element = item   
    }

    onDrop(event: DragEvent) { 
        this.element.createElement(event); 
        
        const dom =  new Dom();
        // this.dom = dom.printDom(this.$refs.test);
        dom.printDom(this.$refs.test, this.$refs.dom)
  }
}