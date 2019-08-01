import React, { Component } from 'react';
import { GlobalStyle } from './styles';

import { Main } from './components/templates';
import { Header, Footer } from './components/organisms';

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
