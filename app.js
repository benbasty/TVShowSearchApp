const form = document.querySelector("#searchForm");
const searchValue = document.querySelector("#searchValue");
const displayShows = document.querySelector('.displayShow');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchInput = searchValue.value;
    const config = {params: {q: searchInput}};
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    displayImages(res.data);
    searchValue.value = '';
});

const displayImages = (shows) => {
    displayShows.innerHTML = '';
    for (let result of shows) {
        if(result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            displayShows.append(img);
        }
    }
}