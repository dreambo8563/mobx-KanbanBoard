import React, { Component, PropTypes} from 'react';
import {propTypes, observer} from 'mobx-react';
import {CardForm} from './CardForm';

@observer
export class EditCard extends Component {


    static propTypes = {

    }
    componentWillMount() {
        let card = this.props.cards.find((card) => card.id == this.props.params.card_id);
        this.setState({...card});
}

handleChange(field, value){
    this.setState({ [field]: value });
}

handleSubmit(e){
    e.preventDefault();
    this.props.cardCallbacks.updateCard(this.state);
    this.props.route.pushState(null, '/');
}

handleClose(e){
    this.props.history.pushState(null, '/');
}

render() {

    return (
        <CardForm draftCard={this.state}
            buttonLabel="Edit Card"
            handleChange={this.handleChange.bind(this) }
            handleSubmit={this.handleSubmit.bind(this) }
            handleClose={this.handleClose.bind(this) } />
    )
}

}
