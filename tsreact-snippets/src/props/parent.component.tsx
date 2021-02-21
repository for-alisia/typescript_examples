import { ChildAsFC } from './child.component';

const Parent = () => (
  <ChildAsFC color="red" onClick={() => console.log('Hi')}>
    Some children here!
  </ChildAsFC>
);

export default Parent;
