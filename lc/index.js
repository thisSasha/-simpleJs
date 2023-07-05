import * as lc from "https://thissasha.github.io/shablons/listConstructor.js"
let myList = new lc.List({
    parent: document.body, //Ваш родитель объекта. Обязательно
    style: ["background: white; color: white;", "text-decoration: underline;"], //Стили ["стили ul", "стили li"]
    articleParams: {'data-param':'ps'}, //Параметры li
});