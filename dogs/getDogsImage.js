const axios = require('axios');

let formatBreed = (breed) => {
    let words = breed.split(' ');
    if(words.length > 1) {
        words.forEach((element, index) => {
            words[index] = element.toLowerCase();
        });
        return words.join('-');
    } else {
        return breed.toLowerCase();
    }
}

let getDogImage = async ( breed ) => {
    let results = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    if(results.data.status != 'success') {
        throw new Error(`No se pudo encontrar una imagen de la raza ${breed}`);
    }
    return {
        status: results.data.status,
        url: results.data.message,
        breed
    };

}

module.exports = {
    getDogImage,
    formatBreed
}

