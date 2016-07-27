import React, { Component, PropTypes} from 'react';
import {Card} from './Card';
import { observer } from 'mobx-react';

@observer
export class List extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        cards: PropTypes.arrayOf(PropTypes.object)
    }
    render() {
        var cards = this.props.cards.map((card) => {
            return <Card id={card.id}
                title={card.title}
                key={card.id}
                color={card.color}
                description={card.description}
                tasks={card.tasks} />
        });
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        )

    }
}

