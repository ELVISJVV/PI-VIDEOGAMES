import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postVideogame } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

import {useEffect} from 'react';  
import { getGenres } from '../../redux/actions';
import validate from './validate';

const GameForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch]);


  const [gameData, setGameData] = useState({
    name: '',
    description: '',
    platforms: [],
    image: '',
    released: '',
    rating: '',
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: '',
    description: '',
    platforms: '',
    image: '',
    released: '',
    rating: '',
    genres: ' ',
  });


  const genres = useSelector((state) => state.genres);

  const platforms = ['PC', 'PlayStation', 'Xbox', 'Nintendo', 'PSP', 'Wii','Game Boy'];

 


  const handleChange = (event) => {
    const { name, value } = event.target;
    setGameData({ 
      ...gameData,
       [name]: value
       });
    setErrors(validate({ 
      ...gameData, 
      [name]: value 
    }));
  };


 

  const handleCheckboxChange = (event) => {
  
    const { name, value, checked } = event.target;

    setGameData((prevGameData) => {
      const updatedGameData = checked
        ? { ...prevGameData, [name]: [...prevGameData[name], value] }
        : { ...prevGameData, [name]: prevGameData[name].filter((item) => item !== value) };

      setErrors(validate(updatedGameData));

      return updatedGameData;
    });

  };


  
  
  const replaceArrayValuesWithIds = (objectWithArrayProp, nameIdMapping) =>{
    const newArrayProp = objectWithArrayProp.genres.map(name => {
      const matchingIdObject = nameIdMapping.find(item => item.name === name);
      return matchingIdObject ? matchingIdObject.id : name;
    });

    return {
      ...objectWithArrayProp,
      genres: newArrayProp,
    };
  }


  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const gameDataWithIds =  replaceArrayValuesWithIds(gameData, genres);
    if (Object.keys(errors).length) {
      alert('You must complete the fields correctly');
      return;
    }
    dispatch(postVideogame(gameDataWithIds));
    navigate('/home');
  
  };

  const handleRatingChange = (event) => {
    const { value } = event.target;
    
    if (/^\d{0,1}(\.\d{0,2})?$/.test(value) || value === '') {
      setGameData({ ...gameData, rating: value });
    }

    setErrors(validate({ ...gameData, rating: value }));
  };




  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>
          Name:
          <input 
          type="text" 
          name="name" 
          value={gameData.name}
           onChange={handleChange} 
            />
        </label>
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>

        <label>
          Description:
          <textarea
            name="description"
            value={gameData.description}
            onChange={handleChange}
           
          />
        </label>
        {errors.description && <span>{errors.description}</span>}

      </div>

     
      
      <div>
        <label>
          Platforms:
        </label>
        <div>
          {platforms.map((platform) => (
            <label key={platform}>
              <input
                type="checkbox"
                name="platforms"
                value={platform}
                checked={gameData.platforms.includes(platform)}
                onChange={handleCheckboxChange}
              />
              {platform}
            </label>
          ))}
          {errors.platforms && <span>{errors.platforms}</span>}
        </div>
      </div>

      <div>
        <label>
          Image URL:
          <input type="url" name="image" value={gameData.image} onChange={handleChange}  />
        </label>
        {errors.
        image && <span>{errors.
        image}</span>}
      </div>

      <div>
        <label>
          Released:
          <input
            type="date"
            name="released"
            value={gameData.released}
            onChange={handleChange}
            
          />
        </label>
        {errors.released && <span>{errors.released}</span>}
      </div>

      <div>
        <label>
          Rating (0-5):
          <input
            type="text"  
            name="rating"
            value={gameData.rating}
            onChange={handleRatingChange}
           
          />
        </label>
        {errors.rating && <span>{errors.rating}</span>}
      </div>

     
        <div>
          <label>
            Genres:
          </label>
          <div>
            {genres.map((genre) => (
              <label key={genre.id}>
                 <input
                  type="checkbox"
                  name="genres"
                  value={genre.name}
                  checked={gameData.genres.includes(genre.name)}
                  onChange={handleCheckboxChange}
                />
                {genre.name} 
                
              </label>
            ))}
            {errors.genres && <span>{errors.genres}</span>}
          </div>
        </div>
        
      <button type="submit">Create Game</button>
    </form>
  );
};

export default GameForm;


