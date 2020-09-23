const axios = require('axios');
const { AUTH_KEY } = require("../config/env");

const URL_centrales_info = 'https://api-desarrolladores.coordinador.cl/infotecnica/v1/centrales.json/?auth_key='

/**
 * Return information technique
 * @description Return information technique about all the central generation in CEN
 * @param {number} idinfotecnica Numeric id in infotecnica
 * @return  {object} HTTP status code - 200, 500.
 */
exports.getCentralesInfo = async (req, res)  => {
  const params = req.body;
  console.log("[getCentralesInfo][Request]", params);
  
  let data;
  await axios.get(`${URL_centrales_info}${AUTH_KEY}`, { params: params }).then(result => {
    data = result.data;
  }).catch(err => {
    console.log(err.code);
  });

  console.log("[getCentralesGen][Res]", data.result);
  res.status(200).json(data.result);
};




