MMath : {<br />
ㅤㅤMMath.middle([1, 4, 4]) // Среднее арифмитическое >> 3<br />
ㅤㅤMMath.roundUp /* Округление */: { <br />
  ㅤㅤMMath.roundUp(12, 5) // Оккругление до 5 >> 10<br />
ㅤㅤㅤMMath.roundUp(18, 10) || Math.roundUp(18) // Округление до 10 >> 20<br />
ㅤㅤㅤMMath.roundUp(17, [0, 100]) // Округление от и до >> 0<br />
ㅤㅤ}<br />
ㅤㅤMMath.randomNumber(1, 10) // Рандом от и до >> 5<br />
}<br />


CColor: {
ㅤㅤCColor.hexToRgb('#ffffff) // hex to rgb >> {r:255, g:255, b:255, rgb:'rgb(255,255,255)}
ㅤㅤCColor.rgbToHex(255, 255, 255) // rgb to hex >> '#ffffff'
ㅤㅤCColor.randomColor: { // Рандомный цвет в hex
ㅤㅤㅤ('White') // От белого до чёрного
ㅤㅤㅤ('Green') // Зелёный оттенок
ㅤㅤㅤ('Blue') // Синий оттенок
ㅤㅤㅤ('Red') // Красный оттенок
ㅤㅤㅤ() // Рандом цвет
