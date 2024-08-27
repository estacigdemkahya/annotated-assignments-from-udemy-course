
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1]; // Son .card-body elementini seçer
const clear = document.getElementById("clear-films");




// Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){

        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);

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
        UI.displayMessage("Tüm alanları doldurun!", "danger");


    } else {
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm); // Arayüze film ekleme

        Storage.addFilmToStorage(newFilm); // storagea film ekleme

        UI.displayMessage("Film Başarıyla Yüklendi...", "success");
    }

    UI.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}


function deleteFilm(e){

    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("Silme işlemi başarılı", "primary");
    };
    
}

function clearAllFilms(){
    if(confirm("Silmek istediğinize Emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}