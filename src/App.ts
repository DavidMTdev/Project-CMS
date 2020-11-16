import {Vue, Component} from 'vue-property-decorator'
import router from './router'
import store from './store'

import WithRender from './App.html'

Vue.config.productionTip = false

@WithRender
@Component({
    router,
    store,
  })
export default class App extends Vue {
}