import React, { Component, PropTypes} from 'react';
import {propTypes, observer, inject} from 'mobx-react';
import {appState} from './index'

// @inject(appState)
@observer
export class CheckList extends Component {

    constructor() {
        super();
    }
    render() {

        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} onChange={()=>appState.toggleTask(this.props.cardId,task.id,taskIndex)} />
                {task.name}
                <a href="#" className="checklist__task--remove" onClick={()=>appState.deleteTask(this.props.cardId,task.id,taskIndex)} />
            </li>));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text" className="checklist--add-task" placeholder="Type then hit Enter to add a task" />
            </div>
        )
    }

    // delete() {
    //     appState.deleteTask();
    // }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: propTypes.observableArray
}