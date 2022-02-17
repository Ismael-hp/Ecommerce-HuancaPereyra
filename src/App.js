import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routess from './Components/Routes-Comp/Routess';
import { CartProvider } from './context/CartContext';
function App() {
  return (
    <div className="App">
      <CartProvider>
      <Routess/>
      </CartProvider>
    </div>
  );
}
export default App;
