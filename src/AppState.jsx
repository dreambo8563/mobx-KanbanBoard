import { observable, computed} from 'mobx';
import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'any-string-you-like'// The Authorization is not needed for local server
};
class AppState {
  @observable cardsList = [
    {
      id: 1,
      title: 'Read the Book',
      description: 'I should read the whole book',
      color: '#BD8D31',
      status: 'in-progress',
      tasks: []
    },
    {
      id: 2,
      title: 'Write some code',
      description: 'Code along with the samples in the book',
      color: '#3A7E28',
      status: 'todo',
      tasks: [
        {
          id: 1,
          name: 'ContactList Example',
          done: true
        },
        {
          id: 2,
          name: 'Kanban Example',
          done: false
        },
        {
          id: 3,
          name: 'My own experiments',
          done: false
        }]
    }
  ];

  /**
   * fetchData from remote server
   */
  fetchCards() {
    let preStates = this.cardsList.slice(0);
    fetch(API_URL + '/cards', { headers: API_HEADERS })
      .then((response) => response.json())
      .then((responseData) => {
        this.cardsList = responseData;
      })
      .catch((error) => {
        this.cardsList = preStates;
        console.log('Error fetching and parsing data', error);
      });
  }

  /**
   * @param {number} cardId
   * @param {number} taskId
   * @param {number} taskIndex
   */
  deleteTask(cardId, taskId, taskIndex) {
    // Find the index of the card
    let cardIndex = this.cardsList.findIndex((card) => card.id == cardId);
    this.cardsList[cardIndex].tasks.splice(taskIndex, 1);

  }


  /**
   * @param {number} cardId
   * @param {number} taskId
   * @param {number} taskIndex
   */
  toggleTask(cardId, taskId, taskIndex) {
    let cardIndex = this.cardsList.findIndex((card) => card.id == cardId);
    this.cardsList[cardIndex].tasks.map((value, index) => {
      if (index == taskIndex) {
        value.done = !value.done;
        console.log(JSON.stringify(value));
      }
    })
  }

  /**
   * @param  {number} cardId
   * @param  {string} taskName
   * @returns {void}
   */
  addTask(cardId, taskName) {
    let cardIndex = this.cardsList.findIndex((card) => card.id == cardId);
    this.cardsList[cardIndex].tasks.push({ id: Date.now(), name: taskName, done: false });
  }

  /**
   * @param {number} cardId
   * @param {string} listId
   */
  updateCardStatus(cardId, listId) {
    // dragged card
    let cardIndex = this.cardsList.findIndex((card) => card.id == cardId);
    //dragged the card hover on the differnt list
    if (this.cardsList[cardIndex].status != listId) {
      //change the list state
      this.cardsList[cardIndex].status = listId;
    }
  }


  /**
   * @param {number} cardId
   * @param {number} afterId
   */
  updateCardPosition(cardId, afterId) {
    if (cardId !== afterId) {
      let cardIndex = this.cardsList.findIndex((card) => card.id == cardId);
      let card = this.cardsList[cardIndex]
      let afterIndex = this.cardsList.findIndex((card) => card.id == afterId);
      this.cardsList.splice(cardIndex, 1);
      this.cardsList.splice(afterIndex, 0, card);
    }
  }

  /**
   * @param {Object} card
   */
  addCard(card) {
    if (card.id === null) {
      card = {...card, id: Date.now() };
    }
    this.cardsList.push(card);
  }

  /**
   * @param {Object} card
   */
  updateCard(card) {
    let cardIndex = this.cardsList.findIndex((c) => c.id == card.id);
    this.cardsList[cardIndex] = card;
  }
}

export const appState = new AppState();

