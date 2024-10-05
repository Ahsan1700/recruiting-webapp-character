import React from 'react';
import { ATTRIBUTE_LIST } from '../consts';
import style from '../styles/Style.module.css'

function Attributes ({attributeList, modifierList, attributePoints, handleIncrement, handleDecrement}) {
  return(
    <div className={style.border}>
      <h3>Attributes</h3>
      <h5>Points Left: {attributePoints}</h5>
      <table>
        <tr>
          <th>Attribute</th>
          <th>Stat</th>
          <th>Modifier</th>
        </tr>
        {ATTRIBUTE_LIST.map((attribute) => 
          <tr>
            <td>{attribute}</td>
            <td>
              <button value={attribute} onClick={handleDecrement}>-</button>
              {attributeList[attribute]}
              <button value={attribute} onClick={handleIncrement}>+</button>
            </td>
            <td>{modifierList[attribute]}</td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default Attributes;