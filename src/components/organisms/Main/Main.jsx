import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  grid-area: main;
  padding: 3px;
  background-color: #ffffff;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <div>main</div>
        {this.props.children}
      </Container>
    );
  }
}
