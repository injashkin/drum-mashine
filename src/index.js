`use strict`

class App extends React.Component {
    constructor(props) {
        super(props)

        this.hendleOnMouseDown = this.hendleOnMouseDown.bind(this);
        this.hendleOnMouseUp = this.hendleOnMouseUp.bind(this);

        this.state = {
            display: "Off"
        }
    }

    hendleOnMouseDown() {
        this.setState({
            display: "On"
        })
    }

    hendleOnMouseUp() {
        this.setState({
            display: "Off"
        })
    }

    render() {
        return (
            <div id="drum-machine">

                <Display display={this.state.display} />

                <div className="row">

                    <DrumPads
                        hendleOnMouseDown={this.hendleOnMouseDown}
                        hendleOnMouseUp={this.hendleOnMouseUp}
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
    return (
        <div className="drum-pads">

            <div className="row">
                <DrumPad
                    id="Q"
                    hendleOnMouseDown={props.hendleOnMouseDown}
                    hendleOnMouseUp={props.hendleOnMouseUp}
                />
                <DrumPad id="W" />
                <DrumPad id="E" />

            </div>

            <div className="row">
                <DrumPad id="A" />
                <DrumPad id="S" />
                <DrumPad id="D" />
            </div>

            <div className="row">
                <DrumPad id="Z" />
                <DrumPad id="X" />
                <DrumPad id="C" />
            </div>
        </div>
    )
}

const DrumPad = (props) => {
    return (
        <div
            className="drum-pad"
            onMouseDown={props.hendleOnMouseDown}
            onMouseUp={props.hendleOnMouseUp}
        >
            <audio className='clip' id={props.id} src=""></audio>
            <div className="letter-key">{props.id}</div>
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