import { useState } from "react";

import SkillItem from "./SkillItem";

export default function SkillSubcategory({ category, subcategory, subcategorySkills }) {
  const subcategorySkillNames = Object.keys(subcategorySkills);
  const [showSkills, setShowSkills] = useState(false);
  return (
    <div className="skill-subcategory-section">
      <h3 onClick={() => setShowSkills(!showSkills)} className="skill-subcategory-title">{subcategory}</h3>
      {showSkills && subcategorySkillNames.map((skill, k) => {
        return (
          <SkillItem skillTitle={skill} skill={subcategorySkills[skill]} key={k} />
        );
      })}
    </div>
  )
}