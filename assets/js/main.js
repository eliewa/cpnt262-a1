let randNum = function() {
  let num = Math.floor(Math.random() * 10);
  document.getElementById("number").innerHTML = num;

};

let button = document.querySelector('button');
button.addEventListener('click', randNum);




