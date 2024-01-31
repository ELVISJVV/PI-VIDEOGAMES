

const validate = (gameData) => {
    const errors = {};
    if (!gameData.name) {
        errors.name = "Name is required";
    }
    if (!gameData.description) {
        errors.description = "Description is required";
    }
    if (!gameData.platforms[0]) {
        errors.platforms = "Platforms are required";
    }
    if (!gameData.image) {
        errors.image = "Image is required";
    }
    if (!gameData.released) {
        errors.released = "Release date is required";
    }

    if (!gameData.rating) {
        errors.rating = "Rating is required";
    }
    
    if (gameData.platforms.length < 0 ) {
        errors.platforms = "You must select at least one platform";
    }

    if (gameData.description && gameData.description.length < 10) {
        errors.description = "Description must be at least 10 characters long";
    }

    if (gameData.description && gameData.description.length > 300) {
        errors.description = "Description must be less than 300 characters long";
    }

    if (gameData.rating && (gameData.rating < 0 || gameData.rating > 5)) {
        errors.rating = "Rating must be between 0 and 5";
    }

    if (gameData.genres.length < 1) {
        errors.genres = "You must select at least one genre";
    }

    if (gameData.name && gameData.name.length > 22) {
        errors.name = "Name must be less than 22 characters long";
    }

    if (gameData.name && gameData.name.length < 3) {
        errors.name = "Name must be at least 3 characters long";
    }


    if (gameData.image.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(gameData.image)) {
        errors.image = 'invalid URL'
    }
    
    return errors;
}

export default validate;