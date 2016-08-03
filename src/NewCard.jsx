import React, { Component, PropTypes} from 'react';
import {propTypes, observer} from 'mobx-react';
import { observable, toJS, action } from 'mobx';
import {CardForm} from './CardForm';
import { appState} from './AppState';
import { browserHistory } from 'react-router';

@observer
export class NewCard extends Component {
    @observable defaultCard = {
        id: Date.now(),
        title: '',
        description: '',
        status: 'todo',
        color: '#c9c9c9',
        tasks: []
    };

    @action
    handleChange(field, value) {

        this.defaultCard[field] = value;
    }
    handleSubmit(e) {
        e.preventDefault();
        appState.addCard(this.defaultCard);
        browserHistory.push('/');
    }
    handleClose(e) {
        browserHistory.push('/');
    }

    render() {

        return (
            <CardForm draftCard={this.defaultCard}
                buttonLabel="Create Card"
                handleChange={::this.handleChange}
    handleSubmit = {::this.handleSubmit }
    handleClose = {::this.handleClose }
    />
        )
}

}
