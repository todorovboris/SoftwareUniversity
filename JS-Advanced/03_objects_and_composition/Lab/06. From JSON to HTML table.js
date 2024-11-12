function fromJSONToHTMLTable(input) {
    let data = JSON.parse(input);
    const headers = Object.keys(data[0]);

    function escapeHTML(value) {
        return value.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/ /g, '&nbsp;');
    }

    let result = '<table>\n';

    result += '   <tr>' + headers.map((h) => `<th>${escapeHTML(h)}</th>`).join('') + '</tr>\n';

    data.forEach((entry) => {
        result += '   <tr>' + headers.map((h) => `<td>${escapeHTML(entry[h])}</td>`).join('') + '</tr>\n';
    });

    // return `
    // <table>
    //     <tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr>
    //     ${data.map((entry) => `<tr>${headers.map((h) => `<td>${entry[h]}</td>`).join('')}</tr>`).join('\n')}
    // </table>`;

    result += '</table>';
    return result;
}

window.onload = function () {
    let container = document.getElementById('wrapper');
    container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);
};
