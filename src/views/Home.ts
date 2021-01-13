import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/views/templates/home.html'
import MenuProjet from '@/components/MenuProjet'


@WithRender
@Component({
    components: {
      MenuProjet
  }
})
export default class Home extends Vue {
    
    message = 'hello world'

    // setMessage(message: string): void {
    //     this.message = message
    // }


}