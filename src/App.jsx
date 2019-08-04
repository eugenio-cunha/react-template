import React, { Component } from 'react';
import { GlobalStyle } from './styles';

import { Layout } from './components/templates';

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Layout />
      </div>
    );
  }
}
