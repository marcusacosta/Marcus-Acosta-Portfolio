import {useEffect, useState} from "react";

export default function Intro() {
  const [classes,setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p><span>Marcus Acosta</span><br /> BS in Computer Science,<br />Aspiring Software Engineer</p>
      </div>
      <div>
        <img src="/img/marcus.png" alt=""/>
      </div>
    </section>
  );
}