/// <reference path="./../typings/index.d.ts" />
import React from 'react';
import { render } from 'react-dom';
import { AppContainer} from 'react-hot-loader';
import RouterComp from './Router';
import {useStrict} from 'mobx';

useStrict(false);
render(
  <AppContainer>
    <RouterComp  />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextApp = require('./Router').default;

    render(
      <AppContainer>
        <NextApp   />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

// render(

//     <RouterComp  />,

//   document.getElementById('root')
// );
