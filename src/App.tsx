import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { NotFound } from './pages/NotFound'
import { HomePage } from './pages/Home'
import { ResultsPage } from './pages/Results'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export const history = createBrowserHistory();

export default App
