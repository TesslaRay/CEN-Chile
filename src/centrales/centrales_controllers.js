const cenService = require('../services/centrales');

/**
 * Return gross generation of CEN
 * @description Return gross generation for all central of CEN
 * @params {string} fecha Date to query
 * @return  {object} HTTP status code - 200, 500.
 */
exports.getCentralesGen = async (req, res)  => {
  const params = req.body;

  console.log('[getCentralesGen][Request]' );
  try {
    const genCentrales = await cenService.getGenCentrales(params.fecha, params.limite, params.offset);
    console.log('[getCentralesGen][Res] ', genCentrales);
    res.status(200).json({data: genCentrales});
  } catch (err) {
    console.log('[getCentralesGen][Error] ', err);
    res.status(500).send({err});
  }
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

  console.log('[getCentralGen][Request]' );
  try {
    const genCentral = await cenService.getGenCentral(params.fecha, params.idcentral);
    console.log('[getCentralGen][Res] ', genCentral);
    res.status(200).json({data: genCentral});
  } catch (err) {
    console.log('[getCentralGen][Error] ', err);
    res.status(500).send({err});
  }
};


