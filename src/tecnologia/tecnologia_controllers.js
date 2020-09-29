const cenService = require('../services/centrales');

const today = new Date();
let yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
yesterday.toISOString().split('T', 1)[0];
console.log(yesterday);


exports.getTech = async (req, res) => {
  console.log('[getTech][Request]' );
  try {
    const dataGenCentral = await cenService.getGenCentral("2020-09-25", 127);
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




