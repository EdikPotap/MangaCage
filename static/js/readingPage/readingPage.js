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


const requestURL = window.location.href;

async function LoadingPages() {
    for (let i = 0; true; i++) {
        try {
            const RequestToGetPages = await fetch(`${requestURL}/${i}`);

            if (RequestToGetPages.status === 200) {
                let pageURL = URL.createObjectURL(RequestToGetPages.blob());
                let readingPagesArea = document.querySelector(".radingPages");
                readingPagesArea.innerHTML = `<div class='readingItem'><img src='${pageURL}' alt='страница' class='MangaPage'></div>`;
            }
            else if (response.status === 404) {
                console.log(`Страница не найдена: ${i}`);
                break;
            }
        }
        catch (err) {
            console.error(`Ошибка при загузке страницы: ${i}`);
            break;
        }
    }
}

document.addEventListener("DOMContentLoaded", LoadingPages);
