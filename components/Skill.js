import {useEffect, useState} from "react";
import { 
  JavaScriptIcon, 
  PythonIcon, 
  ReactIcon, 
  TypeScriptIcon, 
  FlaskIcon, 
  SQLIcon, 
  PostgreSQLIcon, 
  MySQLIcon 
} from './SkillIcons';

export default function Skills() {
  const [extraClasses,setExtraClasses] = useState('');
  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box"><JavaScriptIcon /><span>JavaScript</span></div>
          <div className="skill-box"><PythonIcon /><span>Python</span></div>
          <div className="skill-box"><ReactIcon /><span>React</span></div>
          <div className="skill-box"><TypeScriptIcon /><span>TypeScript</span></div>
          <div className="skill-box"><FlaskIcon /><span>Flask</span></div>
          <div className="skill-box"><SQLIcon /><span>SQL</span></div>
          <div className="skill-box"><PostgreSQLIcon /><span>PostgreSQL</span></div>
          <div className="skill-box"><MySQLIcon /><span>MySQL</span></div>
        </div>
      </div>
    </section>
  );
}