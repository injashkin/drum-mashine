`use strict`
const sceneA = [
    {
        keyLetter: 'Q',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyLetter: 'W',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyLetter: 'E',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keyLetter: 'A',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keyLetter: 'S',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keyLetter: 'D',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keyLetter: 'Z',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keyLetter: 'X',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keyLetter: 'C',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
]

const sceneB = [
    {
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
        src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    }, {
        keyLetter: 'C',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
]

var selectScene = sceneA

function App() {

    const [stateDisplay, setDisplay] = React.useState({ display: 'Play' })
    const [stateVolume, setVolume] = React.useState({ volume: '50' })
    const [stateScene, setScene] = React.useState({ scene: 'A' })
    const [statePower, setPower] = React.useState({ power: 'On' })
    const [stateStyle, setStyle] = React.useState({ style: '' })
    const [stateKeycode, setKeycode] = React.useState({ keycode: '' })

    const displayAudioName = (name) => {
        setDisplay({ display: name })
    }

    const handleVolume = (e) => {
        setVolume({ volume: e.target.value })
        if (statePower.power === 'On') {
            setDisplay({ display: 'Volume: ' + e.target.value + '%' })
        }
    }

    const handleScene = (e) => {
        const switchScene = e.target.id === 'sceneA' ? 'A' : 'B'
        const messageDisplay = switchScene === 'A' ? 'Scene А' : 'Scene B'
        selectScene = switchScene === 'A' ? sceneA : sceneB
        setScene({ scene: switchScene })
        if (statePower.power === 'On') {
            setDisplay({ display: messageDisplay })
        }
    }

    const handlePower = () => {
        const switchPower = statePower.power === 'On' ? 'Off' : 'On'
        const messageDisplay = switchPower === 'On' ? 'Play' : 'Power off'
        setDisplay({ display: messageDisplay })
        setPower({ power: switchPower })
    }

    return (
        <div id='drum-machine' className='drum-machin'>
            <Display
                display={stateDisplay.display}
                power={statePower.power}
            />
            <div className='row1'>
                <div className='drum-pads'>
                    {selectScene.map((value) => (
                        <DrumPad
                            key={value.keyLetter}
                            keyLetter={value.keyLetter}
                            src={value.src}
                            power={statePower.power}
                            style={stateStyle.style}
                            displayName={displayAudioName}
                            volume={stateVolume.volume}
                        />
                    ))}
                </div>
                <DrumPadControls
                    volume={stateVolume.volume}
                    handleVolume={handleVolume}
                    scene={stateScene.scene}
                    onSceneA={handleScene}
                    onSceneB={handleScene}
                    power={statePower.power}
                    onPower={handlePower}
                />
            </div>
        </div>
    )
}

const Display = (props) => {
    const colorDisplay = props.power === 'On' ? 'display-wrap display-active-color' : 'display-wrap display-inactive-color'
    return (
        <div className={colorDisplay}>
            <div id='display'>{props.display}</div>
        </div>
    )
}

const DrumPad = (props) => {

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    function handleKeyPress(e) {
        if (String.fromCharCode(e.keyCode) === props.keyLetter) {
            handlePad()
        }
    }

    function handlePad() {
        if (props.power === 'On') {
            const audio = document.getElementById(props.keyLetter)
            audio.volume = props.volume / 100
            audio.play()
            const elem = document.getElementById(nameFile)
            elem.className = 'drum-pad button-active-pad'
            setTimeout(() => (elem.className = 'drum-pad power-on-pad'), 400)
            props.displayName(nameFile)

        }
    }

    //Выделяет имя аудиофайла из урл и сохраняет в nameFile
    let nameFile = props.src.match(/[A-Za-z0-9_-]*(?=.wav|.mp3)/)[0].replace(/_/g, " ")
    const powerOnPad = props.power === 'On' ? 'drum-pad power-on-pad' : 'drum-pad'

    return (
        <div
            className={powerOnPad}
            id={nameFile}
            onClick={handlePad}
        >
            <audio className='clip' id={props.keyLetter} src={props.src}></audio>
            {props.keyLetter}
        </div>
    )
}

const DrumPadControls = (props) => (
    <div className='drum-pad-controls row1'>
        <Volume
            volume={props.volume}
            handleVolume={props.handleVolume}
        />
        <div className='switch-btn-wrapper'>
            <Scene
                scene={props.scene}
                onSceneA={props.onSceneA}
                onSceneB={props.onSceneB}
                power={props.power}
            />
            <Power
                power={props.power}
                onPower={props.onPower}
            />
        </div>
    </div>
)

const Volume = (props) => (
    <div className='volume-wrapper'>
        <input
            id='volume'
            type='range' min='0' max='100' step='1'
            value={props.volume}
            onChange={props.handleVolume}
        />
    </div>
)

const Scene = (props) => {
    const colorPower = props.power === 'On' ? 'button-active-color' : 'button-active-color-power-off'
    const switchButtonA = props.scene === 'A' ? ('switch-btn ' + colorPower) : 'switch-btn button-inactive-color'
    const switchButtonB = props.scene === 'B' ? ('switch-btn ' + colorPower) : 'switch-btn button-inactive-color'
    return (
        <div>
            <div
                id='sceneA'
                className={switchButtonA}
                onClick={props.onSceneA}
            >
                {'SceneA'}
            </div>
            <div
                id='sceneB'
                className={switchButtonB}
                onClick={props.onSceneB}
            >
                {'SceneB'}
            </div>
        </div>
    )
}

const Power = (props) => {
    const colorPower = (props.power === 'On') ? 'switch-btn button-active-color' : 'switch-btn button-inactive-color'
    return (
        <div
            id='power'
            className={colorPower}
            onClick={props.onPower}
        >
            {'Pow' + props.power}
        </div >
    )
}

ReactDOM.render(<App />, document.getElementById('root'))