function searchGoogle() {

    const search = document.getElementById("search").value.trim();

    if (search === "") {
        return;
    }

    const url =
        "https://www.google.com/search?q=" +
        encodeURIComponent(search);

    window.open(url, "_blank");

}


function openExternal(url) {

    window.open(
        url,
        "_blank",
        "noopener"
    );

}


function openWebsite() {

    let value =
        document.getElementById("url").value.trim();

    if (value === "") {
        return;
    }


    // إذا كتب المستخدم كلمة بدلاً من رابط
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


    window.open(
        value,
        "_blank",
        "noopener"
    );

}
