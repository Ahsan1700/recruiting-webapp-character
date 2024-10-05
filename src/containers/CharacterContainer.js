import React, { useEffect, useState } from 'react';
import style from "../styles/Style.module.css"
import Attributes from '../components/Attributes';
import Skills from '../components/Skills';

import { ATTRIBUTE_LIST, SKILL_LIST } from '../consts';
import Classes from '../components/Classes';

const MAX_ATTRIBUTES = 70;

function CharacterContainer () {
  // Creates and initializes an Objects with key of attribute and default values for Attributes, Modifiers and Skills
  const initialAttributes = ATTRIBUTE_LIST.reduce((attributes, attribute) => {
      attributes[attribute] = 10;
      return attributes;
  }, {});

  const initialModifiers = ATTRIBUTE_LIST.reduce((modifiers, attribute) => {
      modifiers[attribute] = 0;
      return modifiers;
  }, {});

  const initialSkills = SKILL_LIST.reduce((skills, skill) => {
    skills[skill.name] = 0;
    return skills;
  }, {});

  // State Variables
  const [attributeList, setAttributeList] = useState(initialAttributes);
  const [modifierList, setModifierList] = useState(initialModifiers);
  const [skillList, setSkillList] = useState(initialSkills);
  const [attributePoints, setAttributePoints] = useState(10);
  const [skillPoints, setSkillPoints] = useState(10);

  // Functions to increment and decrement Attributes and Skills
  const handleIncrementAttribute = ({target}) => {
    setAttributeList((prev) => ({
      ...prev,
      [target.value]: attributePoints > 0 ? prev[target.value] + 1 : prev[target.value]
    }));
  }

  const handleDecrementAttribute = ({target}) => {
    setAttributeList((prev) => ({
      ...prev,
      [target.value]: prev[target.value] > 0 ? prev[target.value] - 1 : 0
    }));
  }

  const handleIncrementSkill = ({target}) => {
    setSkillList((prev) => ({
      ...prev,
      [target.value]: skillPoints > 0 ? prev[target.value] + 1 : prev[target.value]
    }));
  }

  const handleDecrementSkill = ({target}) => {
    setSkillList((prev) => ({
      ...prev,
      [target.value]: prev[target.value] > 0 ? prev[target.value] - 1 : 0
    }));
  }

  // Effect to update modifiers and points in response to changes in attributes
  useEffect(() => {
    const updatedModifiers = ATTRIBUTE_LIST.reduce((modifiers, attribute) => {
      modifiers[attribute] = Math.floor((attributeList[attribute] - 10) / 2);
      return modifiers;
    }, {});

    // Calculates total points, subtracts from upper limit
    const updatedAttributePoints = MAX_ATTRIBUTES - Object.values(attributeList).reduce((total, value) => total + value, 0);

    setModifierList(updatedModifiers);
    setAttributePoints(updatedAttributePoints);
  }, [attributeList, skillList]);

  useEffect(() => {
    // Calculates total points, subtracts from upper limit
    const updatedSkillPoints = (10 + 4*modifierList['Intelligence']) - Object.values(skillList).reduce((total, value) => total + value, 0);

    setSkillPoints(updatedSkillPoints < 0 ? 0 : updatedSkillPoints); // if less than 0, set to 0
  }, [modifierList, skillList])

	return(
		<div className={style.border}>
      <table className={style.center}>
        <tr>
          <td>
            <table>
              <tr>
                <Attributes 
                  attributeList={attributeList} 
                  modifierList={modifierList} 
                  attributePoints={attributePoints}
                  handleIncrement={handleIncrementAttribute} 
                  handleDecrement={handleDecrementAttribute}/>
              </tr>
              <tr>
                <Classes attributeList={attributeList}/>
              </tr>
            </table>
          </td>
          <td>
            <Skills 
              skillList={skillList}
              modifierList={modifierList}
              skillPoints={skillPoints}
              handleIncrement={handleIncrementSkill}
              handleDecrement={handleDecrementSkill}/>
          </td>
        </tr>
      </table>
		</div>
	);
}

export default CharacterContainer;