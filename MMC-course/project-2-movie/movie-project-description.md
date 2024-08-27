
```
# Film Projesi Açıklama Dosyası

Bu projede, JavaScript kullanarak bir film ekleme, listeleme ve silme uygulaması oluşturduk. Projede `film.js`, `project.js`, `storage.js`, ve `ui.js` adında dört ana JavaScript dosyası bulunmaktadır. Bu dosyaların her birinin ne işe yaradığını ve nasıl çalıştığını aşağıda detaylı bir şekilde açıklıyorum.

## film.js

Bu dosya, projedeki **Film** objesinin yapısını tanımlamaktadır.

### Film Constructor

```javascript
function Film(title, director, url){
    this.title = title;
    this.director = director;
    this.url = url;
}
```

- **Film(title, director, url)**: Bu bir constructor fonksiyonudur. Bu fonksiyon ile her yeni film için bir `Film` objesi oluşturulur. Obje, `title` (film adı), `director` (yönetmen) ve `url` (film afişinin URL'si) özelliklerine sahiptir.

## project.js

Bu dosya, projenin ana kontrol merkezi olarak görev yapar. Burada, form elemanları, event listener'lar ve temel işlevler tanımlanmıştır.

### HTML Elemanlarının Seçilmesi

```javascript
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
```

- **form**: Film ekleme formunu seçer.
- **titleElement, directorElement, urlElement**: Kullanıcının girdiği film adı, yönetmen ve URL bilgilerini içeren input alanlarını seçer.
- **cardbody**: Filmleri listeleyeceğimiz bölümde yer alan `card-body` elemanını seçer.
- **clear**: Tüm filmleri temizleme butonunu seçer.

### Event Listener'ların Tanımlanması

```javascript
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}
```

- **form.addEventListener("submit", addFilm)**: Kullanıcı formu doldurup gönderdiğinde `addFilm` fonksiyonunu tetikler.
- **document.addEventListener("DOMContentLoaded", function(){...})**: Sayfa yüklendiğinde yerel depolamadaki (local storage) filmleri getirir ve ekrana yükler.
- **cardbody.addEventListener("click", deleteFilm)**: Filmler listesinde "Sil" butonuna basıldığında `deleteFilm` fonksiyonunu tetikler.
- **clear.addEventListener("click", clearAllFilms)**: "Tüm Filmleri Temizleyin" butonuna basıldığında tüm filmleri siler.

### Film Ekleme Fonksiyonu

```javascript
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        ui.displayMessage("Tüm alanları doldurun!", "danger");
    } else {
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessage("Film Başarıyla Yüklendi...", "success");
    }

    ui.clearInputs(titleElement, urlElement, directorElement);
    e.preventDefault();
}
```

- **addFilm(e)**: Form submit edildiğinde bu fonksiyon çalışır. Form alanları boş değilse yeni bir `Film` objesi oluşturulur, UI'a eklenir ve yerel depolamaya kaydedilir. Başarı veya hata mesajı gösterilir.

### Film Silme Fonksiyonu

```javascript
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Silme işlemi başarılı", "primary");
    }
}
```

- **deleteFilm(e)**: Kullanıcı, "Filmi Sil" butonuna tıkladığında film hem UI'dan hem de yerel depolamadan silinir. Silme işleminin başarılı olduğuna dair bir mesaj gösterilir.

### Tüm Filmleri Temizleme Fonksiyonu

```javascript
function clearAllFilms(){
    if(confirm("Silmek istediğinize Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}
```

- **clearAllFilms()**: Kullanıcı tüm filmleri temizleme butonuna bastığında, tüm filmler hem UI'dan hem de yerel depolamadan silinir.

## storage.js

Bu dosya, filmleri yerel depolamaya kaydetmek, yerel depolamadan getirmek ve silmek gibi işlevleri içerir.

### Film Eklemek

```javascript
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));
}
```

- **addFilmToStorage(newFilm)**: Yeni bir film objesini yerel depolamaya ekler.

### Filmleri Getirmek

```javascript
Storage.prototype.getFilmsFromStorage = function(){
    let films;
    if(localStorage.getItem("films") === null){
        films = [];
    } else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}
```

- **getFilmsFromStorage()**: Yerel depolamadaki filmleri alır. Eğer yerel depolamada film yoksa boş bir dizi döner.

### Film Silmek

```javascript
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));
}
```

- **deleteFilmFromStorage(filmTitle)**: Belirtilen film başlığına (title) sahip olan filmi yerel depolamadan siler.

### Tüm Filmleri Temizlemek

```javascript
Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}
```

- **clearAllFilmsFromStorage()**: Yerel depolamadaki tüm filmleri temizler.

## ui.js

Bu dosya, kullanıcı arayüzü (UI) ile ilgili işlevleri içerir. Filmleri UI'a eklemek, silmek, mesaj göstermek gibi işlevler burada tanımlanmıştır.

### Film UI'a Ekleme

```javascript
UI.prototype.addFilmToUI = function(newFilm){
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
}
```

- **addFilmToUI(newFilm)**: Yeni bir filmi UI'daki film listesine ekler.

### Input Alanlarını Temizleme

```javascript
UI.prototype.clearInputs = function(element1, element2, element3){
    element1.value = "" ;
    element2.value = "" ;
    element3.value = "" ;
}
```

- **clearInputs(element1, element2, element3)**: Form input alanlarını temizler.

### Mesaj Gösterme

```javascript
UI.prototype.displayMessage = function(message, type){
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function(){
        div.remove();
    }, 1000);
}
```

- **displayMessage(message, type)**: Kullanıcıya bir mesaj gösterir. Mesaj, belirli bir süre sonra otomatik olarak kaybolur.

### Tüm Filmleri Yükleme

```javascript
UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");
    films.forEach(function(film){
        filmList.innerHTML += `       
            <tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>`;
    });
}
```

- **loadAllFilms

(films)**: Yerel depolamadan alınan tüm filmleri UI'da listeler.

### Film UI'dan Silme

```javascript
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}
```

- **deleteFilmFromUI(element)**: Bir filmi UI'dan siler.

### Tüm Filmleri UI'dan Temizleme

```javascript
UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films");
    while(filmList.firstElementChild != null){
        filmList.firstElementChild.remove();
    }
}
```

- **clearAllFilmsFromUI()**: UI'daki tüm filmleri temizler.

---

Bu proje sayesinde JavaScript ile kullanıcı etkileşimli web uygulamaları oluşturmayı, yerel depolama (local storage) kullanımını ve dinamik UI manipülasyonlarını öğrendim. Ayrıca, JavaScript'in ES5 prototip tabanlı nesne yönelimli programlama yapısını deneyimledim.
```

