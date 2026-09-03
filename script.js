function searchGoogle() {
    const q = document.getElementById("search").value.trim();

    if (!q) return;

    openInside(
        "https://www.google.com/search?q=" +
        encodeURIComponent(q)
    );
}


function openWebsite() {
    let url = document.getElementById("url").value.trim();

    if (!url) return;

    if (!url.startsWith("http://") &&
        !url.startsWith("https://")) {

        if (url.includes(".") && !url.includes(" ")) {
            url = "https://" + url;
        } else {
            url =
                "https://www.google.com/search?q=" +
                encodeURIComponent(url);
        }
    }

    openInside(url);
}


function openInside(url) {

    const home = document.querySelector(".home");

    // إخفاء الصفحة الرئيسية
    home.style.display = "none";


    let frame = document.getElementById("browserFrame");

    // إنشاء الإطار إذا لم يكن موجودًا
    if (!frame) {

        frame = document.createElement("iframe");

        frame.id = "browserFrame";

        frame.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

        frame.allowFullscreen = true;

        document.querySelector(".browser").appendChild(frame);
    }


    frame.src = url;

    document.getElementById("url").value = url;
}


function goHome() {

    const frame =
        document.getElementById("browserFrame");

    if (frame) {
        frame.remove();
    }

    document.querySelector(".home").style.display =
        "flex";

    document.getElementById("url").value = "";
}


function reloadPage() {

    const frame =
        document.getElementById("browserFrame");

    if (frame) {
        frame.src = frame.src;
    }
}
