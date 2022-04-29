import { useState } from "react";

import SkillSubcategory from "../../components/SkillSubcategory";

import skills from "../../constants/skills.json";
const skillCategories = Object.keys(skills);

export default function SkillsPage() {

  return (
    <div id="Skills">
      <div className="full-vw-wrapper">
        <div className="full-page-wrapper">
          <h1 className="skills-title">Skills and Experience</h1>
          <div className="skill-categories-container">
            {skillCategories.map((category, i) => {
              const skillSubcategories = Object.keys(skills[category]);
              return (
                <section className="skill-category-section" key={i}>
                  <h2 className="skill-category-title">{category}</h2>
                  <div className="skill-subcategories-container">
                    {skillSubcategories.map((subcategory, j) => {
                      // const subcategorySkills = Object.keys(skills[category][subcategory]);
                      return (
                        <SkillSubcategory
                          category={category}
                          subcategory={subcategory}
                          subcategorySkills={skills[category][subcategory]}
                          key={j} />
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}