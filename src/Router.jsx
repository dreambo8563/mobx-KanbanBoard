import React, { Component, PropTypes } from 'react';
import {EditCard} from './EditCard';
// import {NewCard} from './NewCard';
import { observer} from 'mobx-react';
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory';
import {appState} from './AppState';
import {KanbanBoard} from './KanbanBoard';

@observer
export class RouterComp extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={KanbanBoard} store={appState}>
                    <Route path="new" getComponent={(location, cb) => {
                        require.ensure([], require => {
                            // Retrieve main page component
                            cb(null, require('./NewCard').NewCard);
                        });
                    } } />
                    <Route path="edit/:card_id" component={EditCard} />
                    <Route path="*" component={() => <div>404 not found</div>}/>
                </Route>
            </Router>
        )
    }

}

export default RouterComp;