const searchbtn = document.querySelector('.searchbtn');
const searchclose = document.querySelector('.search-close');

console.log(searchclose);
searchbtn.addEventListener("click", function(){
    document.querySelector(".search").style.display = "flex";
});
searchclose.addEventListener("click", function(){
    document.querySelector(".search").style.display = "none";
});

// Slider
var index = 0;

function sliderauto(){
    var i;
    var x = document.getElementsByClassName("slider-items");
    for(i = 0; i < x.length; i++){
        x[i].style.display = " none";
    }
    index++;
    if(index > x.length){
        index = 1;
    }
    x[index-1].style.display = "block";
}
setInterval(sliderauto, 3000);