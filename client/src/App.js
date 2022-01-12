import './App.css';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
      <h1>Notes</h1>
      {/* Nav bar */}
      <nav>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/new'>Create</Link>
      </nav>
      <hr />
      <Switch>
        <div className="App">
          <hr />
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/new'>
            <Create />
          </Route>
          <Route path='/note/:id'>
            <Detail />
          </Route>
          <Route path='/note/:id'>
            <Update />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
