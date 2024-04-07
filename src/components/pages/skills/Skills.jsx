import { useEffect, useState } from "react";
import "./skills.css";

function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("skills-cards.json");
          const data = await response.json();
          setSkills(data);
        } catch (error) {
          console.error("Erro ao buscar habilidades!!");
        }
      };
      fetchData();
    }, []);

  return (
    <section className="skills flex-row main-card main-skills-card">
      <div className="soft-skills flex-column">
        <h2 className="heading-2">Competências Comportamentais</h2>
        <ul>
          <li className="blue-color">Boa Comunicação</li>
          <li className="blue-color">Honestidade</li>
          <li className="blue-color">Curiosidade</li>
          <li className="blue-color">Esforço</li>
          <li className="blue-color">Muita vontade de aprender</li>
          <li className="blue-color">Flexibilidade</li>
        </ul>
      </div>
      <div className="languages-skills flex-column">
        <h2 className="heading-2">Competências Técnicas</h2>
        <ul className="languages flex-row">
          {skills.map((skill, index) => (
            <li key={index} className={skill.LiClassName}>
              <div className="front">
                <i className={skill.DivFrontIClassName} />
                <p className={skill.DivFrontPClassName}>
                  {skill.DivFrontPText}
                </p>
              </div>
              <div className="back">
                <p>{skill.DivBackPText}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
