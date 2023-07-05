export { MMath, CColor, HHelp }
let MMath = Math;
MMath.middle = function (nums, type) {
    let ob = 0;
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        ob += el;
    };
    if (type === 'def' || type == undefined) {
        return ob / nums.length;
    } else if (type == 'roundUp') {
        return Math.floor(ob / nums.length);
    };
};
MMath.randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};
MMath.roundUp = function (number, before) {
    if (typeof before == 'object') {
        if (MMath.middle([before[0], before[1]]) > number) {
            return before[0]
        } else {
            return before[1]
        };
    } else if (before == undefined || before == 10 || before == '10') {
        return Math.round(number / 10) * 10;
    } else if (before == 5 || before == '5') {
        return Math.round(number / 5) * 5;
    };
};














let CColor = {};

CColor.hexToRGB = function (hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        rgb: `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    } : null;
};

CColor.rgbToHex = function (r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
};
CColor.getRandomColor = function (type) {
    let a;
    let letters;
    let color;
    if (type == 'default' || type == 'def ' || type == undefined) {
        letters = '0123456789ABCDEF';
        color = '#';
        a = 6
    } else if (type == 'Red') {
        letters = '0123456789ABCDEF';
        color = '#ff';
        a = 4;
    } else if (type == 'Blue') {
        letters = '0123456789ABCDEF';
        color = '#';
        a = 4;
    } else if (type == 'Green') {
        letters = '0123456789ABCDEF';
        color = '#';
    }
    if (type != 'Green' && type != 'Black' && type != 'White') {
        for (let i = 0; i < a; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };
    } else if(type == 'Green'){
        for (let i = 0; i < 2; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };
        color += 'ff';
        for (let i = 0; i < 2; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };
    } else {
        let rgb = MMath.randomNumber(0, 255);
        return CColor.rgbToHex(rgb, rgb, rgb);
    };
    if (type == 'Blue') {
        color += 'ff';
    };
    return color;
};














let HHelp = {};