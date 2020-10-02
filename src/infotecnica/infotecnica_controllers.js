const cenServiceCentral = require('../services/centrales');
const cenServiceInfo = require('../services/infotecnica');


/**
 * Return information technique
 * @description Return information technique about all the central generation in CEN
 * @param {number} idinfotecnica Numeric id in infotecnica
 * @return  {object} HTTP status code - 200, 500.
 */
exports.getCentralInfo = async (req, res)  => {
  const params = req.body;

  console.log('[getCentralInfo][Request]' );
  try {
    const centralInfo = await cenServiceInfo.getCentralInfo(params.idinfotecnica);
    res.status(200).json({data: centralInfo});
  } catch (err) {
    console.log('[getCentralInfo][Error] ', err);
    res.status(500).send({err});
  }
};




