/**
* @license JGMM
* * License: MIT
*/
(function(window, angular, undefined) {'use strict';

  angular.module('ngAccess', ['ng'])
  .controller('MainNavController', mainNavControlFunc)
  .directive('mainAccessMenu', ['$parse', '$ariaExpandedHandler', '$window', function DirectiveMainFunc($parse, ariaExpandedHandler, $window) {
      var directive = {
          restrict: 'A',
          link: linkFunction,
          controller:'MainNavController',
          scope:{
              callback : '&change',
              config:'=config',
              classvisible:'=classvisible',
          },
          controllerAs:'vmm',
      };
      
      function linkFunction(scope, element, attributes){
          // events for the main menu item
          /* this callback will triggered when something changes sending e.type as the event type */
          if (!$window.viewport.isExtraSmall()) {
              scope.vmm.init(element, scope,ariaExpandedHandler);
          }
      }
      return directive;
  }]);

  /*directive that trigger a refresh of the events once is called
  * this directive might  accept an root element selector or $index ng repeat
  */

  function  mainNavControlFunc(){
    var vmm = this;

    //take an array of DOM elements and attach an event to them
    vmm.clearAllHover = function(items){
      var i;
      for(i=0;i<items.length;i++){
        items[i].classList.remove("isHover");
      }
    };
    vmm.init = function(RootEl,scope,ariaExpandedHandler){
      vmm.ariaExpandedHandler = ariaExpandedHandler;
      setTimeout(function(){
        var CallBack = (scope && scope.callback() !== undefined) ? scope.callback : false;
        var Config = (scope && scope.config !== undefined) ? scope.config : false;
        var Classvisible = (scope && scope.classvisible !== undefined) ? scope.classvisible : 'visible';
        var mainConfig={
          MainItem : RootEl[0],
          mainItemSelector:".nav-item",
          SubmenuSelector:".Sub-Menu",
          SubmenuItemSelector:".subnav-item",
          callback : CallBack,
          classvisible : Classvisible
        };
        var subMenus = RootEl.find(".Sub-Menu"); //capture all of the submenus
        var sectionSubMenuConfig={
          actualSection:subMenus,
          subNavGroup:".sub-nav-group",
          subNavItem:".subnav-item",
          callback : CallBack,
          config : Config,
          classvisible : Classvisible
        };
        // attach events to the Main items selectors
        vmm.attachMainEvents(vmm.eventMainHandler,"keydown",mainConfig);
        // attach events to the sub nav items
        vmm.attachEventsSub(vmm.eventHandlerSub,"keydown",sectionSubMenuConfig);
      }, 3000);
    };

    vmm.clearSubmenu=function(items,clase,index){
      for(var i=0;i<items.length;i++){
        items[i].subMenu.classList.remove(clase); //hide all of the sub menus
         //if(index != i){
          vmm.ariaExpandedHandler(items[i],true);
        //}
      }
    };

    vmm.eventHandlerSub = function eventHandler(i,j,menuMatrix,subElem,callback,config,classvisible){
      return function(e){
        var notverticalnav = false,
            notlateralnav = false,
            notclick = false;

        if(config ){
          notverticalnav= (config.notverticalnav) ? true: false;
          notlateralnav= (config.notlateralnav) ? true: false;
          notclick= (config.notclick) ? true: false;
        }

        if(e.keyCode===39 && ! notlateralnav){
          //right differents options with the right arrow
          if((menuMatrix.length - 1)===i){
            //the last item in the group go to the focus parent"
          }
          else if(menuMatrix[i+1].subItems.length > 0){
            menuMatrix[i+1].subItems[0].focus(); //move focus right
          }
        }
        //move focus left sending the parent as an argument and this element
        else if(e.keyCode===37 && ! notlateralnav){
          // left
          if(i===0){
            //es el ultimo de la fila ve al foco del padre"
          }
          else{
            menuMatrix[i-1].subItems[0].focus(); //move focus right
          }
        }
        //move focus down sending the parent as an argument and this element
        else if(e.keyCode===38 && ! notverticalnav ){
          e.preventDefault();
          // up diferent options with the up arrow
          if(i===0 && j===0){
            menuMatrix[i].subItems[j].ParentItemMenu.focus();
          }
          //Move to the previus item group
          else if(j===0){
            //capture the previus group and the length of the sub items
            var previusGroup=menuMatrix[i-1],previusLength=previusGroup.subItems.length;
            //set the focus to the previus element and last sub item
            previusGroup.subItems[previusLength-1].focus();
          }
          //Normal Move to the up item
          else{
            menuMatrix[i].subItems[j-1].focus(); //move focus right
          }
          return false;
        }
        //move focus up sending the parent as an argument and this element
        else if(e.keyCode===40 && ! notverticalnav ){
            e.preventDefault();
            if(((menuMatrix.length - 1)===i) && ((menuMatrix[i].subItems.length - 1)===j)){
                //"ve al siguiente sub menu"
            }
            else if((menuMatrix[i].subItems.length - 1)===j){
                //capture the previus group and the length of the sub items
                var nextGroup=menuMatrix[i+1];
                //set the focus to the previus element and last sub item
                if(nextGroup.subItems.length > 0) {
                    nextGroup.subItems[0].focus();
                }
            } else {
                menuMatrix[i].subItems[j+1].focus(); //move focus right
            }
            return false;
        }
        else if(e.keyCode===27 ){
          // clear all the sub items and send the focus of the target
          if( callback ) {
            var functionCallback = callback();
            functionCallback(e);
          }
          subElem.classList.remove(classvisible);
          var parentItem= menuMatrix[i].subItems[j].ParentItemMenu;
          parentItem.focus();
          parentItem.classList.remove("isHover");
        }
        else if(e.keyCode===13 && ! notclick){
          //else if enter is pressed
          menuMatrix[i].subItems[j].click();
          if(e.target.tagName !== 'SELECT'){
            subElem.classList.remove(classvisible);}
        }
        else{
          return true;
        }
      };
    };

    vmm.attachEventsSub=function(callback,event,config){
      config.actualSection.each(loopElems(config,event,callback));
    };

    var previousElementSibling = function( el ) {
        if( el.previousElementSibling ) {
            return el.previousElementSibling;
        } else {
            while( el = el.previousSibling ) {
                if( el.nodeType === 1 ) return el;
            }
        }
    };

    function loopElems(config,event,callback){ // curry to pre config
      return function(index,singleSubmenu){
        var i,j,menuMatrix = [];
        var menuItemParent = previousElementSibling(singleSubmenu);
        var subGroups = singleSubmenu.querySelectorAll(config.subNavGroup);

        //loop throught all the elements

        for(i=0;i<subGroups.length;i++){
          menuMatrix[i]=subGroups[i]; /* save the subGroup element in the matrix */
          var subItem=subGroups[i].querySelectorAll(config.subNavItem);
          menuMatrix[i].subItems=subItem; /*save the subItem in the matrix */
          for(j=0;j<subItem.length;j++){
            //add reference to the next menu and previus submenu
            //reference to the parent item added to the submenu element
            subItem[j].ParentItemMenu=menuItemParent;
            //send the elems as a matrix [i,j] where i is the subGroup position and J is the sub Item position
            subItem[j].addEventListener( event , callback.call(this,i,j,menuMatrix,singleSubmenu,config.callback,config.config,config.classvisible) );
            //subItem[j][event]=callback.call(this,i,j,menuMatrix,singleSubmenu,config.callback);
          }
        }
      };
    }

    vmm.attachMainEvents=function(callback,event,config){
      var i,menuArray=[];
      var mainItems = config.MainItem.querySelectorAll(config.mainItemSelector);
      //loop throught all the elements
      for(i=0; i<mainItems.length; i++){
        //look for the first link of the sub menu and add it to the DOM element Object
        var SubMenuEl = mainItems[i].parentNode.querySelector(config.SubmenuSelector);
        mainItems[i].firstLink = SubMenuEl.querySelector(config.SubmenuItemSelector); //submenu added as a part of DOM Element
        mainItems[i].subMenu = SubMenuEl; //first menu item added as a part of DOM Element
        menuArray[i] = mainItems[i]; /* save the mainItems element in the array */
        menuArray[i].addEventListener( event , callback.call(this,i,menuArray,config.mainItem,config.callback,config.classvisible) );
        //menuArray[i][event] = callback.call(this,i,menuArray,config.mainItem,config.callback);
      }
    };

    vmm.eventMainHandler=function(i,menuArray,elem,callback,classvisible){
      return function(e){
        var subMenu, firstLink;
        if(e.keyCode===39){
          if((menuArray.length - 1)===i){
            //"the last item in the group go to the focus parent"
          }
          else{
            vmm.clearAllHover(menuArray);
            vmm.clearSubmenu(menuArray,classvisible,i);
            menuArray[i+1].focus(); //move focus right
          }
          //return false;
        }
        else if(e.keyCode===13){
          //enter key
          vmm.clearSubmenu(menuArray,classvisible,i);
          vmm.ariaExpandedHandler(menuArray[i],false);

          subMenu = menuArray[i].subMenu;
          firstLink = menuArray[i].firstLink;
          if(subMenu && firstLink){ // if not is a one level menu
            menuArray[i].classList.add("isHover");
            subMenu.classList.add(classvisible);
            // firstLink.focus();
          }
          //return false;
        }
        //move focus left sending the parent as an argument and this element
        else if(e.keyCode===37){
          // left
          if(i===0){
            //"es el ultimo de la fila ve al foco del padre"
          }
          else{
            vmm.clearSubmenu(menuArray,classvisible,i);
            vmm.clearAllHover(menuArray);
            menuArray[i-1].focus(); //move focus right
          }
        }
        //up
        else if(e.keyCode===38 ){
          vmm.clearSubmenu(menuArray,classvisible,i);
          menuArray[i].classList.remove("isHover");
          if(menuArray[i].getAttribute('aria-expanded') == 'true'){
            vmm.ariaExpandedHandler(menuArray[i],true);
          }
          //return false;
          // up diferent options with the up arrow
          // no hay eventos en el app del menu principal
        }
        //move focus down sending the parent as an argument and this element
        else if(e.keyCode===40 || e.keyCode=== 32){
          //down arrow
          e.preventDefault();
          vmm.clearSubmenu(menuArray,classvisible,i);
          subMenu = menuArray[i].subMenu;
          firstLink = menuArray[i].firstLink;
          if(menuArray[i].getAttribute('aria-expanded') != 'true'){
            vmm.ariaExpandedHandler(menuArray[i],false);
          }
          if(subMenu && firstLink){ // if not is a one level menu
            menuArray[i].classList.add("isHover");
            subMenu.classList.add(classvisible);
            firstLink.focus();
          }
          //return false;
        }
        //Esc pressed
        else if(e.keyCode===27){
          // clear all the sub items and send the focus of the target
          vmm.clearSubmenu(menuArray,classvisible,i);
          menuArray[i].classList.remove("isHover");
          if(menuArray[i].getAttribute('aria-expanded') == 'true'){
            vmm.ariaExpandedHandler(menuArray[i],true);
          }
          //return false;
        }
        else{
          // debug the key pressed
        }
        if(callback){
          var functionCallback = callback();
          functionCallback(e);
        }
        return false;
      };
    };
  }

})(window, window.angular);
