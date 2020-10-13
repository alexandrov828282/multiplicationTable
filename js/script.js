let multiplier_1 = 3;
let multiplier_2 = 4;

let divStr;
let divCol;

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
        divCol.className = "col";
        //вставляем вновь созданный элемент в DOM
        divStr.append(divCol);
    }
}

// let div = document.createElement('div');
// div.className = "alert";
