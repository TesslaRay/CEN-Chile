const axios = require('axios');
const { AUTH_KEY } = require("../config/env");

const URL_centrales_info = 'https://api-desarrolladores.coordinador.cl/infotecnica/v1/centrales.json/?auth_key='

exports.getCentralInfo = async (limite, offset, idinfotecnica) => {
  let params = {
                "limite": limite,
                "offset": offset,
                "idinfotecnica": idinfotecnica,
                "nombre": "",
                "mnemotecnico": "",
                "descripcion": "",
                "codigo": "",
                "numero": "",
                "propietario": "",
                "tipo": ""
              };

  let data;

  try { 
    await axios.get(`${URL_centrales_info}${AUTH_KEY}`, { params: params }).then(result => {
      data = result.data;
    });
    return data;
  } catch(err) {
    throw err.status;
  }
};