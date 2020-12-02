import {Vue, Component} from 'vue-property-decorator'
import router from './router'
import store from './store'

import WithRender from '@/templates/app.html'

import Header from '@/components/layouts/Header'

Vue.config.productionTip = false

@WithRender
@Component({
    router,
    store,
    components: {
      Header
  }
})
export default class App extends Vue {
}