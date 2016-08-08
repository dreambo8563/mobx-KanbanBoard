/// <reference path="./../typings/index.d.ts" />
import React, { Component } from 'react';
import { observer  } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {List} from './List';
import Link from 'react-router/lib/Link'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
@observer
export class KanbanBoard extends Component {

  componentDidMount() {
    const {store} = this.props.route;
    console.log('kanban DidMount');
    store.fetchCards();
  }
  componentDidUpdate() {
    console.log('did update');
  }
  render() {
    const {store} = this.props.route;
    return (

      <div className="app">
        <Link to='/new' className="float-button">+</Link>
        <List id='todo' title="To Do" cards={
          store.cardsList.filter((card) => card.status === 'todo')
        } />
        <List id='in-progress' title="In Progress" cards={
          store.cardsList.filter((card) => card.status === 'in-progress')
        } />
        <List id='done' title='Done' cards={
          store.cardsList.filter((card) => card.status === 'done')
        } />
        {this.props.children}
        <DevTools />
      </div>
    )
  }
}

