angular.module( 'ariaExpandedHandler', []).constant( '$ariaExpandedHandler', ( function(element, exit){
    var arialStatus = element.getAttribute('aria-expanded')
    if(arialStatus != null){
      if( exit ){
        arialStatus = false;}
      else{
        arialStatus = (arialStatus == "true") ? false : true;

      }
      element.setAttribute('aria-expanded', arialStatus);
    }
  }));
