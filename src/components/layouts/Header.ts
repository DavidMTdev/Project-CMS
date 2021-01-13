import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/components/layouts/templates/Header.html'

@WithRender
@Component
export default class Header extends Vue {}