import React, { Component, PropTypes } from 'react';
import {CheckList} from './CheckList';
import { observable } from 'mobx';
import {observer,propTypes} from 'mobx-react';

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
        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };

        return (
            <div className="card">
                <div style={sideColor} />
                <div className={this.showDetail ? 'card__title card__title--is-open' : 'card__title'}
                    onClick={ :: this.toggleDetails} >
                {this.props.title}

            </div>
                  { cardDetails }
            </div >
        )
    }

    toggleDetails() {
        this.showDetail = !this.showDetail;
    }
}


Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    tasks: propTypes.observableArray,
    description: PropTypes.string,
    color: PropTypes.string

}