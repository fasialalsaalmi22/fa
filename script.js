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
    let frame = document.getElementById("browserFrame");

    if (!frame) {
        frame = document.createElement("iframe");
        frame.id = "browserFrame";

        frame.style.position = "fixed";
        frame.style.top = "99px";
        frame.style.left = "0";
        frame.style.width = "100%";
        frame.style.height = "calc(100vh - 99px)";
        frame.style.border = "none";
        frame.style.background = "white";

        document.body.appendChild(frame);
    }

    frame.src = url;

    document.getElementById("url").value = url;
}
