const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  } // react query expects us to throw an error when external calls are not ok

  return apiRes.json(); // no need to await here, React query already expects us to return a promise
};

export default fetchBreedList;
