import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { SignUpPage } from './pages/SignUpPage';
import { AppHeader } from './cmps/AppHeader';
import { Chart } from './pages/Chart';
import { Component } from 'react';
// import { Redirect } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
        <section className='App main-layout '>
          <AppHeader />
          <main>
            <Switch>
              <Route exact path='/contacts/edit/:id?' component={ContactEditPage} />
              <Route exact path='/contacts/:id' component={ContactDetailsPage} />
              <Route exact path='/contacts' component={ContactPage} />
              <Route exact path='/homepage' component={HomePage} />
              <Route exact path='/' component={SignUpPage} />
            </Switch>
          </main>
          <Route exact path='/statistic' component={Chart} />
        </section>
      </Router>
    );
  }
}
