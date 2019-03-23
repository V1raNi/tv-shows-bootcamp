export default function queryHandler(query) {
  const { limit, page } = query;
  let genres, genresQuery;
  if (query.genres.length > 0) {
    genres = !(query.genres === '') ? query.genres.map(genre => genre.value) : null;
    genresQuery = `&genres=${genres.join(',')}`;
  } else {
    genresQuery = '';
  }
  const title = !(query.title === '') ? `&query=${query.title.replace(/ /g, '%20')}` : '';
  const years = !(query.years === '') ? `&years=${query.years}` : '';
  const queryText = `&page=${page}&limit=${limit}${title}${years}${genresQuery}`;
  return queryText;
}

