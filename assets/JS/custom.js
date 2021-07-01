// document.getElementById("enterValue").addEventListener("click", toCart);
// function toCart() {
//   var cartValue = document.getElementById("cartValue").value;
//   var word = "items";

//   document.getElementById("valueReturn").innerHTML =
//     "You succesfuly added " + cartValue + " " + word + " to your shoping cart";
// }

document.getElementById("kvietejas").addEventListener("click", ikrepseli);

function ikrepseli() {
  var kiekis = document.getElementById("kiekis").value;
  var zodis = "prekes";

  if (kiekis % 10 == 1) {
    zodis = "prekę";
  }

  if ((kiekis > 10 && kiekis < 20) || kiekis % 10 == 0) {
    zodis = "prekių";
  }
  document.getElementById("messages").innerHTML =
    "Jūs sėkmingai pridėjote " + kiekis + " " + zodis + "  į savo krepšelį!";
  if (kiekis > 100) {
    var error = document.getElementById("kiekis");
    error.classList.add("error");
    alert("Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas");
    document.getElementById("messages").innerHTML =
      "Jūs negalite pridėti šio kiekio";
  }
  if (kiekis < 1) {
    var error = document.getElementById("kiekis");
    error.classList.add("error");
    alert("Pasirinktas per mažas kiekis");
    document.getElementById("messages").innerHTML =
      "Jūs negalite pridėti šio kiekio";
  }

  //alert('Jūs sėkmingai pridėjote ' + kiekis + ' prekę į savo krepšelį!');
}
