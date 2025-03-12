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
            const response = await fetch(`${requestURL}/${i}`);
            if(!response.ok){
                console.log(`Страница не найдена: ${i}`);
                break;
            }
            else if(response.ok){
                let blob = response.blob();
                let pageURL = URL.createObjectURL(blob);

                let readingPagesArea = document.querySelector(".readingPages");
                let readingItemDiv = document.createElement('div');
                readingItemDiv.className = 'readingItem';
                readingPagesArea.appendChild(readingItemDiv);

                let readingImagesImg = document.createElement('img');
                readingImagesImg.src = pageURL;
                readingImagesImg.className = 'readingImage';
                readingImagesImg.alt = 'страница';
                readingItemDiv.appendChild(readingImagesImg);
            }
        }
        catch (err) {
            console.error(`Ошибка при загузке страницы: ${i}`);
            break;
        }
    }
}

document.addEventListener("DOMContentLoaded", LoadingPages);