import React from "react";


function Rows(props) {

    const numbersState = props.numbersState;


    return (
        <div className="status">


            <div className="col-6">
                {props.numbersState.map((el, index) => <button
                    className='btn'>{!props.editMode && numbersState[index]}</button>)}


            </div>


        </div>
    )
};


export default Rows;