/*1 Demo için iyileştirme yapıldı.*/

var kullanicilar = [
  {email:"esta@gmail.com", sifre:"12345"},
  {email:"derin@gmail.com", sifre:"123456"}
]

var twetler = [
  {email:"esta@gmail.com", twet:"Bugün hava çok güzel"},
  {email:"derin@gmail.com", twet:"Selam!"},
  {email:"esta@gmail.com", twet:"Bugün hava çok güzel"}
]

var email = prompt("Email: ")
var sifre = prompt("Şifre: ")

/*NEW*/
function kullaniciVarmi(email, sifre){
  for(i = 0; i < kullanicilar.length; i++){
    if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
      return true;
    }
  }
  return false;
}


function girisYap(email, sifre) {
  if(kullaniciVarmi(email, sifre)){
    console.log(twetler)
  }else{
    console.log("Giriş yapılamadı")
  }
}

girisYap(email, sifre)


/* Yapılan değişiklik: 
function girisYap(email, sifre) {
  if ((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)) {
    console.log(twetler);
  } else {
    console.log("Giriş yapılamadı");
  }
}

Bu kodda:
girisYap fonksiyonu, iki kullanıcıyı kontrol etmek için doğrudan koşul ifadelerini kullanıyor.
Kullanıcı sayısı artarsa, bu koşul ifadelerini tek tek eklemek gerekecekti. Bu da kodun karmaşıklaşmasına neden olabilirdi.
Kod, tekrar eden yapılar içeriyor ve modüler değil. Yani, belirli bir işlevi yerine getiren parçalar ayrı fonksiyonlar halinde değil.





Refaktör Edilmiş Kod:

function kullaniciVarmi(email, sifre) {
  for (i = 0; i < kullanicilar.length; i++) {
    if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
      return true;
    }
  }
  return false;
}

function girisYap(email, sifre) {
  if (kullaniciVarmi(email, sifre)) {
    console.log(twetler);
  } else {
    console.log("Giriş yapılamadı");
  }
}

girisYap(email, sifre);


1. kullaniciVarmi Fonksiyonu:
Ne Yapar: Bu fonksiyon, kullanıcı listesini (yani kullanicilar array'ini) 
dolaşır ve girilen email ve sifre bilgilerinin listede olup olmadığını kontrol eder. 
Eğer eşleşen bir kullanıcı bulursa true döner, bulamazsa false döner.


for (i = 0; i < kullanicilar.length; i++) {
  if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
    return true;
  }
}
return false;

Eskiden sadece iki kullanıcıyı kontrol edebiliyordu. Şimdi kaç kullanıcı olursa olsun, bu döngü hepsini kontrol eder.
Kullanıcı listesini genişletmek ya da değiştirmek çok daha kolay hale geldi.

Sonuç:
Modülerlik ve Yeniden Kullanılabilirlik: Kod artık daha modüler ve yeniden kullanılabilir hale geldi. 
kullaniciVarmi fonksiyonu, farklı yerlerde de kullanılabilir ve aynı işlemi tekrar tekrar yazmanız gerekmez.

Okunabilirlik: Kodu okuyan biri, fonksiyonların ne iş yaptığını daha kolay anlayabilir. Bu da ileride kodun bakımını kolaylaştırır.

Esneklik: Kullanıcı sayısını artırmak, azaltmak ya da değişiklik yapmak çok daha kolay hale geldi.

*/





















