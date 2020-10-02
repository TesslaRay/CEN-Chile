var moment = require('moment'); // require

const cenService = require('../services/centrales');

const yesterday = moment().add(-1, 'days').add(-3, 'hours').toISOString().split('T')[0];

exports.getTech = async (req, res) => {
  console.log('[getTech][Request]' );
  console.log('[getTech] Yesterday:', yesterday );

  try {
    const dataGenCentral = await cenService.getGenCentral(yesterday, 490);
    let genCentral = 0;
    for (let i = 0;  i < dataGenCentral.generacionBruta.length; i++) {
      genCentral = genCentral + dataGenCentral.generacionBruta[i].generacion;
    }
    console.log('[getTech][Res] ', genCentral);
    res.status(200).json({genCentral: genCentral});
  } catch (err) {
    console.log('[getTech][Error] ', err);
    res.status(500).send({err});
  }
}




