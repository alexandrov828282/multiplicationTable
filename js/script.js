let multiplier_1 = 9;
let multiplier_2 = 9;

let divStr;
let divCol;
let elemExpression;
let elemExpressionIns;

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

let trueRes = (multiplier_1 * multiplier_2).toString();

let elemResult = document.getElementById("result");

let elemInput = document.getElementById("input");
elemInput.focus();
elemInput.addEventListener("blur", () => {
    elemInput.focus();
});

elemInput.addEventListener("input", () => {
    // console.log(elemInput.value.length,String(trueRes).length)

    // if (elemInput.value.lenght != trueRes.length){
    //     if(elemInput.value == String(trueRes)){
    //         elemResult.innerHTML = 'Верно!';
    //     }
    // }

    //if (String(elemInput.value).lenght == 2) {
        alert(elemInput.value.length);
    //}
});

function rectangleSize(side1, side2) {
    let elems = document.getElementsByClassName("col");
    let elemsVertical = document.getElementsByClassName("col-vertical");
    let elemsHorizontal = document.getElementsByClassName("col-horizontal");
    let elemsHorFinal = document.getElementsByClassName("col-final");

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
