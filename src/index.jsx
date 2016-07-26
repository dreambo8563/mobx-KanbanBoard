/// <reference path="./../typings/index.d.ts" />
import React from 'react';
import { render } from 'react-dom';
import { AppContainer} from 'react-hot-loader';
import {AppState} from './AppState';
import {KanbanBoard} from './KanbanBoard';


export const appState = new AppState();

render(
  <AppContainer>
   <KanbanBoard store={appState} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./KanbanBoard', () => {
    const NextApp = require('./KanbanBoard').default;

    render(
      <AppContainer>
        <NextApp store={appState}  />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
