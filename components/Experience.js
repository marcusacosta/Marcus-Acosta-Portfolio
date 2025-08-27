export default function Experience() {
  return (
    <section id="experience">
      <div className="center">
        <h2>Experience</h2>
        <div className="timeline">

          <div className="item">
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>Computer Science Student</h3>
              <h4>Oregon State University • 2022 - Present</h4>
              <p>
                Currently pursuing a Bachelor of Science in Computer Science with a focus on backend development, 
                data structures, and software engineering principles. Actively working on personal projects to 
                develop practical skills in Python, FastAPI, React, and database management.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>Software Development Projects</h3>
              <h4>Personal Portfolio • 2023 - Present</h4>
              <p>
                Developed multiple full-stack applications including expense tracking systems, price alert services, 
                and inventory management solutions. Gained hands-on experience with modern web technologies, 
                cloud deployment, and best practices in software development.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
