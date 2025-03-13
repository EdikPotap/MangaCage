// document.addEventListener("DOMContentLoaded", function () {
//     let RenderingAnImages = true;
//     let readingPages = document.querySelector(".readingPages");

//     for (let i = 0; RenderingAnImages == true; i++) {
//         let requestURL = window.location.href.toString() + `/${i}`;
//         fetch(requestURL, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "image/jpeg"
//             },
//         })
//             .then((response) => {
//                 if (response.status == 404) {
//                     RenderingAnImages = false;
//                 }
//                 else {
//                     readingPages.innerHTML += `
//                 <div class="readingItem">
//                     <img src="${requestURL}" alt="${titleName}"
//                 </div>
//                 `
//                 }
//                 requestURL = window.location.href.toString();
//             })
//     }
// })


// const requestURL = window.location.href;

// async function LoadingPages() {
//     for (let i = 0; true; i++) {
//         try {
//             const response = await fetch(`${requestURL}/${i}`);
//             if(!response.ok){
//                 console.log(`Страница не найдена: ${i}`);
//                 break;
//             }
//             else if(response.ok){
//                 let blob = await response.blob();
//                 let pageURL = URL.createObjectURL(blob);

//                 let readingPagesArea = document.querySelector(".readingPages");
//                 let readingItemDiv = document.createElement('div');
//                 readingItemDiv.className = 'readingItem';
//                 readingPagesArea.appendChild(readingItemDiv);

//                 let readingImagesImg = document.createElement('img');
//                 readingImagesImg.src = pageURL;
//                 readingImagesImg.className = 'readingImage';
//                 readingImagesImg.alt = 'страница';
//                 readingItemDiv.appendChild(readingImagesImg);
//             }
//         }
//         catch (err) {
//             console.error(`Ошибка при загузке страницы: ${i}`);
//             break;
//         }
//     }
// }

// document.addEventListener("DOMContentLoaded", LoadingPages);

// document.addEventListener("DOMContentLoaded", () => {
//     let requestURL = window.location.href;
//     for(let i = 0; response === 200; i++){
//         fetch(`${requestURL}/${i}`)
//         .then((response) => {
//             if(!response.ok){
//                 return response.status;
//             }
//             else {
//                 const response = 
//             }
//         })
//         if(response.status !== 200){
//             console.log(`Страница не найдена: ${i}`)
//         }
        
        
//     }
// })




const requestURL = window.location.origin + window.location.pathname; // Без параметров и хеша

async function LoadingPages() {
    let i = 0;
    while (true) {
        try {
            const response = await fetch(`${requestURL}/${i}`);
            
            if (!response.ok) {
                console.log(`Страница ${i} не найдена. Остановка загрузки.`);
                break;
            }

            const blob = await response.blob();
            const pageURL = URL.createObjectURL(blob);

            // Находим контейнер
            const readingPagesArea = document.querySelector(".readingPages");
            if (!readingPagesArea) {
                console.error("Контейнер .readingPages не найден!");
                return;
            }

            // Создаём div и img
            const readingItemDiv = document.createElement("div");
            readingItemDiv.className = "readingItem";

            const readingImagesImg = document.createElement("img");
            readingImagesImg.src = pageURL;
            readingImagesImg.className = "readingImage";
            readingImagesImg.alt = "страница";

            // Добавляем элементы
            readingItemDiv.appendChild(readingImagesImg);
            readingPagesArea.appendChild(readingItemDiv);

            // Очищаем память после загрузки изображения
            readingImagesImg.onload = () => URL.revokeObjectURL(pageURL);

            i++; // Увеличиваем счётчик страниц
        } catch (err) {
            console.error(`Ошибка при загрузке страницы ${i}:`, err);
            break;
        }
    }
}

// Вызываем функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", LoadingPages);