document.getElementById("change").addEventListener("click", change);

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.exchangeratesapi.io/v1/latest?access_key=8f67145b2a1d838d7c236b32603a447d");

    xhr.onload = function(){

        if(this.status) {
            const response = JSON.parse(this.responseText);

            const rate = response.rates.TRY
            const amount = document.getElementById("amount").value;

            document.getElementById("tl").value = amount * rate;
        };


    };


    xhr.send();


};




// https://api.exchangeratesapi.io/v1/latest?access_key=8f67145b2a1d838d7c236b32603a447d