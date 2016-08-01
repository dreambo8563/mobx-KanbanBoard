import React, { Component, PropTypes } from 'react';
import { observer, propTypes  } from 'mobx-react';
import { browserHistory } from 'react-router'

@observer
export class CardForm extends Component {

    static propTypes = {
        buttonLabel: PropTypes.string.isRequired,
        draftCard: propTypes.objectOrObservableObject.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleClose: PropTypes.func.isRequired
    }
    handleChange(field, e) {
        this.props.handleChange(field,e.target.value);
    }
    handleClose(e) {
        e.preventDefault();
        browserHistory.push('/');
    }

    render() {
        return (
            <div>
                <div className="card big">
                    <form onSubmit={this.props.handleSubmit.bind(this) }>
                        <input type='text'
                            value={this.props.draftCard.title}
                            onChange={this.handleChange.bind(this, 'title') }
                            placeholder="Title"
                            required={true}
                            autoFocus={true} />
                        <textarea value={this.props.draftCard.description}
                            onChange={this.handleChange.bind(this, 'description') }
                            placeholder="Description"
                            required={true} />
                        <label htmlFor="status">Status</label>
                        <select id="status"
                            value={this.props.draftCard.status}
                            onChange={this.handleChange.bind(this, 'status') }>
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                        <br />
                        <label htmlFor="color">Color</label>
                        <input id="color"
                            value={this.props.draftCard.color}
                            onChange={this.handleChange.bind(this, 'color') }
                            type="color"
                            />
                        <div className='actions'>
                            <button type="submit">{this.props.buttonLabel}</button>
                        </div>
                    </form>
                </div>
                <div className="overlay" onClick={this.handleClose.bind(this) }>
                </div>
            </div>
        )
    }

} 