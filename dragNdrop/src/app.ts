import { ProjectList } from './components/project-list.js';
import { ProjectInput } from './components/project-input.js';
import { ProjectState } from './state/project-state.js';

/** Initialize state in App */
export const projectState = ProjectState.getInstance();

/** Create form and lists */
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
