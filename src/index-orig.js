`use strict`
const scene = [
    {
        id: 'Q',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        id: 'W',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        id: 'E',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        id: 'A',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        id: 'S',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        id: 'D',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        id: 'Z',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        id: 'X',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        id: 'C',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

class App extends React.Component {
    constructor(props) {
        super(props)

        this.hendleOnClick = this.hendleOnClick.bind(this);

        this.state = {
            display: 'Non',
            playSound: ''
        }
    }

    hendleOnClick(e) {
        const { id } = e.target
        this.setState({
            display: id,
            playSound: ''
        })
    }

    render() {
        const drumPad = scene.map((current, index) => (
            <DrumPads
                id={scene[index].id}
                onClick={this.hendleOnClick}
                key={scene[index].id}
                letter={scene[index].id}
                audio={
                    <Audio
                    ref={}
                     />
                }
            />
        ));

        return (
            <div id='drum-machine'>
                <Display display={this.state.display} />
                <div className='row'>
                    <div className='drum-pads'>
                        {drumPad}
                    </div>
                    <DrumPadControls />
                </div>
            </div>
        )
    }
}

const Display = (props) => (
    <div className='display-wrap'>
        <div id='display'>{props.display}</div>
    </div>
)


const DrumPads = (props) => (
    <div
        className='drum-pad'
        id={props.id}
        onClick={props.onClick}
    >
        <div
            className='letter-key'
        >
            {props.letter}
            {props.audio}
        </div>
    </div>
)

//const Audio = (props) => (
//   <audio
//       className='clip'
//id={player}
//ref={props.myref}
//       src={props.src}
//    />
//)

const DrumPadControls = () => (
    <div className='drum-pad-controls row'>
        <Volume />
        <div className='switch-btn-wrapper'>
            <div id='scene' className='switch-btn'>Сцена</div>
            <div id='power' className='switch-btn'>Power</div>
        </div>
    </div>
)



const Volume = () => (
    <div className='volume-wrapper'>
        <input id='volume' type='range' min='0' max='100' step='1'></input>
    </div>
)


ReactDOM.render(<App />, document.getElementById('root'));