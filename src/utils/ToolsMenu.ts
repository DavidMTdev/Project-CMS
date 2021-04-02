export default class ToolsMenu {
    toolsMenu!: Element;
    toolDrag!: Element;
    toolEdit!: Element;
    toolDelete!: Element;


    create(): void {
        this.toolsMenu = document.createElement('div');
        this.toolsMenu.classList.add('tools-menu')

        this.toolDrag = document.createElement('div');
        this.toolEdit = document.createElement('div');
        this.toolDelete = document.createElement('div');

        this.toolDrag.classList.add('tool')
        this.toolEdit.classList.add('tool')
        this.toolDelete.classList.add('tool')

        this.toolDrag.innerHTML = "D"
        this.toolEdit.innerHTML = "E"
        this.toolDelete.innerHTML = "R"

        this.toolsMenu.appendChild(this.toolEdit)
        this.toolsMenu.appendChild(this.toolDrag)
        this.toolsMenu.appendChild(this.toolDelete)
    }

    addToolsMenu(target: Element): void {
        target.appendChild(this.toolsMenu) 
    }

    removeToolsMenu(target: Element,): void{
        target.removeChild(this.toolsMenu) 
    }

    display(editPreview: Element, target: Element): void {
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

    remove(editPreview: Element, target: Element): void {
        this.toolDelete.addEventListener("click", () => {
            editPreview.removeChild(target);
        })
    }
}