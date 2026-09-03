function searchGoogle() {

    const search = document.getElementById("search").value.trim();

    if (search === "") return;

    const url =
        "https://www.google.com/search?q=" +
        encodeURIComponent(search);

    openInside(url);
}


function openWebsite() {

    let value = document.getElementById("url").value.trim();

    if (value === "") return;

    if (!value.startsWith("http://") &&
        !value.startsWith("https://")) {

        if (value.includes(".") &&
            !value.includes(" ")) {

            value = "https://" + value;

        } else {

            value =
                "https://www.google.com/search?q=" +
                encodeURIComponent(value);
        }
    }

    openInside(value);
}


function openInside(url) {

    const old = document.getElementById("browserFrame");

    if (old) old.remove();

    const frame = document.createElement("iframe");

    frame.id = "browserFrame";
    frame.src = url;

    frame.style.cssText = `
        position: fixed;
        top: 100px;
        left: 0;
        width: 100%;
        height: calc(100vh - 100px);
        border: none;
        background: white;
    `;

    document.body.appendChild(frame);

    document.getElementById("url").value = url;
}
