import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useState, useRef } from 'react';

const gridSize = 10; // Define the size of the grid

const SquaresPage = () => {

    // State for storing the grid values
    const [gridValues, setGridValues] = useState(Array.from({ length: gridSize }, () =>
      Array(gridSize).fill(''))
    );

    // Refs for all the input cells
    const inputRefs = useRef([...Array(gridSize)].map(() =>
      Array(gridSize).fill().map(() => React.createRef()))
    );

    // Function to handle key down events for navigation
    const handleKeyDown = (rowIndex, colIndex, e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextCol = colIndex + 1 < gridSize ? colIndex + 1 : 0;
        const nextRow = colIndex + 1 < gridSize ? rowIndex : rowIndex + 1 % gridSize;
        inputRefs.current[nextRow][nextCol].current.focus();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevCol = colIndex - 1 >= 0 ? colIndex - 1 : gridSize - 1;
        const prevRow = colIndex - 1 >= 0 ? rowIndex : rowIndex - 1 < 0 ? gridSize - 1 : rowIndex - 1;
        inputRefs.current[prevRow][prevCol].current.focus();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextRow = (rowIndex + 1) % gridSize;
        inputRefs.current[nextRow][colIndex].current.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevRow = rowIndex - 1 < 0 ? gridSize - 1 : rowIndex - 1;
        inputRefs.current[prevRow][colIndex].current.focus();
      } else if (e.key === 'Tab') {
        e.preventDefault();
        let nextCol = colIndex + 1 < gridSize ? colIndex + 1 : 0;
        let nextRow = colIndex + 1 < gridSize ? rowIndex : rowIndex + 1 % gridSize;
        if (e.shiftKey) {
          nextCol = colIndex - 1 >= 0 ? colIndex - 1 : gridSize - 1;
          nextRow = colIndex - 1 >= 0 ? rowIndex : rowIndex - 1 < 0 ? gridSize - 1 : rowIndex - 1;
        }
        inputRefs.current[nextRow][nextCol].current.focus();
      }
    };

    // Render the bracket table
    return (
      <div className="bracket-container">
        <table>
          <tbody>
            {gridValues.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((value, colIndex) => (
                  <td key={colIndex}>
                    <input
                      ref={inputRefs.current[rowIndex][colIndex]}
                      value={value}
                      onChange={(e) => {
                        const newGridValues = [...gridValues];
                        newGridValues[rowIndex][colIndex] = e.target.value;
                        setGridValues(newGridValues);
                      }}
                      onKeyDown={(e) => handleKeyDown(rowIndex, colIndex, e)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


export default SquaresPage

