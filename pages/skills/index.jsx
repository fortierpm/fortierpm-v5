import { useState, useEffect } from "react";

import SkillSubcategory from "../../components/SkillSubcategory";
import SkillsSearchbar from "../../components/SkillsSearchbar";
import SkillItem from "../../components/SkillItem";

import skills from "../../constants/skills.json";

export default function SkillsPage() {
  // USESTATES
  const [skillCategories, setSkillCategories] = useState([]);
  const [searching, setSearching] = useState(false);
  const [rawSkillList, setRawSkillList] = useState([]);
  const [matchingSkills, setMatchingSkills] = useState([]);

  // USEEFFECTS
  useEffect(() => {
    setSkillCategories(Object.keys(skills));
    const skillCategories = Object.keys(skills);
    let skillsRawList = [];

    for (let i = 0; i < skillCategories.length; i++) {
      const category = skillCategories[i];
      const subcategoryList = Object.keys(skills[category]);
      for (let j = 0; j < subcategoryList.length; j++) {
        const subcategory = subcategoryList[j];
        const skillTitleList = Object.keys(skills[category][subcategory]);
        for (let k = 0; k < skillTitleList.length; k++) {
          const skill = skills[category][subcategory][skillTitleList[k]];
          const skillName = skillTitleList[k];
          const newSkill = { skillTitle: skillName, skill: skill };
          skillsRawList.push(newSkill);
        }
      }
    }

    setRawSkillList(skillsRawList);
  }, []);


  return (
    <div id="Skills">
      <div className="full-vw-wrapper">
        <div className="full-page-wrapper">
          <h1 className="skills-title">Skills and Experience</h1>
          <SkillsSearchbar
            searching={searching}
            setSearching={setSearching}
            matchingSkills={matchingSkills}
            setMatchingSkills={setMatchingSkills}
            skills={rawSkillList} />
          {!searching ? // IF
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
            : // ELSE
            <div className="matching-skills-list">
              {matchingSkills.length > 0 ?
                matchingSkills.map((skill, i) => {
                  return (
                    <SkillItem
                      skillTitle={skill.skillTitle}
                      skill={skill.skill}
                      showDefault={true}
                      key={i} />
                  );
                }) : <div className="no-matches">I&apos;m sorry,<br />I couldn&apos;t find any matches</div> }
            </div>
          }
        </div>
      </div>
    </div>
  );
}
