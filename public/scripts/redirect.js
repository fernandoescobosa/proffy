const url = "/study?" + window.location.href.split("?")[1]

let changeLoc = setTimeout(changeLocation, 3000)

function redirect() {
    clearTimeout(changeLoc)
    document.querySelector("#redirect").href = url
}

function changeLocation() {
    window.location.href = window.location.href.split("/confirmed")[0] + url
}

