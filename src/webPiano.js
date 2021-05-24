import { useEffect, useState } from "react";
import SoundFontPlayer from "soundfont-player";

const WebPiano = () => {

    const KeyMap = {
        'q' : 'C3',
        'w' : 'D3',
        'e' : 'E3',
        'r' : 'F3',
        't' : 'G3',
        'y' : 'A4',
        'u' : 'B4',
        'i' : 'C4',
        'o' : 'D4',
        'p' : 'E4',
        'z' : 'F4',
        'x' : 'G4',
        'c' : 'A5',
        'v' : 'B5',
        'b' : 'C5',
        'n' : 'D5',
        'm' : 'E5',
        ',' : 'F5',
        '.' : 'G5',
        '/' : 'A6',
        'a' : 'B6',
        '2' : 'C#3',
        '3' : 'D#3',
        '5' : 'F#3',
        '6' : 'G#3',
        '7' : 'A#4',
        '9' : 'C#4',
        '0' : 'D#4',
        's' : 'F#4',
        'd' : 'G#4',
        'f' : 'A#4',
        'h' : 'C#5',
        'j' : 'D#5',
        'l' : 'F#5',
        ';' : 'G#5',
        "'" : 'A#6'
    }
    
    const keyLabels = [ "C3",'C#3', "D3",'D#3', "E3", "F3",'F#3', "G3",'G#3', "A4","A#4", "B4", "C4",'C#4', "D4", "E4", "F4", "G4", "A5", "B5", "C5", "D5", "E5", "F5", "G5", "A6", "B6"]

    const [pianoKeys, setPianoKeys] = useState(null);
    const ac = new AudioContext();

    useEffect(() => {
        SoundFontPlayer.instrument( ac, 'acoustic_grand_piano').then(function (piano) {
            setPianoKeys(piano);
          })
    },[]);

    const [Pressed0,setPressed0] = useState('');
    const [Pressed1,setPressed1] = useState('');
    const [Pressed2,setPressed2] = useState('');
    const [Pressed3,setPressed3] = useState('');
    const [Pressed4,setPressed4] = useState('');
    const [Pressed5,setPressed5] = useState('');
    const [Pressed6,setPressed6] = useState('');
    const [Pressed7,setPressed7] = useState('');
    const [Pressed8,setPressed8] = useState('');
    const [Pressed9,setPressed9] = useState('');
    const [Pressed10,setPressed10] = useState('');
    const [Pressed11,setPressed11] = useState('');
    const [Pressed12,setPressed12] = useState('');
    const [Pressed13,setPressed13] = useState('');
    const [Pressed14,setPressed14] = useState('');
    const [Pressed15,setPressed15] = useState('');
    const [Pressed16,setPressed16] = useState('');
    const [Pressed17,setPressed17] = useState('');
    const [Pressed18,setPressed18] = useState('');
    const [Pressed19,setPressed19] = useState('');
    const [Pressed20,setPressed20] = useState('');
    const [Pressed21,setPressed21] = useState('');
    const [Pressed22,setPressed22] = useState('');
    const [Pressed23,setPressed23] = useState('');
    const [Pressed24,setPressed24] = useState('');
    const [Pressed25,setPressed25] = useState('');
    const [Pressed26,setPressed26] = useState('');
    const [Pressed27,setPressed27] = useState('');
    const [Pressed28,setPressed28] = useState('');
    const [Pressed29,setPressed29] = useState('');
    const [Pressed30,setPressed30] = useState('');
    const [Pressed31,setPressed31] = useState('');
    const [Pressed32,setPressed32] = useState('');
    const [Pressed33,setPressed33] = useState('');
    const [Pressed34,setPressed34] = useState('');
    const [Pressed35,setPressed35] = useState('');

    

    const handleKeyUp = (event) => {
        if(event.key === 'q')
        {
            setPressed0('');
        }
        if(event.key === 'w')
        {
            setPressed1('');
        }
        if(event.key === 'e')
        {
            setPressed2('');
        }
        if(event.key === 'r')
        {
            setPressed3('');
        }
        if(event.key === 't')
        {
            setPressed4('');
        }
        if(event.key === 'y')
        {
            setPressed5('');
        }
        if(event.key === 'u')
        {
            setPressed6('');
        }
        if(event.key === 'i')
        {
            setPressed7('');
        }
        if(event.key === 'o')
        {
            setPressed8('');
        }
        if(event.key === 'p')
        {
            setPressed9('');
        }
        if(event.key === 'z')
        {
            setPressed10('');
        }
        if(event.key === 'x')
        {
            setPressed11('');
        }
        if(event.key === 'c')
        {
            setPressed12('');
        }
        if(event.key === 'v')
        {
            setPressed13('');
        }
        if(event.key === 'b')
        {
            setPressed14('');
        }
        if(event.key === 'n')
        {
            setPressed15('');
        }
        if(event.key === 'm')
        {
            setPressed16('');
        }
        if(event.key === ',')
        {
            setPressed17('');
        }
        if(event.key === '.')
        {
            setPressed18('');
        }
        if(event.key === '/')
        {
            setPressed19('');
        }
        if(event.key === 'a')
        {
            setPressed20('');
        }
        if(event.key === '2')
        {
            setPressed21('');
        }
        if(event.key === '3')
        {
            setPressed22('');
        }
        if(event.key === '5')
        {
            setPressed23('');
        }
        if(event.key === '6')
        {
            setPressed24('');
        }
        if(event.key === '7')
        {
            setPressed25('');
        }
        if(event.key === '9')
        {
            setPressed26('');
        }
        if(event.key === '0')
        {
            setPressed27('');
        }
        if(event.key === 's')
        {
            setPressed28('');
        }
        if(event.key === 'd')
        {
            setPressed29('');
        }
        if(event.key === 'f')
        {
            setPressed30('');
        }
        if(event.key === 'h')
        {
            setPressed31('');
        }
        if(event.key === 'j')
        {
            setPressed32('');
        }
        if(event.key === 'l')
        {
            setPressed33('');
        }
        if(event.key === ';')
        {
            setPressed34('');
        }
        if(event.key === "'")
        {
            setPressed35('');
        }
    }

        

    const handleclick = (key) => {

        pianoKeys.play(String(key), ac.currentTime, {duration : 0.5});
    }

    
    const handleKeyDown = (event) => {
        
        if(!event.repeat && (event.key in KeyMap))
        {
            if(Pressed0 === '' && event.key === 'q')
            {
                setPressed0('--active');
            }  
            if(Pressed1 === '' && event.key === 'w')
            {
                setPressed1('--active');
            } 
            if(Pressed2 === '' && event.key === 'e')
            {
                setPressed2('--active');
            } 
            if(Pressed3 === '' && event.key === 'r')
            {
                setPressed3('--active');
            }
            if(Pressed4 === '' && event.key === 't')
            {
                setPressed4('--active');
            }
            if(Pressed5 === '' && event.key === 'y')
            {
                setPressed5('--active');
            }
            if(Pressed6 === '' && event.key === 'u')
            {
                setPressed6('--active');
            }
            if(Pressed7 === '' && event.key === 'i')
            {
                setPressed7('--active');
            }
            if(Pressed8 === '' && event.key === 'o')
            {
                setPressed8('--active');
            }
            if(Pressed9 === '' && event.key === 'p')
            {
                setPressed9('--active');
            }
            if(Pressed10 === '' && event.key === 'z')
            {
                setPressed10('--active');
            }
            if(Pressed11 === '' && event.key === 'x')
            {
                setPressed11('--active');
            }
            if(Pressed12 === '' && event.key === 'c')
            {
                setPressed12('--active');
            }
            if(Pressed13 === '' && event.key === 'v')
            {
                setPressed13('--active');
            }
            if(Pressed14 === '' && event.key === 'b')
            {
                setPressed14('--active');
            }
            if(Pressed15 === '' && event.key === 'n')
            {
                setPressed15('--active');
            }
            if(Pressed16 === '' && event.key === 'm')
            {
                setPressed16('--active');
            }
            if(Pressed17 === '' && event.key === ',')
            {
                setPressed17('--active');
            }
            if(Pressed18 === '' && event.key === '.')
            {
                setPressed18('--active');
            }
            if(Pressed19 === '' && event.key === '/')
            {
                setPressed19('--active');
            }
            if(Pressed20 === '' && event.key === 'a')
            {
                setPressed20('--active');
            }
            if(Pressed21 === '' && event.key === '2')
            {
                setPressed21('--active');
            }
            if(Pressed22 === '' && event.key === '3')
            {
                setPressed22('--active');
            }
            if(Pressed23 === '' && event.key === '5')
            {
                setPressed23('--active');
            }
            if(Pressed24 === '' && event.key === '6')
            {
                setPressed24('--active');
            }
            if(Pressed25 === '' && event.key === '7')
            {
                setPressed25('--active');
            }
            if(Pressed26 === '' && event.key === '9')
            {
                setPressed26('--active');
            }            
            if(Pressed27 === '' && event.key === '0')
            {
                setPressed27('--active');
            }
            if(Pressed28 === '' && event.key === 's')
            {
                setPressed28('--active');
            }
            if(Pressed29 === '' && event.key === 'd')
            {
                setPressed29('--active');
            }
            if(Pressed30 === '' && event.key === 'f')
            {
                setPressed30('--active');
            }
            if(Pressed31 === '' && event.key === 'h')
            {
                setPressed31('--active');
            }
            if(Pressed32 === '' && event.key === 'j')
            {
                setPressed32('--active');
            }
            if(Pressed33 === '' && event.key === 'l')
            {
                setPressed33('--active');
            }
            if(Pressed34 === '' && event.key === ';')
            {
                setPressed34('--active');
            }
            if(Pressed35 === '' && event.key === "'")
            {
                setPressed35('--active');
            }
            

            
        }    
    }

    useEffect(()=> {
        if(pianoKeys !== null)
        {
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("keyup", handleKeyUp);
        }
    });

    useEffect(() => {
        if(Pressed0 === '--active')
        {
            //console.log('q');
            pianoKeys.play(KeyMap['q'],ac.currentTime , {duration : 0.5});
        }        
    },[Pressed0]);

    useEffect(() => {
        if(Pressed1 === '--active')
        {
            //console.log('w');
            pianoKeys.play(KeyMap['w'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed1]);

    useEffect(() => {
        if(Pressed2 === '--active')
        {
            //console.log('e');
            pianoKeys.play(KeyMap['e'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed2]);

    useEffect(() => {
        if(Pressed3 === '--active')
        {
            //console.log('r');
            pianoKeys.play(KeyMap['r'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed3]);

    useEffect(() => {
        if(Pressed4 === '--active')
        {
            //console.log('t');
            pianoKeys.play(KeyMap['t'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed4]);

    useEffect(() => {
        if(Pressed5 === '--active')
        {
            //console.log('y');
            pianoKeys.play(KeyMap['y'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed5]);

    useEffect(() => {
        if(Pressed6 === '--active')
        {
            //console.log('u');
            pianoKeys.play(KeyMap['u'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed6]);

    useEffect(() => {
        if(Pressed7 === '--active')
        {
            //console.log('i');
            pianoKeys.play(KeyMap['i'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed7]);

    useEffect(() => {
        if(Pressed8 === '--active')
        {
            //console.log('o');
            pianoKeys.play(KeyMap['o'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed8]);

    useEffect(() => {
        if(Pressed9 === '--active')
        {
            //console.log('p');
            pianoKeys.play(KeyMap['p'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed9]);

    useEffect(() => {
        if(Pressed10 === '--active')
        {
            pianoKeys.play(KeyMap['z'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed10]);

    useEffect(() => {
        if(Pressed11 === '--active')
        {
            pianoKeys.play(KeyMap['x'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed11]);

    useEffect(() => {
        if(Pressed12 === '--active')
        {
            pianoKeys.play(KeyMap['c'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed12]);

    useEffect(() => {
        if(Pressed13 === '--active')
        {
            pianoKeys.play(KeyMap['v'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed13]);

    useEffect(() => {
        if(Pressed14 === '--active')
        {
            pianoKeys.play(KeyMap['b'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed14]);

    useEffect(() => {
        if(Pressed15 === '--active')
        {
            pianoKeys.play(KeyMap['n'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed15]);

    useEffect(() => {
        if(Pressed16 === '--active')
        {
            pianoKeys.play(KeyMap['m'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed16]);

    useEffect(() => {
        if(Pressed17 === '--active')
        {
            pianoKeys.play(KeyMap[','],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed17]);

    useEffect(() => {
        if(Pressed18 === '--active')
        {
            pianoKeys.play(KeyMap['.'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed18]);

    useEffect(() => {
        if(Pressed19 === '--active')
        {
            pianoKeys.play(KeyMap['/'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed19]);

    useEffect(() => {
        if(Pressed20 === '--active')
        {
            pianoKeys.play(KeyMap['a'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed20]);


    useEffect(() => {
        if(Pressed21 === '--active')
        {
            pianoKeys.play(KeyMap['2'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed21]);

    useEffect(() => {
        if(Pressed22 === '--active')
        {
            pianoKeys.play(KeyMap['3'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed22]);

    useEffect(() => {
        if(Pressed23 === '--active')
        {
            pianoKeys.play(KeyMap['5'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed23]);

    useEffect(() => {
        if(Pressed24 === '--active')
        {
            pianoKeys.play(KeyMap['6'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed24]);

    useEffect(() => {
        if(Pressed25 === '--active')
        {
            pianoKeys.play(KeyMap['7'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed25]);

    useEffect(() => {
        if(Pressed26 === '--active')
        {
            pianoKeys.play(KeyMap['9'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed26]);

    useEffect(() => {
        if(Pressed27 === '--active')
        {
            pianoKeys.play(KeyMap['0'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed27]);

    useEffect(() => {
        if(Pressed28 === '--active')
        {
            pianoKeys.play(KeyMap['s'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed28]);

    useEffect(() => {
        if(Pressed29 === '--active')
        {
            pianoKeys.play(KeyMap['d'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed29]);

    useEffect(() => {
        if(Pressed30 === '--active')
        {
            pianoKeys.play(KeyMap['f'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed30]);

    useEffect(() => {
        if(Pressed31 === '--active')
        {
            pianoKeys.play(KeyMap['h'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed31]);

    useEffect(() => {
        if(Pressed32 === '--active')
        {
            pianoKeys.play(KeyMap['j'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed32]);

    useEffect(() => {
        if(Pressed33 === '--active')
        {
            pianoKeys.play(KeyMap['l'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed33]);

    useEffect(() => {
        if(Pressed34 === '--active')
        {
            pianoKeys.play(KeyMap[';'],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed34]);

    useEffect(() => {
        if(Pressed35 === '--active')
        {
            pianoKeys.play(KeyMap["'"],ac.currentTime , {duration : 0.5});
        }
        
    },[Pressed35]);




    return (
        <div>
            <div className="title">
                <h1>Web Piano</h1>
            </div>        
            <div className="piano">
                <button className={"pianoKey" + Pressed0} onClick={() => handleclick('C3')}><span>Q</span></button>
                <button className={"pianoKeysharp" + Pressed21} onClick={() => handleclick('C#3')}><span>2</span></button>
                <button className={"pianoKey" + Pressed1} onClick={() => handleclick('D3')}><span>W</span></button>
                <button className={"pianoKeysharp" + Pressed22} onClick={() => handleclick('D#3')}><span>3</span></button>
                <button className={"pianoKeyBetween" + Pressed2} onClick={() => handleclick('E3')}><span>E</span></button>
                <button className={"pianoKey" + Pressed3} onClick={() => handleclick('F3')}><span>R</span></button>
                <button className={"pianoKeysharp" + Pressed23} onClick={() => handleclick('F#3')}><span>5</span></button>
                <button className={"pianoKey" + Pressed4} onClick={() => handleclick('G3')}><span>T</span></button>
                <button className={"pianoKeysharp" + Pressed24} onClick={() => handleclick('G#3')}><span>6</span></button>
                <button className={"pianoKey" + Pressed5} onClick={() => handleclick('A4')}><span>Y</span></button>
                <button className={"pianoKeysharp" + Pressed25} onClick={() => handleclick('A#4')}><span>7</span></button>
                <button className={"pianoKeyBetween" + Pressed6} onClick={() => handleclick('B4')}><span>U</span></button>
                <button className={"pianoKey" + Pressed7} onClick={() => handleclick('C4')}><span>I</span></button>
                <button className={"pianoKeysharp" + Pressed26} onClick={() => handleclick('C#4')}><span>9</span></button>
                <button className={"pianoKey" + Pressed8} onClick={() => handleclick('D4')}><span>O</span></button>
                <button className={"pianoKeysharp" + Pressed27} onClick={() => handleclick('D#4')}><span>0</span></button>
                <button className={"pianoKeyBetween" + Pressed9} onClick={() => handleclick('E4')}><span>P</span></button>
                <button className={"pianoKey" + Pressed10} onClick={() => handleclick('F4')}><span>Z</span></button>
                <button className={"pianoKeysharp" + Pressed28} onClick={() => handleclick('F#4')}><span>S</span></button>
                <button className={"pianoKey" + Pressed11} onClick={() => handleclick('G4')}><span>X</span></button>
                <button className={"pianoKeysharp" + Pressed29} onClick={() => handleclick('G#4')}><span>D</span></button>
                <button className={"pianoKey" + Pressed12} onClick={() => handleclick('A5')}><span>C</span></button>
                <button className={"pianoKeysharp" + Pressed30} onClick={() => handleclick('A#5')}><span>F</span></button>
                <button className={"pianoKeyBetween" + Pressed13} onClick={() => handleclick('B5')}><span>V</span></button>
                <button className={"pianoKey" + Pressed14} onClick={() => handleclick('C5')}><span>B</span></button>
                <button className={"pianoKeysharp" + Pressed31} onClick={() => handleclick('C#5')}><span>H</span></button>
                <button className={"pianoKey" + Pressed15} onClick={() => handleclick('D5')}><span>N</span></button>
                <button className={"pianoKeysharp" + Pressed32} onClick={() => handleclick('D#5')}><span>J</span></button>
                <button className={"pianoKeyBetween" + Pressed16} onClick={() => handleclick('E5')}><span>M</span></button>
                <button className={"pianoKey" + Pressed17} onClick={() => handleclick('F5')}><span>,</span></button>
                <button className={"pianoKeysharp" + Pressed33} onClick={() => handleclick('F#5')}><span>L</span></button>
                <button className={"pianoKey" + Pressed18} onClick={() => handleclick('G5')}><span>.</span></button>
                <button className={"pianoKeysharp" + Pressed34} onClick={() => handleclick('G#5')}><span>;</span></button>
                <button className={"pianoKey" + Pressed19} onClick={() => handleclick('A6')}><span>/</span></button>
                <button className={"pianoKeysharp" + Pressed35} onClick={() => handleclick('A#6')}><span>'</span></button>
                <button className={"pianoKey" + Pressed20} onClick={() => handleclick('B6')}><span>A</span></button>
            </div>

            
            
            
            
        </div>
      );
}
 
export default WebPiano;