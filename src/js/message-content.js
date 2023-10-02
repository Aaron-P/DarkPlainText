(async function () {
    "use strict";

    const isPlainText = document.querySelector("body > div.moz-text-plain") != null;
    const isFlowed = document.querySelector("body > div.moz-text-flowed") != null;
    if (!isPlainText && !isFlowed)
        return;

    // https://bugzilla.mozilla.org/show_bug.cgi?id=1715361#c10
    const meta = document.createElement("meta");
    meta.name = "color-scheme";
    meta.content = "dark light";
    document.head.appendChild(meta);
}());