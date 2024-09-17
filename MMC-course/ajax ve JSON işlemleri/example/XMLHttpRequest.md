``` js
document.getElementById("btn").addEventListener("click", function(){

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();
    console.log(xhr);
});

```

### 1. `document.getElementById("btn").addEventListener("click", function() { ... });`

- **`document`**: Bu JavaScript objesi, HTML sayfasının tamamını temsil eder. Tarayıcıdaki tüm web sayfasına erişmek için kullanılır.
  
- **`getElementById("btn")`**: 
  - **`getElementById()`** bir metottur ve HTML sayfasındaki bir elementi, **ID** değerine göre seçer.
  - Parantez içinde `"btn"` yazılı. Bu, HTML elementinin ID’sinin `"btn"` olduğunu ifade eder. Yani sayfada `<button id="btn">` gibi bir butonun olduğunu varsayıyoruz.

- **`.addEventListener("click", function() {...});`**: 
  - **`addEventListener()`**: Bu metot, bir HTML elementine bir olay (event) dinleyici ekler. 
  - `"click"`: Bu olay türüdür. `"click"` bir fare tıklamasını ifade eder, yani kullanıcı bu butona tıkladığında çalışacak.
  - **`function() {...}`**: Bu, olay meydana geldiğinde çalıştırılacak anonim bir fonksiyondur. Yani, butona tıkladığınızda bu fonksiyon devreye girer. Bu fonksiyon içinde yazacağınız tüm kodlar, tıklama anında çalıştırılır.

### 2. `const xhr = new XMLHttpRequest();`

- **`const`**: 
  - Bu, bir değişken tanımlamak için kullanılır. 
  - **`const`**, sabit anlamına gelir ve tanımlandıktan sonra değiştirilemez bir değişken oluşturur. Bu durumda `xhr` adlı bir değişken tanımlanıyor.
  
- **`xhr`**: 
  - Bu, tanımlanan değişkenin adıdır. Genellikle **XMLHttpRequest** objesi için yaygın olarak kullanılan bir isimdir.
  
- **`new XMLHttpRequest()`**: 
  - **`new`**: Bu, JavaScript’te yeni bir obje oluşturmak için kullanılan anahtar kelimedir.
  - **`XMLHttpRequest()`**: Bu bir JavaScript objesidir ve bu obje, sunucuya HTTP istekleri (GET, POST vb.) göndermek ve sunucudan veri almak için kullanılır. Bu kısım, yeni bir XMLHttpRequest örneği oluşturur.
  - Kısacası, `const xhr = new XMLHttpRequest();` ifadesiyle, bir HTTP isteği göndermek için kullanılacak bir **XMLHttpRequest** nesnesi oluşturuyoruz.

### 3. `console.log(xhr);`

- **`console.log()`**: 
  - Bu, JavaScript’te konsola veri yazdırmak için kullanılan bir metottur. Tarayıcıdaki "Geliştirici Araçları" konsoluna herhangi bir bilgiyi yazdırmak için kullanılır.
  
- **`xhr`**: 
  - Bu, daha önce oluşturduğumuz **XMLHttpRequest** nesnesini temsil eder.
  
Bu kodun amacı, oluşturulan **XMLHttpRequest** nesnesini tıklama anında konsola yazdırmaktır. Bu, geliştiricilere HTTP isteği oluşturulduktan sonra nesnenin içeriğini gözlemleme fırsatı verir.

#### Özet:
- **`document.getElementById("btn")`**: HTML sayfasındaki ID'si `"btn"` olan elementi seçer.
- **`addEventListener("click", function() {...})`**: Bu elemente tıklandığında çalışacak olan bir olay dinleyici ekler.
- **`new XMLHttpRequest()`**: Sunucudan veri almak veya veri göndermek için kullanılacak bir yeni **XMLHttpRequest** objesi oluşturur.
- **`console.log(xhr)`**: Bu XMLHttpRequest objesini konsola yazdırır, böylece isteği yapmadan önce nesnenin detaylarını görebilirsiniz.
