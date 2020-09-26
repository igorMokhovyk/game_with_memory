import React, {useState} from 'react';
import './App.css';
import Rows from "./Rows";
import ButtonMix from "./ButtonMix";

function App() {

    const numbers = [
        1, 2, 3, 4,
        5, 6, 7, 8,
        1, 2, 3, 4,
        5, 6, 7, 8,
    ];

const [numbersState, setNumbersState] = useState(numbers);




  return (



      <div>
          <p/>
          <ButtonMix />
           <Rows numbersState={numbersState}/>
      </div>
  );
}

export default App;
