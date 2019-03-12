
export async function apiCall(url) {
  return fetch(url, {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
      'trakt-api-version': 2,
      'trakt-api-key': "ea7dbd8458be39da2057255342292b15dd05eb08cbfb0df4d5fddee86ae0a968",
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


// export function apiCall(url) {
//   return fetch(url, {
//     method: 'get',
//     headers: new Headers({
//       'Content-Type': 'application/json',
//       'trakt-api-version': 2,
//       'trakt-api-key': "ea7dbd8458be39da2057255342292b15dd05eb08cbfb0df4d5fddee86ae0a968",
//       'Authorization': 'Bearer f04dd126ae120f7e9d6e5a64ff0564bb59d7aa67fb0c3499183e4e32133f3079',
//     }),
//     // mode: 'no-cors'
//   })
//     .then(res => {
//       if (!res.ok) {
//         if (res.status >= 400 && res.status < 500) {
//           return res.json()
//             .then(data => {
//               let err = {errorMessage: data.message};
//               throw err;
//           });
//         } else {
//           let err = {errorMessage: 'Try again later, server is not responding'};
//           throw err;
//         }
//       }
//       return res.json();
//     });
// }

