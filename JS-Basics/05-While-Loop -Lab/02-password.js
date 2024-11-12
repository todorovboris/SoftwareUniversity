function password(input){
    let userName = input[0];
    let pass = input[1];

    let index = 2;
    let tryForPass = input[index];
    index++;

    while (tryForPass !== pass){
        tryForPass = input[index];
        index++;
    }

    console.log(`Welcome ${userName}!`);

}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
