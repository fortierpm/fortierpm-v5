import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SkillsSearchbar({ searching, setSearching, matchingSkills, setMatchingSkills, skills }) {

  // USE STATES
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = (term) => {
    setSearchTerm(term);
    setMatchingSkills([]);

    if (term.length > 1) {
      setSearching(true);
      term = term.toLowerCase();

      for (let i = 0; i < skills.length; i++) {
        let skillEntry = skills[i].skillTitle.toLowerCase();
        let subskillEntries = skills[i].skill.subskill == [] ? [] :
          skills[i].skill.subskills.map((subskill) => subskill.title.toLowerCase());
        if (skillEntry.includes(term)) { // Checking skill matches
          setMatchingSkills(matchingSkills => [...matchingSkills, skills[i]]);
        } else { // Checking subskill matches
          for (let j = 0; j < subskillEntries.length; j++) {
            if (subskillEntries[j].includes(term)) {
              setMatchingSkills(matchingSkills => [...matchingSkills, skills[i]]);
              break;
            }
          }
        }
      }

    } else {
      setSearching(false);
    }
  }

  const handleClear = () => {
    setSearchTerm("");
    setMatchingSkills([]);
    setSearching(false);
  }


  return (
    <div className="searchbar-container">
      <div className="search-label">Browse below or use search term here:</div>
      <div className="searchbar">
        <div className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          onInput={e => handleSearch(e.target.value)}
          value={searchTerm} />
        <button onClick={handleClear} className="searchbar-clear">Clear</button>
      </div>
    </div>
  );
}