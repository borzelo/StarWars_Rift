import { Provider } from 'react-redux';
import { store } from './store';
import Router from './Router/Route';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
