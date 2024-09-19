

```


document.getElementById("change").addEventListener("click", change);

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.exchangeratesapi.io/v1/latest?access_key= ... ");

    xhr.onload = function(){

        if(this.status) {
            const response = JSON.parse(this.responseText);

            const rate = response.rates.TRY
            const amount = document.getElementById("amount").value;

            document.getElementById("tl").value = amount * rate;
        };


    };


    xhr.send();


};





```

- `document.getElementById("change")`: HTML sayfasında "change" ID'sine sahip bir buton olduğunu varsayıyoruz. Bu kod ile buton seçilir.
- `addEventListener("click", change)`: Bu kısım, butona tıklanıldığında `change` adlı fonksiyonun tetiklenmesini sağlar. Yani kullanıcı butona tıkladığında döviz çevirme işlemi başlar.

### 2. API İsteği Yapma ve Yanıtı İşleme

```javascript
function change() {
    const xhr = new XMLHttpRequest();
```

- `const xhr = new XMLHttpRequest()`: Yeni bir `XMLHttpRequest` nesnesi oluşturur. Bu nesne, tarayıcı ile bir sunucu arasında veri alışverişi yapılmasını sağlar.

```javascript
    xhr.open("GET", "https://api.exchangeratesapi.io/v1/latest?access_key=...");
```

- `xhr.open("GET", "https://api.exchangeratesapi.io/v1/latest?access_key=...")`: Bu satır, API'ye bir **GET** isteği gönderileceğini belirtir. URL kısmında API anahtarını kullanıyoruz (gizlilik nedeniyle burada tam anahtar gösterilmemiştir). Bu URL, döviz kurları verilerini almak için kullanılır.

### 3. İstek Yüklendiğinde Yanıtı İşleme

```javascript
    xhr.onload = function() {
        if (this.status) {
```

- `xhr.onload = function()`: API isteği başarıyla yüklendiğinde bu fonksiyon çalışır. Sunucudan dönen veri burada işlenir.
- `if (this.status)`: `this.status` ifadesi, HTTP durum kodunu kontrol eder. Durum kodu `200` ise istek başarılıdır ve yanıt işlenir.

```javascript
            const response = JSON.parse(this.responseText);
```

- `JSON.parse(this.responseText)`: Sunucudan dönen yanıt genellikle bir JSON formatındadır. Bu yanıtı `JSON.parse` ile JavaScript nesnesine çeviririz, böylece verileri kullanabiliriz.

### 4. Döviz Kurunu Hesaplama

```javascript
            const rate = response.rates.TRY;
```

- `response.rates.TRY`: API'den dönen veriler içinde `TRY` (Türk Lirası) döviz kurunu alır. `rates` altında her dövizin değerleri bulunur ve burada Türk Lirası için olan değeri çekiyoruz.

```javascript
            const amount = document.getElementById("amount").value;
```

- `document.getElementById("amount").value`: HTML'deki bir giriş alanından (input) kullanıcının girdiği miktarı alır. Bu değer, kullanıcının döviz kuru üzerinden çevirmek istediği miktardır.

### 5. Çevrilmiş Miktarı Gösterme

```javascript
            document.getElementById("tl").value = amount * rate;
```

- `document.getElementById("tl").value = amount * rate`: Kullanıcının girdiği miktar, API'den alınan Türk Lirası kuru ile çarpılarak çevrilmiş tutar hesaplanır ve "tl" ID'sine sahip giriş alanına yazılır. Böylece kullanıcı, çevrilmiş tutarı direkt olarak görebilir.

### 6. İsteği Gönderme

```javascript
    xhr.send();
}
```

- `xhr.send()`: API isteği bu satır ile sunucuya gönderilir. `XMLHttpRequest` nesnesi sunucuya bağlanır ve belirtilen URL'den verileri çeker.

## Özet

Bu kod, bir API'den döviz kuru verilerini çeker ve kullanıcıdan alınan döviz miktarını Türk Lirasına çevirir. Aşağıdaki adımlar özetle takip edilir:

1. Kullanıcı bir butona tıklar.
2. API'ye `XMLHttpRequest` ile istek yapılır.
3. Sunucudan alınan JSON yanıtı işlenir.
4. Döviz kuru alınır ve kullanıcı tarafından girilen miktar ile çarpılır.
5. Çevrilen miktar sayfada gösterilir.
   
Bu sayede kullanıcı, dövizden Türk Lirasına basit bir çeviri yapabilir.
```

---
