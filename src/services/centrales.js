const axios = require('axios');
const { AUTH_KEY } = require("../config/env");

const URL_central = 'https://api-desarrolladores.coordinador.cl/generacion-bruta-real/v1/generacion-bruta-reales/'

exports.getGenCentral = async (fecha, idcentral) => {
  let params = {
                "fecha": fecha,
                "limite": 24,
                "offset": 0
              };

  let data;
  try { 
    await axios.get(`${URL_central}${idcentral}.json/?auth_key=${AUTH_KEY}`, { params: params }).then(result => {
      console.log(result);
      data = result.data;
    });
    return data;
  } catch(err) {
    throw err.status;
  }
};