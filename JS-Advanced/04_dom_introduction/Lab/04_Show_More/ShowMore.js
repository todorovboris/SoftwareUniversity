function showText() {
    let moreEl = document.getElementById('more');
    let textEl = document.getElementById('text');

    moreEl.style.display = 'none';
    textEl.style.display = 'inline';

    // moreEl.children;
    // textEl.innerHTML = '<span id="text" style="display: inline">Welcome to JavaScript and DOM.</span>';

    // moreEl = '<a href="#" id="more" style="display: none" onclick="showText()">Read more ...</a>';
    // textEl = '<span id="text" style="display: inline">Welcome to JavaScript and DOM.</span>';
}
