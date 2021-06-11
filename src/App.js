import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateWalletPage from './pages/CreateWalletPage';
import RestoreWalletPage from './pages/RestoreWalletPage';


 function Logging() {
  console.log("click from App.js")
  
}

function App() {
  return (
    <div className="App">
      {/*
          Wallet action navigation
      */}
      <Router>
        <div>
          <div className="wallet--nav">
            <div className="wallet-nav-action">
              <Link to="/">Create new wallet</Link>
            </div>
            <div className="wallet-nav-action">
              <Link to="/restore">Restore wallet</Link>
            </div>
          </div>
        {/*
          Page Content will be displayed here
        */}
          <Switch>
            <Route exact path="/">
              <CreateWalletPage />
            </Route>
            <Route path="/restore">
              <RestoreWalletPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
