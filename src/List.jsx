import React, { Component, PropTypes} from 'react';
import {Card} from './Card';
import { observer } from 'mobx-react';
import { DropTarget } from 'react-dnd';
import {Type} from './Constants';
import {appState} from './Router'


const listTargetSpec = {
    hover(props, monitor) {
        const draggedId = monitor.getItem().id;
        appState.updateCardStatus(draggedId, props.id)
    }
}

@DropTarget(Type.CARD, listTargetSpec, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
}))
@observer
export class List extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        cards: PropTypes.arrayOf(PropTypes.object),
        connectDropTarget:PropTypes.func.isRequired
    }
    render() {
        const {cards, title, connectDropTarget} = this.props;
        let cardsCom = cards.map((card) => {
            return <Card id={card.id}
                title={card.title}
                key={card.id}
                color={card.color}
                description={card.description}
                tasks={card.tasks} />
        });
        return connectDropTarget(
            <div className="list">
                <h1>{title}</h1>
                {cardsCom}
            </div>
        )

    }
}

