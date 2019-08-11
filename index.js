var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';
var scene = [{
    id: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    id: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    id: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    id: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    id: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    id: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    id: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    id: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    id: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.hendleOnClick = _this.hendleOnClick.bind(_this);

        _this.state = {
            display: 'Non',
            playSound: ''
        };
        return _this;
    }

    _createClass(App, [{
        key: 'hendleOnClick',
        value: function hendleOnClick(event) {
            var id = event.target.id;

            this.setState({
                display: id,
                playSound: ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var drumPad = scene.map(function (current, index) {
                return React.createElement(DrumPads, {
                    id: scene[index].id,
                    onClick: _this2.hendleOnClick,
                    key: scene[index].id,
                    letter: scene[index].id,
                    audio: React.createElement(Audio, {
                        src: scene[index].src
                    })
                });
            });

            return React.createElement(
                'div',
                { id: 'drum-machine' },
                React.createElement(Display, { display: this.state.display }),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'drum-pads' },
                        drumPad
                    ),
                    React.createElement(DrumPadControls, null)
                )
            );
        }
    }]);

    return App;
}(React.Component);

var Display = function Display(props) {
    return React.createElement(
        'div',
        { className: 'display-wrap' },
        React.createElement(
            'div',
            { id: 'display' },
            props.display
        )
    );
};

var DrumPads = function DrumPads(props) {
    return React.createElement(
        'div',
        {
            className: 'drum-pad',
            id: props.id,
            onClick: props.onClick
        },
        React.createElement(
            'div',
            {
                className: 'letter-key'
            },
            props.letter,
            props.audio
        )
    );
};

var Audio = function Audio(props) {
    return React.createElement('audio', {
        className: 'clip'
        //id={player}
        //ref={props.myref}
        , src: props.src
    });
};

var DrumPadControls = function DrumPadControls() {
    return React.createElement(
        'div',
        { className: 'drum-pad-controls row' },
        React.createElement(Volume, null),
        React.createElement(
            'div',
            { className: 'switch-btn-wrapper' },
            React.createElement(
                'div',
                { id: 'scene', className: 'switch-btn' },
                '\u0421\u0446\u0435\u043D\u0430'
            ),
            React.createElement(
                'div',
                { id: 'power', className: 'switch-btn' },
                'Power'
            )
        )
    );
};

var Volume = function Volume() {
    return React.createElement(
        'div',
        { className: 'volume-wrapper' },
        React.createElement('input', { id: 'volume', type: 'range', min: '0', max: '100', step: '1' })
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));