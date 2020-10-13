let multiplier_1 = 5;
let multiplier_2 = 5;

let trueFlag = false;
let divStr;
let divCol;
let elemExpression;
let elemExpressionIns;

// let trueRes = (multiplier_1 * multiplier_2).toString();
let elemResult = document.getElementById("result");
let elemInput = document.getElementById("input");

let elems = document.getElementsByClassName("col");
let elemsVertical = document.getElementsByClassName("col-vertical");
let elemsHorizontal = document.getElementsByClassName("col-horizontal");
let elemsHorFinal = document.getElementsByClassName("col-final");

multiplier_1 = Math.floor(Math.random() * 9) + 1;
multiplier_2 = Math.floor(Math.random() * 9) + 1;
let trueRes = (multiplier_1 * multiplier_2).toString();

//фокус держим на input всегда
elemInput.focus();
elemInput.addEventListener("blur", () => {
    elemInput.focus();
});

//отловим изменения в input
elemInput.addEventListener("input", () => {

    console.log(elemInput.value.length,trueRes.length)

    if (elemInput.value.length == trueRes.length){
        if (elemInput.value == trueRes){
            rectangleSize(multiplier_1, multiplier_2);
            actoinTrue();
            // elemResult.innerHTML = 'верно';
            trueFlag = true;
            // location.reload();
        }
        else{
            // console.log(multiplier_1,multiplier_2)
            console.log(elemInput.value,trueRes)
            actoinFalse();
        }
    }
});

//отловим нажатие на клавитуре
addEventListener("keydown", () => {
    if (trueFlag) {
        // elemInput.value = '';
        location.reload();
    }
});

//пропишем пример на странице
elemExpression = document.querySelector("#expression");
elemExpressionIns = document.createElement("p");
elemExpressionIns.className = "expression";
elemExpressionIns.innerHTML = `${multiplier_1} x ${multiplier_2} = `;
elemExpression.prepend(elemExpressionIns);

//получим контейнер, куда ьудем втавлять
let elemContainer = document.querySelector("#container");

// let count = 1;

for (let i = 0; i <= multiplier_1; i++) {
    //создадим div.str для вставки
    divStr = document.createElement("div");
    // divStr.className = "str";
    //вставляем вновь созданный элемент в DOM
    elemContainer.append(divStr);

    for (let j = 0; j <= multiplier_2; j++) {
        //создадим div.col для вставки
        divCol = document.createElement("div");

        if (j == 0 && i == 0) {
            divCol.className = "col-null";
        }

        if (j > 0 && i == 0) {
            divCol.className = "col-vertical";
            divCol.innerHTML = j;
        }

        if (j == 0 && i > 0) {
            divCol.className = "col-horizontal";
            divCol.innerHTML = i;
        }

        if (j > 0 && i > 0) {
            if (i == multiplier_1 && j == multiplier_2) {
                divCol.className = "col-final";
                divCol.innerHTML = i + multiplier_1 * (j - 1);
            } else {
                divCol.className = "col";
                divCol.innerHTML = i + multiplier_1 * (j - 1);
            }
        }

        //вставляем вновь созданный элемент в DOM
        divStr.append(divCol);
    }
}
rectangleSize(multiplier_1, multiplier_2);
//скроем цифры на квадратах до правильного ответа
// let elems = document.getElementsByClassName("col");
for (let elem of elems) {
    elem.style.fontSize = '0px';
}

// let elemsHorFinal = document.getElementsByClassName("col-final");
for (let elem of elemsHorFinal) {
    elem.style.fontSize = '0px';
}

function actoinTrue(){
    elemResult.innerHTML = 'верно';
}

function actoinFalse(){
    elemResult.innerHTML = 'не верно';
    elemInput.value = '';
}

function rectangleSize(side1, side2) {
    // let elems = document.getElementsByClassName("col");
    // let elemsVertical = document.getElementsByClassName("col-vertical");
    // let elemsHorizontal = document.getElementsByClassName("col-horizontal");
    // let elemsHorFinal = document.getElementsByClassName("col-final");

    let recSize;
    let fSize;

    if (side1 == 1 || side2 == 1) {
        recSize = "500px";
        fSize = "200px";
    }

    if (side1 == 2 || side2 == 2) {
        recSize = "250px";
        fSize = "200px";
    }

    if (side1 == 3 || side2 == 3) {
        recSize = "166px";
        fSize = "150px";
    }

    if (side1 == 4 || side2 == 4) {
        recSize = "125px";
        fSize = "80px";
    }

    if (side1 == 5 || side2 == 5) {
        recSize = "100px";
        fSize = "60px";
    }

    if (side1 == 6 || side2 == 6) {
        recSize = "83px";
        fSize = "50px";
    }

    if (side1 == 7 || side2 == 7) {
        recSize = "71px";
        fSize = "45px";
    }

    if (side1 == 8 || side2 == 8) {
        recSize = "62px";
        fSize = "40px";
    }

    if (side1 == 9 || side2 == 9) {
        recSize = "55px";
        fSize = "35px";
    }

    for (let elem of elems) {
        elem.style.width = recSize;
        elem.style.height = recSize;
        elem.style.fontSize = fSize;
    }

    for (let elem of elemsVertical) {
        elem.style.height = recSize;
    }

    for (let elem of elemsHorizontal) {
        elem.style.width = recSize;
    }

    for (let elem of elemsHorFinal) {
        elem.style.width = recSize;
        elem.style.height = recSize;
        elem.style.fontSize = fSize;
    }
}
