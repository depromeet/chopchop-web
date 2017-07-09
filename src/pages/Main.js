// @flow
import React from 'react';
import ChopWraper from '../components/ChopWrapper';

type propTypes = {
  a: string
}
const Main = (props: propTypes) => (<ChopWraper><h1>Hello World</h1></ChopWraper>);

export default Main;