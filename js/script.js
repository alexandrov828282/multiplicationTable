let multiplier_1 = 7;
let multiplier_2 = 5;

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
        
        if (j > 0 && i > 0)
        {
            divCol.className = "col";
            divCol.innerHTML = i + multiplier_1 * (j-1) ;
        }

        //вставляем вновь созданный элемент в DOM
        divStr.append(divCol);
    }
}

//rectangleSixe(multiplier_1, multiplier_2);

// let div = document.createElement('div');
// div.className = "alert";

function rectangleSixe(side1, side2) {
    let elems = document.getElementsByClassName("col");

    elems[0].style.width = "300px";

    if (side1 == 1 || side2 == 1) {
        for (let elem of elems) {
            elem.style.width = "300px";
            elem.style.height = "300px";
        }
    }

    if (side1 == 2 || side2 == 2) {
        for (let elem of elems) {
            elem.style.width = "200px";
            elem.style.height = "200px";
        }
    }
}
