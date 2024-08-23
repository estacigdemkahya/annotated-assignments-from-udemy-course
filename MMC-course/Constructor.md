

# JavaScript - Constructor Fonksiyonu ile Obje Oluşturma ve Kullanımı

Bu kod örneğinde, JavaScript'te constructor (yapıcı) fonksiyonu kullanarak nasıl obje oluşturulacağını ve bu objeler üzerinde nasıl işlemler yapılacağını öğreneceğiz.

### Global Scope ve `this` Anahtar Kelimesi

```javascript
console.log(this);  // Global Scope
```

- Bu satırda `this` anahtar kelimesi global scope (küresel kapsam) içinde kullanılmıştır. Tarayıcıda çalıştırıldığında, `this` global `window` objesini referans eder.

### Object Literal ile Obje Tanımlama

```javascript

const emp1 = { // Object Literal
    name: "Esta",
    age: 23,
    showInfos: function(){console.log("Bilgiler Gösteriliyor");}
};

emp1.salary = 5;
emp1.showInfos();

const emp2 = {
    name: "Semih",
    age: 26
}

console.log(emp1)

```

- **Object Literal**: `emp1` ve `emp2` objeleri, object literal yöntemi ile tanımlanmıştır. Bu yöntemde, obje özellikleri `{}` süslü parantezler içinde tanımlanır.
- **`name`, `age`, `showInfos`**: Bu obje özellikleridir. `showInfos` bir fonksiyon olarak tanımlanmış ve `emp1.showInfos()` ile çağrıldığında "Bilgiler Gösteriliyor" mesajı konsola yazdırılır.
- **Yeni Özellik Ekleme**: `emp1` objesine sonradan `salary` özelliği eklenmiştir.
- **Obje Gösterimi**: `console.log(emp1)` ile `emp1` objesinin içeriği konsola yazdırılır.

### Constructor Fonksiyonu (Yapıcı Fonksiyon)

```javascript
function Employee(name, age, salary){ // Yapıcı Fonksiyon - Constructor
    
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name, this.age, this.salary);
    }

}
```

- **Constructor Fonksiyonu**: `Employee` fonksiyonu bir constructor (yapıcı) fonksiyon olarak tanımlanmıştır. Bu fonksiyon, yeni bir `Employee` objesi oluşturmak için kullanılır.
- **`this` Anahtar Kelimesi**: `this` anahtar kelimesi, constructor içinde tanımlanan özelliklerin, oluşturulan yeni obje ile ilişkilendirilmesini sağlar.
  - `this.name = name`: Bu ifade, fonksiyona geçirilen `name` parametresini yeni oluşturulan objenin `name` özelliğine atar.
  - Aynı durum `age` ve `salary` özellikleri için de geçerlidir.
- **`showInfos` Fonksiyonu**: Her yeni `Employee` objesi için `showInfos` fonksiyonu tanımlanmıştır. Bu fonksiyon, objenin `name`, `age` ve `salary` bilgilerini konsola yazdırır.

### Yeni Obje Oluşturma

```javascript
const emp1 = new Employee("Esta", 24, 4000);
const emp2 = new Employee( "Semih", 26, 5000);
```

- **`new` Anahtar Kelimesi**: `new Employee("Esta", 24, 4000)` ifadesi, `Employee` constructor fonksiyonunu çağırır ve `emp1` adında yeni bir `Employee` objesi oluşturur.
- **`emp1` ve `emp2`**: Bu iki obje, `Employee` constructor'ı kullanılarak oluşturulmuştur. `emp1`, `Esta`, 24, ve 4000; `emp2` ise `Semih`, 26, ve 5000 değerlerini içerir.

### Obje Bilgilerini Konsola Yazdırma

```javascript
console.log(emp1);
console.log(emp2);
```

- **Obje Bilgileri**: `console.log(emp1)` ve `console.log(emp2)` ifadeleri, `emp1` ve `emp2` objelerinin tüm özelliklerini konsola yazdırır.

### `showInfos` Fonksiyonunu Çağırma

```javascript
emp1.showInfos();
emp2.showInfos();
```

- **Fonksiyon Çağrısı**: `emp1.showInfos()` ve `emp2.showInfos()` ifadeleri, her bir objeye ait `showInfos` fonksiyonunu çağırır. Bu fonksiyonlar, ilgili objenin `name`, `age`, ve `salary` bilgilerini konsola yazdırır.

---

