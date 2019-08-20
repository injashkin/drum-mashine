var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

function App() {
    //constructor(props) {
    //    super(props)

    //    this.hendleOnClick = this.hendleOnClick.bind(this);

    //    this.state = {
    //        display: 'Non',
    //        playSound: ''
    //    }
    //}

    var initialState = {
        display: 'Non'
    };

    var _React$useState = React.useState(initialState),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        state = _React$useState2[0],
        setState = _React$useState2[1];

    var hendleOnClick = function hendleOnClick(e) {
        //if (audio) {
        //    audio.pause();
        //}
        var audio = new Audio(e.target.dataset.src);
        audio.play();
        setState({
            display: 'Yes'
        });
    };

    return React.createElement(
        'div',
        { id: 'drum-machine' },
        React.createElement(Display, { display: state.display }),
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'drum-pads' },
                scene.map(function (index) {
                    return React.createElement(DrumPads, {
                        onClick: hendleOnClick,
                        key: index.id,
                        letter: index.id,
                        src: index.src
                    });
                })
            ),
            React.createElement(DrumPadControls, null)
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

//const Audio = (props) => (
//   <audio
//       className='clip'
//id={player}
//ref={props.myref}
//       src={props.src}
//    />
//)

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