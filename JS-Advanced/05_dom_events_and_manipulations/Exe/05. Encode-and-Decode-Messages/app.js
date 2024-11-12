function encodeAndDecodeMessages() {
    const buttonsElm = document.getElementsByTagName('button');
    const messageElm = document.querySelectorAll('main div textarea');

    const typedMessageElm = messageElm[0];
    const receivedMessageElm = messageElm[1];

    for (const button of buttonsElm) {
        button.addEventListener('click', (e) => {
            let encodedArr = [];
            let decodedArr = [];

            if (button.innerHTML === 'Encode and send it') {
                let messageText = typedMessageElm.value;

                for (let i = 0; i < messageText.length; i++) {
                    let asciiDecimal = messageText.charCodeAt(i);
                    asciiDecimal++;
                    encodedArr.push(String.fromCharCode(asciiDecimal));
                    receivedMessageElm.value = encodedArr.join('');
                    typedMessageElm.value = '';
                }
            }

            if (button.innerHTML === 'Decode and read it') {
                let receivedMessage = receivedMessageElm.value;
                for (let i = 0; i < receivedMessage.length; i++) {
                    let asciiDecimal = receivedMessage.charCodeAt(i);
                    asciiDecimal--;
                    decodedArr.push(String.fromCharCode(asciiDecimal));
                    receivedMessageElm.value = decodedArr.join('');
                }
            }

            // const encodedText = encodedArr.join('');
        });
    }
}
