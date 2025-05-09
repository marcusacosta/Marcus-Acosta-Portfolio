import {useEffect, useState} from "react";

export default function Skills() {
  const [extraClasses,setExtraClasses] = useState('');
  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box"><img src="/img/js.png" alt=""/><span>Javascript</span></div>
          <div className="skill-box"><img src="/img/python.png" alt=""/><span>Python</span></div>
          <div className="skill-box"><img src="/img/react.png" alt=""/><span>React</span></div>
          <div className="skill-box"><img src="/img/flask.png" alt=""/><span>Flask</span></div>
        </div>
      </div>
    </section>
  );
}