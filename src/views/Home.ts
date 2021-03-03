import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/views/templates/home.html'
import MenuProjet from '@/components/MenuProjet'
import SectionProjet from '@/components/SectionProjet'


@WithRender
@Component({
    components: {
      MenuProjet, 
      SectionProjet
  }
})
export default class Home extends Vue {
    
    message = 'hello world'

    // setMessage(message: string): void {
    //     this.message = message
    // }


}