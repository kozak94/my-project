if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

function init() {
  var buy = document.getElementById("submit");
//   var size = document.getElementById("size");

  SingUp.inputName.onchange = nameOnChange;
  SingUp.inputNumber.onchange = numberOnChange;
  SingUp.inputEmail.onchange = emailOnChange;
  SingUp.onchange = formOnChange;
//   size.addEventListener("change", priceOfSize(), false);
  buy.addEventListener("click", AJAX, false);
  buy.disabled = "true";
}

// function priceOfSize() {
//   var a = document.getElementById("price");
//   var b = document.getElementById("size").value;
//   a.innerHTML = b;
// }






function validate(elem, pattern) {
  var res = elem.value.search(pattern);
  if (res == -1) {
    elem.className = "form-control error";
  } else {
    elem.className = "form-control right";
  }
}

function nameOnChange() {
  var pattern = /\S{2,}/;
  validate(this, pattern);
}

function numberOnChange() {
    var pattern = /^\d[\d\(\)\ -]{4,14}\d$/; 
  validate(this, pattern);
}

function emailOnChange() {
  var pattern = /.+@.+\..+/i; // https://habrahabr.ru/post/175375/ cool example regular expression
  validate(this, pattern);
}


function formOnChange() {
    for (var i = 0; i < SingUp.elements.length; ++i) {
    var elem = SingUp.elements[i];
    if (elem.onchange) {
      elem.onchange();
      if (elem.className == "form-control error") buy.disabled = "true";
      else buy.removeAttribute("disabled");
    }
  }
}

function AJAX() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "good.html", true);
  xhr.onreadystatechange = function () {

    if (xhr.status == 200) {
      document.getElementById("sucses").innerHTML += xhr.responseText;
    }

  }

  //xhr.send();
}
