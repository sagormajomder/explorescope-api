export function getDataByQueryParams(data, queryParams) {
  let modifiedData = data;
  const { continent, country, is_open_to_public } = queryParams;

  if (continent) {
    modifiedData = modifiedData.filter(
      mdata => mdata.continent.toLowerCase() === continent.toLowerCase()
    );
  }
  if (country) {
    modifiedData = modifiedData.filter(
      mdata => mdata.country.toLowerCase() === country.toLowerCase()
    );
  }
  if (is_open_to_public) {
    modifiedData = modifiedData.filter(
      mdata =>
        mdata.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
    );
  }

  return modifiedData;
}
