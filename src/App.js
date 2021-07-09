import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Header, Body } from './components/index'
import { Provider } from 'react-redux';
import Store from './config';

function App() {
  return (
    <Provider store= {Store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
