import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/components/templates/VerticalBarOptions.html'

import VerticalBarOptionTop from '@/components/VerticalBarOptionTop'
import VerticalBarOptionBottom from '@/components/VerticalBarOptionBottom'


@WithRender
@Component({
    components: {
        VerticalBarOptionTop,
        VerticalBarOptionBottom
  }
})
export default class VerticalBarOption extends Vue{

}