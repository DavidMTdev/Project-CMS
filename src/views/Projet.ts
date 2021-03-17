import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/views/templates/projet.html'

import leftVerticalBar from '@/components/LeftVerticalBar'
import VerticalBarOptionRight from '@/components/VerticalBarOptionRight'

import Dom from '@/utils/Dom'
import DragAndDrop from '@/utils/DragAndDrop';

Vue.config.productionTip = false

@WithRender
@Component({
    components: {
        leftVerticalBar,
        VerticalBarOptionRight
    }
})
export default class Projet extends Vue {
    compo: Array<DragAndDrop> = [];
    element!: DragAndDrop;
    count!: number;
    dom!: Dom

    showBodyBottom = false

    mounted() {
        this.dom = new Dom();

        this.compo.push(new DragAndDrop("h1", null, "display-1", "mon super titre"));
        this.compo.push(new DragAndDrop("div", "section", "container"));
        this.compo.push(new DragAndDrop("button", null, "btn btn-primary", "Button"));
        this.compo.push(new DragAndDrop("input", null, "btn btn-primary", "Button"));

        this.compo.push(new DragAndDrop("p", null, "text", "Hanc Atratino si cum qui ignosco acriter Atratino excusationem vel odio si meo est habet spei ignosco nihil optimo liceret hac excusationem habet libidine volueritis causa resistendum nec intolerabili cui si Si Ceteris nihil non necessitati de nisi spei nimis non existimare ego descensurum accusationem voluit excusationem spei meo descensurum volueritis vel ego vel ignosco causa intolerabili accusare optimo excusationem nec non causa speravit acerbo modo niteretur niteretur aetatis descendisset volueritis constituetis nimis fuisse necessario est alicuius sic descensurum necessario nec necessario iussus descensurum ignosco descendisset optimo aliquid iudices iussus modo si iudices Si necessitati est pietatis iudices quicquam etiam."));

        this.count = 0;
    }

    startDrag(event: DragEvent, item: DragAndDrop) {
        this.element = item;
    }

    onDrop(event: DragEvent) {
        this.element.createElement(event, this.count);
        this.element.editableElement();

        this.dom.updateDom(this.$refs.test, this.$refs.dom);
        this.dom.elementDomClick();
        this.count++;
    }

    openBodyBottom() {
        this.showBodyBottom = !this.showBodyBottom
    }

}