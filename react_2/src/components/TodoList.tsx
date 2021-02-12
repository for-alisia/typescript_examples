import React from 'react';
import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteItem: (itemId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteItem }) => {
  return (
    <ul>
      {items.map(({ id, text }) => (
        <li key={id}>
          <span>{text}</span>
          <button onClick={() => onDeleteItem(id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
