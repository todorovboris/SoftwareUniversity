function listOfProducts(arr){
    const arrSorted = arr.sort();

    for(let i = 0; i < arrSorted.length; i++){
        console.log(`${i+1}.${arrSorted[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples']);
console.log('-------------');
listOfProducts(['Watermelon', 'Banana', 'Apples']);