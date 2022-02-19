import axios from "axios";

export const urlServer = "http://localhost:62000";

export function updateRecipe(jwt, recipe) {
  const config = { headers: { Authorization: `Bearer ${jwt}` } };

  axios.put(`${urlServer}/recipes/${recipe._id}`, config).then((response) => {
    console.log(response);
  });
}
