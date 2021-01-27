import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/components/templates/leftVerticalBar.html'

@WithRender
@Component
export default class LeftVerticalBar extends Vue{}