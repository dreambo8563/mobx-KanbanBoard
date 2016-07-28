import React, { Component, PropTypes } from 'react';
import {CheckList} from './CheckList';
import { observable } from 'mobx';
import {observer, propTypes} from 'mobx-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { DragSource, DropTarget} from 'react-dnd';
import {Type} from './Constants';
import {appState} from './Router';

const cardDragSpec = {
    beginDrag(props) {
        return {
            id: props.id
        }
    }
}

const cardDropSpec = {
    hover(props, monitor) {
        const draggedId = monitor.getItem().id;
        appState.updateCardPosition(draggedId, props.id)
    }
}

@DragSource(Type.CARD, cardDragSpec, (connect, monitor) => ({
    connectDragSource: connect.dragSource()
}))
@DropTarget(Type.CARD, cardDropSpec, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
}))
@observer
export class Card extends Component {

    @observable showDetail = false;
    // open an issue for observable PropertyDecorator
    // need to remove the react-hot from webpack loader
    constructor() {
        super();
    }
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        tasks: propTypes.observableArray,
        description: PropTypes.string,
        color: PropTypes.string,
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired
    }
    render() {
        let cardDetails;
        const {description, id, tasks, color, connectDragSource, connectDropTarget} = this.props;
        if (this.showDetail) {
            cardDetails = (
                <div className="card__details">{description}
                    <CheckList cardId={id} tasks={tasks} />
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
            backgroundColor: color
        };

        return connectDropTarget(connectDragSource(
            <div className="card">
                <div style={sideColor} />
                <div className={this.showDetail ? 'card__title card__title--is-open' : 'card__title'} onClick={ :: this.toggleDetails}>
                {this.props.title}
            </div>
            <ReactCSSTransitionGroup transitionName="toggle" transitionEnterTimeout={250} transitionLeaveTimeout={250} >
                { cardDetails }
            </ReactCSSTransitionGroup>
            </div >
        ));
    }

    toggleDetails() {
        this.showDetail = !this.showDetail;
    }
}
