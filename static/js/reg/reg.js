const RequestURL = "https://localhost:8080";

document.querySelector(".RegistrationButton").addEventListener('click', () => {
    {
        let nickName = document.querySelector(".nickName").value.toString();
        let password = document.querySelector(".password").value.toString();

        if (nickName == "" || password == "") {
            alert("Почта и пароль обязательны для заполнения");
        }
        else {
            let informationAboutUser = {
                email: document.querySelector(".nickName").value.toString(),
                password: document.querySelector(".password").value.toString(),
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