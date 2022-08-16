// Function must return properties of the object that are a string
const movie = {
    title: 'Get Out',
    releaseDate: 2019,
    rating: 4.5,
    director: 'Peele'
};

showProperties(movie)

function showProperties(obj) {
    for (let key in obj)
      if (typeof obj[key] === 'string')
        console.log(key, obj[key]);
}