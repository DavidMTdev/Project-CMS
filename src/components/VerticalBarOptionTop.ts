import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/components/templates/VerticalBarOptionTop.html'



@WithRender
@Component
export default class VerticalBarOptionTop extends Vue{
    showBodyBottom = false

    openBodyBottom(){
        this.showBodyBottom = !this.showBodyBottom
    }
}