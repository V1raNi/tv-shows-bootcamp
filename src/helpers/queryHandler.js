export default function queryHandler(query) {
  const {limit} = query;
  const title = !(query.title === '') ? `&query=${query.title.replace(/ /g, '%20')}` : '';
  const years = !(query.years === '') ? `&years=${query.years}` : '';
  const queryText = `&limit=${limit}${title}${years}`;
  console.log(queryText);
  return queryText;
}


// ?years=2016&genres=action,adventure
// ?page={page}&limit={limit}