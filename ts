[33mcommit 9a15505cfb8f18f736446cb7d5a9440b3ac9ac90[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: EdikPotap <edyardpotapovich@gmail.com>
Date:   Wed Mar 12 23:12:30 2025 +0500

    Попытался исправить баг с проблемой отрисовки изображений на странице

[1mdiff --git a/static/css/PopUps/log/PopUpsToLog.css b/static/css/pop_ups/log/pop_ups_to_log.css[m
[1msimilarity index 100%[m
[1mrename from static/css/PopUps/log/PopUpsToLog.css[m
[1mrename to static/css/pop_ups/log/pop_ups_to_log.css[m
[1mdiff --git a/static/css/readingPage/readingPage.css b/static/css/reading_page/reading_page.css[m
[1msimilarity index 100%[m
[1mrename from static/css/readingPage/readingPage.css[m
[1mrename to static/css/reading_page/reading_page.css[m
[1mdiff --git a/static/html/readingPage/readingPage.html b/static/html/reading_page/reading_page.html[m
[1msimilarity index 78%[m
[1mrename from static/html/readingPage/readingPage.html[m
[1mrename to static/html/reading_page/reading_page.html[m
[1mindex a948292..bc8076e 100644[m
[1m--- a/static/html/readingPage/readingPage.html[m
[1m+++ b/static/html/reading_page/reading_page.html[m
[36m@@ -5,7 +5,7 @@[m
     <meta charset="UTF-8">[m
     <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
     <title>MangaCage</title>[m
[31m-    <link rel="stylesheet" href="../../css/readingPage/readingPage.css">[m
[32m+[m[32m    <link rel="stylesheet" href="../../css/reading_page/reading_page.css">[m
 [m
     <link rel="preconnect" href="https://fonts.googleapis.com">[m
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>[m
[36m@@ -36,12 +36,8 @@[m
 [m
         </div>[m
     </footer>[m
[31m-    <script type="text/javascript" src="../../js/readingPage/readingPage.js"></script>[m
[32m+[m[32m    <script type="text/javascript" src="../../js/reading_page/reading_page.js"></script>[m
 [m
 </body>[m
 [m
[31m-</html>[m
[31m-[m
[31m-<div class="readingItem">[m
[31m-    <img src="" alt="readingPage">[m
[31m-</div>[m
\ No newline at end of file[m
[32m+[m[32m</html>[m
\ No newline at end of file[m
[1mdiff --git a/static/js/readingPage/readingPage.js b/static/js/reading_page/reading_page.js[m
[1msimilarity index 64%[m
[1mrename from static/js/readingPage/readingPage.js[m
[1mrename to static/js/reading_page/reading_page.js[m
[1mindex 771738c..8c751c5 100644[m
[1m--- a/static/js/readingPage/readingPage.js[m
[1m+++ b/static/js/reading_page/reading_page.js[m
[36m@@ -32,17 +32,26 @@[m [mconst requestURL = window.location.href;[m
 async function LoadingPages() {[m
     for (let i = 0; true; i++) {[m
         try {[m
[31m-            const RequestToGetPages = await fetch(`${requestURL}/${i}`);[m
[31m-[m
[31m-            if (RequestToGetPages.status === 200) {[m
[31m-                let pageURL = URL.createObjectURL(RequestToGetPages.blob());[m
[31m-                let readingPagesArea = document.querySelector(".radingPages");[m
[31m-                readingPagesArea.innerHTML = `<div class='readingItem'><img src='${pageURL}' alt='страница' class='MangaPage'></div>`;[m
[31m-            }[m
[31m-            else if (response.status === 404) {[m
[32m+[m[32m            const response = await fetch(`${requestURL}/${i}`);[m
[32m+[m[32m            if(!response.ok){[m
                 console.log(`Страница не найдена: ${i}`);[m
                 break;[m
             }[m
[32m+[m[32m            else if(response.ok){[m
[32m+[m[32m                let blob = response.blob();[m
[32m+[m[32m                let pageURL = URL.createObjectURL(blob);[m
[32m+[m
[32m+[m[32m                let readingPagesArea = document.querySelector(".readingPages");[m
[32m+[m[32m                let readingItemDiv = document.createElement('div');[m
[32m+[m[32m                readingItemDiv.className = 'readingItem';[m
[32m+[m[32m                readingPagesArea.appendChild(readingItemDiv);[m
[32m+[m
[32m+[m[32m                let readingImagesImg = document.createElement('img');[m
[32m+[m[32m                readingImagesImg.src = pageURL;[m
[32m+[m[32m                readingImagesImg.className = 'readingImage';[m
[32m+[m[32m                readingImagesImg.alt = 'страница';[m
[32m+[m[32m                readingItemDiv.appendChild(readingImagesImg);[m
[32m+[m[32m            }[m
         }[m
         catch (err) {[m
             console.error(`Ошибка при загузке страницы: ${i}`);[m
[36m@@ -51,4 +60,4 @@[m [masync function LoadingPages() {[m
     }[m
 }[m
 [m
[31m-document.addEventListener("DOMContentLoaded", LoadingPages);[m
[32m+[m[32mdocument.addEventListener("DOMContentLoaded", LoadingPages);[m
\ No newline at end of file[m
