const { Router } = require("express");
const axios = require("axios");
const { Dog, Temperament, Op } = require("../db");
const { API_KEY } = process.env;
const router = Router();

Array.prototype.unique = (function (a) {
  return function () {
    return this.filter(a);
  };
})(function (a, b, c) {
  return c.indexOf(a, b + 1) < 0;
});

const getApiInfo = async () => {
  try {
    const apiUrl = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const apiInfo = await apiUrl.data.map((e) => {
      return {
        name: e.name,
        id: e.id,
        height_max:
          e.height.metric.split(" - ")[1] && e.height.metric.split(" - ")[1],
        height_min:
          e.height.metric.split(" - ")[0] && e.height.metric.split(" - ")[0],
        weight_max:
          e.weight.metric.split(" - ")[1] && e.weight.metric.split(" - ")[1],
        weight_min:
          e.weight.metric.split(" - ")[0] !== "NaN"
            ? e.weight.metric.split(" - ")[0]
            : 6,
        life_time_max:
          e.life_span.split(" - ")[1] &&
          e.life_span.split(" - ")[1].split(" ")[0],
        life_time_min: e.life_span.split(" - ")[0] && e.life_span.split(" - ")[0],
        temperament: e.temperament
          ? e.temperament
          : "sin temperamento",
        img: e.image.url,
        origin: e.origin,
      };
    });

    return apiInfo;
  } catch (error) {
    console.log("Hubo un error en el getApiInfo", error)
  }
};

const getDbInfo = async () => {
  try {
    return await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"], //traigo el nombre de los temperamentos
        through: {
          attributes: [], //tomo solo lo que queda en el arreglo atributes
        },
      },
    });
  } catch (error) {
    console.log("Hubo un error en getDbInfo", error)
  }
};

const getAllDogs = async () => {
  try {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allInfo = apiInfo.concat(dbInfo);
    return allInfo;
  } catch (error) {
    console.log("Se encontro un error en getAllDogs", error)
  }
};

module.exports = router;