import { ProjectList } from './components/project-list';
import { ProjectInput } from './components/project-input';
import { ProjectState } from './state/project-state';

/** Initialize state in App */
export const projectState = ProjectState.getInstance();

/** Create form and lists */
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
