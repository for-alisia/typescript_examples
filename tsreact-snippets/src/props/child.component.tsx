import { ChildProcess } from 'child_process';

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <span>{color}</span>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      <span>{color}</span>
      {children}
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
