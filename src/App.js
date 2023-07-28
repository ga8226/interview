import db from './data/db.json'
import  Qnalist  from './component/Qnalist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Qnalist contentdb={db}></Qnalist>
 
    </div>
  );
}

export default App;
