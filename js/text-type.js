//Text Typing

var counter = 0;
function typing(strSplit, h1){
  var SI = setInterval(function () {
    h1.innerHTML += (strSplit[counter]);
    counter++;
    if(counter==strSplit.length){clearInterval(SI)}

  },100)
}
