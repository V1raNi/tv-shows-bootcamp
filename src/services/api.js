export function apiCall(url) {
  return traktApiCall(url)
    .then(async (data, headers) => {
      console.log(headers);
      console.log(data);
      // let shows = combineData(data[0]).then(result => shows = result);
      // need to figure out if there is a way to do that without Promise.all
      // const finalData = Promise.all([shows, items]);
      const shows = await combineData(data[0]);
      const items = data[1];
      const finalData = [shows, items];
      return finalData;
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
  .then(async res => {
    errorHandling(res);
    const body = await res.json();
    // const body = res.json();
    const headers = res.headers.get('x-pagination-item-count');
    // return Promise.all([body, headers]);
    return (body, headers)
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
