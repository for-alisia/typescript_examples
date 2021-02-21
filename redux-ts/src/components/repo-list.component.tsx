/** Dependencies */
import { useState } from 'react';

/** Hooks */
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypesSelector';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepo } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repo);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepo(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
        <div>
          {error && <h3>{error}</h3>}
          {loading && <h3>Loading...</h3>}
          {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
        </div>
      </form>
    </div>
  );
};

export default RepoList;
