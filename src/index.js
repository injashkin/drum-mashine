`use strict`

class App extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            display: "Off"
        }
    }

    handleClick() {
        this.setState({
            display: "On"
        })
    }

    render() {
        return (
            <div id="drum-machine">

                <Display display={this.state.display}/>

                <div className="row">

                    <DrumPads handleClick={this.handleClick}/>
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
    return (
        <div className="drum-pads">

            <div className="row">
                <div className="drum-pad" onClick={props.handleClick}>
                    <audio className='clip' id="Q" src=""></audio>
                    <div className="letter-key">Q</div>
                </div>

                <div className="drum-pad">
                    <audio className='clip' id="W" src=""></audio>
                    <div className="letter-key">W</div>
                </div>

                <div className="drum-pad">
                    <audio className='clip' id="E" src=""></audio>
                    <div className="letter-key">E</div>
                </div>
            </div>


            <div className="row">
                <div className="drum-pad">
                    <audio className='clip' id="A" src=""></audio>
                    <div className="letter-key">A</div>
                </div>

                <div className="drum-pad">
                    <audio className='clip' id="S" src=""></audio>
                    <div className="letter-key">S</div>
                </div>

                <div className="drum-pad">
                    <audio className='clip' id="D" src=""></audio>
                    <div className="letter-key">D</div>
                </div>
            </div>

            <div className="row">
                <div className="drum-pad">
                    <audio className='clip' id="Z" src=""></audio>
                    <div className="letter-key">Z</div>
                </div>

                <div className="drum-pad">
                    <audio className='clip' id="X" src=""></audio>
                    <div className="letter-key">X</div>
                </div>

                <div className="drum-pad">
                    <audio className='clip' id="C" src=""></audio>
                    <div className="letter-key">C</div>
                </div>
            </div>
        </div>
    )
}

const DrumPadControls = () => {
    return (
        <div className="drum-pad-controls row">

            <Volume />

            <div className="switch-btn-wrapper">
                <div id="bank" className="switch-btn">Bank</div>
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