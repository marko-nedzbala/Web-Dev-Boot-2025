
// const req = new XMLHttpRequest();
 
// req.onload = function () {
//   console.log("IT LOADED!!");
//   const data = JSON.parse(this.responseText);
//   // console.log(data.result.properties);
//   console.log(data.result.properties.name, data.result.properties.height);
// };
 
// req.onerror = function () {
//   console.log("ERROR!!!!");
//   console.log(this);
// };
 
// req.open("GET", "https://swapi.tech/api/people/1/");
// req.send();



// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });



// axios.get('https://swapi.tech/api/people/1/')
// .then(res => {
//     console.log(res);
// }).catch((e) => {
//     console.log(`Error ${e}`);
// });

// const getStarWarsPerson = async (id) => {
//     const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
//     console.log(res.data);
// }

// const jokes = document.getElementById('jokes');
// const addNewJoke = async () => {
//     const jokeText = await dadJoke();
//     const newLi = document.createElement('li');
//     newLi.append(jokeText);
//     jokes.append(newLi);
// }
// const dadJoke = async () => {
//     try {
//         config = {headers: { Accept: 'application/json'}}
//         const res = await axios.get(`https://icanhazdadjoke.com/`, config);
//         return res.data.joke;
//     } catch(e) {
//         return 'No jokes are available';
//     }
    
// }
// const btn = document.querySelector('button');
// btn.addEventListener('click', addNewJoke);
// // dadJoke()


const form = document.getElementById('searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    
    // const url = `https://api.tvmaze.com/search/shows`;
    // const res = await axios.get(`${url}?q=${searchTerm}`);

    const url = `https://api.tvmaze.com/search/shows`;
    const config = { params: { q: searchTerm }};
    const res = await axios.get(url, config);
    
    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}




