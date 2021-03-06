import axios from "axios";

export const urlServer = "https://recipes-tp.herokuapp.com";
/*LOGIN */
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
/*REGISTER */
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
/*CRUD RECIPES */
export function updateRecipeHelper(jwt, recipe) {
  const config = { headers: { Authorization: `Bearer ${jwt}` } };
  axios
    .put(`${urlServer}/recipes/${recipe._id}`, recipe, config)
    .then((response) => {
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
  let res;
  const config = { headers: { Authorization: `Bearer ${jwt}` } };
  axios.post(`${urlServer}/recipes/`, recipe, config).then(function (response) {
    res = response;
  });
  return res;
}

export async function getAllRecipesHelper() {
  let recipes;
  await axios.get(`${urlServer}/recipes`).then((response) => {
    recipes = response.data;
  });
  return recipes;
}

export async function getOneRecipesHelper(id) {
  let recipe;
  await axios.get(`${urlServer}/recipes/${id}`).then((response) => {
    recipe = response.data;
  });
  return recipe;
}
