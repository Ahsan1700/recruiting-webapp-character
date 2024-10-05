import React, { useEffect, useState } from 'react';
import { CLASS_LIST } from '../consts';
import style from '../styles/Style.module.css'

function Classes ({attributeList}) {
  const [classList, setClassList] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    // Filters out Classes where attributes are not met
    const updatedClassList = Object.keys(CLASS_LIST).filter((className) => {
      const classRequirements = CLASS_LIST[className];
      
      return Object.keys(classRequirements).every((attribute) => {
        return attributeList[attribute] >= classRequirements[attribute];
      });
    });

    setClassList(updatedClassList);
  }, [attributeList]);
  
  return(
    <div className={style.border}>
      <h3>Classes</h3>
      <table>
        <tr>
          {Object.keys(CLASS_LIST).map((className) =>
            <button className={(classList.includes(className)) ? style.button1 : style.button2}
              value={className}
              onClick={() => setSelectedClass(className)}>
              {className}
            </button>
          )}
        </tr>
        <tr>
          {selectedClass && <th>{selectedClass} Requirements</th>}
        </tr>
        <tr>
          <table>
          {selectedClass &&
            Object.keys(CLASS_LIST[selectedClass]).map((attribute) => 
            <tr>
              <td>{attribute}</td>
              <td>{CLASS_LIST[selectedClass][attribute]}</td>
            </tr>
          )}
          </table>
        </tr>
      </table>
    </div>
  );
}

export default Classes;