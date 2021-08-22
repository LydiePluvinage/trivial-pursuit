import './GameSelection.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Difficulty from './Difficulty';
import { NavLink } from 'react-router-dom';

const GameSelection = () => {
  const [CategoriesList, setCategoriesList] = useState([]);
  const [difficultyChosen, setDifficultyChosen] = useState('medium');

  const urlAPI = 'https://opentdb.com/api_category.php';
  useEffect(() => {
    // fetches categories list and their id
    const getCategoriesList = async () => {
      const categoriesList = await axios.get(urlAPI);

      setCategoriesList(categoriesList.data.trivia_categories);
    };
    getCategoriesList();
  }, [urlAPI]);

  function changeDifficulty(id) {
    setDifficultyChosen(id);
  }

  return (
    <>
      <Difficulty difficulty={difficultyChosen} onClick={changeDifficulty} />
      <div className="categories">
        <ul className="categories__content">
          {CategoriesList.map((category) => (
            <NavLink
              className="categories__link"
              key={category.id}
              to={
                '/trivial-pursuit/category/' +
                category.id +
                '/difficulty/' +
                difficultyChosen
              }
            >
              <li key={category.id}>{category.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GameSelection;
