var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

"use strict";

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.hendleOnMouseDown = _this.hendleOnMouseDown.bind(_this);
        _this.hendleOnMouseUp = _this.hendleOnMouseUp.bind(_this);

        _this.state = {
            display: "Off"
        };
        return _this;
    }

    _createClass(App, [{
        key: "hendleOnMouseDown",
        value: function hendleOnMouseDown() {
            this.setState({
                display: "On"
            });
        }
    }, {
        key: "hendleOnMouseUp",
        value: function hendleOnMouseUp() {
            this.setState({
                display: "Off"
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
                        hendleOnMouseDown: this.hendleOnMouseDown,
                        hendleOnMouseUp: this.hendleOnMouseUp
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
    return React.createElement(
        "div",
        { className: "drum-pads" },
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(DrumPad, {
                id: "Q",
                hendleOnMouseDown: props.hendleOnMouseDown,
                hendleOnMouseUp: props.hendleOnMouseUp
            }),
            React.createElement(DrumPad, { id: "W" }),
            React.createElement(DrumPad, { id: "E" })
        ),
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(DrumPad, { id: "A" }),
            React.createElement(DrumPad, { id: "S" }),
            React.createElement(DrumPad, { id: "D" })
        ),
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(DrumPad, { id: "Z" }),
            React.createElement(DrumPad, { id: "X" }),
            React.createElement(DrumPad, { id: "C" })
        )
    );
};

var DrumPad = function DrumPad(props) {
    return React.createElement(
        "div",
        {
            className: "drum-pad",
            onMouseDown: props.hendleOnMouseDown,
            onMouseUp: props.hendleOnMouseUp
        },
        React.createElement("audio", { className: "clip", id: props.id, src: "" }),
        React.createElement(
            "div",
            { className: "letter-key" },
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
                { id: "bank", className: "switch-btn" },
                "Bank"
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