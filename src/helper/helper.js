import axios from "axios";

export const urlServer = "http://localhost:62000";

export async function loginHelper(username, pwd) {
  let res;
  await axios
    .post(`${urlServer}/login`, {
      username: username,
      password: pwd
    })
    .then(function (response) {
      res = response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
}

export async function registerHelper(params) {
  let res;
  await axios
    .post(`${urlServer}/users`, params, {
      headers: {
        "content-type": "application/json"
      }
    })
    .then(function (response) {
      res = response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
}

export function updateRecipeHelper(jwt, recipe) {
  const config = { headers: { Authorization: `Bearer ${jwt}` } };
  axios
    .put(`${urlServer}/recipes/${recipe._id}`, recipe, config)
    .then((response) => {
      console.log(response);
    });

  const body = {
    body: {
      Data: recipe.image
    }
  };
  axios.post(`${urlServer}/image`, body, config).then((response) => {
    console.log(response);
  });
}
export function deleteRecipeHelper(jwt, id) {
  const config = {
    headers: { Authorization: `Bearer ${jwt}` }
  };
  axios.delete(`${urlServer}/recipes/${id}`, config).then((response) => {
    console.log(response);
  });
}

export function createRecipeHelper(jwt, recipe) {
  console.log("createRecipe");
}

export async function getAllRecipesHelper() {
  let recipes;
  await axios.get(`${urlServer}/recipes`).then((response) => {
    recipes = response.data;
  });
  return recipes;
}
