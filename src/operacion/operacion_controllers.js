
const cenServiceCentral = require('../services/tech');

exports.mixForTech = async (req, res) => {

  const idsCentrales = arrayCentrales.reduce((arr, idcentral) => {
    arr.push(getGenAndTypeCentral(idcentral));
    return arr;
  }, []);

  const wena = await Promise.all(idsCentrales).then((result) => {
    console.log(result);
  });
  
  for ( let i = 0; i < wena.length; i++) {
    console.log(wena[i]);
  }

  res.status(200).json('wena');
}


// 
const cenServiceInfo = require('../services/infotecnica');

// TODO: poner en otra parte
/* **************************** */
// getArrayCentral();

let arrayCentrales = [];
async function getArrayCentral() {
  const n = 2;
  
  let centrales = await cenServiceInfo.getCentralInfo(n, 0, "");

  for (let i = 0;  i < centrales.result.length; i++) {
    arrayCentrales.push(centrales.result[i].id_infotecnica)
  }

  // centrales = await cenServiceInfo.getCentralInfo(100, 100, "");

  // for (let i = 0;  i < centrales.result.length; i++) {
  //   arrayCentrales.push(centrales.result[i].id_infotecnica)
  // }

  // centrales = await cenServiceInfo.getCentralInfo(100, 200, "");

  // for (let i = 0;  i < centrales.result.length; i++) {
  //   arrayCentrales.push(centrales.result[i].id_infotecnica)
  // }

  // centrales = await cenServiceInfo.getCentralInfo(100, 300, "");

  // for (let i = 0;  i < centrales.result.length; i++) {
  //   arrayCentrales.push(centrales.result[i].id_infotecnica)
  // }

  // centrales = await cenServiceInfo.getCentralInfo(100, 400, "");

  // for (let i = 0;  i < centrales.result.length; i++) {
  //   arrayCentrales.push(centrales.result[i].id_infotecnica)
  // }

  // centrales = await cenServiceInfo.getCentralInfo(100, 500, "");

  // for (let i = 0;  i < centrales.result.length; i++) {
  //   arrayCentrales.push(centrales.result[i].id_infotecnica)
  // }

  // centrales = await cenServiceInfo.getCentralInfo(100, 600, "");

  // for (let i = 0;  i < centrales.result.length; i++) {
  //   arrayCentrales.push(centrales.result[i].id_infotecnica)
  // }

  // centrales = await cenServiceInfo.getCentralInfo(100, 700, "");

  // for (let i = 0;  i < centrales.result.length; i++) {
  //   arrayCentrales.push(centrales.result[i].id_infotecnica)
  // }

  for (let i = 0;  i < arrayCentrales.length; i++) {
    console.log(arrayCentrales[i]);
  }

  console.log('Nº generadores en Chile: ', arrayCentrales.length);
}


// TODO: poner en otra parte tbm

const getGenAndTypeCentral = (idcentral) => {
  return new Promise((resolve, reject) => {
    const dataCentral = cenServiceCentral.getTech(idcentral).then(() => {
      return dataCentral;
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
  });
}


/* PUpetter de la página del CEN */
console.log('Prueba de sracping web de la página del CEN');
const puppeteer = require("puppeteer");

const chalk = require("chalk");
let fs = require("fs");

// MY OCD of colorful console.logs for debugging... IT HELPS
const error = chalk.bold.red;
const success = chalk.keyword("green");

(async () => {
  try {
    // open the headless browser
    let browser = await puppeteer.launch({ headless: true });
    // open a new page
    let page = await browser.newPage();
    // enter url in page
    await page.goto(`https://www.coordinador.cl/operacion/graficos/operacion-real/generacion-real-del-sistema/`);
    await page.click('div[id="Heading3"]');

    await page.waitForSelector("g.amcharts-pie-item");

    await page.screenshot({path: 'mix.png'});


    await page.waitForSelector("g.amcharts-pie-item");

    let data = await page.evaluate(() => {
      let genTipe = document.querySelectorAll(`g.amcharts-pie-item`);

      let dataArray = [];

      for (let i = 0; i < genTipe.length; i++) {
        dataArray[i] = {
          percentTipe: genTipe[i].getAttribute("aria-label"),
        }
      }

      return dataArray;
    })

    console.log(data);

    // let news = await page.evaluate(() => {
    //   let titleNodeList = document.querySelectorAll(`g.amcharts-pie-item-title`);
    //   // let linkList = document.querySelectorAll('a');
    //   let titleLinkArray = [];
    //   for (let i = 0; i < titleNodeList.length; i++) {
    //     titleLinkArray[i] = {
    //       title: titleNodeList[i].getAttribute("aria-label"),
    //       // link: linkList[i].getAttribute("href"),
    //     };
    //   }
    //   // console.log(linkList);
    //   return titleLinkArray;
    // });
    // console.log(news);
    await browser.close();
    // Writing the news inside a json file
    // fs.writeFile("einews.json", JSON.stringify(news), function(err) {
    //   if (err) throw err;
    //   console.log("Saved!");
    // });
    console.log(success("Browser Closed"));
  } catch (err) {
    // Catch and display errors
    console.log(error(err));
    await browser.close();
    console.log(error("Browser Closed"));
  }
})();