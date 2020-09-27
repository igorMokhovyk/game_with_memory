import React from "react";


function ButtonMix(props) {


    return (


        <div>
            <button onClick={props.numberMix} value={props.numbers}>Mix Numbers</button>

        </div>
    )
};


export default ButtonMix;