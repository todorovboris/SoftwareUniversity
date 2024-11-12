function main(num1, num2, num3){

    function sumOfNums(x,y){
        const result1 = x + y;
        return result1;
    }

    function subtractOfNums(x,y){
        const result2 = x - y;
        return result2;
    }

    const sum = sumOfNums(num1, num2);
    const subtract = subtractOfNums(sum,num3);

    console.log(subtract);

}

main(23,6,10);
main(42,58,100);