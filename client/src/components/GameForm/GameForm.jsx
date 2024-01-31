import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postVideogame } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getGenres } from '../../redux/actions';
import { Link } from 'react-router-dom';
import validate from './validate';
import style from './GameForm.module.css';

const GameForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
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

  const platforms = ['PC', 'PlayStation', 'Xbox', 'Nintendo', 'PSP', 'Wii', 'Game Boy'];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGameData({
      ...gameData,
      [name]: value,
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

  const replaceArrayValuesWithIds = (objectWithArrayProp, nameIdMapping) => {
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

    const gameDataWithIds = replaceArrayValuesWithIds(gameData, genres);
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
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <h1 className={style.title}>Create New Game</h1>
      <div>
        <label className={style.label}>
          Name:
          <input
            type="text"
            name="name"
            value={gameData.name}
            onChange={handleChange}
            className={style.inputField}
          />
        </label>
        {errors.name && <span className={style.errorMessage}>{errors.name}</span>}
      </div>


      <div>
        <label className={style.label}>
          Description:
          <textarea

            name="description"
            value={gameData.description}
            onChange={handleChange}
            className={style.inputField}
          />
        </label>
        {errors.description && <span className={style.errorMessage}>{errors.description}</span>}
      </div>

      <div>
        <label className={style.label}>
          Platforms:
        </label>
        <div className={style.platformsContainer}>

          {platforms.map((platform) => (
            <label key={platform} className={style.platformLabel}>
              <input
                type="checkbox"
                name="platforms"
                value={platform}
                checked={gameData.platforms.includes(platform)}
                onChange={handleCheckboxChange}
                className={style.platformCheckbox}
              />
              {platform}
            </label>
          ))}
        </div>
        {errors.platforms && <span className={style.errorMessage}>{errors.platforms}</span>}
      </div>
              <br />    
      <div> 
            
        <label className={style.label}>
          Image URL:
          <input
            type="text"
            name="image"
            value={gameData.image}
            onChange={handleChange}
            className={style.inputField}
          />
        </label>
        {errors.image && <span className={style.errorMessage}>{errors.image}</span>}
      </div>

      <div>
            
        <label className={style.label}>
          Released:
          <input
            type="date"
            name="released"
            value={gameData.released}
            onChange={handleChange}
            className={style.inputField}
          />
        </label>
        {errors.released && <span className={style.errorMessage}>{errors.released}</span>}
      </div>

      <div>
        <label className={style.label}>
          Rating:
          <input
            type="text"
            name="rating"
            value={gameData.rating}
            onChange={handleRatingChange}
            className={style.inputField}
          />
        </label>
        {errors.rating && <span className={style.errorMessage}>{errors.rating}</span>}
      </div>

      <div>
        <label className={style.label}>
          Genres:
        </label>
        <div className={style.genresContainer}>
          {genres.map((genre) => (
            <label key={genre.id} className={style.genreLabel}>
              <input
                type="checkbox"
                name="genres"
                value={genre.name}
                checked={gameData.genres.includes(genre.name)}
                onChange={handleCheckboxChange}
                className={style.genreCheckbox}
              />
              {genre.name}
            </label>
          ))}
        </div>
        {errors.genres && <span className={style.errorMessage}>{errors.genres}</span>}
      </div>



      <div className={style.buttonContainer}>
        <Link to={`/home`}>
        <button type="button" className={`${style.button} ${style.cancelButton}`}>
          Cancel
        </button>
        </Link>
        <button type="submit" className={style.button}>
          Create Game
        </button>
      </div>

    </form>
  );
};

export default GameForm;
