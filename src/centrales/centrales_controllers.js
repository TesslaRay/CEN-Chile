const axios = require('axios');
const { AUTH_KEY } = require("../config/env");

const URL_centrales = 'https://api-desarrolladores.coordinador.cl/generacion-bruta-real/v1/generacion-bruta-real.json/?auth_key='
const URL_central = 'https://api-desarrolladores.coordinador.cl/generacion-bruta-real/v1/generacion-bruta-reales/'

/**
 * Return gross generation of CEN
 * @description Return gross generation for all central of CEN
 * @params {string} fecha Date to query
 * @return  {object} HTTP status code - 200, 500.
 */
exports.getCentralesGen = async (req, res)  => {
  const params = req.body;
  console.log("[getCentralesGen][Request]", params);
  
  let data;
  await axios.get(`${URL_centrales}${AUTH_KEY}`, { params: params }).then(result => {
    data = result.data;
  }).catch(err => {
    console.log(err.code);
  });

  console.log("[getCentralesGen][Res]", data.generacionBruta);
  res.status(200).json(data.generacionBruta);
};


/**
 * Return gross generation of one central CEN
 * @description Return gross generation for one central of CEN
 * @param {string} fecha Date to query
 * @param {string} idcentral IdCetral from infotecnica
 * @return  {object} HTTP status code - 200, 500.
 */
exports.getCentralGen = async (req, res, next)  => {
  const params = req.body;
  console.log("[getCentralGen][Request]", params);
  
  let data;
  await axios.get(`${URL_central}${params.idcentral}.json/?auth_key=${AUTH_KEY}`, { params: params }).then(result => {
    data = result.data;
  }).catch(err => {
    console.log(err.code);
  });

  console.log("[getCentralGen][Res]", data.generacionBruta);
  res.status(200).json(data.generacionBruta);
};


