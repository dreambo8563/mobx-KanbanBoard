import React, { Component, PropTypes} from 'react';
import {propTypes, observer} from 'mobx-react';
import {appState} from './AppState';


@observer
export class CheckList extends Component {

    constructor() {
        super();
    }
    static propTypes = {
        cardId: PropTypes.number,
        tasks: propTypes.observableArray
    }
    render() {
        const { tasks, cardId} = this.props;
        let tasksCom = tasks.map((task, taskIndex) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} onChange={() => appState.toggleTask(cardId, task.id, taskIndex) } />
                {task.name}
                <a href="#" className="checklist__task--remove" onClick={() => appState.deleteTask(cardId, task.id, taskIndex) } />
            </li>));
        return (
            <div className="checklist">
                <ul>{tasksCom}</ul>
                <input type="text" className="checklist--add-task" placeholder="Type then hit Enter to add a task"
                    onKeyPress={:: this.checkInputKeyPress}  />
            </div>
        )
    }
    /**
     * 
     * response to Enter
     * @param {KeyboardEvent} event
     */
    checkInputKeyPress(event) {
        if (event.key === 'Enter') {
            appState.addTask(this.props.cardId, event.target.value);
            event.target.value = '';
        }
    }

}
