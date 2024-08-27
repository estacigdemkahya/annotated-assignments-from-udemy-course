
### `film.js`

**Kod:**
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
- **`class Film`**: ES6 ile birlikte sınıf (class) yapısı kullanılarak `Film` sınıfı oluşturulmuştur. Bu, daha modern ve okunabilir bir syntax sağlar.
- **`constructor(title, director, url)`**: Sınıfın constructor metodu, film nesnesini oluştururken `title`, `director` ve `url` gibi özellikleri başlatır.

### `ui.js`

**Kod:**
```javascript
class UI {
    static addFilmToUI(newFilm) {
        const filmList = document.getElementById("films");
        filmList.innerHTML += `
            <tr>
                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
            </tr>
        `;
    }

    static clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }

    static displayMessage(message, type) {
        const cardBody = document.querySelector(".card-body");
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        cardBody.appendChild(div);
        setTimeout(() => div.remove(), 1000);
    }

    static loadAllFilms(films) {
        const filmList = document.getElementById("films");
        films.forEach(film => {
            filmList.innerHTML += `
                <tr>
                    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                    <td>${film.title}</td>
                    <td>${film.director}</td>
                    <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
                </tr>
            `;
        });
    }

    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI() {
        const filmList = document.getElementById("films");
        while (filmList.firstElementChild != null) {
            filmList.firstElementChild.remove();
        }
    }
}
```

**Açıklama:**
- **`class UI`**: `UI` sınıfı, kullanıcı arayüzü ile ilgili tüm işlevleri kapsar. ES6 sınıfları ile daha düzenli ve okunabilir kod yapısı sunar.
- **`static addFilmToUI(newFilm)`**: `static` olarak tanımlanan bu metod, yeni bir filmi UI'ye ekler. `newFilm` nesnesinin `url`, `title`, ve `director` özelliklerini kullanarak tabloya bir satır ekler.
- **`static clearInputs(element1, element2, element3)`**: Form alanlarını temizler. Üç farklı form elemanını parametre olarak alır ve değerlerini boşaltır.
- **`static displayMessage(message, type)`**: Kullanıcıya bir mesaj gösterir. Mesaj tipi ve içeriğini belirler ve belirli bir süre sonra mesajı kaldırır.
- **`static loadAllFilms(films)`**: Saklanan tüm filmleri UI'ye yükler. `films` dizisini alır ve her bir film için bir tablo satırı ekler.
- **`static deleteFilmFromUI(element)`**: UI'den bir filmi siler. Silme işlemi, film satırının parent elementini kaldırarak yapılır.
- **`static clearAllFilmsFromUI()`**: UI'deki tüm filmleri temizler. Döngü ile tüm çocuk elemanları kaldırır.

### `storage.js`

**Kod:**
```javascript
class Storage {
    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }

    static getFilmsFromStorage() {
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }

    static deleteFilmFromStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        films.forEach((film, index) => {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        });
        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films");
    }
}
```

**Açıklama:**
- **`class Storage`**: `Storage` sınıfı, localStorage ile etkileşimde bulunur. ES6 sınıfları, fonksiyonları daha düzenli hale getirir.
- **`static addFilmToStorage(newFilm)`**: Yeni filmi localStorage'a ekler. Mevcut filmleri alır, yeni filmi ekler ve güncellenmiş listeyi saklar.
- **`static getFilmsFromStorage()`**: Saklanan filmleri alır. Eğer localStorage'da film yoksa boş bir dizi döner.
- **`static deleteFilmFromStorage(filmTitle)`**: Belirli bir filmi localStorage'dan siler. Film başlığına göre eşleşen filmi diziden çıkarır ve günceller.
- **`static clearAllFilmsFromStorage()`**: Tüm filmleri localStorage'dan temizler.

### `project.js`

**Kod:**
```javascript
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI ve Storage Objesi Başlatma
const ui = new UI();
const storage = new Storage();

// Event Listener'ları Yükleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", () => {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
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

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Silme işlemi başarılı", "primary");
    }
}

function clearAllFilms() {
    if (confirm("Silmek istediğinize Emin misiniz?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}
```

**Açıklama:**
- **`const form`**, **`const titleElement`**, **`const directorElement`**, **`const urlElement`**, **`const cardbody`**, **`const clear`**: Bu sabitler, HTML elemanlarını seçer.
- **`const ui = new UI()`** ve **`const storage = new Storage()`**: `UI` ve `Storage` sınıflarından nesneler oluşturur.
- **`eventListeners()`**: Tüm gerekli event listener'ları ekler.
- **`addFilm(e)`**: Form gönderildiğinde film ekler. Boş alanlar için uyarı gösterir.
- **`deleteFilm(e)`**: Bir filmi siler. Film başlığını kullanarak localStorage'dan siler.
- **`clearAllFilms()`**: Tüm filmleri temizler. Kullanıcıdan onay alır ve ardından temizleme işlemini yapar.

---


