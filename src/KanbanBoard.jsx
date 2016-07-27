/// <reference path="./../typings/index.d.ts" />
import React, { Component, PropTypes } from 'react';
import { observer, propTypes  } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {List} from './List';

@observer
export class KanbanBoard extends Component {

  static propTypes = {
    cards: PropTypes.object
  }

  componentDidMount() {
    this.props.store.fetchCards();
  }

  render() {

    return (

      <div className="app">
        <List id='todo' title="To Do" cards={
          this.props.store.cardsList.filter((card) => card.status === 'todo')
        } />
        <List id='in-progress' title="In Progress" cards={
          this.props.store.cardsList.filter((card) => card.status === 'in-progress')
        } />
        <List id='done' title='Done' cards={
          this.props.store.cardsList.filter((card) => card.status === 'done')
        } />
        <DevTools />
      </div>
    )
  }
}

