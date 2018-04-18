setTimeout(function(){

  var activeForm = false;

  $('.SubMenu-dropdown').on('click',function(E){
    activeForm = true;

    $('.MainNav-menuItem--first .Sub-Menu').addClass('is_visible');
  });

  $('.SubMenu-dropdown').on('blur',function(E){
    activeForm = false;

    $('.MainNav-menuItem--first .Sub-Menu').removeClass('is_visible');
  });


}, 5000);
