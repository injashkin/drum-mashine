var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

'use strict';
var sceneA = [{
    keyLetter: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyLetter: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyLetter: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyLetter: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyLetter: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyLetter: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyLetter: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyLetter: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyLetter: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

var sceneB = [{
    keyLetter: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyLetter: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyLetter: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyLetter: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyLetter: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyLetter: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyLetter: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyLetter: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/skeyLettere_stick_1.mp3'
}, {
    keyLetter: 'C',
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
            //var audio = new Audio()
            //audio.volume = stateVolume.volume / 100
            //audio.src = e.target.dataset.src            
            //audio.play()            
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

    var handleScene = function handleScene(e) {
        var switchScene = e.target.id === 'sceneA' ? 'A' : 'B';
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
        { id: 'drum-machine', className: 'drum-machin' },
        React.createElement(Display, {
            display: stateDisplay.display,
            power: statePower.power
        }),
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'drum-pads' },
                selectScene.map(function (index) {
                    return React.createElement(DrumPad, {
                        onClick: handlePad,
                        key: index.keyLetter,
                        letter: index.keyLetter,
                        src: index.src,
                        power: statePower.power
                    });
                })
            ),
            React.createElement(DrumPadControls, {
                volume: stateVolume.volume,
                handleVolume: handleVolume,
                scene: stateScene.scene,
                onSceneA: handleScene,
                onSceneB: handleScene,
                power: statePower.power,
                onPower: handlePower
            })
        )
    );
}

var Display = function Display(props) {
    var colorDisplay = props.power === 'On' ? 'display-wrap display-active-color' : 'display-wrap display-inactive-color';
    return React.createElement(
        'div',
        { className: colorDisplay },
        React.createElement(
            'div',
            { id: 'display' },
            props.display
        )
    );
};

var DrumPad = function DrumPad(props) {
    var powerOnPad = props.power === 'On' ? 'drum-pad power-on-pad' : 'drum-pad';
    function playSound(e) {
        var sound = document.getElementById(props.letter);
        //sound.currentTime = 0
        sound.play();
        console.log(sound);
    }
    return React.createElement(
        'div',
        {
            className: powerOnPad
            //id={props.letter}
            , onClick: playSound //{props.onClick}
        },
        React.createElement('audio', { id: props.letter, className: 'clip', src: props.src }),
        props.letter
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
                onSceneA: props.onSceneA,
                onSceneB: props.onSceneB,
                power: props.power
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
    var colorPower = props.power === 'On' ? 'button-active-color' : 'button-active-color-power-off';
    var switchButtonA = props.scene === 'A' ? 'switch-btn ' + colorPower : 'switch-btn button-inactive-color';
    var switchButtonB = props.scene === 'B' ? 'switch-btn ' + colorPower : 'switch-btn button-inactive-color';
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            {
                id: 'sceneA',
                className: switchButtonA,
                onClick: props.onSceneA
            },
            'SceneA'
        ),
        React.createElement(
            'div',
            {
                id: 'sceneB',
                className: switchButtonB,
                onClick: props.onSceneB
            },
            'SceneB'
        )
    );
};

var Power = function Power(props) {
    var colorPower = props.power === 'On' ? 'switch-btn button-active-color' : 'switch-btn button-inactive-color';
    return React.createElement(
        'div',
        {
            id: 'power',
            className: colorPower,
            onClick: props.onPower
        },
        'Pow' + props.power
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));