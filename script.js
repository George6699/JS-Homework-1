const content1 = button1.innerHTML
button1.innerHTML = '<a href="https://fontawesome.com/icons/basketball-ball?style=solid">Переход на сайт</a>'
const content2 = button2.innerHTML
button2.innerHTML = '<p>Изменение стилей</p>'
const content3 = button3.innerHTML
button3.innerHTML = '<p>Удаление и добавление</p>'

button1.style.cssText = `width:90px;
background: blueviolet;
color:yellow;
text-align: center;`;
button2.style.cssText = `width:80px;
background: green;
color:gold;
text-align: center;`;
button3.style.cssText = `width:100px;
background: blue;
color:black;
text-align: center;`;

document.body.style.fontWeight = "300"

document.getElementById("button2").onclick = function(){
    addFontWeight()
}

function addFontWeight(){
    if(document.body.style.fontWeight == "300"){
        document.body.style.fontWeight = "900";
    }
    else{
        document.body.style.fontWeight = "300";
    }
}

document.getElementById("button3").onclick = function(){
    deleteAll()
}
function deleteAll(){
    document.body.innerHTML = '<div id="FlexBlock"><div>Раз</div> <div>Два</div> <div>Три</div></div>'
    var FlexBlock = document.getElementById("FlexBlock");
    FlexBlock.style.cssText = `display: flex;
    justify-content: space-between;
    width: 300px;
    background: green;
    color: blue;
    margin: 10px;
    padding:10px;
    `;
}

var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
    }
var summ = 0;
var k = 0;

for (let key in term) {
    summ+= term[key];
    k++;
}
summ/=k;
alert("Ср.знач.темп.=" + String(summ));

function search(obj){
    var maxTemp = 0;
    for (let key in obj){
        if(maxTemp<obj[key]){
            maxTemp = obj[key];
        }
    }
    alert("Макс.знач.темп. = " + String(maxTemp))
}
search(term)