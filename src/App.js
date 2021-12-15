import logo from './logo.svg';
import './App.css';
import Valform from './component/Validateform';
import { Provider } from 'react-redux';
import store from '../src/store/index';
function App() {
  return (
    <Provider store={store}>
      <Valform/>
    </Provider>
  );
}

export default App;
