import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../templates/Layout';
import { Home, About } from '../pages';

// https://stackoverflow.com/questions/51085464/react-router-v4-routers-with-master-pages-templates
// usar fragments?

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Layout>
        </Switch>
      </Router>
    );
  }
}
