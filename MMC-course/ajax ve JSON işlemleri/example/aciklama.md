

---

# AJAX ve JSON ile Çalışan Bilgilerini Getirme

Bu örnek, JavaScript kullanarak bir JSON dosyasından çalışan bilgilerini çekmek ve bir HTML tablosunda görüntülemek için AJAX kullanımı üzerine odaklanıyor. Aşağıda kodun her kısmını adım adım açıklıyorum:

### HTML Elemanları
```html
<button id="ajax">Get All Employees</button>
<table id="employees">
    <!-- Çalışan bilgileri buraya gelecek -->
</table>
```
Bu HTML bölümünde, `id="ajax"` olan bir düğme ve çalışan bilgilerini listelemek için `id="employees"` olan bir tablo bulunur.

### JavaScript Kodu

```javascript
document.getElementById("ajax").addEventListener("click", getAllEmployees);
```
Bu satır, `id="ajax"` olan düğmeye bir tıklama (click) olayı ekler. Bu düğmeye tıklanıldığında, `getAllEmployees` fonksiyonu çalıştırılır.

```javascript
function getAllEmployees(){
    const xhr = new XMLHttpRequest();
```
Bu satır, AJAX isteği yapmak için kullanılan `XMLHttpRequest` objesini oluşturur.

```javascript
    xhr.open("GET","employees.json",true);
```
`open` metodu, bir HTTP isteği başlatmak için kullanılır. Burada `"GET"` isteğin türünü, `"employees.json"` ise isteğin hedef dosyasını belirtir. `true` parametresi ise isteğin asenkron olarak yapılacağını gösterir.

```javascript
    xhr.onload = function(){
```
Bu satır, AJAX isteği tamamlandığında çalışacak olan bir `onload` fonksiyonu tanımlar.

```javascript
        let list = document.getElementById("employees");
```
Bu satır, çalışan bilgilerinin ekleneceği tabloyu seçer.

```javascript
        if(this.status == 200){
            const employees = JSON.parse(this.responseText)
```
Burada, `status` 200 (OK) olduğunda, sunucudan gelen yanıt (`responseText`) bir JSON formatında olduğu için `JSON.parse` metodu ile JavaScript objesine dönüştürülür.

```javascript
            employees.forEach(function(employee){
                list.innerHTML += `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>
                `;
            })
        }
    }
```
Bu kısımda, dönen JSON verisi (çalışanlar listesi) `forEach` döngüsü kullanılarak işlenir. Her bir çalışan (`employee`) için tabloya bir satır (`<tr>`) eklenir ve çalışan bilgileri ilgili hücrelere (`<td>`) yerleştirilir.

```javascript
    xhr.send();
}
```
Bu son satır, hazırlanan AJAX isteğini sunucuya gönderir.

### `employees.json` Dosyası

```json
[
    {
        "name":"Çiğdem Kahya",
        "department":"Bilişim",
        "salary":3500
    },
    {
        "name":"Semih Elvan",
        "department":"Bilişim",
        "salary":4000
    },
    {
        "name":"Elvin Elvan",
        "department":"Bilişim",
        "salary":5000
    }
]
```
Bu JSON dosyası, her biri `name`, `department`, ve `salary` alanlarına sahip üç çalışanı içerir.

### Genel Çalışma Mantığı

1. Kullanıcı, "Get All Employees" düğmesine tıkladığında, `getAllEmployees` fonksiyonu çalışır.
2. Fonksiyon, `XMLHttpRequest` ile sunucudan `employees.json` dosyasını çeker.
3. Dosya başarıyla alındığında (status 200), JSON verisi JavaScript objesine dönüştürülür.
4. Bu objede bulunan her bir çalışan için tabloya bir satır eklenir ve çalışan bilgileri bu satırlarda görüntülenir.



---

