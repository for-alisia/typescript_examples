/** Libraries */
import React, { useState } from 'react';
/** Components */
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
/** Models */
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text }]);
  };

  const todoDeleteHandler = (itemId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== itemId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteItem={todoDeleteHandler} />
    </div>
  );
};

export default App;
