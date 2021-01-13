import {Vue, Component} from 'vue-property-decorator'
import router from './router'
import store from './store'

import WithRender from '@/views/templates/app.html'

import Header from '@/components/layouts/Header'

import '@/assets/sass/style.scss'

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