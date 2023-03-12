document.getElementById("siparis").addEventListener("click", siparis);

function siparis() {
  var name = document.getElementById('musteri-adi').value;
  var size = getSelectedSize();
  var toppings = getToppings();
  var toppingsCount = toppings.split(",").length
  var odemetipi = document.getElementById("odeme-tipi").value;
if(typeof size === 'undefined'){
  size = "unselected";
}
  var toplam = 0
  if (size == "Küçük") {
    toplam = toplam + 10;
  } else if (size == "Orta") {
    toplam = toplam + 15;
  } else if(size == "Büyük"){
    toplam = toplam + 20;
  }
  if(toppings.length > 0 && toppingsCount >= 1){
    toplam = toplam + (toppingsCount * 0.50);
  }

  if (odemetipi == "Nakit") {
    toplam = toplam - 1;
  }

  var mesaj = document.getElementById("mesaj");
  if(name.length == 0){
    mesaj.classList.add("alert-danger");
    mesaj.innerHTML = "Müşteri ismi girmediniz";
  }else if(size=="unselected"){
    mesaj.classList.add("alert-danger");
    mesaj.innerHTML = "Pizza boyu seçmediniz";
  }else if(odemetipi == "Ödeme tipi"){
    mesaj.classList.add("alert-danger");
    mesaj.innerHTML = "Ödeme tipi seçmediniz";
  }else{
    if(mesaj.classList.contains("alert-danger")){
      mesaj.classList.remove("alert-danger");
    }
    mesaj.classList.add("alert-success");
    mesaj.innerHTML = "Siparişiniz alındı";
    document.getElementById('musteri').innerHTML = "Müşteri ismi: " + name;
    document.getElementById('pizzaboyu').innerHTML = "Pizza boyu: " + size;
    document.getElementById('pizzaustu').innerHTML = "Pizza üstü: " + toppings;
    document.getElementById('odeme').innerHTML = "Ödeme tipi: " + odemetipi;
    document.getElementById('tutar').innerHTML = "Tutar: " + toplam + " TL";

    var x = document.getElementById("siparis-detay");
    x.style.display = "block";
  }
}

function getSelectedSize() {
  var ele = document.getElementsByName('size');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      return ele[i].value
  }
}

function getToppings() {
  var toppings = document.getElementsByName('topping')
  var txt = "";
  var i;
  var count = 0;
  for (i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
      txt = txt + toppings[i].value + ", ";
    }
  }
  return txt.substr(0, txt.length-2);
}
