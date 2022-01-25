/**
 * @description LTE EARFCN Calculator
 * @author Taesu Hyeon
 * @license MIT
 */
const table = [{"band":1,"name":"2100","bandType":"FDD","DLOnly":false,"FDL_Low":2110,"FDL_High":2170,"NDL_Min":0,"NDL_Max":599,"FUL_Low":1920,"FUL_High":1980,"NUL_Min":18000,"NUL_Max":18599},{"band":2,"name":"1900 PCS","bandType":"FDD","DLOnly":false,"FDL_Low":1930,"FDL_High":1990,"NDL_Min":600,"NDL_Max":1199,"FUL_Low":1850,"FUL_High":1910,"NUL_Min":18600,"NUL_Max":19199},{"band":3,"name":"1800+","bandType":"FDD","DLOnly":false,"FDL_Low":1805,"FDL_High":1880,"NDL_Min":1200,"NDL_Max":1949,"FUL_Low":1710,"FUL_High":1785,"NUL_Min":19200,"NUL_Max":19949},{"band":4,"name":"AWS-1","bandType":"FDD","DLOnly":false,"FDL_Low":2110,"FDL_High":2155,"NDL_Min":1950,"NDL_Max":2399,"FUL_Low":1710,"FUL_High":1755,"NUL_Min":19950,"NUL_Max":20399},{"band":5,"name":"850","bandType":"FDD","DLOnly":false,"FDL_Low":869,"FDL_High":894,"NDL_Min":2400,"NDL_Max":2649,"FUL_Low":824,"FUL_High":849,"NUL_Min":20400,"NUL_Max":20649},{"band":6,"name":"UMTS only","bandType":"FDD","DLOnly":false,"FDL_Low":875,"FDL_High":885,"NDL_Min":2650,"NDL_Max":2749,"FUL_Low":830,"FUL_High":840,"NUL_Min":20650,"NUL_Max":20749},{"band":7,"name":"2600","bandType":"FDD","DLOnly":false,"FDL_Low":2620,"FDL_High":2690,"NDL_Min":2750,"NDL_Max":3449,"FUL_Low":2500,"FUL_High":2570,"NUL_Min":20750,"NUL_Max":21449},{"band":8,"name":"900 GSM","bandType":"FDD","DLOnly":false,"FDL_Low":925,"FDL_High":960,"NDL_Min":3450,"NDL_Max":3799,"FUL_Low":880,"FUL_High":915,"NUL_Min":21450,"NUL_Max":21799},{"band":9,"name":"1800","bandType":"FDD","DLOnly":false,"FDL_Low":1844.9,"FDL_High":1879.9,"NDL_Min":3800,"NDL_Max":4149,"FUL_Low":1749.9,"FUL_High":1784.9,"NUL_Min":21800,"NUL_Max":22149},{"band":10,"name":"AWS-1+","bandType":"FDD","DLOnly":false,"FDL_Low":2110,"FDL_High":2170,"NDL_Min":4150,"NDL_Max":4749,"FUL_Low":1710,"FUL_High":1770,"NUL_Min":22150,"NUL_Max":22749},{"band":11,"name":"1500 Lower1+","bandType":"FDD","DLOnly":false,"FDL_Low":1475.9,"FDL_High":1495.9,"NDL_Min":4750,"NDL_Max":4949,"FUL_Low":1427.9,"FUL_High":1447.9,"NUL_Min":22750,"NUL_Max":22949},{"band":12,"name":"700 a","bandType":"FDD","DLOnly":false,"FDL_Low":729,"FDL_High":746,"NDL_Min":5010,"NDL_Max":5179,"FUL_Low":699,"FUL_High":716,"NUL_Min":23010,"NUL_Max":23179},{"band":13,"name":"700 b","bandType":"FDD","DLOnly":false,"FDL_Low":746,"FDL_High":756,"NDL_Min":5180,"NDL_Max":5279,"FUL_Low":777,"FUL_High":787,"NUL_Min":23180,"NUL_Max":23279},{"band":14,"name":"700 PS","bandType":"FDD","DLOnly":false,"FDL_Low":758,"FDL_High":768,"NDL_Min":5280,"NDL_Max":5379,"FUL_Low":788,"FUL_High":798,"NUL_Min":23280,"NUL_Max":23379},{"band":17,"name":"700 b","bandType":"FDD","DLOnly":false,"FDL_Low":734,"FDL_High":746,"NDL_Min":5730,"NDL_Max":5849,"FUL_Low":704,"FUL_High":716,"NUL_Min":23730,"NUL_Max":23849},{"band":18,"name":"800 Lower","bandType":"FDD","DLOnly":false,"FDL_Low":860,"FDL_High":875,"NDL_Min":5850,"NDL_Max":5999,"FUL_Low":815,"FUL_High":830,"NUL_Min":23850,"NUL_Max":23999},{"band":19,"name":"800 Upper","bandType":"FDD","DLOnly":false,"FDL_Low":875,"FDL_High":890,"NDL_Min":6000,"NDL_Max":6149,"FUL_Low":830,"FUL_High":845,"NUL_Min":24000,"NUL_Max":24149},{"band":20,"name":"800 DD","bandType":"FDD","DLOnly":false,"FDL_Low":791,"FDL_High":821,"NDL_Min":6150,"NDL_Max":6449,"FUL_Low":832,"FUL_High":862,"NUL_Min":24150,"NUL_Max":24449},{"band":21,"name":"1500 Upper","bandType":"FDD","DLOnly":false,"FDL_Low":1495.9,"FDL_High":1510.9,"NDL_Min":6450,"NDL_Max":6599,"FUL_Low":1447.9,"FUL_High":1462.9,"NUL_Min":24450,"NUL_Max":24599},{"band":22,"name":"3500","bandType":"FDD","DLOnly":false,"FDL_Low":3510,"FDL_High":3590,"NDL_Min":6600,"NDL_Max":7399,"FUL_Low":3410,"FUL_High":3490,"NUL_Min":24600,"NUL_Max":25399},{"band":23,"name":"2000 S-band","bandType":"FDD","DLOnly":false,"FDL_Low":2180,"FDL_High":2200,"NDL_Min":7500,"NDL_Max":7699,"FUL_Low":2000,"FUL_High":2020,"NUL_Min":25500,"NUL_Max":25699},{"band":24,"name":"1600 L-band","bandType":"FDD","DLOnly":false,"FDL_Low":1525,"FDL_High":1559,"NDL_Min":7700,"NDL_Max":8039,"FUL_Low":1626.5,"FUL_High":1660.5,"NUL_Min":25700,"NUL_Max":26039},{"band":25,"name":"1900+","bandType":"FDD","DLOnly":false,"FDL_Low":1930,"FDL_High":1995,"NDL_Min":8040,"NDL_Max":8689,"FUL_Low":1850,"FUL_High":1915,"NUL_Min":26040,"NUL_Max":26689},{"band":26,"name":"850+","bandType":"FDD","DLOnly":false,"FDL_Low":859,"FDL_High":894,"NDL_Min":8690,"NDL_Max":9039,"FUL_Low":814,"FUL_High":849,"NUL_Min":26690,"NUL_Max":27039},{"band":27,"name":"800 SMR","bandType":"FDD","DLOnly":false,"FDL_Low":852,"FDL_High":869,"NDL_Min":9040,"NDL_Max":9209,"FUL_Low":807,"FUL_High":824,"NUL_Min":27040,"NUL_Max":27209},{"band":28,"name":"700 APT","bandType":"FDD","DLOnly":false,"FDL_Low":758,"FDL_High":803,"NDL_Min":9210,"NDL_Max":9659,"FUL_Low":703,"FUL_High":748,"NUL_Min":27210,"NUL_Max":27659},{"band":29,"name":"700 d","bandType":"FDD","DLOnly":true,"FDL_Low":717,"FDL_High":728,"NDL_Min":9660,"NDL_Max":9769},{"band":30,"name":"2300 WCS","bandType":"FDD","DLOnly":false,"FDL_Low":2350,"FDL_High":2360,"NDL_Min":9770,"NDL_Max":9869,"FUL_Low":2305,"FUL_High":2315,"NUL_Min":27660,"NUL_Max":27759},{"band":31,"name":"450","bandType":"FDD","DLOnly":false,"FDL_Low":462.5,"FDL_High":467.5,"NDL_Min":9870,"NDL_Max":9919,"FUL_Low":452.5,"FUL_High":457.5,"NUL_Min":27760,"NUL_Max":27809},{"band":32,"name":"1500 L-band","bandType":"FDD","DLOnly":true,"FDL_Low":1452,"FDL_High":1496,"NDL_Min":9920,"NDL_Max":10359},{"band":33,"name":"TD 1900","bandType":"TDD","DLOnly":true,"FDL_Low":1900,"FDL_High":1920,"NDL_Min":36000,"NDL_Max":36199},{"band":34,"name":"TD 2000","bandType":"TDD","DLOnly":true,"FDL_Low":2010,"FDL_High":2025,"NDL_Min":36200,"NDL_Max":36349},{"band":35,"name":"TD PCS Lower","bandType":"TDD","DLOnly":true,"FDL_Low":1850,"FDL_High":1910,"NDL_Min":36350,"NDL_Max":36949},{"band":36,"name":"TD PCS Upper","bandType":"TDD","DLOnly":true,"FDL_Low":1930,"FDL_High":1990,"NDL_Min":36950,"NDL_Max":37549},{"band":37,"name":"TD PCS Center gap","bandType":"TDD","DLOnly":true,"FDL_Low":1910,"FDL_High":1930,"NDL_Min":37550,"NDL_Max":37749},{"band":38,"name":"TD 2600","bandType":"TDD","DLOnly":true,"FDL_Low":2570,"FDL_High":2620,"NDL_Min":37750,"NDL_Max":38249},{"band":39,"name":"TD 1900+","bandType":"TDD","DLOnly":true,"FDL_Low":1880,"FDL_High":1920,"NDL_Min":38250,"NDL_Max":38649},{"band":40,"name":"TD 2300","bandType":"TDD","DLOnly":true,"FDL_Low":2300,"FDL_High":2400,"NDL_Min":38650,"NDL_Max":39649},{"band":41,"name":"TD 2500","bandType":"TDD","DLOnly":true,"FDL_Low":2496,"FDL_High":2690,"NDL_Min":39650,"NDL_Max":41589},{"band":42,"name":"TD 3500","bandType":"TDD","DLOnly":true,"FDL_Low":3400,"FDL_High":3600,"NDL_Min":41590,"NDL_Max":43589},{"band":43,"name":"TD 3700","bandType":"TDD","DLOnly":true,"FDL_Low":3600,"FDL_High":3800,"NDL_Min":43590,"NDL_Max":45589},{"band":44,"name":"TD 700","bandType":"TDD","DLOnly":true,"FDL_Low":703,"FDL_High":803,"NDL_Min":45590,"NDL_Max":46589},{"band":45,"name":"TD 1500","bandType":"TDD","DLOnly":true,"FDL_Low":1447,"FDL_High":1467,"NDL_Min":46590,"NDL_Max":46789},{"band":46,"name":"TD Unlicensed","bandType":"TDD","DLOnly":true,"FDL_Low":5150,"FDL_High":5925,"NDL_Min":46790,"NDL_Max":54539},{"band":47,"name":"TD V2X","bandType":"TDD","DLOnly":true,"FDL_Low":5855,"FDL_High":5925,"NDL_Min":54540,"NDL_Max":55239},{"band":48,"name":"TD 3600","bandType":"TDD","DLOnly":true,"FDL_Low":3550,"FDL_High":3700,"NDL_Min":55240,"NDL_Max":56739},{"band":49,"name":"TD 3600r","bandType":"TDD","DLOnly":true,"FDL_Low":3550,"FDL_High":3700,"NDL_Min":56740,"NDL_Max":58239},{"band":50,"name":"TD 1500+","bandType":"TDD","DLOnly":true,"FDL_Low":1432,"FDL_High":1517,"NDL_Min":58240,"NDL_Max":59089},{"band":51,"name":"TD 1500-","bandType":"TDD","DLOnly":true,"FDL_Low":1427,"FDL_High":1432,"NDL_Min":59090,"NDL_Max":59139},{"band":52,"name":"TD 3300","bandType":"TDD","DLOnly":true,"FDL_Low":3300,"FDL_High":3400,"NDL_Min":59140,"NDL_Max":60139}];

// TODO: Do you want to slice if the end of value ".0"? Do not?
// const regex = /.0$/;
// earfcn.match(regex) ? earfcn.substr(0, earfcn.length - 2) : earfcn;

const LTE = {
  lteBandTable: table,
  /**
   * Calculate the frequeny using earfcn and band.
   * @param {number} inputBand LTE Band.
   * @param {number} freq LTE Frequency.
   * @returns {number}
   */
  freqToEarfcnByBand: (inputBand, freq) => {
    for (let element of table) {
      let earfcn;
      if (inputBand == element.band) {
        if (freq >= element.FDL_Low && freq <= element.FDL_High) {
          earfcn = (freq - element.FDL_Low) * 10 + element.NDL_Min;
          earfcn = earfcn > element.NDL_Max ? earfcn - 1 : earfcn;
        } else if (freq >= element.FUL_Low && freq <= element.FUL_High) {
          earfcn = (freq - element.FUL_Low) * 10 + element.NUL_Min;
          earfcn = earfcn > element.NUL_Max ? earfcn - 1 : earfcn;
        } else {
          console.error("[Error] Wrong frequency value.");
          return false;
        }

        return earfcn.toFixed(1);
      }
    }
  },
  /**
   * Calculate the frequency using earfcn.
   * @param {number} earfcn LTE earfcn value.
   * @returns {number}
   */
  earfcnToFreq: earfcn => {
    for (let element of table) {
      let freq;
      // Check Uplink Earfcn
      if (earfcn >= 18000 && earfcn < 36000) {
        if (earfcn >= element.NUL_Min && earfcn <= element.NUL_Max) {
          freq = element.FUL_Low + 0.1 * (earfcn - element.NUL_Min);
        }
      }
      // Check Downlink Earfcn
      else if (earfcn < 36000 || (earfcn > 65535 && earfcn <= 98303)) {
        if (earfcn >= element.NDL_Min && earfcn <= element.NDL_Max) {
          freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
        }
      }
      // Check TDD Uplink Earfcn
      else if (earfcn >= 36000 && earfcn <= 65535) {
        if (earfcn >= element.NDL_Min && earfcn <= element.NDL_Max) {
          freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
        }
      }

      if (freq) {
        return freq.toFixed(1);
      }
    }

    console.error("[Error] Wrong earfcn value.");
    return false;
  }
};

// module.exports = LTE;

export default LTE;
