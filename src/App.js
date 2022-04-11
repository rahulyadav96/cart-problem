import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { MyCart } from "./components/MyCart";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route to="/mycart">
            <MyCart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
