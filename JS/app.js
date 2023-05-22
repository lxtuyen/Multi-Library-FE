$('#left').click(function(){
    $('.slider-img').children().first().appendTo('.slider-img');
});

$('#right').click(function(){
    $('.slider-img').children().last().prependTo('.slider-img');
});

var counter = 1;
setInterval(function() {
    var element = document.querySelector('.slider-img' + counter);
    if (element) {
        element.checked = true;
    }
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,

        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
$(document).ready(function() {
    $('#autoWidth-1').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-1').removeClass('cS-hidden');
        } 
    });  
  });
$(document).ready(function() {
    $('#autoWidth-2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-2').removeClass('cS-hidden');
        } 
    });  
  });  

let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");
const toggle = () => profileDropdownList.classList.toggle("active");
window.addEventListener('click',function(e){
if(!btn.contains(e.target))profileDropdownList.classList.remove('active')
});

let navItemTypeList = document.querySelector(".nav-item__type-list");
let navItemType = document.querySelector(".nav-item__type");
const toggle1 = () => navItemTypeList.classList.toggle("active");
window.addEventListener('click',function(e){
if(!navItemType.contains(e.target))navItemTypeList.classList.remove('active')
});

let navItemRankList = document.querySelector(".nav-item__rank-list");
let navItemRank = document.querySelector(".nav-item__rank");
const toggle2 = () => navItemRankList.classList.toggle("active");
window.addEventListener('click',function(e){
if(!navItemRank.contains(e.target))navItemRankList.classList.remove('active')
});

const imgDiv = document.querySelector('.profile-img');
const img    = document.querySelector('#Photo');
const file   = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

file.addEventListener('change',function() {

    const choosedFile = this.files[0];

    if(choosedFile){
        const reader = new FileReader();

        reader.addEventListener('load',function () {
            img.setAttribute('src',reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});