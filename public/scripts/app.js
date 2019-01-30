'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* 通过props向组件中传递不可变数据 */
/* 通过props元素向一个类模版传递数据 <MyClass element={data} /> */
/* 从props中得到数据: this.props.data */

var NoteApp = function (_React$Component) {
    _inherits(NoteApp, _React$Component);

    function NoteApp() {
        _classCallCheck(this, NoteApp);

        return _possibleConstructorReturn(this, (NoteApp.__proto__ || Object.getPrototypeOf(NoteApp)).apply(this, arguments));
    }

    _createClass(NoteApp, [{
        key: 'render',
        value: function render() {
            /* 定义const变量作为组件中的数据传入不同的组件 */
            var demoTitle = "React Component Props Demo";
            var demoDescription = {
                'firstName': '泓霖',
                'lastName': '陈'
            };

            var demoNotes = ['Note1', 'Note2', 'Note3'];

            return (
                /* 将传入的数据封装在一个变量(wrapper) */
                /* 对 Title 函数传入封装在title里的demoTitle数据, props参数会自动捆绑到title变量 */
                /* 对 Header 组件传入封装在description变量里的demoDescription数据 */
                /* Action 组件中不穿入任何数据 */
                React.createElement(
                    'div',
                    null,
                    React.createElement(Title, { title: demoTitle }),
                    React.createElement(Head, { description: demoDescription }),
                    React.createElement(Notes, { notes: demoNotes }),
                    React.createElement(Action, null)
                )
            );
        }
    }]);

    return NoteApp;
}(React.Component);

function Title(props) {
    /* 通过props读取其绑定数据变量title的内容 */
    /* 注意: props作为函数参数时不加this关键字 */
    return React.createElement(
        'h2',
        null,
        props.title
    );
}

var Head = function (_React$Component2) {
    _inherits(Head, _React$Component2);

    function Head() {
        _classCallCheck(this, Head);

        return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
    }

    _createClass(Head, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h4',
                null,
                this.props.description.firstName,
                ' - ',
                this.props.description.lastName
            );
        }
    }]);

    return Head;
}(React.Component);

var Notes = function (_React$Component3) {
    _inherits(Notes, _React$Component3);

    function Notes() {
        _classCallCheck(this, Notes);

        return _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).apply(this, arguments));
    }

    _createClass(Notes, [{
        key: 'render',
        value: function render() {
            return (
                /* 通过map函数将数组中的元素渲染出来, 然后包装在数据变量中传入下一个组件 */
                React.createElement(
                    'div',
                    null,
                    'Notes:',
                    React.createElement(
                        'ol',
                        null,
                        this.props.notes.map(function (note) {
                            return React.createElement(
                                'li',
                                null,
                                React.createElement(Note, { note: note })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Notes;
}(React.Component);

var Note = function (_React$Component4) {
    _inherits(Note, _React$Component4);

    function Note() {
        _classCallCheck(this, Note);

        return _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).apply(this, arguments));
    }

    _createClass(Note, [{
        key: 'render',
        value: function render() {
            /* 对传入的已经包装好的note数据解析 */
            return React.createElement(
                'div',
                null,
                this.props.note,
                React.createElement(
                    'button',
                    { style: { margin: 5 } },
                    'remove'
                )
            );
        }
    }]);

    return Note;
}(React.Component);

var Action = function (_React$Component5) {
    _inherits(Action, _React$Component5);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: submit },
                    React.createElement('input', { type: 'text', name: 'dataForm' }),
                    React.createElement(
                        'button',
                        null,
                        'Add'
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    'button',
                    { onClick: removeAll },
                    'Remove All'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

/* 定义函数变量 */


var submit = function submit() {};
var removeAll = function removeAll() {};

var appRoot = document.getElementById("app");
ReactDOM.render(React.createElement(NoteApp, null), appRoot);
