/** State */
import { projectState } from './app';

/** Model */
import { Project, ProjectStatus } from './project';

export class ProjectList {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLElement;
  element: HTMLElement;
  assignedProjects: Project[] = [];

  constructor(private type: 'active' | 'finished') {
    this.templateEl = document.getElementById('project-list') as HTMLTemplateElement;
    this.hostEl = document.getElementById('app')!;

    const importedNode: DocumentFragment = document.importNode(this.templateEl.content, true);
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        if (this.type === 'active') {
          return project.status === ProjectStatus.Active;
        }
        return project.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });

    this.attach();
    this.renderContent();
  }

  private attach() {
    this.hostEl.insertAdjacentElement('beforeend', this.element);
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toLocaleUpperCase() + ' PROJECTS';
  }

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLElement;
    listEl.innerHTML = '';
    for (const projectItem of this.assignedProjects) {
      const listItem = document.createElement('li');
      listItem.textContent = projectItem.title;
      listEl.appendChild(listItem);
    }
  }
}
