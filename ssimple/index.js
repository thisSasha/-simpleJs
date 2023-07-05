import { MMath, CColor, HHelp } from "./ssimple.js";

console._log = console.log;

console.log = function () {
    document.querySelector('.example').innerText += arguments[0];
    let obj = document.createElement('br');
    document.querySelector('.example').appendChild(obj);
    console._log.apply(null, arguments);
};





console.log(CColor.hexToRGB('#fffb00').rgb);

console.log(CColor.rgbToHex(255, 251, 0));

console.log(MMath.middle([10, 9, 8, 10, 10]));

console.log(MMath.roundUp(18, 10));

console.log(MMath.roundUp(16, 5));

console.log(MMath.roundUp(16, [0, 100]));

console.log(CColor.getRandomColor('Red'));

console.log(CColor.getRandomColor('Green'));

console.log(CColor.getRandomColor('White'));

