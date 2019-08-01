import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 30px;
  color: #ffffff;
  background-color: #616161;
  border-top: 1px solid #ebebeb;
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <div>Footer</div>
      </Container>
    );
  }
}
