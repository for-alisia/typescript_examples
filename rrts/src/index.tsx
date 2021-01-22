import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { App } from './components/App';

import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// interface AppProps {
//   color?: string;
// }

// interface AppState {
//   counter: number;
// }

/** Case of functional component */
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

/** Case os the simpliest class component */
// class App extends React.Component<AppProps, AppState> {
//   // state = { counter: 0 } - in this case we don't need AppState Interface

//   constructor(props: AppProps) {
//     super(props);

//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h3>{this.state.counter}</h3>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//       </div>
//     );
//   }
// }
