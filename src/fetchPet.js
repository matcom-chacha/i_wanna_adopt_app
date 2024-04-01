const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  } // react query expects us to throw an error when external calls are not ok

  return apiRes.json(); // no need to await here, React query already expects us to return a promise
};

export default fetchPet;
