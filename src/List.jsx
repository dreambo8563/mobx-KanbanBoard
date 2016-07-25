import React, { Component } from 'react';
import {Card} from './Card';
import { observer } from 'mobx-react';

@observer
export class List extends Component {

    render() {
        var cards = this.props.cards.map((card) => {
            return <Card id={card.id}
                title={card.title}
                key={card.id}
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