function solve(httpObj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /^[a-zA-Z.0-9]+$/;
    const messageRegex = /[<>\\&'"]/g;

    if (!httpObj.hasOwnProperty('method') || !methods.includes(httpObj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!httpObj.hasOwnProperty('uri') || !uriRegex.test(httpObj.uri) || httpObj.uri == '') {
        throw new Error('Invalid request header: Invalid URI');
    } else if (!httpObj.hasOwnProperty('version') || !versions.includes(httpObj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!httpObj.hasOwnProperty('message') || messageRegex.test(httpObj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpObj;
}

console.log(
    solve({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: '',
    })
);

// console.log(
//     solve({
//         method: 'OPTIONS',
//         uri: 'git.master',
//         version: 'HTTP/1.1',
//         message: '-recursive',
//     })
// );
