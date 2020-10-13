let multiplier_1 = 1;
let multiplier_2 = 1;

let divStr;
let divCol;
let elemExpression;

//пропишем пример на странице


//получим контейнер, куда ьудем втавлять
let elemContainer = document.querySelector("#container");

for (let i = 0; i <= multiplier_1; i++) {
    //создадим div.str для вставки
    divStr = document.createElement("div");
    divStr.className = "str";
    //вставляем вновь созданный элемент в DOM
    elemContainer.append(divStr);

    for (let j = 0; j <= multiplier_2; j++) {
        //создадим div.col для вставки
        divCol = document.createElement("div");

        if (j == 0 || i == 0) {
            divCol.className = "index-cell";
            if (j > 0 && i == 0) divCol.innerHTML = j;
            if (j == 0 && i > 0) divCol.innerHTML = i;

        } else {
            divCol.className = "col";
        }

        //вставляем вновь созданный элемент в DOM
        divStr.append(divCol);
    }
}

// let div = document.createElement('div');
// div.className = "alert";
