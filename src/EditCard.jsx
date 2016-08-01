import React, { Component, PropTypes} from 'react';
import {propTypes, observer} from 'mobx-react';
import {CardForm} from './CardForm';
import { observable, toJS} from 'mobx';
import {appState} from './AppState';
import { browserHistory } from 'react-router';

@observer
export class EditCard extends Component {
    @observable card = {};
    componentDidMount() {
        // when we get the cardsList, it didn't finish the process to fetch data from server
        console.log(this.props.cards)
        // this.setState({...this.card});
}

handleChange(field, value) {
    this.setState({ [field]: value });
}

handleSubmit(e) {
    e.preventDefault();
    this.props.cardCallbacks.updateCard(this.state);
    browserHistory.push('/');
}

handleClose(e) {
    browserHistory.push('/');
}

render() {
    if (!!appState.cardsList.find((card) => card.id == this.props.params.card_id)) {
        this.card = appState.cardsList.find((card) => card.id == this.props.params.card_id);
    }
    return (
        <CardForm draftCard={this.card}
            buttonLabel="Edit Card"
            handleChange={this.handleChange.bind(this) }
            handleSubmit={this.handleSubmit.bind(this) }
            handleClose={this.handleClose.bind(this) } />
    )
}

}
