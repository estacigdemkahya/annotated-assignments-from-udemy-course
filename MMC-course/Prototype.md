
---

# JavaScript - Prototype Zinciri ve `toString` Metodu

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
