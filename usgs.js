
// get 1 point
// https://apps.nationalmap.gov/epqs/

// api docs
// https://epqs.nationalmap.gov/v1/docs




const usgs = document.getElementById('usgs');
const url = 'https://epqs.nationalmap.gov/v1/json?x=-74.034901&y=40.1039&wkid=4326&units=Feet&includeDate=false'
// fetch(url).then((res) => {
//     return res.json();
// }).then((data) => {
//     usgs.innerText = data['value'];
// })



async function USGS(url) {
    const res = await fetch(url);
    const data = await res.json();
    usgs.innerText = data['value']
}

USGS(url)