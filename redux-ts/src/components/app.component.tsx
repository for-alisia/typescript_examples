/** Dependencies */
import { Provider } from 'react-redux';

/** Redux */
import { store } from '../redux';

/** Components */
import RepoList from './repo-list.component';

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <h1>Search for a package</h1>
      <RepoList />
    </div>
  </Provider>
);

export default App;
