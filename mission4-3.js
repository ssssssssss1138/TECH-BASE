function view_omikuji(){
    var omikuji = ["大吉","中吉","小吉"];
    var rand = Math.random();
    index = Math.floor(rand*3);

    var object = document.getElementById("omikuji");
    object.innerText = omikuji[index];
}