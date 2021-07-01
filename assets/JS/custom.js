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
}
document.getElementById("reset").onclick = function () {
  document.getElementById("kiekis").value = "1";
  document.getElementById("messages").innerHTML = "";
};

// Console log duomenu atvaizdavimo startas
const duomenys = [
  {
    vardas: "petras",
    pavarde: "petraitis",
    gimtadienis: "1992-07-20",
    lytis: "vyras",
  },

  {
    vardas: "jonas",
    pavarde: "jonaitis",
    gimtadienis: "1990-06-13",
    lytis: "vyras",
  },

  {
    vardas: "janina",
    pavarde: "janiene",
    gimtadienis: "1996-04-15",
    lytis: "moteris",
  },
];

// for(let eile in duomenys){
//     console.log(duomenys[eile]['vardas']);
//     console.log(duomenys[eile]['pavarde']);
//     console.log(duomenys[eile]['gimtadienis']);
//     console.log(duomenys[eile]['lytis']);
// }

// for(let eile in duomenys) {
//     console.log(duomenys[eile]['vardas'], duomenys[eile]['pavarde'],
//     duomenys[eile]['gimtadienis'], duomenys[eile]['lytis']);

// }

for (let indeksas in duomenys) {
  let eilute = "";

  for (let tekstas in duomenys[indeksas]) {
    eilute += duomenys[indeksas][tekstas] + " ";
  }

  console.log(eilute);
}
// Console log duomenu atvaizdavimo pabaiga

// Easy jquery table log print start
var dataSet = [
    ["Petras", 
    "Petraitis", 
    "1992-07-20", 
    "Vyras"],
    ["Jonas", 
    "Jonaitis", 
    "1990-06-13", 
    "Vyras"],
    ["Janina", 
    "Jonaitiene", 
    "1996-04-15", 
    "Moteris"]
];

$(document).ready(function () {
  $("#asmenineInfo").DataTable({
    data: dataSet,
    columns: [
      { title: "Vardas" },
      { title: "pavarde" },
      { title: "Gimtadienis" },
      { title: "lytis" },
    ],
  });
});
// Easy jquery table log print end