import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import OrderPage from './OrderPage';
import AllPies from './AllPies';
import ApplePiePage from './ApplePie';

function App() {
  return (
    <Switch>
      <Route path="/order">
        <OrderPage/>
      </Route>
      <Route path="/allpies">
        <AllPies/>
      </Route>
      <Route path="/applepie">
        <ApplePiePage/>
      </Route>  
      <Route path="/">
        <HomePage/>
      </Route>
    </Switch>
  );
}

export default App;
