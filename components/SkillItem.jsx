import { useState } from "react";

export default function SkillItem({ skillTitle, skill }) {
  const [showSubskills, setShowSubskills] = useState(false);

  return (
    <div className="skill-item">
      <h4 onClick={() => setShowSubskills(!showSubskills)} className="skill-title">{skillTitle}</h4>
      <div className="skill-subtitle">{skill.subtitle}</div>
      <div className="skill-proficiency">{skill.proficiency}</div>
      {showSubskills && <div className="subskills-container">
        {skill.subskills.map((subskill, i) => {
          return (
            <div className="subskill-item" key={i}>
              <h5 className="subskill-title">{subskill.title}</h5>
              {subskill.info && <div className="subskill-info">{subskill.info}</div>}
              {subskill.proficiency && <div className="subskill-proficiency">{subskill.proficiency}</div>}
            </div>
          );
        })}
      </div>}
    </div>
  );
}