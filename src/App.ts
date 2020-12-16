import {Vue, Component} from 'vue-property-decorator'
import router from './router'
import store from './store'

import WithRender from '@/templates/app.html'

import Header from '@/components/layouts/Header'
import MenuProjet from '@/components/layouts/MenuProjet'
import NewProjet from '@/components/layouts/NewProjet'

import '@/assets/sass/style.scss'

Vue.config.productionTip = false

@WithRender
@Component({
    router,
    store,
    components: {
      Header,
      MenuProjet
  }
})
export default class App extends Vue {
}