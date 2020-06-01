var gData;
//var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=processData&format=json&tag=cat";
window.onload = function () {
    
    let button = document.querySelector("#button");
    button.addEventListener("click", showImages , false);

    //<img src="domain.com/img.jpg">


}
function processData(data) {
    this.gData = data;
    console.log(data);


}
function showImages() {
    let result = document.querySelector("#result");
    console.log(gData);
    for (let i= 0; i<gData.items.length;i++){
        let img = document.createElement("img");
        img.setAttribute("src", gData.items[i].media.m);
        console.log(gData.items[i].media.m);
        result.appendChild(img);
    }

}
function loadData() {
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=processData&format=json&tag=cat";
    var script = document.createElement("script");
    script.setAttribute("src", url);
    var head = document.head;
    head.appendChild(script);
}

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