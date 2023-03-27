export default async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw Error(
      `fetch pets?animal=${animal}&location=${location}&breed=${breed} not okay`
    );
  }

  return res.json();
}
