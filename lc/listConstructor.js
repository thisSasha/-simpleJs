export { List, logProperties }
let myIL = -1;
function logProperties() {
    console.log('   Параметр   |       Описание     \n\
-------------------------------------\n\
style         |Стиль(массив [ul,li])\n\
direction     |Напраление доб. li\n\
id            |Id обьекта\n\
width         |Ширина обьекта\n\
height        |Высота обьекта\n\
parent*       |Родитель списка\n\
*-обязательно');
}
function List(params) {
    myIL++
    if (params.parent == undefined) {
        console.error('reqiredParameter@parent. Обязательный параметр parent в params');
        return false;
    };
    this.articlesParams = params.articlesParams;
    this.ul = document.createElement('ul');
    this.ul.className = 'myList' + myIL.toString();
    this.id = this.ul.className;
    this.ul.id = 'myList' + myIL.toString();
    this.articles = [];
    let thisForChildren = this;
    if (typeof params.style == 'object') {
        this.ul.style = params.style[0];
        this.liStyle = params.style[1];

    };
    params.parent.prepend(this.ul);
    this.delLi = function (text, ...type) {
        let texxt;
        if (typeof text == "object") {
            texxt = text[0];
        } else {
            texxt = text;
        };
        if (type[0] == undefined || type[0] == 'id') {
            thisForChildren.ul.removeChild(document.getElementById(texxt));
        } else if (type[0] == 'text') {
            for (let i = 0; i < this.articles.length; i++) {
                const element = this.articles[i];
                if (element.innerText == texxt) {
                    thisForChildren.ul.removeChild(document.getElementById(element.id));
                };
            };
        };
    };
    this.clear = function() {
        for (let i = 0; i < this.articles.length; i++) {
            const el = this.articles[i];
            this.delLi(el.innerHTML);
        };
    };
    this.addLi = function (text, ...customAtributtes) {
        let texxt
        if (typeof text == "object") {
            texxt = text[0];
            thisForChildren.localStorage[thisForChildren.localStorage.keyVar] = text[1]
        } else {
            texxt = text;
        };
        let li = document.createElement('li');
        li.id = 'li' + this.articles.length
        li.style.listStyle = this.listStyleType;
        li.style = thisForChildren.liStyle;
        li.innerHTML = texxt;
        if (thisForChildren.articlesParams != undefined) {
            thisForChildren.articlesParams.forEach(el => {
                let key = el[0];
                li[key] = el[1];
            });
        }
        if (customAtributtes != undefined) {
            customAtributtes.forEach(el => {
                let key = el[0][0];
                let value = el[0][1];
                li.setAttribute(key, value)
            });
        };
        if (this.direction == 'top') {
            thisForChildren.articles.push(li);
            thisForChildren.ul.appendChild(li);
        } else if (this.direction == 'down') {
            thisForChildren.articles.unshift(li);
            thisForChildren.ul.chi
        } else {
            this.direction = 'top';
            thisForChildren.articles.push(li);
            thisForChildren.ul.prepend(li)
        };
    };
    if (params.id != undefined) {
        this.ul.className = params.id;
        this.ul.id = params.id;
        this.id = params.id;
    };
    thisForChildren = this;
    document.getElementById(this.id).innerHTML = this.ul.innerHTML;
};