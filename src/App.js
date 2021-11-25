import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from "./Component/Home";
import Products from "./Component/Products/Products";
import Item from "./Component/Products/Item";
import {Switch ,Route } from "react-router-dom";
import Cart from "./Component/Cart/Cart"
import Checkout from './Component/Checkout/Checkout';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route  exact path ="/" component ={Home}/>
        <Route  exact path ="/products" component ={Products}/>
        <Route  exact path ="/products/:id" component ={Item} />
        <Route  exact path ="/cart" component ={Cart}/>
        <Route  exact path ="/checkout" component ={Checkout}/>
        <Home />
      </Switch>

     </div>
  );
}

export default App;
