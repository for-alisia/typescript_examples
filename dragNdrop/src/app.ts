import { ProjectList } from './project-list';
import { ProjectInput } from './project-input';
import { ProjectState } from './project-state';

/** Initialize state in App */
export const projectState = ProjectState.getInstance();

/** Create form and lists */
const projectInput = new ProjectInput();
const projectActiveList = new ProjectList('active');
const projectFinishedList = new ProjectList('finished');
