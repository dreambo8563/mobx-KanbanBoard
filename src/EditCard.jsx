import React, { Component, PropTypes} from 'react';
import {propTypes, observer} from 'mobx-react';
import {CardForm} from './CardForm';
import { observable, action, computed} from 'mobx';
import {appState} from './AppState';
import browserHistory from 'react-router/lib/browserHistory';

@observer
export class EditCard extends Component {
    @observable defaultEditCard = {
        id: Date.now(),
        title: '',
        description: '',
        status: 'todo',
        color: '#c9c9c9',
        tasks: []
    }
    @computed get editCard() {
        return appState.cardsList.find((card) => card.id == this.props.params.card_id) || this.defaultEditCard

    }

    @action
    handleChange(field, value) {
        this.editCard[field] = value;
    }

    handleSubmit(e) {
        e.preventDefault();
        appState.updateCard(this.editCard);
        browserHistory.push('/');
    }

    handleClose(e) {
        browserHistory.push('/');
    }

    render() {

        return (
            <CardForm draftCard={this.editCard}
                buttonLabel="Edit Card"
                handleChange={::this.handleChange }
    handleSubmit = {::this.handleSubmit }
    handleClose = {::this.handleClose } />
        )
}

}
