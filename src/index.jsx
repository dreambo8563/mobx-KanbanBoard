import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './AppState';
import KanbanBoard from './App';

const appState = new AppState();

render(
  <AppContainer>
   <KanbanBoard cards={appState.cardsList} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp cards={appState.cardsList}  />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
