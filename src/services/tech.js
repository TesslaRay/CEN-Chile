var moment = require('moment'); // require

const yesterday = moment().add(-1, 'days').add(-3, 'hours').toISOString().split('T')[0];

const cenServiceCentral = require('../services/centrales');
const cenServiceInfo = require('../services/infotecnica');

exports.getTech = async (idcentral) => {
  console.log('[getTech][Request]' );
  console.log('[getTech] Yesterday:', yesterday );

  let tipo;
  let name;
  try {
    const dataGenCentral = await cenServiceCentral.getGenCentral(yesterday, idcentral);
    let genCentral = 0;
    for (let i = 0;  i < dataGenCentral.generacionBruta.length; i++) {
      genCentral = genCentral + dataGenCentral.generacionBruta[i].generacion;
    }

    try {
      const dataCentralInfo = await cenServiceInfo.getCentralInfo(1, 0, idcentral);
      tipo = dataCentralInfo.result[0].tipo;
      name = dataCentralInfo.result[0].nombre;
    } catch (err){

    }
    
    let central = {"Name" : name, "tipo" : tipo, "genCentral" : genCentral};
    console.log(`[getTech][Res] ${genCentral}`);

    return genCentral
  } catch (err) {
    console.log('[getTech][Error] ', err);
    return err
  }
}




