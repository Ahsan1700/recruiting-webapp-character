import React from 'react';
import { SKILL_LIST } from '../consts';
import style from '../styles/Style.module.css'

function Skills ({skillList, modifierList, skillPoints, handleIncrement, handleDecrement}) {
  return(
    <div className={style.border}>
      <h3>Skills</h3>
      <h5>Points Left: {skillPoints}</h5>
      <table>
        <tr>
          <th>Skill</th>
          <th>Stat</th>
          <th>Modifier</th>
          <th>Bonus</th>
          <th>Total</th>
        </tr>
        {SKILL_LIST.map((skill) => 
          <tr>
            <td>{skill.name}</td>
            <td>
              <button value={skill.name} onClick={handleDecrement}>-</button>
              {skillList[skill.name]} 
              <button value={skill.name} onClick={handleIncrement}>+</button>
            </td>
            <td>{skill.attributeModifier}:</td>
            <td>{modifierList[skill.attributeModifier]}</td>
            <td>Total: {skillList[skill.name] + modifierList[skill.attributeModifier]}</td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default Skills;