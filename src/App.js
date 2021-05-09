import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// pages import
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';
import Agency from './pages/Agency';
import RegisterAgent from './pages/RegisterAgent';
import DownloadAgency from './pages/register-component/DownloadAgency';
import BussinessInformationForm from './pages/register-component/BussinessInformationForm';
import MeansOfIdentificationForm from './pages/register-component/MeansOfIdentificationForm';
import SecurityDetailsForm from './pages/register-component/SecurityDetailsForm';

//hooks
import {ScrollToTop} from './components/ScrollToTop';

import './App.css';
import './Animation.css';
import './faq.css';
import './scss/Agency.scss';
import './scss/RegisterAgent.scss';
import './scss/Alert.scss';
import './scss/Download-agency.scss';

// Redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/agency' component={Agency} />
          <Route exact path='/agency/register' component={RegisterAgent} />
          <Route exact path='/agency/download' component={DownloadAgency} />
          <Route
            exact
            path='/agency/registerbif'
            component={BussinessInformationForm}
          />
          <Route
            exact
            path='/agency/registermoi'
            component={MeansOfIdentificationForm}
          />
          <Route
            exact
            path='/agency/registersd'
            component={SecurityDetailsForm}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
