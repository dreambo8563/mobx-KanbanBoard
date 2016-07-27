/// <reference path="./../typings/index.d.ts" />
import React, { Component, PropTypes } from 'react';
import { observer, propTypes  } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {List} from './List';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
@observer
export class KanbanBoard extends Component {

  static propTypes = {
    cards: PropTypes.object
  }

  componentDidMount() {
    const {store} = this.props;
    store.fetchCards();
  }

  render() {
    const {store} = this.props;
    return (

      <div className="app">
        <List id='todo' title="To Do" cards={
          store.cardsList.filter((card) => card.status === 'todo')
        } />
        <List id='in-progress' title="In Progress" cards={
          store.cardsList.filter((card) => card.status === 'in-progress')
        } />
        <List id='done' title='Done' cards={
          store.cardsList.filter((card) => card.status === 'done')
        } />
        <DevTools />
      </div>
    )
  }
}


