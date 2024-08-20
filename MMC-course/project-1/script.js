// Tüm elementleri seçtik:
const form = document.querySelector("#todo-form");
const todoInput  = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const cardBodies = document.querySelectorAll(".card-body"); 
const firstCardBody = cardBodies[0];
const secondCardBody = cardBodies[1];
const filter = document.querySelector("#filter"); // Doğru element seçimi
const clearButton = document.querySelector("#clear-todos");

// Bu fonksiyonun görevi sadece event listeners atamak 
function eventListeners(){
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);

    // çarpılara basınca todoları sil
    secondCardBody.addEventListener("click", deleteTodo);


    filter.addEventListener("keyup", filterTodos);

    clearButton.addEventListener("click", clearAllTodos);

};

// tümünü temizleme:
function clearAllTodos(e){
    if (confirm("Tümünü silmek istediğinize emin misiniz?")){
        // arayüzden todoları tem,zleme
        // todoList.innerHTML = "";   bu  yavaş yöntem
        
        
        /*
        todoList.removeChild(todoList.firstElementChild);
        todoList.removeChild(todoList.firstElementChild);
        todoList.removeChild(todoList.firstElementChild);
        todoList.removeChild(todoList.firstElementChild);
        
        Bu da doğru bir yöntem değil
        */

        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);

        }
        localStorage.removeItem("todos");
    }
    
}


// filtereleme işlemi için:
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            // BULAMADI
            listItem.setAttribute("style", "display:none !important");

        }
        else {
            listItem.setAttribute("style", "display: block");
        }
    });

};


function deleteTodo(e){


    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlert("success", "Todo silindi!")
    }

    // console.log(e.target);  nereye tıkladığımı gördüm target sayesinde
}

function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo, index){

        if (todo === deletetodo){
            todos.splice(index,1); // arraydan değeri silebilir "splice"
        }

    });
    
    localStorage.setItem("todos", JSON.stringify(todos));
}


// local storagedan todolarımızı aldık
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}



eventListeners(); // Event listeners fonksiyonunu çağırıyoruz

function addTodo(e){
    const newTodo = todoInput.value.trim(); // inputu boşluklardan arındırın .trim ile

    // Bilgilendirme mesajları için şartlarım:
    if(newTodo === "") {
        showAlert("danger", "Lütfen, bir todo girin!");
    }
    else{
        addTodoToUI(newTodo); 
        addTodoToStorage(newTodo);
        showAlert("success", "Başarılı!");
    }

    // Formun sayfayı yeniden yüklemesini engelleyin
    e.preventDefault();
}

function getTodosFromStorage(){ // storage'dan bütün todo'ları almış olacak
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos; // todos dizisini döndürdük, bunu eklemeyince çalışmadı.
}

function addTodoToStorage(newTodo){
   let todos = getTodosFromStorage(); // todos değerini alıyoruz

   todos.push(newTodo); // Yeni todo'yu diziye ekliyoruz

   localStorage.setItem("todos", JSON.stringify(todos)); // Diziyi tekrar storage'a kaydediyoruz
}

function showAlert(type, message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    firstCardBody.appendChild(alert);

    // setTimeout metodu ile uyarı mesajını 2 saniye sonra kaldırma
    setTimeout(function(){
        alert.remove();
    }, 2000);
}

// Burdan aldığı string değerini listItem olarak UI (arayüzümüze) ekleyecek
function addTodoToUI(newTodo){ 
    /*
    <li class="list-group-item d-flex justify-content-between">
        Todo 1
        <a href = "#" class ="delete-item">
            <i class = "fa fa-remove"></i>
        </a>
    </li>
    */
    // listItem oluşturma
    const listItem = document.createElement("li");

    // link oluşturma 
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    
    listItem.className = "list-group-item d-flex justify-content-between";

    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // todoList'e listItem'ı ekleme
    todoList.appendChild(listItem);
    
    // Ekleme işlemi bittikten sonra yazı alanını temizleme
    todoInput.value = "";

    console.log(listItem);
}


