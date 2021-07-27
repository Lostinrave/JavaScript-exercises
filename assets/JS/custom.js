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

duomenys[0]["pavarde"] = "Adomaitis";
duomenys[2]["vardas"] = "Egle";
console.log(duomenys);
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

// for (let indeksas in duomenys) {
//   let eilute = "";

//   for (let tekstas in duomenys[indeksas]) {
//     eilute += duomenys[indeksas][tekstas] + " ";
//   }

//   console.log(eilute);
// }
// Console log duomenu atvaizdavimo pabaiga

// Easy jquery table log print start
var dataSet = [
  ["Petras", "Petraitis", "1992-07-20", "Vyras"],
  ["Jonas", "Jonaitis", "1990-06-13", "Vyras"],
  ["Janina", "Jonaitiene", "1996-04-15", "Moteris"],
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

// switch example start
let day = "Saturday";
switch (new Date().getDay()) {
  case 0:
    day = "Monday";
    break;
  case 1:
    day = "Tuesday";
    break;
  case 2:
    day = "Wednesday";
    break;
  case 3:
    day = "Thursday";
    break;
  case 4:
    day = "Friday";
    break;
  default:
    day = "Weekend baby!";
}
document.getElementById("data").innerHTML = "Today is " + day;

// switch example end

// Table on click JS start

document.getElementById("tableToggle").onclick = function () {
  var popup = document.getElementById("asmenineInfo_wrapper");

  //Funkcija contains grazina reiksme true arba false
  if (popup.classList.contains("open") == false) {
    popup.classList.add("open");
    document.getElementById("tableToggle").innerText = "Slepti";
  } else {
    popup.classList.remove("open");
    document.getElementById("tableToggle").innerText = "Rodyti";
  }
};

// found solution on stack:
// const btn = document.getElementById("tableToggle");

// btn.addEventListener("click", ()=>{

//     if(btn.value === "Rodyti"){
//         btn.value = "Slepti";
//     }else{
//         btn.value= "Rodyti";
//     }
// })

// Counting exercise start

var array = [
  1, 125, -452, 658, 324, 10800, -256, 345, 13, 22, 1356, -589, 755, 698, 2258,
  -654, 3500, -2647, 258,
];
let sum = 0;
// var sum = array.reduce(function(a, b){
//   return a + b;
// }, 0);

// console.log(sum);

for (let i = 0; i < array.length; i++) {
  sum += array[i];
  document.getElementById("skaiciavimas").onclick = function () {
    document.getElementById("rezultatas").innerText = "Rezultatas yra: " + sum;
  };
}

console.log(sum);

// Counting exercise end

// Checking value using switch exercise start
// document.getElementById("tikrinti").onclick = function () {
//   var pasirinkimas = document.getElementById("options");
//   var preke = pasirinkimas.value;

//   switch (preke) {
//     case "saldytuvas":
//       preke = 1;
//       break;
//     case "kompiuteris":
//       preke = 2;
//       break;
//     case "skalbimoMasina":
//       preke = 3;
//       break;
//     case "dujineVirykle":
//       preke = 4;
//       break;
//     case "mikrobanguKrosnele":
//       preke = 5;
//       break;
//     case "indaplove":
//       preke = 6;
//       break;
//   }

//   document.getElementById("sandelis").innerHTML = "Sandelyje yra: " + preke;
// };
// Checking value using switch exercise end

//syntax exercises
jQuery(document).ready(function () {
  jQuery("#naujas-mygtukas").addClass("klase");
  jQuery(".naujas-mygtukas").removeClass("klase");
  jQuery(".naujas-mygtukas").click(function () {
    alert("paspaudimas");
  });

  //jQuery instead of switch

  jQuery("#options").on("change", function () {
    var preke = jQuery(this).children("option:selected").val();
    jQuery("#sandelis").text("Sandelyje yra: " + preke);
  });

  // jQuery array exercises
  var tbody = $("#jLentele tbody"),
    reiksmes = ["vardas", "pavarde", "gimtadienis", "lytis"];

  jQuery(duomenys).each(function (indeksas, reiksme) {
    var tr = jQuery("<tr>");
    jQuery(reiksmes).each(function (indeksas, kintamas) {
      jQuery("<td>").html(reiksme[kintamas]).appendTo(tr);
    });
    tbody.append(tr);
  });

  // array/table exercises

  const imones = [
    {
      Klientas: "Adomaviciaus imone",
      Kodas: "1000",
      Data: "2020.06.20",
      Produktas: "nesiojamas kompiuteris",
      Kaina: "1499",
      Papildoma_informacija: " ",
    },

    {
      Klientas: "UAB Kesko Senukai",
      Kodas: "1001",
      Data: "2020.06.21",
      Produktas: "televizorius",
      Kaina: "800",
      Papildoma_informacija: "Reikalingas pristatymas",
    },
    {
      Klientas: "UAB Simplea",
      Kodas: "1003",
      Data: "2020.06.23",
      Produktas: "telefonas",
      Kaina: "299",
      Papildoma_informacija: " ",
    },
    {
      Klientas: "UAB 5 kontinentai",
      Kodas: "1004",
      Data: "2020.06.24",
      Produktas: "plansete",
      Kaina: "450",
      Papildoma_informacija: " ",
    },
  ];
  var tablebody = $("#jTable tbody"),
    values = [
      "Klientas",
      "Kodas",
      "Data",
      "Produktas",
      "Kaina",
      "Papildoma_informacija",
    ];

  jQuery(imones).each(function (i, r) {
    var tablerow = jQuery("<tr>");
    jQuery(values).each(function (i, k) {
      jQuery("<td>").html(r[k]).appendTo(tablerow);
    });
    tablebody.append(tablerow);
  });
});

// Class work 2021 07 15
// 1st exercise
var vardas = "Petras",
  pavarde = "Petraitis",
  gimimoData = "1992 07 20";
document.getElementById("javascriptTest").onclick = function () {
  document.getElementById("javascript-testai").innerHTML =
    "Aš esu " + vardas + " " + pavarde + " " + "gimęs " + gimimoData;
};

// 2nd exercise

var number = "2.5";

document.getElementById("math2nd").onclick = function () {
  document.getElementById("mathResult2nd").innerText = Math.ceil(number);
};

// 3rd/4th exercise

function randomSkaicius(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let result4th = document.getElementById("mathResult4th"),
  button4th = document.getElementById("math4th");
button4th.addEventListener("click", divide);
function divide() {
  let value1st = randomSkaicius(0, 4),
    value2nd = randomSkaicius(0, 4);
  if (value2nd == 0) result4th.innerHTML = "Cannot divide by zero";
  else result4th.innerHTML = Math.floor(value1st / value2nd);
}

// 5th exercise

let button5th = document.getElementById("math5th"),
  result5th = document.getElementById("mathResult5th");
button5th.addEventListener("click", avg);
function avg() {
  let value3rd = randomSkaicius(0, 25),
    value4th = randomSkaicius(0, 25),
    value5th = randomSkaicius(0, 25),
    lowest = Math.min(value3rd, value4th, value5th),
    highest = Math.max(value3rd, value4th, value5th);
  result5th.innerHTML = (lowest + highest) / 2;
}

// 6th exercise

document.getElementById("math6th").addEventListener("click", random);
function random() {
  let randomGen = Math.random() * 10;
  document.getElementById("mathResult6th").innerHTML = Math.ceil(randomGen);
}

// 7th exercise

(button6th = document.getElementById("math7th")),
  (button7th = document.getElementById("math8th")),
  (button8th = document.getElementById("math9th")),
  (result7th = document.getElementById("mathResult7th")),
  (result8th = document.getElementById("mathResult8th")),
  (result9th = document.getElementById("mathResult9th"));
button6th.addEventListener("click", colors);
button7th.addEventListener("click", colors);
button8th.addEventListener("click", colors);
function colors() {
  let value7th = randomSkaicius(-10, 10),
    value8th = randomSkaicius(-10, 10),
    value9th = randomSkaicius(-10, 10);
  result7th.innerHTML = "Result: " + value7th;
  result8th.innerHTML = "Result: " + value8th;
  result9th.innerHTML = "Result: " + value9th;
  // }
  // button7th.onclick = function(){

  // }
  // button8th.onclick = function(){
  if (value7th < 0) {
    result7th.style.color = "red";
  }
  if (value7th == 0) {
    result7th.style.color = "blue";
  } else if (value7th > 0) result7th.style.color = "green";

  if (value8th < 0) {
    result8th.style.color = "red";
  }
  if (value8th == 0) {
    result8th.style.color = "blue";
  } else if (value8th > 0) result8th.style.color = "green";

  if (value9th < 0) {
    result9th.style.color = "red";
  }
  if (value9th == 0) {
    result9th.style.color = "blue";
  } else if (value9th > 0) result9th.style.color = "green";
}
// 8th exercise

let value10th = randomSkaicius(5, 3000),
  price = 1,
  // decimalPrice = Math.round(value10th * price *100)/100;
  button9th = document.getElementById("math10th"),
  result10th = document.getElementById("mathResult10th");

if (value10th > 1000) {
  price = 0.97;
}
if (value10th > 2000) {
  price = 0.96;
}
button9th.onclick = function () {
  result10th.innerHTML =
    "Order: " + value10th + " Price: " + (value10th * price * 100) / 100;
};

// 9th exercise

$(window).scroll(function () {
  var scrollPercent =
    (100 * $(window).scrollTop()) / ($(document).height() - $(window).height());
  console.log(scrollPercent);
  $(".window-percent").html(Math.round(scrollPercent * 100) / 100);
});

// 2021 07 20 classwork task (game)
// 1st exercise
// let i = 0; nusako kintamaji kurio reiksme lygi 0
// i < 400; nusako iki kokios kondicijos ciklas nutruks
// i++; pridedamas 1 skaicius ciklo pabaigoje
let stars = "*",
  starsPar = document.getElementById("stars"),
  line = "",
  lineBreak = 0; // antrasis skaiciavimo elementas (counter), skirtas apskaiciuoti 50 riba
for (let i = 0; i < 400; i++) {
  if (lineBreak == 50) {
    // jeigu kintamasis(counteris) pasiekia riba 50
    line += "<br />"; // kintamasis prisideda html elementa
    lineBreak = 0; // kintamasis grista i pradine reiksme
  }
  line += stars; // kiekvieno ciklo eigoje pridedama 'stars' reiksme
  lineBreak++; // kaip ir prie i pridedama po viena skaiciu ciklo pabaigoje
}

starsPar.innerHTML += line;

// 2nd exercise
let numbersPar = document.getElementById("randomNumbers"),
  line2 = "",
  higher = 0;
randomNumber = 0;
for (let i = 0; i < 300; i++) {
  randomNumber = randomSkaicius(0, 300);
  if (randomNumber > 150) {
    higher++;
  }
  if (randomNumber > 275) {
    line2 += '<span style="color: red">' + randomNumber + "</span>";
  } else {
    line2 += randomNumber;
  }
  if (i != 299) {
    line2 += ", ";
  }
}
numbersPar.innerHTML += line2;
numbersPar.innerHTML += "<h5>Numbers higher then 150:</h5>" + higher;

// 3rd exercise
let numbersPar2 = document.getElementById("randomNumbers2"),
  line3 = "",
  divider = 77,
  number2 = 0,
  space = ", ";

for (let i = 1; i <= 3000; i++) {
  number2 = i / divider;
  if (Number.isInteger(number2)) {
    if (i != divider) {
      line3 += space;
    }
    line3 += i;
  }
}
numbersPar2.innerHTML += line3;

// 4th exercise
// let
//     squareNum = 100,
//     square = '';

// for(let i = 1; i <= (squareNum*squareNum); i++){
//     square+='*';

//     if(i !=1 && i%squareNum == 0){
//       square+= '<br />';
//     }

// }

let square = "",
  numbersPar3 = document.getElementById("randomNumbers3");

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (i == j || 99 - i == j) {
      square += '<span style = "color:red";>*</span>';
    } else {
      square += "*";
    }
  }
  square += "<br>";
}
numbersPar3.innerHTML += square;

//5th exercise
let numbersPar4 = document.getElementById("randomNumbers4"),
  winner = "",
  winnerValue = 222;
(benas = 0), (jovita = 0), (ended = false);
for (let i = 0; i <= 100; i++) {
  if (ended) break;
  let bscore = randomSkaicius(10, 20),
    jscore = randomSkaicius(5, 25);
  if (bscore == 12 || jscore == 12) {
    numbersPar4.innerHTML +=
      i + 1 + " Partija negalima, iskrito: 12 " + "<br />";
    continue;
  }
  benas += bscore;
  jovita += jscore;
  numbersPar4.innerHTML +=
    i +
    1 +
    " Partija, Beno taskai: " +
    bscore +
    " Jovitos taskai: " +
    jscore +
    "<br />";
  if (benas >= winnerValue || jovita >= winnerValue) {
    ended = true;
    if (benas >= winnerValue) {
      winner = "Benas";
    } else {
      winner = "Jovita";
    }
    numbersPar4.innerHTML +=
      "Benas: " + benas + " Jovita: " + jovita + " Zaidima Laimejo: " + winner;
  }
}

//6th exercise penkiuose cikluose reikia pasiekti 85 ir sustabdyti cikla


let kalimas = 1,
    smugis = 1;
    vinys = document.getElementById('vinys');

for (let i=1; i<6; i++){
  for (let k = randomSkaicius(5,20);k<85;k+=randomSkaicius(5,20)){
    smugis++;
  }
  vinys.innerHTML+=`${kalimas} vinis ikalta ${smugis} smugiais; <br />`;
  smugis = 0;
  kalimas++;
}

let miss = 0,
    nepataikyta = 0;

for (let i=1; i<6; i++){
  for (let k = randomSkaicius(20,30);k<85;k+=randomSkaicius(20,30)){
    smugis++;
    miss = randomSkaicius(1,2);
    if (miss === 2)
    nepataikyta++;
    continue;
  }
  vinys.innerHTML+=`${kalimas} vinis ikalta ${smugis} smugiais, nepataikyta ${nepataikyta} <br />`;
  smugis = 0;
  nepataikyta = 0;
  kalimas++;
}

//7th exercise 
document.getElementById('7uzduotis').innerHTML+='<h3>Septinta uzduotis</h3>';
el7uzduotis = document.getElementById('7uzduotis');
el7uzduotis.innerHTML += '<div id="tevinis"></div>';
elParent = document.querySelector('#tevinis');

let parentHeight = elParent.offsetHeight,
    parentWidth = elParent.offsetWidth,
    outside = 0;

i = 0;
while (i<300){
  elParent.innerHTML +='<div class="vaikas"></div>';

  let childSquare = document.querySelectorAll('.vaikas')[i],
      randomTop = randomSkaicius(0,550),
      randomLeft = randomSkaicius(0,550);

  childSquare.style.top = randomTop+'px';
  childSquare.style.left = randomLeft+'px';

  if((randomTop > parentHeight) || (randomLeft > parentWidth)) {
    outside++;
  }
  i++;

  console.log(randomLeft)
}

elParent.innerHTML += '<div style="color: #FFF; font-size: 100px; position: absolute; top: 200px; left: 200px; font-weight: bold;">' + outside + '</div>';
el7uzduotis.innerHTML += '<h4 style="margin-top: 100px;">Už kraštinių išsikišūsių elementų suma: ' + outside + '</h4>';

//2021 07 26 exercises

//functions: 
//let stringas = 'Pavasarį žydi labai daug medžių';

//Apie length
//console.log(stringas.length); //Konsoleje atvaizduojamas kintamojo reiksmes simboliu kiekis

//Apie split
//let stringo_masyvas = stringas.split(' ');

//console.log( stringo_masyvas[4] );

//Apie replace()
//console.log( stringas.replace('žydi', 'atgminsta') );  //Konsoleje atvaizduojamas naujas sakinys su pakeistu zodziu zydi i zodi atgimsta

//Apie repeat()
//console.log( stringas.repeat(1) );

//Apie charAt() Graziname viena simboli is specifiskos pozicijos
//console.log( stringas.charAt(0) );

//Apie substr() Graziname simbolius nuo pirmame parametre nurodytos pozicijos iki antrame parametre nurodyto kiekio
//console.log( stringas.substr(10, 9) );

//Apie toLowerCase()
//console.log( stringas.toLowerCase() );

//Apie toUpperCase()
//console.log( stringas.toUpperCase() );

//Apie trim()
//stringas = '    Pavasarį žydi labai daug medžių         ';

//console.log( stringas.trim() );

//Apie startsWith() true arba false rezultatas
//boolean
//console.log( stringas.startsWith('P') );

//Apie endsWith() auksciau minetos funkcijos priespriesa
//console.log( stringas.endsWith('ų') );

//Apie includes() 
//console.log( stringas.includes('v') );

//Apie indexOf() 
//console.log(stringas.indexOf('žydi'));

//Apie lastIndexOf()
//console.log(stringas.lastIndexOf('ž'));


//1st exercise
document.querySelector('.funkcijuUzdaviniai').innerHTML+='<h3>Pirma uzduotis</h3>';
exercise = document.querySelector('.funkcijuUzdaviniai');

let director1st = 'Quentin Tarantino',
    director2nd = 'Guy Ritchie',
    director = '';

if(director1st.length > director2nd.length ){
  director+=director1st;
}
else{
  director+=director2nd;
}
exercise.innerHTML += director;

//2nd exercise
exercise.innerHTML+='<h3>Antra uzduotis</h3>';
let uppercase1st = director1st.substr(0,7),
    lowercase1st = director1st.substr(8,9),
    uppercase2nd = director2nd.substr(0,3),
    lowercase2nd = director2nd.substr(4,7);
    exercise.innerHTML += `${uppercase1st.toUpperCase()} ${lowercase1st.toLowerCase()} </br>${uppercase2nd.toUpperCase()} ${lowercase2nd.toLowerCase()}`;

//3rd exercise
exercise.innerHTML+='<h3>Trecia uzduotis</h3>';
let directorName = 'Quentin',
    directorSurname = 'Tarantino',
    starts = directorName.charAt(0)+directorSurname.charAt(0);
exercise.innerHTML += starts;

//4th exercise
exercise.innerHTML+='<h3>Ketvirta uzduotis</h3>';
let letters = directorName.substr(4,3)+directorSurname.substr(6,3);
exercise.innerHTML += letters;
    

