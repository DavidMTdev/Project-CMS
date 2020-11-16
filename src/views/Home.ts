import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Home.html'

@WithRender
@Component
export default class Home extends Vue {
    message = 'hello world'
}