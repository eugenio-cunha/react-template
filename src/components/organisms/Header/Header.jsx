import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
  background-color: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <div>Header</div>
      </Container>
    );
  }
}
