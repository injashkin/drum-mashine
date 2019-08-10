`use strict`
const scene = [
    {
        id: "Q",
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        id: "W",
        src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
    },
    {
        id: "E",
        src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
    },
    {
        id: "A",
        src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
    },
    {
        id: "S",
        src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
    },
    {
        id: "D",
        src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
    },
    {
        id: "Z",
        src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
    },
    {
        id: "X",
        src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
    },
    {
        id: "C",
        src: 'projects.jinv.ru/projects/drum-machine/sound/IN-Buch-it.wav'
    }
];

class App extends React.Component {
    constructor(props) {
        super(props)

        this.hendleOnClick = this.hendleOnClick.bind(this);

        this.state = {
            display: "Non"
        }
    }

    hendleOnClick(event) {
        const {id} = event.target
        this.setState({            
            display: id
        })
    }

    render() {
        return (
            <div id="drum-machine">

                <Display display={this.state.display} />

                <div className="row">

                    <DrumPads
                        hendleOnClick2={this.hendleOnClick}
                    />
                    <DrumPadControls />

                </div>

            </div>
        )
    }
}

const Display = (props) => {
    return (
        <div className="display-wrap">
            <div id="display">{props.display}</div>
        </div>
    )
}

const DrumPads = (props) => {
    const item = (current, index) => {
        return (
            <DrumPad
                id={scene[index].id}
                key={scene[index].id}
                src={scene[index].src}         
                hendleOnClick1={props.hendleOnClick2}
            />
        )

    }

    const drumPad = scene.map(item)

    return (
        <div className="drum-pads">
            {drumPad}
        </div>
    )
}

const DrumPad = (props) => {
    return (
        <div
            className="drum-pad"            
            id={props.id}
            onClick={props.hendleOnClick1}
        >
            <audio className='clip' src={props.src}>audio</audio>
            <div className="letter-key" id={props.id}>{props.id}</div>
        </div>
    )
}

const DrumPadControls = () => {
    return (
        <div className="drum-pad-controls row">

            <Volume />

            <div className="switch-btn-wrapper">
                <div id="scene" className="switch-btn">Сцена</div>
                <div id="power" className="switch-btn">Power</div>
            </div>
        </div>
    )
}


const Volume = () => {
    return (
        <div className="volume-wrapper">
            <input id="volume" type="range" min="0" max="100" step="1"></input>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));