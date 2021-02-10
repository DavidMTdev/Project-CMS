import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/views/templates/projet.html'

import leftVerticalBar from '@/components/LeftVerticalBar'
import VerticalBarOption from '@/components/VerticalBarOption'
import VerticalBarOptionRight from '@/components/VerticalBarOptionRight'

Vue.config.productionTip = false


@WithRender
@Component({
    components: {
        leftVerticalBar,
        VerticalBarOption,
        VerticalBarOptionRight
  }
})
export default class Projet extends Vue {
    
    message = 'hello world'

}