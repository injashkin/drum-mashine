var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

"use strict";
var scene = [{
    id: "Q",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    id: "W",
    src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
}, {
    id: "E",
    src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
}, {
    id: "A",
    src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
}, {
    id: "S",
    src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
}, {
    id: "D",
    src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
}, {
    id: "Z",
    src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
}, {
    id: "X",
    src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
}, {
    id: "C",
    src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
}];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.hendleOnClick = _this.hendleOnClick.bind(_this);

        _this.state = {
            display: "Non"
        };
        return _this;
    }

    _createClass(App, [{
        key: "hendleOnClick",
        value: function hendleOnClick(event) {
            var id = event.target.id;

            this.setState({
                display: id
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "drum-machine" },
                React.createElement(Display, { display: this.state.display }),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(DrumPads, {
                        hendleOnClick2: this.hendleOnClick
                    }),
                    React.createElement(DrumPadControls, null)
                )
            );
        }
    }]);

    return App;
}(React.Component);

var Display = function Display(props) {
    return React.createElement(
        "div",
        { className: "display-wrap" },
        React.createElement(
            "div",
            { id: "display" },
            props.display
        )
    );
};

var DrumPads = function DrumPads(props) {
    var item = function item(current, index) {
        return React.createElement(DrumPad, {
            id: scene[index].id,
            key: scene[index].id,
            src: scene[index].src,
            hendleOnClick1: props.hendleOnClick2
        });
    };

    var drumPad = scene.map(item);

    return React.createElement(
        "div",
        { className: "drum-pads" },
        drumPad
    );
};

var DrumPad = function DrumPad(props) {
    return React.createElement(
        "div",
        {
            className: "drum-pad",
            id: props.id,
            onClick: props.hendleOnClick1
        },
        React.createElement(
            "audio",
            { className: "clip", src: props.src },
            "audio"
        ),
        React.createElement(
            "div",
            { className: "letter-key", id: props.id },
            props.id
        )
    );
};

var DrumPadControls = function DrumPadControls() {
    return React.createElement(
        "div",
        { className: "drum-pad-controls row" },
        React.createElement(Volume, null),
        React.createElement(
            "div",
            { className: "switch-btn-wrapper" },
            React.createElement(
                "div",
                { id: "scene", className: "switch-btn" },
                "\u0421\u0446\u0435\u043D\u0430"
            ),
            React.createElement(
                "div",
                { id: "power", className: "switch-btn" },
                "Power"
            )
        )
    );
};

var Volume = function Volume() {
    return React.createElement(
        "div",
        { className: "volume-wrapper" },
        React.createElement("input", { id: "volume", type: "range", min: "0", max: "100", step: "1" })
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));