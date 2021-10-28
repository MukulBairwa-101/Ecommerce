import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from "./Component/Home";
import Products from "./Component/Products/Products";
import {Switch ,Route } from "react-router-dom";
import Cart from "./Component/Cart/Cart"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route  exact path ="/" component ={Home}/>
        <Route  exact path ="/products" component ={Products}/>
        <Route  exact path ="/cart" component ={Cart}/>
        <Home />
      </Switch>

     </div>
  );
}

export default App;
