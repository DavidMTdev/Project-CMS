import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/views/templates/home.html'

@WithRender
@Component
export default class Home extends Vue {
    
    message = 'hello world'

    setMessage(message: string): void {
        this.message = message
    }


}