
---

# JavaScript - Prototype Zinciri ve `toString` Metodu (ES6 ÖNCESİ)

Bu kod örneğinde, JavaScript'te `prototype` zincirini ve `toString` metodunun nereden geldiğini inceleyeceğiz.

### Object Literal ve Yeni Obje Oluşturma

```javascript
 const object = new Object(); // Object Literal
 const object2 = new Object();
 object.name = "Esta";
 console.log(object);
```

- **Object Literal**: Bu satırlar, `Object()` constructor fonksiyonunu kullanarak yeni objeler oluşturmayı gösterir. `object.name = "Esta";` satırı, objeye bir özellik ekler.


### Constructor Fonksiyonu ve Prototype Zinciri

```javascript
function Employee(name, age){ // Prototip zinciri
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Bilgiler Gösteriliyor...")
    }
}

const emp1 = new Employee("Esta", 24);
console.log(emp1);
```

- **Constructor Fonksiyonu**: `Employee` fonksiyonu bir constructor olarak tanımlanmıştır. Bu fonksiyon, `name` ve `age` parametreleri ile yeni bir `Employee` objesi oluşturur.
- **Prototype Zinciri**: `emp1` objesi oluşturulduğunda, `Employee` fonksiyonu aracılığıyla oluşturulur ve `[[Prototype]]` zincirinde `Object.prototype`'tan gelen metotlara sahip olur.
- **`showInfos` Metodu**: Bu metod, objeye ait bilgileri konsola yazdırır. `emp1.showInfos()` çağrıldığında "Bilgiler Gösteriliyor..." mesajı konsola yazdırılır.
- **Konsol Çıktısı**: `console.log(emp1);` ifadesi, `emp1` objesinin içeriğini ve onun `prototype` zincirini konsola yazdırır.

### `toString` Metodu ve Nereden Geldiği

```javascript
console.log(emp1.toString()); 
```

- **`toString` Metodu**: `emp1.toString()` ifadesi, objenin bir string temsiline dönüştürülmesini sağlar. Ancak bu metodu biz tanımlamadık.
- **Nereden Geldi?**: `toString` metodu, `Object.prototype`'dan gelir. Yani, JavaScript'teki her obje, `Object.prototype`'tan türediği için `toString`, `hasOwnProperty` gibi metotlara sahiptir.
- **Konsol Çıktısı**: `console.log(emp1.toString());` ifadesi, `[object Object]` çıktısını verir. Bu, objenin varsayılan string temsildir.

### Prototype Zincirine Dair Detaylı Çıktı

```javascript
/* 

ÇIKTISI: 

Employee {name: 'Esta', age: 24, showInfos: ƒ}
age: 24
name: "Esta"
showInfos: ƒ ()
[[Prototype]]: Object
constructor: ƒ Employee(name, age)
[[Prototype]]: Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__() */
```

- **Prototype Zinciri Çıktısı**: Bu çıktı, `emp1` objesinin `[[Prototype]]` zincirinde neler bulunduğunu gösterir. `Employee` constructor'ı, `Object.prototype`'tan türemiştir. `Object.prototype`'ta `toString`, `hasOwnProperty` gibi birçok yerleşik metot bulunur.
- **`__proto__` ve `prototype`**: `__proto__`, bir objenin `prototype` zincirindeki üst objeyi temsil eder. Her obje, `Object.prototype`'tan türediği için bu metotları miras alır.

---



---

# JavaScript Syntactic Sugar ve Prototypal Kalıtım (ES6)

Bu kod örneğinde, JavaScript'te "Syntactic Sugar" ve "Prototypal Kalıtım" konularını ele alacağız. Aynı zamanda, ES6 ile birlikte gelen class yapılarını da inceleyeceğiz.

## 1. Geleneksel Fonksiyon Kullanımı ile Nesne Oluşturma

Öncelikle, JavaScript'te fonksiyon kullanarak bir nesne oluşturma yöntemini inceleyelim.

```javascript
function Employee(name, age, salary) {
    this.name = name;   // Nesne özelliği olarak name (isim) atanıyor
    this.age = age;     // Nesne özelliği olarak age (yaş) atanıyor
    this.salary = salary; // Nesne özelliği olarak salary (maaş) atanıyor
}
```

- **function Employee(name, age, salary):** Bu satır, `Employee` adında bir fonksiyon tanımlar. Bu fonksiyon, bir çalışanın ismini (`name`), yaşını (`age`) ve maaşını (`salary`) parametre olarak alır.
- **this.name = name;** `this` anahtar kelimesi, fonksiyonun çağrıldığı nesneyi ifade eder. Bu satırda, fonksiyona geçilen `name` değeri, `Employee` nesnesinin `name` özelliğine atanır.
- **this.age = age;** Aynı şekilde, `age` değeri `Employee` nesnesinin `age` özelliğine atanır.
- **this.salary = salary;** `salary` değeri de `Employee` nesnesinin `salary` özelliğine atanır.

### 2. Prototip Kullanarak Metot Tanımlama

```javascript
Employee.prototype.showInfos = function(){
    console.log("isim:" + this.name + "age:" + this.age + "salary: " + this.salary);
}
```

- **Employee.prototype.showInfos = function():** `showInfos` adında bir metot, `Employee` fonksiyonunun prototipine eklenir. Bu, tüm `Employee` nesnelerinin bu metoda erişebileceği anlamına gelir.
- **console.log:** `console.log` komutu, ekrana yazı yazdırmak için kullanılır. Bu satırda, `Employee` nesnesinin `name`, `age` ve `salary` değerleri yazdırılır.

### 3. Nesne Oluşturma ve Metot Çağrısı

```javascript
const emp = new Employee("Esta", 24, 5000);
console.log(emp);
```

- **const emp = new Employee("Esta", 24, 5000);** `Employee` fonksiyonu kullanılarak yeni bir `Employee` nesnesi oluşturulur. Bu nesnenin `name` değeri `"Esta"`, `age` değeri `24` ve `salary` değeri `5000` olarak atanır.
- **console.log(emp);** Oluşturulan `Employee` nesnesi (`emp`) konsola yazdırılır.

## 4. ES6 Class Yapısı ile Aynı İşlevi Gerçekleştirme

ES6 ile gelen `class` yapısını kullanarak yukarıdaki fonksiyon ve prototip yapısını daha okunabilir ve modern bir şekilde yazabiliriz.

```javascript
class Employee {
    constructor(name, age, salary) {  // Constructor
        this.name = name;   // name özelliği atanıyor
        this.age = age;     // age özelliği atanıyor
        this.salary = salary; // salary özelliği atanıyor
    }    
    showInfos() {
        console.log("isim:" + this.name + "age:" + this.age + "salary:" + this.salary);
    }
}
```

- **class Employee:** `Employee` adında bir sınıf tanımlar.
- **constructor(name, age, salary):** Sınıfın yapıcı metodudur. Bu metod, `name`, `age`, ve `salary` parametrelerini alır ve bunları sınıfın özelliklerine atar.
- **showInfos():** Bu metot, sınıfın içinde tanımlanmış olup, `Employee` nesnesinin `name`, `age`, ve `salary` özelliklerini konsola yazdırır.

### 5. Yeni Bir Nesne Oluşturma ve Metot Çağrısı

```javascript
const emp = new Employee("Esta", 24 , 5000);
emp.showInfos();
```

- **const emp = new Employee("Esta", 24, 5000);** `Employee` sınıfı kullanılarak yeni bir nesne oluşturulur.
- **emp.showInfos();** Oluşturulan nesnenin `showInfos` metodu çağrılır ve çalışan bilgileri konsola yazdırılır.

---

Bu şekilde, hem geleneksel fonksiyon tabanlı yapıyı hem de ES6 ile gelen class yapısını incelemiş olduk. İki yapı da aynı işlevselliği sağlar, ancak ES6 class yapısı daha modern ve okunabilir bir sözdizimi sunar.
