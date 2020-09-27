import React, {useState} from 'react';
import './App.css';
import Rows from "./Rows";
import ButtonMix from "./ButtonMix";
import HideMode from "./HideMode";


function App() {

    const numbers = [
        1, 2, 3, 4,
        5, 6, 7, 8,
        1, 2, 3, 4,
        5, 6, 7, 8
    ];

    const [numbersState, setNumbersState] = useState(numbers);

    const [editMode, setEditMode] = useState(false);
    const [buttonEditMode, setButtonEditMode] = useState(false);

    const changeEditMode = () => {
        setEditMode(!editMode)
    }


    const numberMix = () => {
        const numberMixCopyCopy = [...numbersState]
        const numberMixCopy = numberMixCopyCopy.sort(() => Math.random() - 0.5)

        setNumbersState(numberMixCopy)

    }


    return (


        <div>
            <p/>
            <HideMode hideMode={changeEditMode}/>
            <ButtonMix numberMix={numberMix} numbers={numbers}/>
            <Rows buttonEditMode={buttonEditMode} numbersState={numbersState} editMode={editMode}
                  changeEditMode={changeEditMode}/>

        </div>
    );
}

export default App;
