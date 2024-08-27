
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1]; // Son .card-body elementini seçer
const clear = document.getElementById("clear-films");


// UI Objesi Başlatma
const ui = new UI();

// Storage Objesi üret
const storage = new Storage();

// Tüm eventleri yükleme
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

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        // HATA message
        ui.displayMessage("Tüm alanları doldurun!", "danger");


    } else {
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm); // Arayüze film ekleme

        storage.addFilmToStorage(newFilm); // storagea film ekleme

        ui.displayMessage("Film Başarıyla Yüklendi...", "success");
    }

    ui.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}


function deleteFilm(e){

    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Silme işlemi başarılı", "primary");
    };
    
}

function clearAllFilms(){
    if(confirm("Silmek istediğinize Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}