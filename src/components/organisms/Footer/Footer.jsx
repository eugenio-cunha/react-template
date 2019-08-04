import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  grid-area: footer;
  padding: 3px;
  color: #ffffff;
  background-color: #616161;
  border-top: 1px solid #ebebeb;
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <div>footer</div>
      </Container>
    );
  }
}
