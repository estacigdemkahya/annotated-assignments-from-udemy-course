### ES5 vs. ES6: `Film` Constructor Kıyaslaması

#### ES5: Fonksiyon Bazlı Yapıcı (Constructor) Fonksiyon

```javascript
// Film Constructor
function Film(title, director, url) {
    this.title = title;
    this.director = director;
    this.url = url;
}
```

**Açıklama:**
- **Fonksiyon**: ES5'te `Film` yapıcı fonksiyonu bir `function` ile tanımlanır.
- **`this` Kullanımı**: `this` anahtar kelimesi, fonksiyon çağrıldığında yeni bir `Film` nesnesi oluşturur ve bu nesnenin özelliklerini ayarlar.

#### ES6: Sınıf (Class) Tanımı

```javascript
class Film {
    constructor(title, director, url) {
        this.title = title;
        this.director = director;
        this.url = url;
    }
}
```

**Açıklama:**
- **Sınıf (Class)**: ES6'da `Film` sınıfı `class` anahtar kelimesi ile tanımlanır. Bu, daha modern ve okunabilir bir sözdizimi sağlar.
- **`constructor` Metodu**: `constructor`, sınıfın yapıcısıdır ve nesne oluşturulurken otomatik olarak çağrılır. Özelliklerin ayarlanması için kullanılır.
- **Daha Temiz ve Modern**: ES6 sınıfları, ES5'teki prototip tabanlı yapıyı daha okunabilir ve anlaşılır bir şekilde sunar.

### Kıyaslama

- **Sözdizimi**: ES6 sınıfları, daha temiz ve anlaşılır bir sözdizimi sunar. ES5'teki fonksiyon tabanlı yapı, daha fazla boilerplate (tekrarlayan kod) içerir.
- **Okunabilirlik**: ES6 sınıfları, nesne tabanlı programlamayı daha doğal ve anlaşılır hale getirir. Sınıf ve yapıcı metodlar, kodun ne yaptığını anlamayı kolaylaştırır.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








