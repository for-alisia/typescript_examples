export class ProjectList {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLElement;
  element: HTMLElement;

  constructor(private type: 'active' | 'finished') {
    this.templateEl = document.getElementById('project-list') as HTMLTemplateElement;
    this.hostEl = document.getElementById('app')!;

    const importedNode: DocumentFragment = document.importNode(this.templateEl.content, true);
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    this.attach();
    this.renderContent();
  }

  private attach() {
    this.hostEl.insertAdjacentElement('beforeend', this.element);
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toLocaleUpperCase() + 'PROJECTS';
  }
}
