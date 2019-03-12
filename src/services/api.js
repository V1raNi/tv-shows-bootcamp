export function traktApiCall(url) {
  return fetch(url, {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
      'trakt-api-version': 2,
      'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
      'Authorization': 'Bearer f04dd126ae120f7e9d6e5a64ff0564bb59d7aa67fb0c3499183e4e32133f3079',
    }),
    // mode: 'no-cors'
  })
    .then(res => {
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          return res.json()
            .then(data => {
              let err = {errorMessage: data.message};
              throw err;
          });
        } else {
          let err = {errorMessage: 'Try again later, server is not responding'};
          throw err;
        }
      }
      return res.json();
    });
}

export function fanartApiCall(url) {
  return fetch(url, {
    method: 'get',
    headers: new Headers({
      // 'Content-Type': 'application/json',
      // 'api_key': process.env.REACT_APP_FANART_API_KEY,
      // 'client-key': process.env.REACT_APP_FANART_CLIENT_KEY
    }),
  })
  .then(res => {
    if (!res.ok) {
      if (res.status >= 400 && res.status < 500) {
        return res.json()
          .then(data => {
            let err = {errorMessage: data.message};
            throw err;
        });
      } else {
        let err = {errorMessage: 'Try again later, server is not responding'};
        throw err;
      }
    }
    return res.json();
  });
}

