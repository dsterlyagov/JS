var gData;

window.onload = function () {
    let result = document.querySelector("#result");
    let button = document.querySelector("#button");
    

    //<img src="domain.com/img.jpg">
    for (let i= 0; i<gData.items.length;i++){
        let img = document.createElement("img");
        img.setAttribute("src", gData.items[i].media.m);
        console.log(gData.items[i].media.m);
        result.appendChild(img);
    }

}
function processData(gData) {
    this.gData = gData;
    console.log(gData);

}
