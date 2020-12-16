import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/templates/test.html'

import '@/assets/sass/test.scss';

@WithRender
@Component
export default class Test extends Vue {
    // component: [
    //     {
    //       id: 0,
    //       title: 'Item A',
    //       list: 1
    //     },
    //     {
    //       id: 1,
    //       title: 'Item B',
    //       list: 1
    //     },
    //     {
    //       id: 2,
    //       title: 'Item C',
    //       list: 2
    //     }]

    //     constructor(component) { 
}