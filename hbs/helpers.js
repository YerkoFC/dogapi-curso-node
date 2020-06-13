const hbs = require('hbs');


hbs.registerHelper('format', (breed) => {

    let words = breed.split(' ');

    if(words.length > 1) {
        words.forEach((element, index) => {
            words[index] = element.toLowerCase();
        });
        return words.join('-');
    } else {

        return breed.toLowerCase();
    }


});