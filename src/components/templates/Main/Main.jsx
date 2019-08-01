import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-top: 49px;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <p>main</p>
      </Container>
    );
  }
}
