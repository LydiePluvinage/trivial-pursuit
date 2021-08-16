import axios from 'axios';
import './Categories.css';
import Difficulty from './Difficulty';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const [CategoriesList, setCategoriesList] = useState([]);
  const [DifficultyChosen, setDifficultyChosen] = useState('medium');

  useEffect(() => {
    // fetches categories list and their id
    const getCategoriesList = async () => {
      const categoriesList = await axios.get(
        'https://opentdb.com/api_category.php'
      );

      setCategoriesList(categoriesList.data.trivia_categories);
    };
    getCategoriesList();
  }, []);

  function changeDifficulty(newDifficulty) {
    setDifficultyChosen(newDifficulty);
  }

  return (
    <>
      <Difficulty Difficulty={DifficultyChosen} onClick={changeDifficulty} />
      <div className="categories">
        <ul className="categories__content">
          {CategoriesList.map((category) => (
            <NavLink
              className="categories__link"
              key={category.id}
              to={
                '/category/' + category.id + '/difficulty/' + DifficultyChosen
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

export default Categories;
