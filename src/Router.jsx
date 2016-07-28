import React, { Component, PropTypes } from 'react';
import {EditCard} from './EditCard';
import {NewCard} from './NewCard';
import { Router, Route, browserHistory  } from 'react-router';
import {AppState} from './AppState';
import {KanbanBoard} from './KanbanBoard';

export const appState = new AppState();

const RouterComp = () => (
    <Router history={browserHistory}>
        <Route path="/" component={KanbanBoard} store={appState}>
            <Route path="new" component={NewCard} />
            <Route path="edit/:card_id" component={EditCard} />
            <Route path="*" component={() => <div>404 not found</div>}/>
        </Route>
    </Router>
);

export default RouterComp;