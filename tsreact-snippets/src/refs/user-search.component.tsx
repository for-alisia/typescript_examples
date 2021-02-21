import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Alex', age: 20 },
  { name: 'Anna', age: 25 },
  { name: 'John', age: 18 },
  { name: 'Steve', age: 30 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const onFindUserClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onFindUserClick}>Find user</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
