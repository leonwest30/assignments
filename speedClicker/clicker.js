var clicks = 0


function startClick() {
    var clickStart = localStorage.getItem("clicks")
    if(clickStart === undefined) {
        localStorage.setItem("clicks", 0);
        clicks = 0;
    } else {
        clicks = parseInt(clickStart);
    }
    document.getElementById("clicks").textContent = clicks;
}


function doClick() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("clicks").textContent = clicks;
}

document.getElementById("body").onclick = doClick;
startClick();
