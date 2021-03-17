import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/components/templates/VerticalBarOptionRight.html'


@WithRender
@Component
export default class VerticalBarOptionRight extends Vue{
    showcontent4V = false
    showBackground = false;
    showBorder = false
    selector!: Element | null;
    min = 0;
    max = 100;
    step = 1;
    value = 50;
    value2 = 50;


    openBackground(){
        this.showBackground = !this.showBackground
    }
    content4V(){
        this.showcontent4V = !this.showcontent4V
    }
    contentBorder(){
        this.showBorder = !this.showBorder
    }

}