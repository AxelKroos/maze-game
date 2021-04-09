let wrapper = document.querySelector('#wrapper');
let table = document.querySelector('#table');

/*Создаём поле с путями*/
let ways = document.createElement('div');
ways.classList.add('ways');
wrapper.appendChild(ways);

/*Создаём рандомайзер для точки старта*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Массив с полями*/
let arrTables = [];

/*Варианты ходов для каждой ячейки в поле*/
arrayVariants = [];

/*Создаём поля*/
for (let i = 0; i < 9; i++) {
    let field = document.createElement('div');
    field.classList.add('field');
    table.appendChild(field);
    arrTables.push(field);
    field.addEventListener('click', () => {
       if (currentField == i) {
           alert('Правильно')
       } else {
           alert('Неправильно')
       }
    });

    /*Каждому полю мы условием подбираем возможные варианты ходов*/
    let variants = [];
    if (i == 0 || i == 1 || i == 2 ) {
        variants.push('вниз');
    }
    if (i == 2 || i == 5 || i == 8) {
        variants.push('влево');
    }
    if (i == 6 || i == 7 || i == 8) {
        variants.push('вверх');
    }
    if (i == 0 || i == 3 || i == 6) {
        variants.push('вправо');
    }
    if (i == 1 || i == 4 || i == 7) {
        variants.push('вправо', 'влево');
    }
    if (i == 3 || i == 4 || i == 5) {
        variants.push('вниз', 'вверх');
    }

    /*Рандомим ход из возможных вариантов*/
    let num = getRandomIntInclusive(0, variants.length - 1);

    /*Избегаем отрицательного значения при выборе элемента массива*/
    if (num < 0) {
        num += 1;
    }

    arrayVariants.push(variants);
}

let currentField;

/*Создаём ячейки путей. Каждый цикл создания ячейки путей мы спрашиваем,
 какие условия подходят нашему номеру блока*/
for (let i = 0; i < 10; i++) {
    if (i == 0) {
        currentField = getRandomIntInclusive(0, 9);
        /*Рандомим точку старта*/
        arrTables[currentField].classList.add('start');
        arrTables[currentField].innerHTML = 'Старт';
    }
    let way = document.createElement('div');
    way.classList.add('way');
    let num = getRandomIntInclusive(0, arrayVariants[currentField].length - 1);
    way.innerHTML = arrayVariants[currentField][num];
    ways.appendChild(way);


    /*Определяем текущее поле после хода*/
    if (way.innerHTML == 'вниз') {
        currentField += 3;
    } else if (way.innerHTML == 'вверх') {
        currentField -= 3;
    } else if (way.innerHTML == 'влево') {
        currentField -= 1;
    } else if (way.innerHTML == 'вправо') {
        currentField += 1;
    }
}

