const cenService = require('../services/centrales');

exports.getTech = async (req, res) => {
  console.log("[getTech][Request]");
  const genCentral = await cenService.getGenCentral("2020-09-22", 127);
  console.log(genCentral);
  console.log("[getTech][Res]");
}



// const promiseGetGenCentral = (idcentral) => {
//   return new Promise((resolve, reject) => {

//   })
// }

// let data;
// await axios.get(`${URL_central}${params.idcentral}.json/?auth_key=${AUTH_KEY}`, { params: params }).then(result => {
//   data = result.data;
// }).catch(err => {
//   console.log(err.code);
// });