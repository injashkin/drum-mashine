`use strict`
const sceneA = [
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
]

const sceneB = [
    {
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
    }
]

var selectScene = sceneA

function App() {

    const [stateDisplay, setDisplay] = React.useState({ display: 'Play' })
    const [stateVolume, setVolume] = React.useState({ volume: '50' })
    const [stateScene, setScene] = React.useState({ scene: 'A' })
    const [statePower, setPower] = React.useState({ power: 'On' })

    const handlePad = (e) => {
        if (statePower.power === 'On') {
            var audio = new Audio()
            audio.volume = stateVolume.volume / 100
            audio.src = e.target.dataset.src
            audio.play()
            const letterKey = e.target.id
            setDisplay({ display: letterKey })
        }
    }

    const handleVolume = (e) => {
        setVolume({ volume: e.target.value })
        if (statePower.power === 'On') {
            setDisplay({ display: 'Volume: ' + e.target.value + '%' })
        }
    }

    const handleScene = () => {
        const switchScene = stateScene.scene === 'A' ? 'B' : 'A'
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
            <div className='row'>
                <div className='drum-pads'>
                    {selectScene.map((index) => (
                        <DrumPads
                            onClick={handlePad}
                            key={index.id}
                            letter={index.id}
                            src={index.src}
                            power={statePower.power}
                        />
                    ))}
                </div>
                <DrumPadControls
                    volume={stateVolume.volume}
                    handleVolume={handleVolume}
                    scene={stateScene.scene}
                    onScene={handleScene}
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


const DrumPads = (props) => {
    console.log(props.power)
    const powerOnPad = props.power === 'On' ? 'drum-pad power-on-pad' : 'drum-pad'
    return (
        <div
            className={powerOnPad}
            id={props.letter}
            onClick={props.onClick}
            data-src={props.src}
        >
            {props.letter}
        </div>
    )
}

const DrumPadControls = (props) => (
    <div className='drum-pad-controls row'>
        <Volume
            volume={props.volume}
            handleVolume={props.handleVolume}
        />
        <div className='switch-btn-wrapper'>
            <Scene
                scene={props.scene}
                onScene={props.onScene}
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

const Scene = (props) => (
    <div
        id='scene'
        className='switch-btn'
        onClick={props.onScene}
    >
        {'Scene' + props.scene}
    </div>
)



const Power = (props) => {
    const colorPower = (props.power === 'On') ? 'switch-btn power-active-color' : 'switch-btn power-inactive-color'
    return (
        <div
            id='power'
            className={colorPower}
            onClick={props.onPower}
        >
            {'Power' + props.power}
        </div >
    )
}

ReactDOM.render(<App />, document.getElementById('root'))