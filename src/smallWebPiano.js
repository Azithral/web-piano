import { useEffect, useState } from "react";
import SoundFontPlayer from "soundfont-player";

const SmallWebPiano = () => {
    const [pianoKeys, setPianoKeys] = useState(null);
    const ac = new AudioContext();
    useEffect(() => {
        SoundFontPlayer.instrument( ac, 'acoustic_grand_piano').then(function (piano) {
            setPianoKeys(piano);
          })
    },[]);

    const handleclick = (key) => {

        pianoKeys.play(String(key), ac.currentTime, {duration : 0.5});
    }


    return ( 
        <div>
            <div className="small-title">
                <h1>Web Piano</h1>
            </div>  
            <div className="smallpiano">
                <div className="smallpianorowtop">
                    <button className="smallbutton" onClick={() => handleclick('C3')}><span>C3</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('C#3')}><span>C#3</span></button>
                    <button className="smallbutton" onClick={() => handleclick('D3')}><span>D3</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('D#3')}><span>D#3</span></button>
                    <button className="smallbutton" onClick={() => handleclick('E3')}><span>E3</span></button>
                    <button className="smallbutton" onClick={() => handleclick('F3')}><span>F3</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('F#3')}><span>F#3</span></button>
                    <button className="smallbutton" onClick={() => handleclick('G3')}><span>G3</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('G#3')}><span>G#3</span></button>
                    <button className="smallbutton" onClick={() => handleclick('A4')}><span>A4</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('A#4')}><span>A#4</span></button>
                    <button className="smallbutton" onClick={() => handleclick('B4')}><span>B4</span></button>
                    <button className="smallbutton" onClick={() => handleclick('C4')}><span>C4</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('C#4')}><span>C#4</span></button>
                    <button className="smallbutton" onClick={() => handleclick('D4')}><span>D4</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('D#4')}><span>D#4</span></button>
                    <button className="smallbutton" onClick={() => handleclick('E4')}><span>E4</span></button>
                    
                </div>
                <div className="smallpianorowbottom">
                    <button className="smallbutton" onClick={() => handleclick('F4')}><span>F4</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('F#4')}><span>F#4</span></button>
                    <button className="smallbutton" onClick={() => handleclick('G4')}><span>G4</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('G#4')}><span>G#4</span></button>
                    <button className="smallbutton" onClick={() => handleclick('A5')}><span>A5</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('A#5')}><span>A#5</span></button>
                    <button className="smallbutton" onClick={() => handleclick('B5')}><span>B5</span></button>
                    <button className="smallbutton" onClick={() => handleclick('C5')}><span>C5</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('C#5')}><span>C#5</span></button>
                    <button className="smallbutton" onClick={() => handleclick('D5')}><span>D5</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('D#5')}><span>D#5</span></button>
                    <button className="smallbutton" onClick={() => handleclick('E5')}><span>E5</span></button>
                    <button className="smallbutton" onClick={() => handleclick('F5')}><span>F5</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('F#5')}><span>F#5</span></button>
                    <button className="smallbutton" onClick={() => handleclick('G5')}><span>G5</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('G#5')}><span>G#5</span></button>
                    <button className="smallbutton" onClick={() => handleclick('A6')}><span>A6</span></button>
                    <button className="smallbuttonsharp" onClick={() => handleclick('A#6')}><span>A#6</span></button>
                    <button className="smallbutton" onClick={() => handleclick('B6')}><span>B6</span></button>
                </div>  
            </div>        
            
        </div>
     );
}
 
export default SmallWebPiano;