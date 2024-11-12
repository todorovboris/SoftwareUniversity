//
//                          DOM Manipulations
//      We can do the following thins with HTML elements dynamically:
//  -   elm.remove()            => премахва го от неговия реодител, т.е. го премахва от екрана;
//  -   parent.appendChild(elm2)   => към elm В КРАЯ, добавяме дете с референция към HTML елемента elm2;
//  -   parent.prepend(elm3)       => към elm В НАЧАЛОТО, добавяме дете с референция към HTML елемента elm3;
//  -   parent.replaceChild(newChild, oldChild)    => земеня референцията на едното дете с референцията на другото;
//
//  -   let li = document.createElement('li');  => factory function, на която подаваме вида на елемента(като стринг), който искаме да създадем
//      let p = document.createElement('p');
//
//  -   let li = document.getElementById("my-list");
//      let newLi - li.cloneNode(true);

//  -   !!! Elements are created IN MEMORY - they DO NOT EXIST on the page !!!
//  -   !!! To became visible, they must be APPENDED to teh DOM tree       !!!
//
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//
//                          The DOM EVENT / Event Object and Types
//  - когато нещо се случи в браузъра и има закачен слушател(функция) към това нещо, браузърът ще изпълни съответния слушател(функция)
//  - при изпълнението браузърът ни дава параметър, наричан Event Object => съдържа цялата информация, свързана с този слушател
//
//  - Еvent Types in DOM API:
//      MOUSE Events:
//      - click
//      - mouseover
//      - mouseout
//      - mousedown
//      - mouseup
//      - etc.
//
//      TOUCH Events:
//      - touchstart
//      - touchend
//      - touchmove
//      - touchcancel
//      - etc.
//
//      DOM/UI Events:
//      - load
//      - unload
//      - resize
//      - dragstart / drop
//      - etc.
//
//      KEYBOARD Events:
//      - keydown
//      - keyup
//      - keypress
//      - etc.
//
//      FOCUS Evenets:
//      - focus (got focus)
//      - blur (lost focus)
//      - etc.
//
//      FORM Events:
//      - input
//      - change
//      - submit
//      - reset
//      - etc.
//
//
//  - Event Handler
//      Three ways to register for an Event:
//      - with HTML Attributes;
//      - using DOM element properties
//      - using DOM Evenet handler => добавя се чрез метод (PREFERED):
//          htmlRef.addEventListener('x', y); => x - вид  Евент; у - референция към функцията-слушател
//          htmlRef.removeEventListener('x', y);
//
//
//
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
