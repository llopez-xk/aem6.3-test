(function(window, targetDataAttr) {
    document.addEventListener('DOMContentLoaded', function(){

        var hiddenElementsBTF = document.querySelectorAll('[' + targetDataAttr + ']');
        if(window.IntersectionObserver && hiddenElementsBTF.length > 0) {
            var observer = new IntersectionObserver(intersectionCallback);
            
            function intersectionCallback(entries) {
                for(i = 0; i < entries.length; i++){
                    if(entries[i].intersectionRatio > 0) {
                    	var element = entries[i].target;
                        element.setAttribute("src", element.dataset.ptmSrc);
                        observer.unobserve(element);
                        element.removeAttribute(targetDataAttr);
                    }
                }
            }

            for(i = 0; i < hiddenElementsBTF.length; i++){
                observer.observe(hiddenElementsBTF[i]);
            }
            
        } else if(hiddenElementsBTF.length > 0) {
            for(i = 0; i < hiddenElementsBTF.length; i++){
                hiddenElementsBTF[i].setAttribute("src", hiddenElementsBTF[i].dataset.ptmSrc);
                hiddenElementsBTF[i].removeAttribute(targetDataAttr);
            }
        }
    }, false);
})(window, "data-ptm-src");
