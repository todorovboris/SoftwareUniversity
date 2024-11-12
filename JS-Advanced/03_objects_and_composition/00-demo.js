// Обекти и Асоциативни масиви

// - обекти    => колекцията от свойства се отнасят към описанието на 1 явление;
// - ас. масви => колекцията от свойства се отнасят за различни явления;

//-------------------------------------------------------------------------------------------------

// Методи(функции) и контекст

let obj = {};
obj.method1 = function () {}; // добавяне на функция към вече създаден обект;
obj.method2 = function () {}; // добавяне на функция към вече създаден обект;

// 1) замяна на/повече ползван похват вместо Swtich:
function switchh(command) {
    let count1 = 5;
    switch (command) {
        case 'increment':
            count1++;
            break;
        case 'decrement':
            count1--;
            break;
        case 'reset':
            count1 = 0;
            break;
    }

    console.log(count1);
}

function methods(command) {
    let count2 = 5;

    const check = {
        increment() {
            count2++;
        },
        decrement() {
            count2--;
        },
        reset() {
            count2 = 0;
        },
    };
    check[command]();
    console.log(count2);
}

switchh('increment'); // => връща 6
methods('decrement'); // => връща 4;
console.log('------------------------');

// 2) КОНТЕКСТ - можем да използваме методите, за да достъпим обекта, в който метода е дефиниран => т.н. контекст;
//             - извършва се чрез ключовата дума "this";
//             - 'this' ВИНАГИ сочи към това, което от ляво на него ПО ВРЕМЕ НА ИЗВИКВАНЕ;

const myObj = {
    name: 'Boris',
    age: 32,
    printAge() {
        console.log(`my age is ${this.age} years old.`); // достъпваме годинтие от обекта чрез 'this';
    },
    printName() {
        console.log(`Hello! My name is ${this.name}.`); // достъпваме името от обекта чрез 'this';
    },
    printThis() {
        console.log(this); // извикваме всички елементи на обекта, чрез 'this';
    },
};

myObj.printAge();
myObj.printName();
myObj.printThis();
console.log('------------------------');

// FACTORY функцуя - функция, която служи за създадавне на обкет => когато я извикаме тя ще ни върне някакъв обект;

function createObj(x, y, z) {
    const myObj = {};

    myObj.x = x;
    myObj.y = y;
    myObj.z = z;

    myObj.collect = function () {
        this.z += 2 * this.x + this.y;
    };
    myObj.decollect = function (percent) {
        this.x += Math.ceil(x * (percent / 100));
    };

    return myObj;
}

const result = createObj(3, 4, 5);
console.log(result);

result.collect();
console.log(result);

result.decollect(20);
console.log(result);
console.log('------------------------');

//-------------------------------------------------------------------------------------------------

// КОМПОЗИЦИЯ - начин ЗА декларирането на данни в обект
//            - не е важно КАК постигаме композицията, важното е ЦЕЛТА, КОЯТО изпълняваме;
//            - можем да композираме както примитиви, така и референтни типове от данни;
//            - фактически е обратното на деконструирането => взимаме едни променливи и ги композираме в обект;

function collectTaxes2() {
    this.treasury2 += Math.floor(this.population2 * this.taxRate2);
}

function applyGrowth2(percent) {
    this.population2 += Math.floor((percent / 100) * this.population2);
}

function applyRecession2(percent) {
    this.treasury2 -= Math.ceil((percent / 100) * this.treasury2);
}

function createCity2(name2, population2, treasury2) {
    const myObj2 = {
        name2,
        population2,
        treasury2,
        taxRate2: 10,
        collectTaxes2,
        applyGrowth2,
        applyRecession2,
    };

    return myObj2;
}

const result2 = createCity2('Tortuga', 7000, 15000);
console.log(result2);

result2.collectTaxes2();
console.log(result2);

result2.applyGrowth2(5);
console.log(result2);

result2.applyRecession2(7);
console.log(result2);
console.log('------------------------');

//            - чрез композирането можем да вкараме в обекта други обекти:
const record = {
    name: {
        first: 'Todor',
        last: 'Todorov',
    },
    age: 64,
    adress: {
        city: 'Stara Zagora',
        street: 'Tsar Kaloyan',
    },
};

const name = record.name;
console.log(name.last); ////////// 1ви) начин за достъпване на данните;
console.log(record.name.first); // 2ри) подобно на вложените масиви може да чейнваме индексирането едно след друго;
console.log('------------------------');

//-------------------------------------------------------------------------------------------------

// ДЕКОРИРАНЕ - на съществуващ обект или функцияда да добавим някакво ново поведение;
//            - по-структуриран и по-абстрактен начин да направим комопозиране;

function createCity3(name3, population3, treasury3) {
    const city3 = {};

    city3.name3 = name3;
    city3.population3 = population3;
    city3.treasury3 = treasury3;

    return city3;
}

// чрез функцията addTaxBehavior добавяме външно различни поведения
function addTaxBehavior(city3) {
    city3.taxRate3 = 10;

    city3.collectTaxes3 = function () {
        this.treasury3 += Math.floor(this.population3 * this.taxRate3);
        //  city3.treasury3 += Math.floor(this.population3 * this.taxRate3); // можем да използваме името на функцията вместо "this";
    };

    city3.applyGrowth3 = function (percent) {
        this.population3 += Math.floor((percent / 100) * this.population3);
    };

    city3.applyRecession3 = function (percent) {
        this.treasury3 -= Math.ceil((percent / 100) * this.treasury3);
    };

    return city3;
}

const result3 = createCity3('Tortuga', 7000, 15000);
console.log(result3);

addTaxBehavior(result3);
console.log(result3);

result3.collectTaxes3();
console.log(result3);

result3.applyGrowth3(5);
console.log(result3);
console.log('------------------------');
