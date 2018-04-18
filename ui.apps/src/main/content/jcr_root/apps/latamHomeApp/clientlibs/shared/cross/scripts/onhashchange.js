/*
* (C) Copyright 2014 XumaK LCC, All rights reserved.
* http://www.xumak.com/
*
* Designed and built with all the love.
* Release Date:
*
*/
document.createElement('ng-transclude');
$(document).ready(function () {
    window.onhashchange = function(e){
        if(location.hash.length){
            var targetElem=document.querySelector(location.hash);
            if(targetElem){ //check if the element exist
                var offsetElement=targetElem.offsetTop-200;
                window.scrollTo(0,offsetElement);
                return false;
            }
        }
    }
});