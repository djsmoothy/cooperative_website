import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// pages import
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';

import './App.css';
import './Animation.css';
import './faq.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
