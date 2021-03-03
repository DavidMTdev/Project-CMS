import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/components/templates/VerticalBarOptionRight.html'


@WithRender
@Component
export default class VerticalBarOptionTop extends Vue{
    showBackground = false;

    openBackground(){
        this.showBackground = true
    }
}