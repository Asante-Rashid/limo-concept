import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./pages/checkout";
import NoMatch from "./pages/checkout";


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Checkout} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
