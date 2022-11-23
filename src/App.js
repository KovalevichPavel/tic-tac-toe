import React, { useState } from "react";

function App() {
  const [value, setValue] = useState('X');
  let filledCellsX = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
  let filledCells0 = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
  let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ]

  function preventEvent(e) {
    if (e.target.innerHTML !== '' || value === 'X is WON!' || value === '0 is WON!') return 
    drawMove(e);
  }

  function drawMove(e) {
    e.target.innerHTML = value;
    if (value === 'X') setValue('0');
    if (value === '0') setValue('X');
    checkIsWin();
  }

  function checkIsWin() {
    let count = 0;

    for (let td of document.getElementsByClassName('td')) {
      if (td.innerHTML === 'X') {
        filledCellsX[count] = 'X';
      } else if (td.innerHTML === '0') {
        filledCells0[count] = '0';
      }

      count++
    }    

    for (let i = 0; i < winCombinations.length; i++) {
      let isWinX = 3;
      let isWin0 = 3;
      for (let j = 0; j < 3; j++){
        if (filledCellsX[winCombinations[i][j]] === 'X') isWinX--;
        if (filledCells0[winCombinations[i][j]] === '0') isWin0--;
      }
      if (isWinX === 0) {        
        setValue('X is WON!');
        document.getElementById('mainInfo').innerHTML = value;
      }
      if (isWin0 === 0) {
        setValue('0 is WON!');        
        document.getElementById('mainInfo').innerHTML = value;
      }
    }

    console.log(filledCellsX)
    console.log(filledCells0)
    console.log('-----');
  }

  return (
    <div className="App">
      <div id='mainInfo'>next move: {value}</div>
      <table>
        <tbody>
          <tr>
            <td className="td" onClick={preventEvent} key='1'></td>
            <td className="td" onClick={preventEvent}></td>
            <td className="td" onClick={preventEvent}></td>
          </tr>
          <tr>
            <td className="td" onClick={preventEvent}></td>
            <td className="td" onClick={preventEvent}></td>
            <td className="td" onClick={preventEvent}></td>      
          </tr>
          <tr>
            <td className="td" onClick={preventEvent}></td>
            <td className="td" onClick={preventEvent}></td>
            <td className="td" onClick={preventEvent}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
