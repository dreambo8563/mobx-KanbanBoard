import React, { Component, PropTypes} from 'react';
import {propTypes, observer} from 'mobx-react';
import {CardForm} from './CardForm';
import { observable, toJS, autorun} from 'mobx';
import {appState} from './AppState';
import { browserHistory } from 'react-router';

@observer
export class EditCard extends Component {
    @observable editCard = {
        id: Date.now(),
        title: '',
        description: '',
        status: 'todo',
        color: '#c9c9c9',
        tasks: []
    };

    componentDidMount() {
        autorun(() => {
            this.editCard = appState.cardsList.find((card) => card.id == this.props.params.card_id) || {};
        })
    }

    handleChange(field, value) {
        this.editCard[field] = value;
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.cardCallbacks.updateCard(this.state);
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
