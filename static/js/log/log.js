const RequestURL = "https://localhost:8080";

document.querySelector(".AuthorizationButton").addEventListener('click', () => {
    {
        let login = document.querySelector(".Login").value.toString();
        let password = document.querySelector(".Password").value.toString();

        if (login == "" || password == "") {
            alert("Почта и пароль обязательны для заполнения");
        }
        else {
            let informationAboutUser = {
                nickName: document.querySelector(".Login").value.toString(),
                password: document.querySelector(".Password").value.toString(),
                headers: {
                    "Content-Type": "application/json"
                },
                responseType: "text"
            }

            fetch(RequestURL, {
                method: "POST",
                body: JSON.stringify(informationAboutUser),
            })
            .then((response) => {
                return response.text();
            })
            .catch(err => console.log(err))
        }
    }
})

