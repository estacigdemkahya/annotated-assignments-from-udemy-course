/*Kodun Amacı:
Bu kod, bir kullanıcıdan email ve şifre bilgilerini alıp, bu bilgilerin önceden tanımlanmış kullanıcılar listesinde olup olmadığını kontrol eder. 
Eğer bilgiler doğruysa, ilgili kullanıcıya ait "tweet"leri ekrana yazar. Yanlışsa, "Giriş yapılamadı" mesajını gösterir.*/

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

function girisYap(email, sifre) {
  if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)
    ){
    console.log(twetler)
  }else{
    console.log("Giriş yapılamadı")
  }
}

girisYap(email, sifre)

/*DETAYLI AÇIKLAMA:

var kullanicilar = [
  {email:"esta@gmail.com", sifre:"12345"},
  {email:"derin@gmail.com", sifre:"123456"}
]

Bu kısımda, iki kullanıcı tanımlanmış. Her kullanıcının bir email ve şifre bilgisi var.

***************************************************************************************************

var twetler = [
  {email:"esta@gmail.com", twet:"Bugün hava çok güzel"},
  {email:"derin@gmail.com", twet:"Selam!"},
  {email:"esta@gmail.com", twet:"Bugün hava çok güzel"}
]

Burada da her bir kullanıcının "tweet"leri var. Tweetlerin kime ait olduğu email ile belirlenmiş.

****************************************************************************************************


var email = prompt("Email: ")
var sifre = prompt("Şifre: ")

Bu kısımda, kullanıcıdan email ve şifre girmesi isteniyor. prompt komutu ile kullanıcıdan bilgi alınıyor.

********************************************************************************************************


Giriş Fonksiyonu:
function girisYap(email, sifre) {
  if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)) {
    console.log(twetler)
  } else {
    console.log("Giriş yapılamadı")
  }
}

girisYap fonksiyonu, aldığı email ve şifre bilgilerini kontrol eder.
Eğer girilen email ve şifre bilgilerinden biri, tanımlanan kullanıcılar ile eşleşiyorsa, tweetler listesi ekrana yazdırılır (console.log(twetler)).
Eğer bilgiler doğru değilse, "Giriş yapılamadı" mesajı ekrana yazdırılır.

***************************************************************************************************************************


girisYap(email, sifre)

Son olarak, yukarıda tanımlanan girisYap fonksiyonu çağrılıyor ve kullanıcıdan alınan email ve şifre bilgileri fonksiyona gönderiliyor.


Özetle:
Kod, kullanıcıdan email ve şifre alır.
Bu bilgilerin doğru olup olmadığını kontrol eder.
Eğer doğruysa, tüm tweetleri gösterir.
Eğer yanlışsa, hata mesajı verir.


*/
