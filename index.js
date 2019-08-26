var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

'use strict';
var sceneA = [{
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

var sceneB = [{
    id: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    id: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    id: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    id: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    id: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    id: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    id: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    id: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

var selectScene = sceneA;

function App() {
    var _React$useState = React.useState({ display: 'Play' }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        stateDisplay = _React$useState2[0],
        setDisplay = _React$useState2[1];

    var _React$useState3 = React.useState({ volume: '50' }),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        stateVolume = _React$useState4[0],
        setVolume = _React$useState4[1];

    var _React$useState5 = React.useState({ scene: 'A' }),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        stateScene = _React$useState6[0],
        setScene = _React$useState6[1];

    var _React$useState7 = React.useState({ power: 'On' }),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        statePower = _React$useState8[0],
        setPower = _React$useState8[1];

    var handlePad = function handlePad(e) {
        if (statePower.power === 'On') {
            var audio = new Audio();
            audio.volume = stateVolume.volume / 100;
            audio.src = e.target.dataset.src;
            audio.play();
            var letterKey = e.target.id;
            setDisplay({ display: letterKey });
        }
    };

    var handleVolume = function handleVolume(e) {
        setVolume({ volume: e.target.value });
        if (statePower.power === 'On') {
            setDisplay({ display: 'Volume: ' + e.target.value + '%' });
        }
    };

    var handleScene = function handleScene() {
        var switchScene = stateScene.scene === 'A' ? 'B' : 'A';
        var messageDisplay = switchScene === 'A' ? 'Scene А' : 'Scene B';
        selectScene = switchScene === 'A' ? sceneA : sceneB;
        setScene({ scene: switchScene });
        if (statePower.power === 'On') {
            setDisplay({ display: messageDisplay });
        }
    };

    var handlePower = function handlePower() {
        var switchPower = statePower.power === 'On' ? 'Off' : 'On';
        var messageDisplay = switchPower === 'On' ? 'Play' : 'Power off';
        setDisplay({ display: messageDisplay });
        setPower({ power: switchPower });
    };

    return React.createElement(
        'div',
        { id: 'drum-machine' },
        React.createElement(Display, { display: stateDisplay.display }),
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'drum-pads' },
                selectScene.map(function (index) {
                    return React.createElement(DrumPads, {
                        onClick: handlePad,
                        key: index.id,
                        letter: index.id,
                        src: index.src
                    });
                })
            ),
            React.createElement(DrumPadControls, {
                volume: stateVolume.volume,
                handleVolume: handleVolume,
                scene: stateScene.scene,
                onScene: handleScene,
                power: statePower.power,
                onPower: handlePower
            })
        )
    );
}

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
            id: props.letter,
            onClick: props.onClick,
            'data-src': props.src
        },
        React.createElement(
            'div',
            {
                className: 'letter-key'
            },
            props.letter
        )
    );
};

var DrumPadControls = function DrumPadControls(props) {
    return React.createElement(
        'div',
        { className: 'drum-pad-controls row' },
        React.createElement(Volume, {
            volume: props.volume,
            handleVolume: props.handleVolume
        }),
        React.createElement(
            'div',
            { className: 'switch-btn-wrapper' },
            React.createElement(Scene, {
                scene: props.scene,
                onScene: props.onScene
            }),
            React.createElement(Power, {
                power: props.power,
                onPower: props.onPower
            })
        )
    );
};

var Volume = function Volume(props) {
    return React.createElement(
        'div',
        { className: 'volume-wrapper' },
        React.createElement('input', {
            id: 'volume',
            type: 'range', min: '0', max: '100', step: '1',
            value: props.volume,
            onChange: props.handleVolume
        })
    );
};

var Scene = function Scene(props) {
    return React.createElement(
        'div',
        {
            id: 'scene',
            className: 'switch-btn',
            onClick: props.onScene
        },
        'Scene' + props.scene
    );
};

var Power = function Power(props) {
    return React.createElement(
        'div',
        { id: 'power',
            className: 'switch-btn',
            onClick: props.onPower
        },
        'Power' + props.power
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));