import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/views/templates/projet.html'

import leftVerticalBar from '@/components/LeftVerticalBar'
import VerticalBarOptionRight from '@/components/VerticalBarOptionRight'

import Dom from '@/utils/Dom'
import DragAndDrop from '@/utils/DragAndDrop';
import Edit from '@/utils/Edit';
import ToolsMenu from '@/utils/ToolsMenu';

import ComponentList from "@/assets/json/ComponentList.json";

Vue.config.productionTip = false

@WithRender
@Component({
    components: {
        leftVerticalBar,
        VerticalBarOptionRight
    }
})
export default class Projet extends Vue {
    compo: Array<DragAndDrop> = [];
    element!: DragAndDrop;
    elementSelect!: DragAndDrop;
    isSelect = false  ;
    count!: number;
    dom!: Dom;
    edit!: Edit;
    toolsMenu!: ToolsMenu;

    showBodyBottom = true;

    showcontent4V = false
    showBackground = false;
    showBorder = false
    showPadding = false
    showMargin = false

    min = 0;
    max = 100;
    step = 1;
    value = 50;
    value2 = 50;
    // color = '#000000';

    style = {
        color: '#000000',
        padding: {"right": 0, "left": 0, "top": 0, "bottom": 0},
        margin: 0
    }


    mounted() {
        this.dom = new Dom();
        this.edit = new Edit();    
        // const projectJSON = require("@/assets/json/project_1.json");

        for (let index = 0; index < ComponentList.length; index++) {
            this.compo.push(new DragAndDrop(ComponentList[index]));
        }

        this.count = 0; 
        
        this.toolsMenu = new ToolsMenu();   
        this.toolsMenu.create();      
    }

    startDrag(event: DragEvent, item: DragAndDrop) {
        this.element = item;
    }

    onDrop(event: DragEvent) {
        this.element.createElement(event, this.count, this);
        this.element.editableElement(this);

        this.toolsMenu.move((this.$refs.test as Element), (this.element.element as Element))

        this.dom.updateDom(this.$refs.test, this.$refs.dom);
        this.dom.elementDomClick(this);
        this.count++; 
           
    }

    openBodyBottom() {
        this.showBodyBottom = !this.showBodyBottom
    }

    openBackground(){
        this.showBackground = !this.showBackground
    }
    content4V(){
        this.showcontent4V = !this.showcontent4V
    }
    contentBorder(){
        this.showBorder = !this.showBorder
    }
    contentPadding(){
        this.showPadding = !this.showPadding
    }
    contentMargin(){
        this.showMargin = !this.showMargin
    }

}