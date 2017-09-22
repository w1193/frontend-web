
var divs = document.querySelectorAll('#wrap div');

for(var n = 1; n < divs.length; i += 2){
  divs[i].style.backgroundColor = "white"
}

document.addEventListener("DOMContentLoaded", function(event)){

  function changeBg(event){
    console.log('changeBg');

    // divs[0].style.backgroundColor = 'blue';

    event.currentTarget.style.backgroundColor = 'blue';
  }

  for(var i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', changeBg);
  }
}
