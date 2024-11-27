import { Provider } from 'react-redux';
import './App.css';
import Counter from './CounterComponent/Counter';
import StringBuilder from './StringBuilderComponent/StringBuilderComponent';
import store from './Store/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <StringBuilder />
      </div>
    </Provider>
  );
}

export default App;
