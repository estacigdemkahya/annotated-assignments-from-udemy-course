### Kodun Detaylı Açıklaması:

```javascript
document.getElementById("btn").addEventListener("click", function(){
```
- **Amaç:** Bu satır, "Ajax işlemi gerçekleştir" butonuna tıklandığında bir olay dinleyicisi (event listener) ekler. Bu olay dinleyici, tıklama işlemi gerçekleştiğinde aşağıdaki kodları çalıştıracaktır.

```javascript
//XMPHttpRepuest
const xhr = new XMLHttpRequest();
```
- **Amaç:** `XMLHttpRequest` nesnesi, sunucuya veri gönderip almak için kullanılır. Bu nesne, AJAX işlemlerini gerçekleştirmek için gereklidir.

```javascript
xhr.onreadystatechange = function(){
```
- **Amaç:** `onreadystatechange` özelliği, `XMLHttpRequest` nesnesinin durumu (readyState) değiştiğinde çalışacak bir fonksiyon tanımlar. Bu fonksiyon, sunucudan gelen yanıtı işlemek için kullanılır.

```javascript
if(this.status == 200 &&  this.readyState == 4){
    // Response Hazır
    console.log(this.responseText);
}
```
- **Amaç:** Bu `if` bloğu, sunucunun isteği başarıyla işleyip işlemediğini kontrol eder:
  - `this.status == 200`: HTTP durum kodunun 200 olup olmadığını kontrol eder. 200, isteğin başarılı olduğunu gösterir.
  - `this.readyState == 4`: İsteğin tamamlandığını ve yanıtın tam olarak alındığını gösterir.
  - Bu koşullar sağlandığında, sunucudan dönen yanıt (`this.responseText`) konsola yazdırılır.

```javascript
xhr.open("GET", "example.txt", true);
```
- **Amaç:** `open` metodu, HTTP isteğini başlatmak için kullanılır. 
  - `"GET"`: İstek türünü belirtir (GET isteği yapılacak).
  - `"example.txt"`: Hangi dosyanın veya verinin alınacağını belirtir.
  - `true`: Asenkron olarak çalıştırılacağını belirtir (sayfa kilitlenmeden işlemler arka planda devam eder).

```javascript
xhr.send();
```
- **Amaç:** `send` metodu, isteği sunucuya gönderir.

---

### Yeni Versiyon: Fetch API

Fetch API, `XMLHttpRequest`'e modern bir alternatiftir ve daha basit ve okunabilir bir sözdizimine sahiptir.

```javascript
document.getElementById("btn").addEventListener("click", function(){
    fetch("example.txt")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
});
```

### Yeni Kodun Açıklaması:

1. **fetch("example.txt")**:
   - Fetch API kullanarak "example.txt" dosyasını getirmek için bir istek başlatır.

2. **.then(response => {...})**:
   - İstek başarılı olduğunda çalışır. `response` nesnesi, sunucudan gelen yanıtı içerir.
   - `response.ok`: Yanıtın başarılı olup olmadığını kontrol eder. Eğer başarısızsa, hata fırlatılır.
   - `response.text()`: Yanıtı metin olarak döndürür.

3. **.then(data => {...})**:
   - `data`, sunucudan dönen metin verisini temsil eder. Bu veri konsola yazdırılır.

4. **.catch(error => {...})**:
   - Eğer istek sırasında bir hata oluşursa, bu blok çalışır ve hatayı konsola yazdırır.

### Neden Fetch API?

- **Daha Okunabilir:** Fetch API, söz dizimi olarak daha basit ve anlaşılırdır.
- **Promise Tabanlı:** Fetch, Promise tabanlı bir yapı kullanır, bu da hata yönetimini ve işlem akışını daha kolay hale getirir.
- **Gelişmiş Hata Yönetimi:** Fetch API, hata yönetimi konusunda daha esnek ve gelişmiş yöntemler sunar.

Yeni yaklaşım, daha modern ve bakımının daha kolay olması nedeniyle tercih edilir.
