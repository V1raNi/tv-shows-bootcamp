export function apiCall(url) {
  return traktApiCall(url)
    .then(data => {
      return combineData(data);
    });
}

function traktApiCall(url) {
  return fetch(url, {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
      'trakt-api-version': 2,
      'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
      'Authorization': `Bearer ${process.env.REACT_APP_TRAKT_AUTH_KEY}`,
    }),
  })
  .then(res => {
    errorHandling(res);
    return res.json();
  });
}

function fanartApiCall(url) {
  return fetch(url)
    .then(res => {
      // errorHandling(res);
      if (res.status === 404) {
        return res.json()
        .then(data => {
          console.log(data);
        });
      }
      return res.json();
    });
}

function combineData(data) {
  let showsPromises = data.map(show => {
    let showId = show.show ? show.show.ids.tvdb : show.ids.tvdb;
    let url = `http://webservice.fanart.tv/v3/tv/${showId}?api_key=${process.env.REACT_APP_FANART_API_KEY}`;
    return fanartApiCall(url)
    .then(fanartShows => {
      // if we get 404
      if (!fanartShows) {
        show.imageUrl = 'Image not found';
        return show;
      }
      // sometimes there is to tvposter, we use tvthumb instead
      let image = 
        fanartShows.tvposter ? fanartShows.tvposter[0].url 
        : fanartShows.tvthumb ? fanartShows.tvthumb[0].url
        : 'Image not found';
      show.imageUrl = image;
      return show;
    });
  });
  
  const finalData = Promise.all(showsPromises);
  return finalData;
}

function errorHandling (response) {
  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      return response.json()
        .then(data => {
          let err = {errorMessage: data.message};
            throw err;
        });
      } else {
        let err = {errorMessage: 'Try again later, server is not responding'};
        throw err;
      }
  }
}
