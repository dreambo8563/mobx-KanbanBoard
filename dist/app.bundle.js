webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _Router = __webpack_require__(172);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	var _mobx = __webpack_require__(175);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// useStrict(true);
	// render(
	//   <AppContainer>
	//     <RouterComp  />
	//   </AppContainer>,
	//   document.getElementById('root')
	// );
	
	// if (module.hot) {
	//   module.hot.accept('./Router', () => {
	//     const NextApp = require('./Router').default;
	
	//     render(
	//       <AppContainer>
	//         <NextApp   />
	//       </AppContainer>,
	//       document.getElementById('root')
	//     );
	//   });
	// }
	
	// import { AppContainer} from 'react-hot-loader';
	/// <reference path="./../typings/index.d.ts" />
	(0, _reactDom.render)(_react2.default.createElement(_Router2.default, null), document.getElementById('root'));
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	})();

	;

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RouterComp = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EditCard = __webpack_require__(173);
	
	var _NewCard = __webpack_require__(203);
	
	var _mobxReact = __webpack_require__(174);
	
	var _Route = __webpack_require__(204);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _Router = __webpack_require__(207);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	var _browserHistory = __webpack_require__(177);
	
	var _browserHistory2 = _interopRequireDefault(_browserHistory);
	
	var _AppState = __webpack_require__(201);
	
	var _KanbanBoard = __webpack_require__(224);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RouterComp = exports.RouterComp = (0, _mobxReact.observer)(_class = function (_Component) {
	    _inherits(RouterComp, _Component);
	
	    function RouterComp() {
	        _classCallCheck(this, RouterComp);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RouterComp).apply(this, arguments));
	    }
	
	    _createClass(RouterComp, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _Router2.default,
	                { history: _browserHistory2.default },
	                _react2.default.createElement(
	                    _Route2.default,
	                    { path: '/', component: _KanbanBoard.KanbanBoard, store: _AppState.appState },
	                    _react2.default.createElement(_Route2.default, { path: 'new', component: _NewCard.NewCard }),
	                    _react2.default.createElement(_Route2.default, { path: 'edit/:card_id', component: _EditCard.EditCard }),
	                    _react2.default.createElement(_Route2.default, { path: '*', component: function component() {
	                            return _react2.default.createElement(
	                                'div',
	                                null,
	                                '404 not found'
	                            );
	                        } })
	                )
	            );
	        }
	    }]);
	
	    return RouterComp;
	}(_react.Component)) || _class;
	
	var _default = RouterComp;
	exports.default = _default;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(RouterComp, 'RouterComp', 'E:/Projects/mobx-react-boilerplate/src/Router.jsx');
	
	    __REACT_HOT_LOADER__.register(_default, 'default', 'E:/Projects/mobx-react-boilerplate/src/Router.jsx');
	})();

	;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EditCard = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _desc, _value, _class2, _descriptor;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(174);
	
	var _CardForm = __webpack_require__(176);
	
	var _mobx = __webpack_require__(175);
	
	var _AppState = __webpack_require__(201);
	
	var _browserHistory = __webpack_require__(177);
	
	var _browserHistory2 = _interopRequireDefault(_browserHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _initDefineProp(target, property, descriptor, context) {
	    if (!descriptor) return;
	    Object.defineProperty(target, property, {
	        enumerable: descriptor.enumerable,
	        configurable: descriptor.configurable,
	        writable: descriptor.writable,
	        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	    });
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;
	
	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }
	
	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);
	
	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }
	
	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }
	
	    return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
	    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var EditCard = exports.EditCard = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
	    _inherits(EditCard, _Component);
	
	    function EditCard() {
	        var _Object$getPrototypeO;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, EditCard);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EditCard)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initDefineProp(_this, 'defaultEditCard', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(EditCard, [{
	        key: 'handleChange',
	        value: function handleChange(field, value) {
	            this.editCard[field] = value;
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            _AppState.appState.updateCard(this.editCard);
	            _browserHistory2.default.push('/');
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose(e) {
	            _browserHistory2.default.push('/');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            return _react2.default.createElement(_CardForm.CardForm, { draftCard: this.editCard,
	                buttonLabel: 'Edit Card',
	                handleChange: this.handleChange.bind(this),
	                handleSubmit: this.handleSubmit.bind(this),
	                handleClose: this.handleClose.bind(this) });
	        }
	    }, {
	        key: 'editCard',
	        get: function get() {
	            var _this2 = this;
	
	            return _AppState.appState.cardsList.find(function (card) {
	                return card.id == _this2.props.params.card_id;
	            }) || this.defaultEditCard;
	        }
	    }]);
	
	    return EditCard;
	}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'defaultEditCard', [_mobx.observable], {
	    enumerable: true,
	    initializer: function initializer() {
	        return {
	            id: Date.now(),
	            title: '',
	            description: '',
	            status: 'todo',
	            color: '#c9c9c9',
	            tasks: []
	        };
	    }
	}), _applyDecoratedDescriptor(_class2.prototype, 'editCard', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'editCard'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class;
	
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(EditCard, 'EditCard', 'E:/Projects/mobx-react-boilerplate/src/EditCard.jsx');
	})();

	;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CardForm = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _class2, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(174);
	
	var _browserHistory = __webpack_require__(177);
	
	var _browserHistory2 = _interopRequireDefault(_browserHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CardForm = exports.CardForm = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
	    _inherits(CardForm, _Component);
	
	    function CardForm() {
	        _classCallCheck(this, CardForm);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CardForm).apply(this, arguments));
	    }
	
	    _createClass(CardForm, [{
	        key: 'handleChange',
	        value: function handleChange(field, e) {
	            this.props.handleChange(field, e.target.value);
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose(e) {
	            console.log(_browserHistory2.default);
	            e.preventDefault();
	            _browserHistory2.default.push('/');
	            console.log(_browserHistory2.default);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var handleSubmit = _props.handleSubmit;
	            var draftCard = _props.draftCard;
	            var buttonLabel = _props.buttonLabel;
	
	            console.log(this.props.draftCard.title);
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'card big' },
	                    _react2.default.createElement(
	                        'form',
	                        { onSubmit: function onSubmit(e) {
	                                return handleSubmit(e);
	                            } },
	                        _react2.default.createElement('input', { type: 'text',
	                            value: draftCard.title,
	                            onChange: function onChange(e) {
	                                _this2.handleChange('title', e);
	                            },
	                            placeholder: 'Title',
	                            required: true,
	                            autoFocus: true }),
	                        _react2.default.createElement('textarea', { value: draftCard.description,
	                            onChange: function onChange(e) {
	                                _this2.handleChange('description', e);
	                            },
	                            placeholder: 'Description',
	                            required: true }),
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'status' },
	                            'Status'
	                        ),
	                        _react2.default.createElement(
	                            'select',
	                            { id: 'status',
	                                value: draftCard.status,
	                                onChange: function onChange(e) {
	                                    _this2.handleChange('status', e);
	                                } },
	                            _react2.default.createElement(
	                                'option',
	                                { value: 'todo' },
	                                'To Do'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: 'in-progress' },
	                                'In Progress'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: 'done' },
	                                'Done'
	                            )
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'color' },
	                            'Color'
	                        ),
	                        _react2.default.createElement('input', { id: 'color',
	                            value: draftCard.color,
	                            onChange: function onChange(e) {
	                                _this2.handleChange('color', e);
	                            },
	                            type: 'color'
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'actions' },
	                            _react2.default.createElement(
	                                'button',
	                                { type: 'submit' },
	                                buttonLabel
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement('div', { className: 'overlay', onClick: this.handleClose.bind(this) })
	            );
	        }
	    }]);
	
	    return CardForm;
	}(_react.Component), _class2.propTypes = {
	    buttonLabel: _react.PropTypes.string.isRequired,
	    draftCard: _mobxReact.propTypes.objectOrObservableObject.isRequired,
	    handleChange: _react.PropTypes.func.isRequired,
	    handleSubmit: _react.PropTypes.func.isRequired,
	    handleClose: _react.PropTypes.func.isRequired
	}, _temp)) || _class;
	
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(CardForm, 'CardForm', 'E:/Projects/mobx-react-boilerplate/src/CardForm.jsx');
	})();

	;

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.appState = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _desc, _value, _class, _descriptor;
	
	var _mobx = __webpack_require__(175);
	
	__webpack_require__(202);
	
	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var API_URL = 'http://kanbanapi.pro-react.com';
	var API_HEADERS = {
	  'Content-Type': 'application/json',
	  Authorization: 'any-string-you-like' // The Authorization is not needed for local server
	};
	var AppState = (_class = function () {
	  function AppState() {
	    _classCallCheck(this, AppState);
	
	    _initDefineProp(this, 'cardsList', _descriptor, this);
	  }
	
	  _createClass(AppState, [{
	    key: 'fetchCards',
	
	
	    /**
	     * fetchData from remote server
	     */
	    value: function fetchCards() {
	      var _this = this;
	
	      var preStates = this.cardsList.slice(0);
	      fetch(API_URL + '/cards', { headers: API_HEADERS }).then((0, _mobx.action)(function (response) {
	        return response.json();
	      })).then((0, _mobx.action)(function (responseData) {
	        _this.cardsList = responseData;
	      })).catch((0, _mobx.action)(function (error) {
	        _this.cardsList = preStates;
	        console.log('Error fetching and parsing data', error);
	      }));
	    }
	
	    /**
	     * @param {number} cardId
	     * @param {number} taskId
	     * @param {number} taskIndex
	     */
	
	  }, {
	    key: 'deleteTask',
	    value: function deleteTask(cardId, taskId, taskIndex) {
	      // Find the index of the card
	      var cardIndex = this.cardsList.findIndex(function (card) {
	        return card.id == cardId;
	      });
	      this.cardsList[cardIndex].tasks.splice(taskIndex, 1);
	    }
	
	    /**
	     * @param {number} cardId
	     * @param {number} taskId
	     * @param {number} taskIndex
	     */
	
	  }, {
	    key: 'toggleTask',
	    value: function toggleTask(cardId, taskId, taskIndex) {
	      var cardIndex = this.cardsList.findIndex(function (card) {
	        return card.id == cardId;
	      });
	      this.cardsList[cardIndex].tasks.map(function (value, index) {
	        if (index == taskIndex) {
	          value.done = !value.done;
	          console.log(JSON.stringify(value));
	        }
	      });
	    }
	
	    /**
	     * @param  {number} cardId
	     * @param  {string} taskName
	     * @returns {void}
	     */
	
	  }, {
	    key: 'addTask',
	    value: function addTask(cardId, taskName) {
	      var cardIndex = this.cardsList.findIndex(function (card) {
	        return card.id == cardId;
	      });
	      this.cardsList[cardIndex].tasks.push({ id: Date.now(), name: taskName, done: false });
	    }
	
	    /**
	     * @param {number} cardId
	     * @param {string} listId
	     */
	
	  }, {
	    key: 'updateCardStatus',
	    value: function updateCardStatus(cardId, listId) {
	      // dragged card
	      var cardIndex = this.cardsList.findIndex(function (card) {
	        return card.id == cardId;
	      });
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
	
	  }, {
	    key: 'updateCardPosition',
	    value: function updateCardPosition(cardId, afterId) {
	      if (cardId !== afterId) {
	        var cardIndex = this.cardsList.findIndex(function (card) {
	          return card.id == cardId;
	        });
	        var card = this.cardsList[cardIndex];
	        var afterIndex = this.cardsList.findIndex(function (card) {
	          return card.id == afterId;
	        });
	        this.cardsList.splice(cardIndex, 1);
	        this.cardsList.splice(afterIndex, 0, card);
	      }
	    }
	
	    /**
	     * @param {Object} card
	     */
	
	  }, {
	    key: 'addCard',
	    value: function addCard(card) {
	      if (card.id === null) {
	        card = _extends({}, card, { id: Date.now() });
	      }
	      this.cardsList.push(card);
	    }
	
	    /**
	     * @param {Object} card
	     */
	
	  }, {
	    key: 'updateCard',
	    value: function updateCard(card) {
	      var cardIndex = this.cardsList.findIndex(function (c) {
	        return c.id == card.id;
	      });
	      this.cardsList[cardIndex] = card;
	    }
	  }]);
	
	  return AppState;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'cardsList', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return [{
	      id: 1,
	      title: 'Read the Book',
	      description: 'I should read the whole book',
	      color: '#BD8D31',
	      status: 'in-progress',
	      tasks: []
	    }, {
	      id: 2,
	      title: 'Write some code',
	      description: 'Code along with the samples in the book',
	      color: '#3A7E28',
	      status: 'todo',
	      tasks: [{
	        id: 1,
	        name: 'ContactList Example',
	        done: true
	      }, {
	        id: 2,
	        name: 'Kanban Example',
	        done: false
	      }, {
	        id: 3,
	        name: 'My own experiments',
	        done: false
	      }]
	    }];
	  }
	}), _applyDecoratedDescriptor(_class.prototype, 'fetchCards', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'fetchCards'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'deleteTask', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'deleteTask'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleTask', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleTask'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addTask', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addTask'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateCardStatus', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'updateCardStatus'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateCardPosition', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'updateCardPosition'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addCard', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addCard'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateCard', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'updateCard'), _class.prototype)), _class);
	var appState = exports.appState = new AppState();
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(API_URL, 'API_URL', 'E:/Projects/mobx-react-boilerplate/src/AppState.jsx');
	
	  __REACT_HOT_LOADER__.register(API_HEADERS, 'API_HEADERS', 'E:/Projects/mobx-react-boilerplate/src/AppState.jsx');
	
	  __REACT_HOT_LOADER__.register(AppState, 'AppState', 'E:/Projects/mobx-react-boilerplate/src/AppState.jsx');
	
	  __REACT_HOT_LOADER__.register(appState, 'appState', 'E:/Projects/mobx-react-boilerplate/src/AppState.jsx');
	})();

	;

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NewCard = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _desc, _value, _class2, _descriptor;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(174);
	
	var _mobx = __webpack_require__(175);
	
	var _CardForm = __webpack_require__(176);
	
	var _AppState = __webpack_require__(201);
	
	var _browserHistory = __webpack_require__(177);
	
	var _browserHistory2 = _interopRequireDefault(_browserHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _initDefineProp(target, property, descriptor, context) {
	    if (!descriptor) return;
	    Object.defineProperty(target, property, {
	        enumerable: descriptor.enumerable,
	        configurable: descriptor.configurable,
	        writable: descriptor.writable,
	        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	    });
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;
	
	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }
	
	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);
	
	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }
	
	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }
	
	    return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
	    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var NewCard = exports.NewCard = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
	    _inherits(NewCard, _Component);
	
	    function NewCard() {
	        var _Object$getPrototypeO;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, NewCard);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(NewCard)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initDefineProp(_this, 'defaultCard', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(NewCard, [{
	        key: 'handleChange',
	        value: function handleChange(field, value) {
	
	            this.defaultCard[field] = value;
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            _AppState.appState.addCard(this.defaultCard);
	            _browserHistory2.default.push('/');
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose(e) {
	            _browserHistory2.default.push('/');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            return _react2.default.createElement(_CardForm.CardForm, { draftCard: this.defaultCard,
	                buttonLabel: 'Create Card',
	                handleChange: this.handleChange.bind(this),
	                handleSubmit: this.handleSubmit.bind(this),
	                handleClose: this.handleClose.bind(this)
	            });
	        }
	    }]);
	
	    return NewCard;
	}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'defaultCard', [_mobx.observable], {
	    enumerable: true,
	    initializer: function initializer() {
	        return {
	            id: Date.now(),
	            title: '',
	            description: '',
	            status: 'todo',
	            color: '#c9c9c9',
	            tasks: []
	        };
	    }
	}), _applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class;
	
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(NewCard, 'NewCard', 'E:/Projects/mobx-react-boilerplate/src/NewCard.jsx');
	})();

	;

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KanbanBoard = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; /// <reference path="./../typings/index.d.ts" />
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(174);
	
	var _mobxReactDevtools = __webpack_require__(225);
	
	var _mobxReactDevtools2 = _interopRequireDefault(_mobxReactDevtools);
	
	var _List = __webpack_require__(226);
	
	var _Link = __webpack_require__(229);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _reactDnd = __webpack_require__(238);
	
	var _reactDndHtml5Backend = __webpack_require__(359);
	
	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KanbanBoard = exports.KanbanBoard = (_dec = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(KanbanBoard, _Component);
	
	  function KanbanBoard() {
	    _classCallCheck(this, KanbanBoard);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(KanbanBoard).apply(this, arguments));
	  }
	
	  _createClass(KanbanBoard, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var store = this.props.route.store;
	
	      store.fetchCards();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var store = this.props.route.store;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'app' },
	        _react2.default.createElement(
	          _Link2.default,
	          { to: '/new', className: 'float-button' },
	          '+'
	        ),
	        _react2.default.createElement(_List.List, { id: 'todo', title: 'To Do', cards: store.cardsList.filter(function (card) {
	            return card.status === 'todo';
	          }) }),
	        _react2.default.createElement(_List.List, { id: 'in-progress', title: 'In Progress', cards: store.cardsList.filter(function (card) {
	            return card.status === 'in-progress';
	          }) }),
	        _react2.default.createElement(_List.List, { id: 'done', title: 'Done', cards: store.cardsList.filter(function (card) {
	            return card.status === 'done';
	          }) }),
	        this.props.children,
	        _react2.default.createElement(_mobxReactDevtools2.default, null)
	      );
	    }
	  }]);
	
	  return KanbanBoard;
	}(_react.Component)) || _class) || _class);
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(KanbanBoard, 'KanbanBoard', 'E:/Projects/mobx-react-boilerplate/src/KanbanBoard.jsx');
	})();

	;

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t(__webpack_require__(1),__webpack_require__(175),__webpack_require__(174)):"function"==typeof define&&define.amd?define(["react","mobx","mobx-react"],t):"object"==typeof exports?exports.mobxDevtools=t(require("react"),require("mobx"),require("mobx-react")):e.mobxDevtools=t(e.React,e.mobx,e.mobxReact)}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.UpdatesControl=t.LogControl=t.GraphControl=t["default"]=void 0;var r=n(1);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r)["default"]}});var i=n(9);Object.defineProperty(t,"GraphControl",{enumerable:!0,get:function(){return o(i)["default"]}});var a=n(10);Object.defineProperty(t,"LogControl",{enumerable:!0,get:function(){return o(a)["default"]}});var u=n(12);Object.defineProperty(t,"UpdatesControl",{enumerable:!0,get:function(){return o(u)["default"]}});var l=n(28),s=o(l);s["default"].polyfill()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),s=o(l),c=n(3),d=n(8),p=o(d),f=n(22),g=o(f),h=n(24),b=o(h),y=function(e){function t(){var e,n,o,a;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState((0,c.getGlobalState)())},o.handleToggleGraph=function(){o.setState({hoverBoxes:[],graphEnabled:!o.state.graphEnabled})},a=n,i(o,a)}return a(t,e),u(t,[{key:"componentWillMount",value:function(){this.setState((0,c.getGlobalState)())}},{key:"componentDidMount",value:function(){c.eventEmitter.on("update",this.handleUpdate),setTimeout(c.restoreState,0)}},{key:"componentWillUnmount",value:function(){c.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=this.props.noPanel,t=this.state,n=t.renderingBoxes,o=t.hoverBoxes;return s["default"].createElement("div",null,e!==!0&&s["default"].createElement(p["default"],{position:this.props.position}),s["default"].createElement(g["default"],{boxes:n.concat(o)}),s["default"].createElement(b["default"],null))}}]),t}(l.Component);y.propTypes={hightlightTimeout:l.PropTypes.number,position:l.PropTypes.object,userAgent:l.PropTypes.string,noPanel:l.PropTypes.bool},y.defaultProps={noPanel:!1},t["default"]=y},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t._handleClick=t._handleMouseMove=t.restoreState=t.getGlobalState=t.setGlobalState=t.eventEmitter=void 0;var r=n(4),i=o(r),a=n(5),u=o(a),l=n(6),s=o(l),c=n(7),d=o(c),p="mobx-react-devtool__updatesEnabled",f="mobx-react-devtool__logEnabled",g={updatesEnabled:!1,graphEnabled:!1,logEnabled:!1,hoverBoxes:[],renderingBoxes:[]},h=t.eventEmitter=new s["default"],b=t.setGlobalState=function(e){g=Object.assign({},g,e),"undefined"!=typeof window&&window.localStorage&&(g.updatesEnabled?window.localStorage.setItem(p,"YES"):window.localStorage.removeItem(p),g.logEnabled?window.localStorage.setItem(f,"YES"):window.localStorage.removeItem(f)),h.emit("update")},y=(t.getGlobalState=function(){return g},t.restoreState=function(){if("undefined"!=typeof window&&window.localStorage){var e="YES"===window.localStorage.getItem(p),t="YES"===window.localStorage.getItem(f);b({updatesEnabled:e,logEnabled:t})}},function(e){for(var t=e,n=void 0;t;){if(n=u["default"].componentByNodeRegistery.get(t))return{component:n,node:t};t=t.parentNode}return{component:void 0,node:void 0}});t._handleMouseMove=function(e){if(g.graphEnabled){var t=e.target,n=y(t).node;if(n){var o=n.getBoundingClientRect();b({hoverBoxes:[{id:"the hovered node",type:"hover",x:o.left,y:o.top,width:o.width,height:o.height,lifeTime:1/0}]})}}},t._handleClick=function(e){if(g.graphEnabled){var t=e.target,n=y(t).component;if(n){e.stopPropagation(),e.preventDefault();var o=i["default"].extras.getDependencyTree(n.render.$mobx);(0,d["default"])(o),b({dependencyTree:o,hoverBoxes:[],graphEnabled:!1})}}}},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function r(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!r(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,u,l,s;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(n=this._events[e],a(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1),n.apply(this,u)}else if(i(n))for(u=Array.prototype.slice.call(arguments,1),s=n.slice(),r=s.length,l=0;l<r;l++)s[l].apply(this,u);return!0},n.prototype.addListener=function(e,t){var r;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(r=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,r,a,u;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],a=n.length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(u=a;u-- >0;)if(n[u]===t||n[u].listener&&n[u].listener===t){r=u;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],o(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function o(e){if(e.dependencies){for(var t=e.dependencies.length-1;t>=0;t--)for(var n=e.dependencies[t].name,r=t-1;r>=0;r--)if(e.dependencies[r].name===n){e.dependencies[r].dependencies=[].concat(e.dependencies[r].dependencies||[],e.dependencies[t].dependencies||[]),e.dependencies.splice(t,1);break}e.dependencies.forEach(o)}};t["default"]=n},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(3),p=n(9),f=r(p),g=n(10),h=r(g),b=n(12),y=r(b),v=n(14),m=r(v),I=n(15),w=o(I),x=function(e){function t(){var e,n,o,r;i(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState({})},r=n,a(o,r)}return u(t,e),l(t,[{key:"componentDidMount",value:function(){d.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){d.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=this.props,t=e.position,n=e.hightlightTimeout,o={};return t?(o.top=t.top,o.right=t.right,o.bottom=t.bottom,o.left=t.left):(o.top="0px",o.right="20px"),c["default"].createElement("div",null,c["default"].createElement("div",{style:Object.assign({},w.panel,o)},c["default"].createElement(y["default"],{hightlightTimeout:n},c["default"].createElement(m["default"],{id:"buttonUpdates"})),c["default"].createElement(f["default"],null,c["default"].createElement(m["default"],{id:"buttonGraph"})),c["default"].createElement(h["default"],null,c["default"].createElement(m["default"],{id:"buttonLog"}))))}}]),t}(s.Component);x.propTypes={hightlightTimeout:s.PropTypes.number},t["default"]=x},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),s=o(l),c=n(5),d=o(c),p=n(3),f=function(e){function t(){var e,n,o,a;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState({})},o.handleToggleGraph=function(){var e=(0,p.getGlobalState)(),t=e.graphEnabled;(0,p.setGlobalState)({hoverBoxes:[],graphEnabled:!t})},a=n,i(o,a)}return a(t,e),u(t,[{key:"componentWillMount",value:function(){this.setState({})}},{key:"componentDidMount",value:function(){d["default"].trackComponents(),p.eventEmitter.on("update",this.handleUpdate),"undefined"!=typeof window&&"undefined"!=typeof document&&(document.body.addEventListener("mousemove",p._handleMouseMove,!0),document.body.addEventListener("click",p._handleClick,!0))}},{key:"componentWillUnmount",value:function(){p.eventEmitter.removeListener("update",this.handleUpdate),"undefined"!=typeof document&&(document.body.removeEventListener("mousemove",p._handleMouseMove,!0),document.body.removeEventListener("click",p._handleMouseMove,!0))}},{key:"render",value:function(){var e=(0,p.getGlobalState)(),t=e.graphEnabled,n=this.props.children;return s["default"].cloneElement(n,{onToggle:this.handleToggleGraph,active:t})}}]),t}(l.Component);t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),s=o(l),c=n(11),d=n(3),p=function(e){function t(){var e,n,o,a;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){o.setState({});var e=(0,d.getGlobalState)(),t=e.logEnabled;(0,c.setLogLevel)(t)},o.handleToggleLog=function(){var e=(0,d.getGlobalState)(),t=e.logEnabled;(0,d.setGlobalState)({logEnabled:!t})},a=n,i(o,a)}return a(t,e),u(t,[{key:"componentDidMount",value:function(){d.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){d.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=(0,d.getGlobalState)(),t=e.logEnabled,n=this.props.children;return s["default"].cloneElement(n,{onToggle:this.handleToggleLog,active:t})}}]),t}(l.Component);t["default"]=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){e!==!0||I?e===!1&&I&&(I(),I=null):("undefined"!=typeof navigator&&navigator.userAgent.indexOf("Chrome")===-1&&console.warn("The output of the MobX logger is optimized for Chrome"),I=m["default"].spy(i))}function i(e){if(e.spyReportEnd===!0)"number"==typeof e.time&&l("%ctotal time: %sms","color:gray",e.time),console.groupEnd();else{var t=e.spyReportStart===!0?a:l;switch(e.type){case"action":t("%caction '%s' %s","color:dodgerblue",e.name,p("(",h(e.target))),l(e.arguments),c();break;case"transaction":t("%ctransaction '%s' %s","color:gray",e.name,p("(",h(e.target)));break;case"scheduled-reaction":t("%cscheduled async reaction '%s'","color:#10a210",f(e.object));break;case"reaction":t("%creaction '%s'","color:#10a210",f(e.object)),c();break;case"compute":a("%ccomputed '%s' %s","color:#10a210",f(e.object),p("(",h(e.target))),u();break;case"error":t("%cerror: %s","color:tomato",e.message),c(),d();break;case"update":m["default"].isObservableArray(e.object)?t("updated '%s[%s]': %s (was: %s)",f(e.object),e.index,g(e.newValue),g(e.oldValue)):m["default"].isObservableObject(e.object)?t("updated '%s.%s': %s (was: %s)",f(e.object),e.name,g(e.newValue),g(e.oldValue)):t("updated '%s': %s (was: %s)",f(e.object),e.name,g(e.newValue),g(e.oldValue)),s({newValue:e.newValue,oldValue:e.oldValue}),c();break;case"splice":t("spliced '%s': index %d, added %d, removed %d",f(e.object),e.index,e.addedCount,e.removedCount),s({added:e.added,removed:e.removed}),c();break;case"add":t("set '%s.%s': %s",f(e.object),e.name,g(e.newValue)),s({newValue:e.newValue}),c();break;case"delete":t("removed '%s.%s' (was %s)",f(e.object),e.name,g(e.oldValue)),s({oldValue:e.oldValue}),c();break;case"create":t("set '%s': %s",f(e.object),g(e.newValue)),s({newValue:e.newValue}),c();break;default:t(e.type),s(e)}}}function a(){console[w?"groupCollapsed":"log"].apply(console,arguments),x++}function u(){x--,w&&console.groupEnd()}function l(){console.log.apply(console,arguments)}function s(){console.dir.apply(console,arguments)}function c(){console.trace("stack")}function d(){for(var e=0,t=x;e<t;e++)u()}function p(e,t){return t?(e||"")+t+(j[e]||""):""}function f(e){return m["default"].extras.getDebugName(e)}function g(e){return b(e)?"string"==typeof e&&e.length>100?e.substr(0,97)+"...":e:p("(",h(e))}function h(e){if(null===e||void 0===e)return"";if(e&&"object"===("undefined"==typeof e?"undefined":y(e))){if(e&&e.$mobx)return e.$mobx.name;if(e.constructor)return e.constructor.name||"object"}return""+("undefined"==typeof e?"undefined":y(e))}function b(e){return null===e||void 0===e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e}Object.defineProperty(t,"__esModule",{value:!0});var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.setLogLevel=r;var v=n(4),m=o(v),I=null,w="function"==typeof console.groupCollapsed,x=0,j={'"':'"',"'":"'","(":")","[":"]","<":"]","#":""}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),s=o(l),c=n(13),d=o(c),p=n(3),f=function(e){function t(){var e,n,o,a;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState({})},o.handleToggleUpdates=function(){var e=(0,p.getGlobalState)(),t=e.updatesEnabled;(0,p.setGlobalState)({updatesEnabled:!t})},a=n,i(o,a)}return a(t,e),u(t,[{key:"componentDidMount",value:function(){p.eventEmitter.on("update",this.handleUpdate);var e=this.props.hightlightTimeout;this.renderingMonitor=new d["default"]({hightlightTimeout:e})}},{key:"componentWillUnmount",value:function(){p.eventEmitter.removeListener("update",this.handleUpdate),this.renderingMonitor.dispose()}},{key:"render",value:function(){var e=(0,p.getGlobalState)(),t=e.updatesEnabled,n=this.props.children;return s["default"].cloneElement(n,{onToggle:this.handleToggleUpdates,active:t})}}]),t}(l.Component);f.propTypes={hightlightTimeout:l.PropTypes.number},f.defaultProps={hightlightTimeout:1500},t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(5),u=o(a),l=n(3),s=function(e){switch(!0){case e<25:return"cheap";case e<100:return"acceptable";default:return"expensive"}},c=function(){function e(t){var n=this,o=t.hightlightTimeout;r(this,e),this._boxesRegistry="undefined"!=typeof WeakMap?new WeakMap:new Map,this._renderReporterDisposer=u["default"].renderReporter.on(function(e){if((0,l.getGlobalState)().updatesEnabled===!0)switch(e.event){case"render":if(!e.node)return;var t=e.node.getBoundingClientRect(),r=n.getBoxForNode(e.node);r.type="rendering",r.y=t.top,r.x=t.left,r.width=t.width,r.height=t.height,r.renderInfo={count:r.renderInfo&&++r.renderInfo.count||1,renderTime:e.renderTime,totalTime:e.totalTime,cost:s(e.renderTime)},r.lifeTime=o;var i=(0,l.getGlobalState)().renderingBoxes;return i.indexOf(r)===-1&&(i=i.concat([r])),(0,l.setGlobalState)({renderingBoxes:i}),r._timeout&&clearTimeout(r._timeout),void(r._timeout=setTimeout(function(){return n.removeBox(e.node,!0)},o));case"destroy":return n.removeBox(e.node),void n._boxesRegistry["delete"](e.node);default:return}})}return i(e,[{key:"getBoxForNode",value:function(e){if(this._boxesRegistry.has(e))return this._boxesRegistry.get(e);var t={id:Math.random().toString(32).substr(2)};return this._boxesRegistry.set(e,t),t}},{key:"dispose",value:function(){this._renderReporterDisposer()}},{key:"removeBox",value:function(e){if(this._boxesRegistry.has(e)!==!1){var t=(0,l.getGlobalState)().renderingBoxes,n=t.indexOf(this._boxesRegistry.get(e));n!==-1&&(t=t.slice(0,n).concat(t.slice(n+1)),(0,l.setGlobalState)({renderingBoxes:t}))}}}]),e}();t["default"]=c},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(15),p=o(d),f=function(e){function t(){var e,n,o,r;i(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={hovered:!1},o.handleMouseOver=function(){return o.setState({hovered:!0})},o.handleMouseOut=function(){return o.setState({hovered:!1})},r=n,a(o,r)}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.id,o=e.onToggle,r=this.state.hovered,i=function(){switch(n){case"buttonUpdates":return t?p.buttonUpdatesActive:p.buttonUpdates;case"buttonGraph":return t?p.buttonGraphActive:p.buttonGraph;case"buttonLog":return t?p.buttonLogActive:p.buttonLog}}(),a=function(){switch(n){case"buttonUpdates":return"Visualize component re-renders";case"buttonGraph":return"Select a component and show it's dependency tree";case"buttonLog":return"Log all MobX state changes and reactions to the browser console (use F12 to show / hide the console). Use Chrome / Chromium for an optimal experience"}}(),u=Object.assign({},p.button,i,t&&p.button.active,r&&p.button.hover);return c["default"].createElement("button",{onClick:o,title:a,style:u,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut})}}]),t}(s.Component);f.props={onToggle:s.PropTypes.bool.isRequired,active:s.PropTypes.bool.isRequired,name:s.PropTypes.oneOf(["buttonUpdates","buttonGraph","buttonLog"]).isRequired},t["default"]=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.panel={position:"fixed",height:"26px",backgroundColor:"#fff",color:"rgba(0, 0, 0, 0.8)",borderRadius:"0 0 2px 2px",borderStyle:"solid",borderWidth:"0 1px 1px",borderColor:"rgba(0, 0, 0, 0.1)",zIndex:"65000",fontFamily:"Helvetica, sans-serif",display:"flex",padding:"0 5px"},t.button={opacity:.45,background:"transparent none center / 16px 16px no-repeat",width:"26px",margin:"0 10px",cursor:"pointer",border:"none",hover:{opacity:.7},active:{opacity:1,":hover":{opacity:1}}},t.buttonLog={backgroundImage:"url("+n(16)+")"},t.buttonLogActive={backgroundImage:"url("+n(17)+")"},t.buttonUpdates={backgroundImage:"url("+n(18)+")"},t.buttonUpdatesActive={backgroundImage:"url("+n(19)+")"},t.buttonGraph={backgroundImage:"url("+n(20)+")"},t.buttonGraphActive={backgroundImage:"url("+n(21)+")"}},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxwYXRoIGQ9Ik0xMi41IDMuNWgtOGMtMS4xIDAtMiAuOS0yIDJ2NWMwIDEuMS45IDIgMiAyaDF2Mmw1LTJoMmMxLjEgMCAyLS45IDItMnYtNWMwLTEuMS0uOS0yLTItMnoiLz4KICAgICAgICA8cGF0aCBkPSJNNSA2LjVoNyIvPgogICAgICAgIDxwYXRoIGQ9Ik01IDkuNWg3Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij4KICAgIDxnIHN0cm9rZT0iIzE3ODBmYSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ij4KICAgICAgICA8cGF0aCBkPSJNMTIuNSAzLjVoLThjLTEuMSAwLTIgLjktMiAydjVjMCAxLjEuOSAyIDIgMmgxdjJsNS0yaDJjMS4xIDAgMi0uOSAyLTJ2LTVjMC0xLjEtLjktMi0yLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTUgNi41aDciLz4KICAgICAgICA8cGF0aCBkPSJNNSA5LjVoNyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iNiIvPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTBWNCIvPgogICAgPC9nPgogICAgPGcgc3Ryb2tlPSJub25lIiBmaWxsPSIjMDAwIj4KICAgICAgICA8Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDFoMnYxLjVoLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE0IDEuNmwtLjcuNy4zLjMtLjcuOC43LjcuOC0uNy4zLjMuNy0uN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMTc4MGZhIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiPgogICAgICAgIDxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iNiIvPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTBWNCIvPgogICAgPC9nPgogICAgPGcgc3Ryb2tlPSJub25lIiBmaWxsPSIjMTc4MGZhIj4KICAgICAgICA8Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDFoMnYxLjVoLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE0IDEuNmwtLjcuNy4zLjMtLjcuOC43LjcuOC0uNy4zLjMuNy0uN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxwYXRoIGQ9Ik0yLjUgMi41aDl2MmgtOXoiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDcuNWg3djJoLTd6Ii8+CiAgICAgICAgPHBhdGggZD0iTTcuNSAxMi41aDd2MmgtN3oiLz4KICAgICAgICA8cGF0aCBkPSJNNC41IDQuNXY5aDMiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDguNWgtMyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMTc4MGZhIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiPgogICAgICAgIDxwYXRoIGQ9Ik0yLjUgMi41aDl2MmgtOXoiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDcuNWg3djJoLTd6Ii8+CiAgICAgICAgPHBhdGggZD0iTTcuNSAxMi41aDd2MmgtN3oiLz4KICAgICAgICA8cGF0aCBkPSJNNC41IDQuNXY5aDMiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDguNWgtMyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(23),p=o(d),f=function(e){function t(){return i(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"componentWillAppear",value:function(e){this.props.willAppear(e)}},{key:"componentWillLeave",value:function(){this.props.willLeave()}},{key:"render",value:function(){return this.props.children}}]),t}(s.Component);f.propTypes={willAppear:s.PropTypes["function"],willLeave:s.PropTypes["function"]},f.defaultProps={willAppear:function(){},willLeave:function(){}};var g=function(e){function t(){return i(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"renderBox",value:function(e){switch(e.type){case"rendering":var t=p.rendering[e.renderInfo.cost]||{};return c["default"].createElement("div",{key:e.id,ref:function(t){return setTimeout(function(){t&&(t.style.opacity=0)},e.lifeTime-500)},style:Object.assign({},p.box,p.rendering,t,{left:e.x,top:e.y,width:e.width,height:e.height})},c["default"].createElement("span",{style:Object.assign({},p.text,t.text)},e.renderInfo.count,"x | ",e.renderInfo.renderTime," / ",e.renderInfo.totalTime," ms"));case"hover":return c["default"].createElement("div",{key:e.id,style:Object.assign({},p.box,p.hover,{
	left:e.x,top:e.y,width:e.width,height:e.height})});default:throw new Error}}},{key:"render",value:function(){var e=this,t=this.props.boxes;return c["default"].createElement("div",null,t.map(function(t){return e.renderBox(t)}))}}]),t}(s.Component);g.propTypes={boxes:s.PropTypes.arrayOf(s.PropTypes.shape({type:s.PropTypes.oneOf(["rendering","hover"]).isRequired,x:s.PropTypes.number.isRequired,y:s.PropTypes.number.isRequired,width:s.PropTypes.number.isRequired,height:s.PropTypes.number.isRequired,renderInfo:s.PropTypes.shape({count:s.PropTypes.number.isRequired,renderTime:s.PropTypes.number.isRequired,totalTime:s.PropTypes.number.isRequired,cost:s.PropTypes.oneOf(["cheap","acceptable","expensive"]).isRequired}),lifeTime:s.PropTypes.number.isRequired})).isRequired},t["default"]=g},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.box={display:"block",position:"fixed",zIndex:"64998",minWidth:"60px",outline:"3px solid",pointerEvents:"none",transition:"opacity 500ms ease-in"},t.text={fontFamily:"verdana, sans-serif",padding:"0 4px 2px",color:"rgba(0, 0, 0, 0.6)",fontSize:"10px",lineHeight:"12px",pointerEvents:"none","float":"right",borderBottomRightRadius:"2px",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},t.rendering={cheap:{outlineColor:"rgba(182, 218, 146, 0.75)",text:{backgroundColor:"rgba(182, 218, 146, 0.75)"}},acceptable:{outlineColor:"rgba(228, 195, 66, 0.85)",text:{backgroundColor:"rgba(228, 195, 66, 0.85)"}},expensive:{outlineColor:"rgba(228, 171, 171, 0.95)",text:{backgroundColor:"rgba(228, 171, 171, 0.95)"}}},t.hover={outlineColor:"rgba(128, 128, 255, 0.5)"}},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(25),p=r(d),f=n(3),g=n(27),h=o(g),b=function(e){function t(){var e,n,o,r;i(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState({})},o.handleClose=function(){return(0,f.setGlobalState)({dependencyTree:void 0})},r=n,a(o,r)}return u(t,e),l(t,[{key:"componentDidMount",value:function(){f.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){f.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"renderTreeItem",value:function(e,t,n){var o=e.name,r=e.dependencies,i=this;return c["default"].createElement("div",{style:h.item,key:o},c["default"].createElement("span",{style:Object.assign({},h.box,n&&h.box.root)},o),r&&c["default"].createElement("div",{style:h.tree},r.map(function(e,t){return i.renderTreeItem(e,t==r.length-1)})),!n&&c["default"].createElement("span",{style:h.itemHorisontalDash}),!n&&c["default"].createElement("span",{style:Object.assign({},h.itemVericalStick,t&&h.itemVericalStick["short"])}))}},{key:"render",value:function(){var e=(0,f.getGlobalState)(),t=e.dependencyTree;return c["default"].createElement(p["default"],{onOverlayClick:this.handleClose},t&&c["default"].createElement("div",{style:h.graph},c["default"].createElement("span",{style:h.close,onClick:this.handleClose},"×"),c["default"].createElement("div",{style:h.tree},this.renderTreeItem(t,!0,!0))))}}]),t}(s.Component);t["default"]=b},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(26),p=o(d),f=function(e){function t(){var e,n,o,r;i(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.stopPropogation=function(e){return e.stopPropagation()},r=n,a(o,r)}return u(t,e),l(t,[{key:"componentDidUpdate",value:function(e){var t=document.body.parentNode;if(e.children&&!this.props.children)this.rightOffset=0,t.style.borderRight=null,t.style.overflow=null;else if(!e.children&&this.props.children){var n=t.offsetWidth;t.style.overflow="hidden";var o=t.offsetWidth,r=Math.max(0,o-n);t.style.borderRight=r+"px solid transparent"}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onOverlayClick;return t?c["default"].createElement("div",{style:p.overlay,onClick:n},c["default"].createElement("div",{key:"content",style:p.modal,onClick:this.stopPropogation},t)):null}}]),t}(s.Component);f.propTypes={children:s.PropTypes.node,onOverlayClick:s.PropTypes.func.isRequired},t["default"]=f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.overlay={position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:66e3,overflow:"auto",WebkitOverflowScrolling:"touch",outline:0,backgroundColor:"rgba(40, 40, 50, 0.5)",transformOrigin:"50% 25%"},t.modal={position:"relative",width:"auto",margin:"5% 10%",zIndex:1060}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.graph={background:"white",padding:"40px"},t.close={color:"rgba(0, 0, 0, 0.2)",fontSize:"36px",position:"absolute",top:"5px",right:"5px",width:"40px",height:"40px",lineHeight:"34px",textAlign:"center",cursor:"pointer",":hover":{color:"rgba(0, 0, 0, 0.5)"}},t.tree={position:"relative",paddingLeft:"25px"},t.item={position:"relative"},t.box={padding:"4px 10px",background:"rgba(0, 0, 0, 0.05)",display:"inline-block",marginBottom:"8px",root:{fontSize:"15px",fontWeight:"bold",padding:"6px 13px"}},t.itemHorisontalDash={position:"absolute",left:"-12px",borderTop:"1px solid rgba(0, 0, 0, 0.2)",top:"14px",width:"12px",height:"0"},t.itemVericalStick={position:"absolute",left:"-12px",borderLeft:"1px solid rgba(0, 0, 0, 0.2)",height:"100%",width:0,top:"-8px","short":{height:"23px"}}},function(e,t){"use strict";function n(e,t){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,u=i.length;a<u;a++){var l=i[a],s=Object.getOwnPropertyDescriptor(r,l);void 0!==s&&s.enumerable&&(n[l]=r[l])}}return n}function o(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:n})}e.exports={assign:n,polyfill:o}}])});

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.List = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _class2, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(227);
	
	var _mobxReact = __webpack_require__(174);
	
	var _reactDnd = __webpack_require__(238);
	
	var _Constants = __webpack_require__(358);
	
	var _AppState = __webpack_require__(201);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var listTargetSpec = {
	    hover: function hover(props, monitor) {
	        var draggedId = monitor.getItem().id;
	        _AppState.appState.updateCardStatus(draggedId, props.id);
	    }
	};
	
	var List = exports.List = (_dec = (0, _reactDnd.DropTarget)(_Constants.Type.CARD, listTargetSpec, function (connect, monitor) {
	    return {
	        connectDropTarget: connect.dropTarget()
	    };
	}), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
	    _inherits(List, _Component);
	
	    function List() {
	        _classCallCheck(this, List);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	    }
	
	    _createClass(List, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var cards = _props.cards;
	            var title = _props.title;
	            var connectDropTarget = _props.connectDropTarget;
	
	            var cardsCom = cards.map(function (card) {
	                return _react2.default.createElement(_Card.Card, { id: card.id,
	                    title: card.title,
	                    key: card.id,
	                    color: card.color,
	                    description: card.description,
	                    tasks: card.tasks });
	            });
	            return connectDropTarget(_react2.default.createElement(
	                'div',
	                { className: 'list' },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    title
	                ),
	                cardsCom
	            ));
	        }
	    }]);
	
	    return List;
	}(_react.Component), _class2.propTypes = {
	    title: _react.PropTypes.string.isRequired,
	    cards: _react.PropTypes.arrayOf(_react.PropTypes.object),
	    connectDropTarget: _react.PropTypes.func.isRequired
	}, _temp)) || _class) || _class);
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(listTargetSpec, 'listTargetSpec', 'E:/Projects/mobx-react-boilerplate/src/List.jsx');
	
	    __REACT_HOT_LOADER__.register(List, 'List', 'E:/Projects/mobx-react-boilerplate/src/List.jsx');
	})();

	;

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Card = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _class3, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CheckList = __webpack_require__(228);
	
	var _mobx = __webpack_require__(175);
	
	var _mobxReact = __webpack_require__(174);
	
	var _Link = __webpack_require__(229);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(231);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _reactDnd = __webpack_require__(238);
	
	var _Constants = __webpack_require__(358);
	
	var _AppState = __webpack_require__(201);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _initDefineProp(target, property, descriptor, context) {
	    if (!descriptor) return;
	    Object.defineProperty(target, property, {
	        enumerable: descriptor.enumerable,
	        configurable: descriptor.configurable,
	        writable: descriptor.writable,
	        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	    });
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;
	
	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }
	
	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);
	
	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }
	
	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }
	
	    return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
	    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var cardDragSpec = {
	    beginDrag: function beginDrag(props) {
	        return {
	            id: props.id
	        };
	    }
	};
	
	var cardDropSpec = {
	    hover: function hover(props, monitor) {
	        var draggedId = monitor.getItem().id;
	        _AppState.appState.updateCardPosition(draggedId, props.id);
	    }
	};
	
	var Card = exports.Card = (_dec = (0, _reactDnd.DragSource)(_Constants.Type.CARD, cardDragSpec, function (connect, monitor) {
	    return {
	        connectDragSource: connect.dragSource()
	    };
	}), _dec2 = (0, _reactDnd.DropTarget)(_Constants.Type.CARD, cardDropSpec, function (connect, monitor) {
	    return {
	        connectDropTarget: connect.dropTarget()
	    };
	}), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = (_class2 = (_temp = _class3 = function (_Component) {
	    _inherits(Card, _Component);
	
	    // open an issue for observable PropertyDecorator
	    // need to remove the react-hot from webpack loader
	    function Card() {
	        _classCallCheck(this, Card);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this));
	
	        _initDefineProp(_this, 'showDetail', _descriptor, _this);
	
	        return _this;
	    }
	
	    _createClass(Card, [{
	        key: 'render',
	        value: function render() {
	            var cardDetails = void 0;
	            var _props = this.props;
	            var description = _props.description;
	            var id = _props.id;
	            var tasks = _props.tasks;
	            var color = _props.color;
	            var connectDragSource = _props.connectDragSource;
	            var connectDropTarget = _props.connectDropTarget;
	
	            if (this.showDetail) {
	                cardDetails = _react2.default.createElement(
	                    'div',
	                    { className: 'card__details' },
	                    description,
	                    _react2.default.createElement(_CheckList.CheckList, { cardId: id, tasks: tasks })
	                );
	            }
	            var sideColor = {
	                position: 'absolute',
	                zIndex: -1,
	                top: 0,
	                bottom: 0,
	                left: 0,
	                width: 7,
	                backgroundColor: color
	            };
	
	            return connectDropTarget(connectDragSource(_react2.default.createElement(
	                'div',
	                { className: 'card' },
	                _react2.default.createElement('div', { style: sideColor }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'card__edit' },
	                    _react2.default.createElement(
	                        _Link2.default,
	                        { to: '/edit/' + id },
	                        '✎ '
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: this.showDetail ? 'card__title card__title--is-open' : 'card__title', onClick: this.toggleDetails.bind(this) },
	                    this.props.title
	                ),
	                _react2.default.createElement(
	                    _reactAddonsCssTransitionGroup2.default,
	                    { transitionName: 'toggle', transitionEnterTimeout: 250, transitionLeaveTimeout: 250 },
	                    cardDetails
	                )
	            )));
	        }
	    }, {
	        key: 'toggleDetails',
	        value: function toggleDetails() {
	            this.showDetail = !this.showDetail;
	        }
	    }]);
	
	    return Card;
	}(_react.Component), _class3.propTypes = {
	    id: _react.PropTypes.number,
	    title: _react.PropTypes.string,
	    tasks: _mobxReact.propTypes.observableArray,
	    description: _react.PropTypes.string,
	    color: _react.PropTypes.string,
	    connectDragSource: _react.PropTypes.func.isRequired,
	    connectDropTarget: _react.PropTypes.func.isRequired
	}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'showDetail', [_mobx.observable], {
	    enumerable: true,
	    initializer: function initializer() {
	        return false;
	    }
	}), _applyDecoratedDescriptor(_class2.prototype, 'toggleDetails', [_mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, 'toggleDetails'), _class2.prototype)), _class2)) || _class) || _class) || _class);
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(cardDragSpec, 'cardDragSpec', 'E:/Projects/mobx-react-boilerplate/src/Card.jsx');
	
	    __REACT_HOT_LOADER__.register(cardDropSpec, 'cardDropSpec', 'E:/Projects/mobx-react-boilerplate/src/Card.jsx');
	
	    __REACT_HOT_LOADER__.register(Card, 'Card', 'E:/Projects/mobx-react-boilerplate/src/Card.jsx');
	})();

	;

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CheckList = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _class2, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(174);
	
	var _AppState = __webpack_require__(201);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CheckList = exports.CheckList = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
	    _inherits(CheckList, _Component);
	
	    function CheckList() {
	        _classCallCheck(this, CheckList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckList).call(this));
	    }
	
	    _createClass(CheckList, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var tasks = _props.tasks;
	            var cardId = _props.cardId;
	
	            var tasksCom = tasks.map(function (task, taskIndex) {
	                return _react2.default.createElement(
	                    'li',
	                    { key: task.id, className: 'checklist__task' },
	                    _react2.default.createElement('input', { type: 'checkbox', defaultChecked: task.done, onChange: function onChange() {
	                            return _AppState.appState.toggleTask(cardId, task.id, taskIndex);
	                        } }),
	                    task.name,
	                    _react2.default.createElement('a', { href: '#', className: 'checklist__task--remove', onClick: function onClick() {
	                            return _AppState.appState.deleteTask(cardId, task.id, taskIndex);
	                        } })
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'checklist' },
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    tasksCom
	                ),
	                _react2.default.createElement('input', { type: 'text', className: 'checklist--add-task', placeholder: 'Type then hit Enter to add a task',
	                    onKeyPress: this.checkInputKeyPress.bind(this) })
	            );
	        }
	        /**
	         * 
	         * response to Enter
	         * @param {KeyboardEvent} event
	         */
	
	    }, {
	        key: 'checkInputKeyPress',
	        value: function checkInputKeyPress(event) {
	            if (event.key === 'Enter') {
	                _AppState.appState.addTask(this.props.cardId, event.target.value);
	                event.target.value = '';
	            }
	        }
	    }]);
	
	    return CheckList;
	}(_react.Component), _class2.propTypes = {
	    cardId: _react.PropTypes.number,
	    tasks: _mobxReact.propTypes.observableArray
	}, _temp)) || _class;
	
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(CheckList, 'CheckList', 'E:/Projects/mobx-react-boilerplate/src/CheckList.jsx');
	})();

	;

/***/ },

/***/ 358:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Type = exports.Type = {
	    CARD: 'card'
	};
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(Type, 'Type', 'E:/Projects/mobx-react-boilerplate/src/Constants.jsx');
	})();

	;

/***/ }

});
//# sourceMappingURL=app.bundle.js.map