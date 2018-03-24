import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router,Route,browserHistory} from 'react-router';
import DashBox from './components/dash/home/DashBox';
import CompanyBox from './components/dash/company/CompanyBox';
import PlaceBox from './components/dash/place/PlaceBox';
import EventBox from './components/dash/event/EventBox';
import FinancialBox from './components/dash/financial/FinancialBox';
import AnalytcsBox from './components/dash/analytics/AnalyticsBox';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>

        <Route path="/" component={DashBox}>
              <Route path="/company" component={CompanyBox} />
              <Route path="/place" component={PlaceBox} />
              <Route path="/event" component={EventBox} />
              <Route path="/financial" component={FinancialBox} />
              <Route path="/analitics" component={AnalytcsBox} />
        </Route>
    </Router>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);
