function solve(arr) {
    let text = arr[0];
    const targetWords = arr[1];
    const regex = /[.,!?:*]? /;
    const textArr = text.split(regex); //разделя думите по спейс или спейс + някой от изброените символи

    const templatesArr = textArr.filter((word) => word.includes('_'));
    // console.log(templates);
    for (const template of templatesArr) {
        const correctWord = targetWords.find((word) => word.length === template.length);
        text = text.replace(template, correctWord);
    }

    console.log(text);
}

solve([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
]);
