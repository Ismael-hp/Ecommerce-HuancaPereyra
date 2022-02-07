import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from  "./Components/NavBar-Comp/NavBar";
import ItemlistContainer from './Components/Items_Comp/ItemlistContainer';

//jsfundamentals();
function App() {
  return (
    <div className="App">
     <NavBar/>
      <div className="App-header">
      <br/>
      <ItemlistContainer/>
      </div>
    </div>
  );
}

export default App;
