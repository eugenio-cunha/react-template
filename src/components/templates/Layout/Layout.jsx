import React, { Component } from 'react';
import styled from 'styled-components';

import { Header, Main, Footer } from '../../organisms';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: minmax(30px, 50px) auto minmax(30px, 40px);

  grid-template-areas:
    'header header header'
    'main main main'
    'footer footer footer';
  height: 100vh;
`;

export default class Layout extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main>{this.props.children}</Main>
        <Footer />
      </Container>
    );
  }
}
