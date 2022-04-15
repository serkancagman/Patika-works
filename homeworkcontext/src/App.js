import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {ProductProvider} from "./Context/ProductContext";

function App() {
  return (
    <ProductProvider>
   <Home/>
   </ProductProvider>
  );
}

export default App;
