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
        this.props.handleChange(field, e.target.value);
    }
    handleClose(e) {
        e.preventDefault();
        browserHistory.push('/');
    }

    render() {
        const {handleSubmit, draftCard, buttonLabel} = this.props;
        console.log(this.props.draftCard.title)
        return (
            <div>
                <div className="card big">
                    <form onSubmit={(e) => handleSubmit(e) }>
                        <input type='text'
                            value={draftCard.title}
                            onChange={(e) => { this.handleChange('title', e) } }
                            placeholder="Title"
                            required={true}
                            autoFocus={true} />
                        <textarea value={draftCard.description}
                            onChange={(e) => { this.handleChange('description', e) } }
                            placeholder="Description"
                            required={true} />
                        <label htmlFor="status">Status</label>
                        <select id="status"
                            value={draftCard.status}
                            onChange={(e) => { this.handleChange('status', e) } }>
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                        <br />
                        <label htmlFor="color">Color</label>
                        <input id="color"
                            value={draftCard.color}
                            onChange={(e) => { this.handleChange('color', e) } }
                            type="color"
                            />
                        <div className='actions'>
                            <button type="submit">{buttonLabel}</button>
                        </div>
                    </form>
                </div>
                <div className="overlay" onClick={:: this.handleClose }>
            </div>
            </div >
        )
    }

} 