import React from 'react';

const Keypad = ({handleKeypadEntryClick}) => (
  <div>
    <tbody className="keypad-container">
      <tr>
        <td onClick={() => {handleKeypadEntryClick(1)}}>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
      </tr>
      <tr>
        <td>10</td>
        <td></td>
        <td>0</td>
      </tr>
    </tbody>
  </div>
)

export default Keypad;