import React, { Component } from 'react';
import { GlobalStyle } from './styles';

// import { Layout } from './components/templates';
import { Routes } from './components/routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Routes />
      </div>
    );
  }
}
