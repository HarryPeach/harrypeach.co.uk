function changeBackground(){
    var items = Array("#ebb", "#96b6ea", "#8ae291", "#e0ae79", "#e54e4e");
    var item = items[Math.floor(Math.random()*items.length)];
    document.body.style.backgroundColor = item;
}

changeBackground();