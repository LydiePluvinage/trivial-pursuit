import axios from 'axios';
import './Categories.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const [CategoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    // fetches categories list and their id
    const getCategoriesList = async () => {
      const categoriesList = await axios.get(
        'https://opentdb.com/api_category.php'
      );
      console.log(categoriesList.data.trivia_categories);
      setCategoriesList(categoriesList.data.trivia_categories);
    };
    getCategoriesList();
  }, []);

  return (
    <div className="categories">
      <ul className="categories__content">
        {CategoriesList.map((category) => (
          <NavLink key={category.id} to={'/category/' + category.id}>
            <li key={category.id} className="categories__link">
              {category.name}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
