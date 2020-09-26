import React from "react";


function Rows(props) {

    const numbersState = props.numbersState;



    return (
        <div>
            <div className="status"></div>

            <div className="board-row">
                <button className='btn'>1</button>
                <button className='btn'>2</button>
                <button className='btn'>3</button>
                <button className='btn'>4</button>

            </div>
            <div className="board-row">
                <button className='btn'>5</button>
                <button className='btn'>6</button>
                <button className='btn'>7</button>
                <button className='btn'>8</button>
            </div>
            <div className="board-row">
                <button className='btn'>9</button>
                <button className='btn'>10</button>
                <button className='btn'>11</button>
                <button className='btn'>12</button>

            </div>
            <div className="board-row">
                <button className='btn'>13</button>
                <button className='btn'>14</button>
                <button className='btn'>15</button>
                <button className='btn'>16</button>

            </div>
            {numbersState}
        </div>
    )
}
;


export default Rows;