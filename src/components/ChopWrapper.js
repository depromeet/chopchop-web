// @flow
import React from 'react';
import Menubar from './Menubar';

type propsType = {
  children: string
}
const ChopWrapper = ({ children }: propsType) => (
  <div className="ChopWrapper">
    <Menubar /> {children}
  </div>
);

export default ChopWrapper;