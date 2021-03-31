export default class ToolsMenu {
    toolsMenu!: Element;

    create(): void {
        this.toolsMenu = document.createElement('div');
        this.toolsMenu.classList.add('tools-menu')

        const toolDrag = document.createElement('div');
        const toolEdit = document.createElement('div');
        const toolDelete = document.createElement('div');

        toolDrag.classList.add('tool')
        toolEdit.classList.add('tool')
        toolDelete.classList.add('tool')

        toolDrag.innerHTML = "D"
        toolEdit.innerHTML = "E"
        toolDelete.innerHTML = "R"

        this.toolsMenu.appendChild(toolEdit)
        this.toolsMenu.appendChild(toolDrag)
        this.toolsMenu.appendChild(toolDelete)
    }

    addToolsMenu(target: Element): void {
        target.appendChild(this.toolsMenu) 
    }

    removeToolsMenu(target: Element,): void{
        target.removeChild(this.toolsMenu) 
    }

    move(editPreview: Element, target: Element): void {
            target.addEventListener('mouseover', () => {
                if (target.getAttribute("data-select") == 'true') {
                    this.addToolsMenu(target)
                } 
            })

            target.addEventListener('mouseleave', () => {
                if (target.getAttribute("data-select") == 'true') {
                    this.removeToolsMenu(target)
                }
            })
    }
}