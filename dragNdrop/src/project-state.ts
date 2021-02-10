/** Model */
import { Project, ProjectStatus } from './project';

export type Listener = (items: Project[]) => void;

export class ProjectState {
  private projects: Project[] = [];
  private listeners: Listener[] = [];

  private static instance: ProjectState;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      people,
      ProjectStatus.Active
    );

    this.projects.push(newProject);

    for (const listener of this.listeners) {
      listener([...this.projects]);
    }
  }

  addListener(listenerFn: Listener) {
    this.listeners.push(listenerFn);
  }
}
