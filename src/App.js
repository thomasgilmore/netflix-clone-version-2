import './App.css'
import loadable from '@loadable/component';

const API = loadable(() => import('./components/API'));

function App() {
  return (
    <div className="App">
      <API />
    </div>
  );
}

export default App;
