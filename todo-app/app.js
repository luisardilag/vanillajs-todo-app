
/* Create a "close" btn and append it to each item */
const MyNodeList = document.getElementsByTagName('li');

for( let i = 0; i < MyNodeList.length; i++ ) {
    let btnElim = document.createElement('SPAN');
    let btnTxt = document.createTextNode('\u00D7');

    btnElim.className = 'close';
    btnElim.appendChild(btnTxt);

    MyNodeList[i].appendChild(btnElim);
}


/* Click on a close button to hide the current list item */
const Close = document.getElementsByClassName('close');
for( let i = 0; i < Close.length; i++ ) {
    Close[i].onclick = function() {
        let div = this.parentElement;
        div.remove();
    } 
}


/* Add a check simbol */
const list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


/* Function to add new element on the view */
function newElement() {

    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);


    if( inputValue === '' ) {
        alert('Tienes que escribir algo');
    } else {
        document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myInput').value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
}
