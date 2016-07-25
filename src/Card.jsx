import React, { Component } from 'react';
import {CheckList} from './CheckList';
import { observable, extendObservable } from 'mobx';
import {observer} from 'mobx-react';

@observer
export class Card extends Component {

    @observable showDetail = true;
    // open an issue for observable PropertyDecorator
    // need to remove the react-hot from webpack loader
    constructor() {
        super();
    }
    render() {
        let cardDetails;
        if (this.showDetail) {
            cardDetails = (
                <div className="card__details">{this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            )
        }
        return (
            <div className="card" onClick={ ::this.toggleDetails} >
                <div className="card__title">{this.props.title} </div>
{ cardDetails }
            </div >
        )
    }

toggleDetails() {
    this.showDetail = !this.showDetail;
}
}