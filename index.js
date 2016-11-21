import React from 'react';
import {render} from 'react-dom';

function Component(props) {
  return (<div>Hello World!</div>)
}

render(
  <Component />,
  document.getElementById('app')
);
